# Contributing to Shenanigans

Contributions can include mod changes, configuration, KubeJS scripts, datapacks, translations, documentation, and bug fixes.

Shenanigans is a Minecraft 1.21.1 NeoForge modpack managed with [Pakku](https://juraj-hrivnak.github.io/Pakku/). The pack targets both CurseForge and Modrinth.

## Before you begin

Requirements:

- Git
- Java
- [Pakku](https://juraj-hrivnak.github.io/Pakku/installing-pakku.html)
- Python 3 to publish
- A launcher suitable for testing Minecraft 1.21.1 NeoForge instances

Clone the repository and create a branch:

```bash
git clone https://github.com/Syrup-Studios/shenanigans.git
cd shenanigans
git switch -c your-change
```

Do not commit launcher instances, downloaded mod JARs, logs, worlds, or files generated under `build/`.

## Repository layout

```text
pakku.json          Pack name, version, paths, and project overrides
pakku-lock.json     Locked Minecraft, loader, and project versions
.pakku/
  overrides/        Files included in both client and server exports
  client-overrides/ Files included only in client exports
  server-overrides/ Files included only in the server pack
update-checker/     Published version metadata and changelogs
build/              Generated CurseForge, Modrinth, and server exports
```

Commit `pakku-lock.json` with the source. If a Pakku operation changes projects or locked versions, include the lockfile change.

## Working on the pack

Run Pakku commands from the repository root.

Useful commands include:

```bash
pakku status
pakku ls
pakku add <project>
pakku rm <project>
pakku update
pakku fetch
pakku export
```

After adding, removing, or updating projects, review `pakku.json` and `pakku-lock.json`. Do not edit the lockfile by hand.

`pakku fetch` downloads project files and applies overrides to a local development instance. Commit or stash unrelated work before commands that synchronize or replace instance files.

### Choosing an override directory

Place a file according to where it must be installed:

| Location | Client export | Server pack | Typical contents |
| --- | --- | --- | --- |
| `.pakku/overrides/` | Yes | Yes | Common configs, datapacks, server KubeJS scripts |
| `.pakku/client-overrides/` | Yes | No | Client configs, menus, resource packs, client scripts |
| `.pakku/server-overrides/` | No | Yes | Server-only files such as the server icon |

Keep client-only configs and assets out of shared overrides, even if they are harmless on a server. Correct side placement makes exports easier to troubleshoot.

### KubeJS

KubeJS files are organized by execution side and purpose:

- Client behavior: `.pakku/client-overrides/kubejs/client_scripts/`
- Recipes, tags, and loot: `.pakku/overrides/kubejs/server_scripts/`
- Registrations and item changes: `.pakku/overrides/kubejs/startup_scripts/`
- Translations and client assets: `.pakku/client-overrides/kubejs/assets/shenanigans/`

Keep scripts focused. Put integrations in a directory named for the affected mod. Use the `shenanigans` namespace for pack-owned identifiers and translation keys. Consolidate repeated behavior when practical.

When changing startup scripts, registries, tags, recipes, loot tables, or world-generation config, test a new and an existing world.

### Datapacks and resource packs

Keep pack-owned datapacks and resource packs unpacked for useful Git diffs. Each pack directory must place `pack.mcmeta` beside `data/` or `assets/`.

Third-party packs may remain archived if distributed that way. Modify or redistribute third-party content only when its license or the author's permission allows it. Record the source and version in the filename or accompanying documentation.

### Config files

Commit only intentional settings. Remove machine-specific values, server addresses, account information, tokens, window dimensions, and generated noise.

Test shared configs on a client and dedicated server. A single-player config is not automatically suitable for a server.

## Validation and testing

Before submitting a change:

1. Review the complete diff with `git diff` and `git status`.
2. Confirm that new files are in the correct override directory.
3. Start the pack and check `latest.log` for errors related to your change.
4. Test relevant behavior in-game, including multiplayer or a dedicated server when applicable.
5. Run `./publish --dry-run` to export the pack, validate artifacts, and run read-only checks on target platforms with tokens. It does not upload. Run `./publish` to upload when required tokens are set.

   ```bash
   ./publish --dry-run
   ```

6. Confirm that Pakku created artifacts for the configured target:

   ```text
   build/modrinth/       for target modrinth or multiplatform
   build/curseforge/     for target curseforge or multiplatform
   build/serverpack/     when a server pack is generated
   ```

Generated build artifacts must not be committed.

Publishing reads tokens from the process environment, `~/.pakku/publish.env`, or `~/.pakku/pakku.json`, in that order. Higher sources take precedence. `pakku-lock.json`'s `target` determines the required token: `MODRINTH_TOKEN`, `CURSEFORGE_TOKEN`, or both for `multiplatform`.

For `publish.env`, add the tokens as plain dotenv lines, without `export`:

```dotenv
MODRINTH_TOKEN='your-token'
CURSEFORGE_TOKEN='your-token'
```

Protect the file with `chmod 600 ~/.pakku/publish.env`. Alternatively, put tokens in the `publish` object in `~/.pakku/pakku.json`:

```json
{
  "publish": {
    "modrinth_token": "your-token",
    "curseforge_token": "your-token"
  }
}
```

If this file contains either token, protect it with `chmod 600 ~/.pakku/pakku.json`. On POSIX systems, publishing fails if group or other users can access it. Do not put tokens in a project `pakku.json`; publishing rejects them to prevent committed secrets.

If a required token is missing, `./publish` runs as a dry run. Explicit and automatic dry runs validate exports and run read-only preflight checks on platforms with tokens. CurseForge checks game-version and loader IDs. Modrinth checks the configured project and whether the pack version exists. Platforms without tokens are reported as skipped. Dry runs do not upload. For a multiplatform release, a dry run reports an existing exact Modrinth version. Publishing skips that upload and continues with CurseForge, so you can retry after Modrinth succeeds and CurseForge fails.

Set shared publishing defaults in the top-level `publish` object of `~/.pakku/pakku.json`. Project `publish` values override global values. For example:

```json
{
  "publish": {
    "release_type": "beta",
    "changelog": "changelogs/{version}.md"
  }
}
```

Publishing paths are relative to the project root. Project `pakku.json` supplies the pack name, version, and projects. Project publish settings do not supply credentials.

The project's `publish` section can override defaults and set project values:

```json
"publish": {
  "modrinth": "project-id-or-slug",
  "curseforge": 123456,
  "release_type": "release",
  "changelog": "changelogs/{version}.md",
  "metadata": "update-checker/meta.json"
}
```

Set project IDs only for platforms in `pakku-lock.json`'s `target` (`modrinth`, `curseforge`, or `multiplatform`). `release_type` must be `release`, `beta`, or `alpha`. `changelog` defaults to `CHANGELOG.md`; `{version}` uses the version in `pakku.json`. If set, `metadata` must be JSON with a `versions` array containing an object whose `id` matches the pack version. Pakku's config and lockfile supply the pack name, version, Minecraft versions, loaders, and export target. Only artifacts for the locked target are required. A generated server pack is checked when present.


## Changelogs and releases

Do not bump the pack version for routine contributions. Maintainers handle versioning and publishing unless a change prepares a release.

Shenanigans uses [Semantic Versioning](https://semver.org/) in the form `MAJOR.MINOR.PATCH`:

- Increment `MAJOR` for incompatible changes that require players or server owners to take action, such as a world-breaking migration.
- Increment `MINOR` for backward-compatible content, feature, or gameplay additions.
- Increment `PATCH` for backward-compatible fixes and small adjustments.

Labels such as `-alpha`, `-beta`, and `-rc.1` mark unstable versions. During development, breaking changes may occur between minor releases; identify them in the changelog. Do not prefix version numbers with `v`; reserve it for Git tags (for example, tag `v0.7.0-alpha` for pack version `0.7.0-alpha`).

For a release:

1. Set the new version in `pakku.json`.
2. Ensure the lockfile contains the intended Minecraft, NeoForge loader, and project versions.
3. Add the changelog at the `publish.changelog` path in `pakku.json`.
4. Add the same version to `update-checker/meta.json`.
5. Keep every `releasedAt` value in the same timestamp unit; use a 13-digit Unix timestamp in milliseconds.
6. Add direct Modrinth, CurseForge, and GitHub release links when available.
7. Run `./publish --dry-run` and test the client and server artifacts.
8. Confirm filenames, manifests, the changelog path, and version metadata use the same version.

Describe player-visible changes. Group entries under `Added`, `Changed`, `Fixed`, `Updated`, and `Removed`. Clearly flag world-breaking changes and config resets.

## Submitting a contribution

Keep commits focused and summarize the result. In a pull request, include:

- What changed and why
- How it was tested
- Whether it affects clients, servers, existing worlds, or all three
- Screenshots for visual changes when useful
- Relevant issue links

Keep unrelated mod updates, gameplay changes, formatting, and generated config changes in separate contributions. Smaller changes are easier to test, review, and revert.

Bug reports and suggestions can also be submitted through [GitHub Issues](https://github.com/Syrup-Studios/shenanigans/issues) or the community links in the main [README](README.md).
