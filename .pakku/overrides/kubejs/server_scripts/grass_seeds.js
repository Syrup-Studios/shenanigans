const DoublePlantBlock = Java.loadClass('net.minecraft.world.level.block.DoublePlantBlock');
const DoubleBlockHalf = Java.loadClass('net.minecraft.world.level.block.state.properties.DoubleBlockHalf');
const MinecraftBlocks = Java.loadClass('net.minecraft.world.level.block.Blocks');

const tallGrassLower = MinecraftBlocks.TALL_GRASS.defaultBlockState().setValue(DoublePlantBlock.HALF, DoubleBlockHalf.LOWER);
const tallGrassUpper = MinecraftBlocks.TALL_GRASS.defaultBlockState().setValue(DoublePlantBlock.HALF, DoubleBlockHalf.UPPER);
const grassSeedConversions = {
    'minecraft:dirt': 'minecraft:grass_block',
    'biomeswevegone:lush_dirt': 'biomeswevegone:lush_grass_block',
    'regions_unexplored:peat_dirt': 'regions_unexplored:peat_grass_block',
    'regions_unexplored:silt_dirt': 'regions_unexplored:silt_grass_block',
    'trmt:eroded_dirt': 'trmt:eroded_grass_block'
};

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

    const grassBlock = grassSeedConversions[block.id];

    if (grassBlock) {
        block.set(grassBlock);
    } else if (Object.values(grassSeedConversions).includes(block.id)) {
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
