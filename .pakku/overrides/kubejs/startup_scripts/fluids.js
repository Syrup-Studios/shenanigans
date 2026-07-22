StartupEvents.registry('fluid', event => {
    event.create('apple_cider')
    .displayName('Apple Cider')
    //.color(0xC98B44)
    .stillTexture('kubejs:block/thin_fluid_still')
    .flowingTexture('kubejs:block/thin_fluid_flow')


    event.create('melon_juice')
    .displayName('Melon Juice')
    //.color(0xf56059)
    .stillTexture('kubejs:block/thin_fluid_still')
    .flowingTexture('kubejs:block/thin_fluid_flow')
})
