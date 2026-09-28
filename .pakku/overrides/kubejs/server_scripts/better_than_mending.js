const EnchantmentEffectComponents = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentEffectComponents');
const EnchantmentHelper = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentHelper');

ItemEvents.rightClicked(event => {
    const { player, item } = event;
    const damage = item.getDamageValue();

    if (!player.isShiftKeyDown() || damage <= 0 || !EnchantmentHelper.has(item, EnchantmentEffectComponents.REPAIR_WITH_XP)) return;

    const level = player.experienceLevel;
    const xpToLevel = player.getXpNeededForNextLevel();
    const xpAtLevel = level <= 16
        ? level * level + 6 * level
        : level <= 31
            ? 2.5 * level * level - 40.5 * level + 360
            : 4.5 * level * level - 162.5 * level + 2220;
    const currentXp = Math.floor(xpAtLevel + player.experienceProgress * xpToLevel);

    if (currentXp <= 2) return;

    const xp = currentXp >= 30 && damage >= 40 ? 20 : 2;
    const repair = Math.min(
        damage,
        EnchantmentHelper.modifyDurabilityToRepairFromXp(
            player.serverLevel(),
            item,
            Math.floor(xp * item.getXpRepairRatio())
        )
    );

    item.setDamageValue(damage - repair);
    player.giveExperiencePoints(-xp);
    event.cancel();
});
