# Contributing to Shenanigans

Thanks for helping improve Shenanigans. Contributions can include mod changes, configuration tweaks, KubeJS scripts, datapacks, translations, documentation, and bug fixes.

Shenanigans is a Minecraft 1.21.1 NeoForge modpack managed with [Pakku](https://juraj-hrivnak.github.io/Pakku/). The pack targets both CurseForge and Modrinth.

## Before you begin

You will need:

- Git
- Java
- [Pakku](https://juraj-hrivnak.github.io/Pakku/installing-pakku.html)
- Python 3 to publish
- A launcher suitable for testing Minecraft 1.21.1 NeoForge instances

Clone the repository and create a branch for your work:

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

`pakku-lock.json` is part of the source of truth and must remain committed. When a Pakku operation changes the project set or locked versions, include the resulting lockfile change in your commit.

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

Review the changes to both `pakku.json` and `pakku-lock.json` after adding, removing, or updating projects. Avoid hand-editing the lockfile.

`pakku fetch` downloads project files and applies the overrides to a local development instance. Commit or stash unrelated work before using commands that synchronize or replace local instance files.

### Choosing an override directory

Place a file according to where it must be installed:

| Location | Client export | Server pack | Typical contents |
| --- | --- | --- | --- |
| `.pakku/overrides/` | Yes | Yes | Common configs, datapacks, server KubeJS scripts |
| `.pakku/client-overrides/` | Yes | No | Client configs, menus, resource packs, client scripts |
| `.pakku/server-overrides/` | No | Yes | Server-only files such as the server icon |

Do not place a client-only config or asset in the shared overrides merely because it is harmless on a server. Keeping the sides accurate makes exports easier to understand and troubleshoot.

### KubeJS

KubeJS files are organized by execution side and purpose:

- Client behavior: `.pakku/client-overrides/kubejs/client_scripts/`
- Recipes, tags, and loot: `.pakku/overrides/kubejs/server_scripts/`
- Registrations and item changes: `.pakku/overrides/kubejs/startup_scripts/`
- Translations and client assets: `.pakku/client-overrides/kubejs/assets/shenanigans/`

Keep scripts focused and place integrations in a directory named after the affected mod. Prefer the `shenanigans` namespace for pack-owned identifiers and translation keys. If several scripts repeat the same behavior, consolidate the shared data or helper logic when practical.

Test both a new world and an existing world when changing startup scripts, registries, tags, recipes, loot tables, or world-generation configuration.

### Datapacks and resource packs

Pack-owned datapacks and resource packs should remain unpacked so their contents produce useful Git diffs. Each pack directory must contain its `pack.mcmeta` at the same level as `data/` or `assets/`.

Third-party packs may remain archived when they are distributed in that form. Do not modify or redistribute third-party content unless its license or the author's permission allows it. Record the source and version in the filename or accompanying documentation when adding bundled content.

### Config files

Only commit intentional settings. Remove machine-specific values, server addresses, account information, tokens, window dimensions, and generated noise before committing.

When changing a shared config, test it on both a client and a dedicated server. A config generated in single-player is not automatically safe or useful on a server.

## Validation and testing

Before submitting a change:

1. Review the complete diff with `git diff` and `git status`.
2. Confirm that new files are in the correct override directory.
3. Start the pack and check `latest.log` for errors related to your change.
4. Test relevant behavior in-game, including multiplayer or a dedicated server when applicable.
5. Run `./publish --dry-run` to export the pack, validate target artifacts, and run read-only checks on each target platform with a token. This mode never uploads. Run `./publish` to upload when the required API token or tokens are set.

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

Publishing accepts tokens from the process environment, `~/.pakku/publish.env`, or `~/.pakku/pakku.json`. The lookup order is process environment, then `publish.env`, then the global JSON file. A token in a higher source takes precedence. The required tokens depend on `pakku-lock.json`'s `target` (`MODRINTH_TOKEN`, `CURSEFORGE_TOKEN`, or both for `multiplatform`).

For `publish.env`, add the tokens as plain dotenv lines, without `export`:

```dotenv
MODRINTH_TOKEN='your-token'
CURSEFORGE_TOKEN='your-token'
```

Protect the file with `chmod 600 ~/.pakku/publish.env`. You can also put tokens in the `publish` object of `~/.pakku/pakku.json`, using `modrinth_token` and `curseforge_token`:

```json
{
  "publish": {
    "modrinth_token": "your-token",
    "curseforge_token": "your-token"
  }
}
```

If this JSON file contains either token, protect it with `chmod 600 ~/.pakku/pakku.json`. On POSIX systems, publishing fails when group or other users can read or access that file. Do not put token keys in a project `pakku.json`; publishing rejects them to prevent committed secrets. If any required token is missing, `./publish` runs as a dry run. In both automatic and explicit dry-run mode, exports are validated and read-only remote preflight runs for platforms with tokens. CurseForge checks game-version and loader IDs. Modrinth checks the configured project and whether the pack version already exists. A platform without a token is reported as skipped. Dry-run mode sends no upload requests. For a multiplatform release, if the exact Modrinth version already exists, the script reports it during dry run and skips its upload during publishing, then continues with CurseForge. This lets a publish resume if an earlier run uploaded to Modrinth before failing on CurseForge.

You can put shared publishing defaults in `~/.pakku/pakku.json`, in a top-level `publish` object. The script merges those values first, then applies the project's `publish` values. A project value takes precedence when both files set the same key. For example, set a shared release type and changelog path globally:

```json
{
  "publish": {
    "release_type": "beta",
    "changelog": "changelogs/{version}.md"
  }
}
```

Paths in `publish` are relative to the project root. The project `pakku.json` remains the source for pack name, version, and projects. Project publish settings do not supply credentials.

The project's `publish` section can override defaults and set project-specific values:

```json
"publish": {
  "modrinth": "project-id-or-slug",
  "curseforge": 123456,
  "release_type": "release",
  "changelog": "changelogs/{version}.md",
  "metadata": "update-checker/meta.json"
}
```

Set project IDs only for the platforms in `pakku-lock.json`'s `target` (`modrinth`, `curseforge`, or `multiplatform`). The release type must be `release`, `beta`, or `alpha`. `changelog` is optional and defaults to `CHANGELOG.md`; `{version}` is replaced with the version from `pakku.json`. `metadata` is optional; when set, it must be JSON with a `versions` array containing an object whose `id` matches the pack version. Pack name, version, Minecraft versions, loaders, and export target come from Pakku's config and lockfile. Only artifacts for the locked target are required. A generated server pack is checked when present.


## Changelogs and releases

Routine contributions should not bump the modpack version. Maintainers handle versioning and publishing unless a change is specifically preparing a release.

Shenanigans uses [Semantic Versioning](https://semver.org/) in the form `MAJOR.MINOR.PATCH`:

- Increment `MAJOR` for incompatible changes that require players or server owners to take action, such as a world-breaking migration.
- Increment `MINOR` for backward-compatible content, feature, or gameplay additions.
- Increment `PATCH` for backward-compatible fixes and small adjustments.

Pre-release labels such as `-alpha`, `-beta`, and `-rc.1` indicate that a version is not yet stable. While the pack is in development, breaking changes may occur between minor releases, but they must still be identified clearly in the changelog. Version numbers must not include a leading `v`; reserve that prefix for Git tags, such as tag `v0.7.0-alpha` for pack version `0.7.0-alpha`.

For a release:

1. Set the new version in `pakku.json`.
2. Ensure the lockfile contains the intended Minecraft, NeoForge loader, and project versions.
3. Add the changelog at the path configured by `publish.changelog` in `pakku.json`.
4. Add the same version to `update-checker/meta.json`.
5. Keep every `releasedAt` value in the same timestamp unit; use a 13-digit Unix timestamp in milliseconds.
6. Add direct Modrinth, CurseForge, and GitHub release links when available.
7. Run `./publish --dry-run` and test the client and server artifacts.
8. Confirm that filenames, manifests, the changelog path, and configured version metadata all use the exact same version.

Changelogs should describe player-visible changes. Group entries under headings such as `Added`, `Changed`, `Fixed`, `Updated`, and `Removed`, and call out world-breaking or configuration-resetting changes prominently.

## Submitting a contribution

Keep commits focused and use a clear summary describing the result of the change. In a pull request, include:

- What changed and why
- How it was tested
- Whether it affects clients, servers, existing worlds, or all three
- Screenshots for visual changes when useful
- Relevant issue links

Do not combine unrelated mod updates, gameplay changes, formatting, and generated config churn in one contribution. Smaller changes are easier to test, review, and revert.

Bug reports and suggestions can also be submitted through [GitHub Issues](https://github.com/Syrup-Studios/shenanigans/issues) or the community links in the main [README](README.md).
