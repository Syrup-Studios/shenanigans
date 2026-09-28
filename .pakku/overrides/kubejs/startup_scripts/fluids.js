StartupEvents.registry('fluid', event => {
    [
        ['apple_cider', 'Apple Cider', 0xC98B44],
        ['melon_juice', 'Melon Juice', 0xF56059],
        ['baked_cod_stew', 'Baked Cod Stew', 0xB77C38],
        ['beef_stew', 'Beef Stew', 0x99583A],
        ['beetroot_soup', 'Beetroot Soup', 0x9E315B],
        ['bone_broth', 'Bone Broth', 0xD7BE8E],
        ['chicken_soup', 'Chicken Soup', 0xCBA34A],
        ['fish_stew', 'Fish Stew', 0xB96D3F],
        ['mushroom_stew', 'Mushroom Stew', 0x76533C],
        ['noodle_soup', 'Noodle Soup', 0xB89A62],
        ['onion_soup', 'Onion Soup', 0xD9C88B],
        ['pumpkin_soup', 'Pumpkin Soup', 0xD97822],
        ['rabbit_stew', 'Rabbit Stew', 0xA87945],
        ['vegetable_soup', 'Vegetable Soup', 0x77914B],
        ['guardian_soup', 'Guardian Soup', 0x4C9BA0]
    ].forEach(([id, name, tint]) => event.create(`shenanigans:${id}`)
        .displayName(name)
        .tint(tint)
        .stillTexture('kubejs:block/thin_fluid_still')
        .flowingTexture('kubejs:block/thin_fluid_flow'))
})
