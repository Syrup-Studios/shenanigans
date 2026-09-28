const DoublePlantBlock = Java.loadClass('net.minecraft.world.level.block.DoublePlantBlock');
const DoubleBlockHalf = Java.loadClass('net.minecraft.world.level.block.state.properties.DoubleBlockHalf');
const MinecraftBlocks = Java.loadClass('net.minecraft.world.level.block.Blocks');

const tallGrassLower = MinecraftBlocks.TALL_GRASS.defaultBlockState().setValue(DoublePlantBlock.HALF, DoubleBlockHalf.LOWER);
const tallGrassUpper = MinecraftBlocks.TALL_GRASS.defaultBlockState().setValue(DoublePlantBlock.HALF, DoubleBlockHalf.UPPER);

function growTallGrass(block) {
    const { level, pos } = block;
    const above = pos.above();

    if (!level.getBlockState(above).isAir() || !tallGrassLower.canSurvive(level, pos)) return;

    level.setBlock(pos, tallGrassLower, 2);
    level.setBlock(above, tallGrassUpper, 2);
}

BlockEvents.rightClicked(event => {
    const { block, item, player } = event;
    if (item.id !== 'minecraft:wheat_seeds') return;

    if (block.id === 'minecraft:dirt') {
        block.set('minecraft:grass_block');
    } else if (block.hasTag('shenanigans:grass_seed_blocks')) {
        const above = block.offset(0, 1, 0);
        if (above.id === 'minecraft:air') above.set('minecraft:short_grass');
        else if (above.id === 'minecraft:short_grass') growTallGrass(above);
        else return;
    } else if (block.id === 'minecraft:short_grass') {
        growTallGrass(block);
    } else {
        return;
    }

    if (!player.isCreative()) item.shrink(1);
});
