ServerEvents.recipes(event => {
    const shapedRecipes = [
        {
            path: 'heads/creeper_head',
            output: 'minecraft:creeper_head',
            pattern: ['XYX', 'YZY', 'XYX'],
            key: {
                X: 'minecraft:gunpowder',
                Y: 'minecraft:lime_dye',
                Z: 'minecraft:jack_o_lantern'
            }
        },
        {
            path: 'heads/dragon_egg',
            output: 'minecraft:dragon_egg',
            pattern: ['XZX', 'ZYZ', 'XZX'],
            key: {
                X: 'minecraft:chorus_fruit',
                Y: 'minecraft:diamond_block',
                Z: 'minecraft:black_dye'
            }
        },
        {
            path: 'heads/dragon_head',
            output: 'minecraft:dragon_head',
            pattern: ['XZX', 'ZYZ', 'XZX'],
            key: {
                X: 'minecraft:chorus_fruit',
                Y: 'minecraft:jack_o_lantern',
                Z: 'minecraft:black_dye'
            }
        },
        {
            path: 'heads/skeleton_skull',
            output: 'minecraft:skeleton_skull',
            pattern: ['XZX', 'ZYZ', 'XZX'],
            key: {
                X: 'minecraft:bone',
                Y: 'minecraft:jack_o_lantern',
                Z: 'minecraft:white_dye'
            }
        },
        {
            path: 'heads/wither_skeleton_skull',
            output: 'minecraft:wither_skeleton_skull',
            pattern: ['XZX', 'ZYZ', 'XZX'],
            key: {
                X: 'minecraft:crying_obsidian',
                Y: 'minecraft:diamond',
                Z: 'minecraft:gilded_blackstone'
            }
        },
        {
            path: 'heads/zombie_head',
            output: 'minecraft:zombie_head',
            pattern: ['XZX', 'ZYZ', 'XZX'],
            key: {
                X: 'minecraft:rotten_flesh',
                Y: 'minecraft:jack_o_lantern',
                Z: 'minecraft:green_dye'
            }
        },
        {
            path: 'meats/beef',
            output: 'minecraft:beef',
            pattern: ['XXX', 'X  ', 'XXX'],
            key: {
                X: 'minecraft:wheat'
            }
        },
        {
            path: 'meats/chicken',
            output: 'minecraft:chicken',
            pattern: ['XXX', 'XX ', 'XXX'],
            key: {
                X: 'minecraft:wheat_seeds'
            }
        },
        {
            path: 'meats/cod',
            output: 'minecraft:cod',
            pattern: ['BBB', 'BIB', 'BBB'],
            key: {
                B: 'minecraft:kelp',
                I: 'minecraft:white_dye'
            }
        },
        {
            path: 'meats/mutton',
            output: 'minecraft:mutton',
            pattern: ['X X', 'XXX', 'X X'],
            key: {
                X: 'minecraft:wheat'
            }
        },
        {
            path: 'meats/porkchop',
            output: 'minecraft:porkchop',
            pattern: ['ZYX', 'ZYX', 'ZYX'],
            key: {
                X: 'minecraft:potato',
                Y: 'minecraft:carrot',
                Z: 'minecraft:beetroot'
            }
        },
        {
            path: 'meats/rabbit',
            output: 'minecraft:rabbit',
            pattern: ['XXX', 'XX ', 'X X'],
            key: {
                X: 'minecraft:carrot'
            }
        },
        {
            path: 'meats/salmon',
            output: 'minecraft:salmon',
            pattern: ['BBB', 'BIB', 'BBB'],
            key: {
                B: 'minecraft:kelp',
                I: 'minecraft:red_dye'
            }
        },
        {
            path: 'meats/tropical_fish',
            output: 'minecraft:tropical_fish',
            pattern: ['BBB', 'BIB', 'BBB'],
            key: {
                B: 'minecraft:kelp',
                I: 'minecraft:orange_dye'
            }
        },
        {
            path: 'mob_drops/blaze_rod',
            output: 'minecraft:blaze_rod',
            pattern: ['X X', 'XYX', 'X X'],
            key: {
                X: 'minecraft:quartz',
                Y: 'minecraft:lava_bucket'
            }
        },
        {
            path: 'mob_drops/bone',
            output: 'minecraft:bone',
            pattern: ['XXX'],
            key: {
                X: 'minecraft:bone_meal'
            }
        },
        {
            path: 'mob_drops/ender_pearl',
            output: 'minecraft:ender_pearl',
            pattern: ['XXX', 'XYX', 'XXX'],
            key: {
                X: 'minecraft:obsidian',
                Y: 'minecraft:gold_ingot'
            }
        },
        {
            path: 'mob_drops/feather',
            output: 'minecraft:feather',
            pattern: ['X'],
            key: {
                X: 'minecraft:egg'
            }
        },
        {
            path: 'mob_drops/ghast_tear',
            output: 'minecraft:ghast_tear',
            pattern: ['XXX', 'XYX', 'XXX'],
            key: {
                X: 'minecraft:quartz',
                Y: 'minecraft:water_bucket'
            }
        },
        {
            path: 'mob_drops/glow_ink_sac',
            output: 'minecraft:glow_ink_sac',
            pattern: ['XY'],
            key: {
                X: 'minecraft:ink_sac',
                Y: 'minecraft:glowstone_dust'
            }
        },
        {
            path: 'mob_drops/gunpowder',
            output: 'minecraft:gunpowder',
            pattern: ['X'],
            key: {
                X: 'minecraft:flint'
            }
        },
        {
            path: 'mob_drops/ink_sac',
            output: 'minecraft:ink_sac',
            pattern: ['XY'],
            key: {
                X: 'minecraft:water_bucket',
                Y: '#minecraft:coals'
            }
        },
        {
            path: 'mob_drops/nether_star',
            output: 'minecraft:nether_star',
            pattern: ['XXX', 'XXX', 'XXX'],
            key: {
                X: 'minecraft:wither_skeleton_skull'
            }
        },
        {
            path: 'mob_drops/phantom_membrane',
            output: 'minecraft:phantom_membrane',
            pattern: ['XXX'],
            key: {
                X: '#minecraft:beds'
            }
        },
        {
            path: 'mob_drops/prismarine_crystals',
            output: 'minecraft:prismarine_crystals',
            pattern: ['XYX'],
            key: {
                X: 'minecraft:glass',
                Y: 'minecraft:kelp'
            }
        },
        {
            path: 'mob_drops/prismarine_shard',
            output: 'minecraft:prismarine_shard',
            pattern: ['XYX'],
            key: {
                X: 'minecraft:gravel',
                Y: 'minecraft:kelp'
            }
        },
        {
            path: 'mob_drops/rabbit_foot',
            output: 'minecraft:rabbit_foot',
            pattern: ['XZX', 'ZYZ', 'XZX'],
            key: {
                X: 'minecraft:carrot',
                Y: 'minecraft:rabbit',
                Z: 'minecraft:rabbit_hide'
            }
        },
        {
            path: 'mob_drops/rabbit_hide',
            output: '4x minecraft:rabbit_hide',
            pattern: ['X'],
            key: {
                X: 'minecraft:leather'
            }
        },
        {
            path: 'mob_drops/shulker_shell',
            output: 'minecraft:shulker_shell',
            pattern: ['XXX', 'XYX', 'XXX'],
            key: {
                X: 'minecraft:end_stone',
                Y: 'minecraft:chorus_flower'
            }
        },
        {
            path: 'mob_drops/slime_ball',
            output: 'minecraft:slime_ball',
            pattern: ['ZXZ', 'XYX', 'ZXZ'],
            key: {
                X: 'minecraft:cactus',
                Y: 'minecraft:water_bucket',
                Z: 'minecraft:lily_pad'
            }
        },
        {
            path: 'mob_drops/spider_eye',
            output: 'minecraft:spider_eye',
            pattern: ['XY', 'YX'],
            key: {
                X: 'minecraft:red_mushroom',
                Y: 'minecraft:brown_mushroom'
            }
        },
        {
            path: 'mob_drops/sponge',
            output: 'minecraft:sponge',
            pattern: ['XXX', 'X X', 'XXX'],
            key: {
                X: 'minecraft:yellow_wool'
            }
        },
        {
            path: 'mob_drops/trident',
            output: 'minecraft:trident',
            pattern: ['XXX', 'ZYZ', 'ZYZ'],
            key: {
                X: 'minecraft:diamond',
                Y: 'minecraft:prismarine_crystals',
                Z: 'minecraft:prismarine_shard'
            }
        }
    ];

    shapedRecipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key)
            .id(`shenanigans:crafting/peaceful_mob_drops/${recipe.path}`);
    });

    event.shapeless(
        'minecraft:rotten_flesh',
        [
            'minecraft:rabbit'
        ]
    ).id('shenanigans:crafting/peaceful_mob_drops/meats/rabbit_to_flesh');

    event.shapeless(
        'minecraft:rotten_flesh',
        [
            '#c:foods/raw_meat'
        ]
    ).id('shenanigans:crafting/peaceful_mob_drops/meats/tag_raw_meats');
});
