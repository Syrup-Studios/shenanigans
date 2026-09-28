ServerEvents.recipes(event => {
  const recipes =   [
    {
      "id": "shenanigans:metal/copper/copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:copper_block"
      },
      "result": {
        "id": "minecraft:copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cut_copper"
        },
        {
          "item": "minecraft:cut_copper_stairs"
        },
        {
          "item": "minecraft:chiseled_copper"
        },
        {
          "item": "minecraft:copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:copper_door"
      },
      "result": {
        "id": "minecraft:copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:copper_block"
      },
      "result": {
        "id": "minecraft:copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:chiseled_copper"
      },
      "result": {
        "id": "minecraft:cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:chiseled_copper"
      },
      "result": {
        "id": "minecraft:cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:chiseled_copper"
      },
      "result": {
        "id": "minecraft:cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:exposed_copper"
      },
      "result": {
        "id": "minecraft:exposed_copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:exposed_cut_copper"
        },
        {
          "item": "minecraft:exposed_cut_copper_stairs"
        },
        {
          "item": "minecraft:exposed_chiseled_copper"
        },
        {
          "item": "minecraft:exposed_copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:exposed_copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:exposed_copper_door"
      },
      "result": {
        "id": "minecraft:exposed_copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:exposed_copper"
      },
      "result": {
        "id": "minecraft:exposed_copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:exposed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:exposed_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:exposed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:exposed_cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:exposed_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:exposed_cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:exposed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:exposed_cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/exposed_cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:exposed_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:exposed_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/oxdized_cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:oxidized_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:oxidized_cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/oxdized_cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:oxidized_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:oxidized_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/oxidized_copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:oxidized_copper"
      },
      "result": {
        "id": "minecraft:oxidized_copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/oxidized_copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oxidized_cut_copper"
        },
        {
          "item": "minecraft:oxidized_cut_copper_stairs"
        },
        {
          "item": "minecraft:oxidized_chiseled_copper"
        },
        {
          "item": "minecraft:oxidized_copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:oxidized_copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/oxidized_copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:oxidized_copper_door"
      },
      "result": {
        "id": "minecraft:oxidized_copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/oxidized_copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:oxidized_copper"
      },
      "result": {
        "id": "minecraft:oxidized_copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/oxidized_cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:oxidized_chiseled_copper"
      },
      "result": {
        "id": "minecraft:oxidized_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/oxidized_cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:oxidized_chiseled_copper"
      },
      "result": {
        "id": "minecraft:oxidized_cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/oxidized_cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:oxidized_chiseled_copper"
      },
      "result": {
        "id": "minecraft:oxidized_cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_copper_block"
      },
      "result": {
        "id": "minecraft:waxed_copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:waxed_cut_copper"
        },
        {
          "item": "minecraft:waxed_cut_copper_stairs"
        },
        {
          "item": "minecraft:waxed_chiseled_copper"
        },
        {
          "item": "minecraft:waxed_copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:waxed_copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:waxed_copper_door"
      },
      "result": {
        "id": "minecraft:waxed_copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:waxed_copper_block"
      },
      "result": {
        "id": "minecraft:waxed_copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_exposed_copper"
      },
      "result": {
        "id": "minecraft:waxed_exposed_copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:waxed_exposed_cut_copper"
        },
        {
          "item": "minecraft:waxed_exposed_cut_copper_stairs"
        },
        {
          "item": "minecraft:waxed_exposed_chiseled_copper"
        },
        {
          "item": "minecraft:waxed_exposed_copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:waxed_exposed_copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:waxed_exposed_copper_door"
      },
      "result": {
        "id": "minecraft:waxed_exposed_copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:waxed_exposed_copper"
      },
      "result": {
        "id": "minecraft:waxed_exposed_copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_exposed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_exposed_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_exposed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_exposed_cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_exposed_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_exposed_cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_exposed_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_exposed_cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_exposed_cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_exposed_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_exposed_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxdized_cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxdized_cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxidized_copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_copper"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxidized_copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:waxed_oxidized_cut_copper"
        },
        {
          "item": "minecraft:waxed_oxidized_cut_copper_stairs"
        },
        {
          "item": "minecraft:waxed_oxidized_chiseled_copper"
        },
        {
          "item": "minecraft:waxed_oxidized_copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:waxed_oxidized_copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxidized_copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_copper_door"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxidized_copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_copper"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxidized_cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxidized_cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_oxidized_cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_oxidized_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_oxidized_cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_weathered_copper"
      },
      "result": {
        "id": "minecraft:waxed_weathered_copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:waxed_weathered_cut_copper"
        },
        {
          "item": "minecraft:waxed_weathered_cut_copper_stairs"
        },
        {
          "item": "minecraft:waxed_weathered_chiseled_copper"
        },
        {
          "item": "minecraft:waxed_weathered_copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:waxed_weathered_copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:waxed_weathered_copper_door"
      },
      "result": {
        "id": "minecraft:waxed_weathered_copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:waxed_weathered_copper"
      },
      "result": {
        "id": "minecraft:waxed_weathered_copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_weathered_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_weathered_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_weathered_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_weathered_cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_weathered_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_weathered_cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_weathered_chiseled_copper"
      },
      "result": {
        "id": "minecraft:waxed_weathered_cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/waxed_weathered_cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:waxed_weathered_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:waxed_weathered_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_copper_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:weathered_copper"
      },
      "result": {
        "id": "minecraft:weathered_copper_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_copper_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:weathered_cut_copper"
        },
        {
          "item": "minecraft:weathered_cut_copper_stairs"
        },
        {
          "item": "minecraft:weathered_chiseled_copper"
        },
        {
          "item": "minecraft:weathered_copper_grate"
        }
      ],
      "result": {
        "id": "minecraft:weathered_copper_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_copper_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:weathered_copper_door"
      },
      "result": {
        "id": "minecraft:weathered_copper_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_copper_trapdoor_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:weathered_copper"
      },
      "result": {
        "id": "minecraft:weathered_copper_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_cut_copper_from_stonecutting",
      "ingredient": {
        "item": "minecraft:weathered_chiseled_copper"
      },
      "result": {
        "id": "minecraft:weathered_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_cut_copper_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:weathered_chiseled_copper"
      },
      "result": {
        "id": "minecraft:weathered_cut_copper_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_cut_copper_slab_stonecutting",
      "ingredient": {
        "item": "minecraft:weathered_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:weathered_cut_copper_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_cut_copper_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:weathered_chiseled_copper"
      },
      "result": {
        "id": "minecraft:weathered_cut_copper_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/copper/weathered_cut_copper_stonecutting",
      "ingredient": {
        "item": "minecraft:weathered_cut_copper_stairs"
      },
      "result": {
        "id": "minecraft:weathered_cut_copper",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/gold/gold_nuggets_from_stonecutting",
      "ingredient": {
        "item": "minecraft:powered_rail"
      },
      "result": {
        "id": "minecraft:gold_nugget",
        "count": 5
      }
    },
    {
      "id": "shenanigans:metal/iron/chain_from_stonecutting",
      "ingredient": {
        "item": "minecraft:iron_block"
      },
      "result": {
        "id": "minecraft:chain",
        "count": 8
      }
    },
    {
      "id": "shenanigans:metal/iron/heavy_weighted_pressure_plate_from_stonecutting",
      "ingredient": {
        "item": "minecraft:iron_trapdoor"
      },
      "result": {
        "id": "minecraft:heavy_weighted_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_bars_from_stonecutting",
      "ingredient": {
        "item": "minecraft:iron_block"
      },
      "result": {
        "id": "minecraft:iron_bars",
        "count": 24
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_door_from_stonecutting",
      "ingredient": {
        "item": "minecraft:iron_block"
      },
      "result": {
        "id": "minecraft:iron_door",
        "count": 4
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_ingots_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:iron_block"
      },
      "result": {
        "id": "minecraft:iron_ingot",
        "count": 9
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_ingots_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:minecart"
        },
        {
          "item": "minecraft:hopper"
        }
      ],
      "result": {
        "id": "minecraft:iron_ingot",
        "count": 5
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_ingots_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:bucket"
      },
      "result": {
        "id": "minecraft:iron_ingot",
        "count": 3
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_ingots_from_stonecutting_4",
      "ingredient": {
        "item": "minecraft:cauldron"
      },
      "result": {
        "id": "minecraft:iron_ingot",
        "count": 7
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_nuggets_from_stonecutting_1",
      "ingredient": [
        {
          "tag": "minecraft:hanging_signs"
        },
        {
          "item": "minecraft:rail"
        }
      ],
      "result": {
        "id": "minecraft:iron_nugget",
        "count": 3
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_nuggets_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:activator_rail"
        },
        {
          "item": "minecraft:detector_rail"
        }
      ],
      "result": {
        "id": "minecraft:iron_nugget",
        "count": 5
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_trapdoor_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:iron_block"
      },
      "result": {
        "id": "minecraft:iron_trapdoor",
        "count": 3
      }
    },
    {
      "id": "shenanigans:metal/iron/iron_trapdoor_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:iron_door"
      },
      "result": {
        "id": "minecraft:iron_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:misc/cobweb_to_string",
      "ingredient": {
        "item": "minecraft:cobweb"
      },
      "result": {
        "id": "minecraft:string",
        "count": 9
      }
    },
    {
      "id": "shenanigans:misc/string_from_stonecutting",
      "ingredient": {
        "item": "minecraft:white_wool"
      },
      "result": {
        "id": "minecraft:string",
        "count": 4
      }
    },
    {
      "id": "shenanigans:organic/stripped_brown_mushroom_block",
      "ingredient": {
        "item": "minecraft:brown_mushroom_block"
      },
      "result": {
        "id": "minecraft:brown_mushroom_block",
        "count": 1,
        "components": {
          "minecraft:block_state": {
            "down": "false",
            "east": "false",
            "north": "false",
            "south": "false",
            "up": "false",
            "west": "false"
          },
          "minecraft:lore": [
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"Down: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"East: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"North: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"South: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"Up: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"West: \"}"
          ],
          "minecraft:item_name": "{\"text\":\"Stripped Brown Mushroom Block\"}"
        }
      }
    },
    {
      "id": "shenanigans:organic/stripped_mushroom_stem",
      "ingredient": {
        "item": "minecraft:mushroom_stem"
      },
      "result": {
        "id": "minecraft:mushroom_stem",
        "count": 1,
        "components": {
          "minecraft:block_state": {
            "down": "false",
            "east": "false",
            "north": "false",
            "south": "false",
            "up": "false",
            "west": "false"
          },
          "minecraft:lore": [
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"Down: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"East: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"North: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"South: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"Up: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"West: \"}"
          ],
          "minecraft:item_name": "{\"text\":\"Stripped Mushroom Stem\"}"
        }
      }
    },
    {
      "id": "shenanigans:organic/stripped_red_mushroom_block",
      "ingredient": {
        "item": "minecraft:red_mushroom_block"
      },
      "result": {
        "id": "minecraft:red_mushroom_block",
        "count": 1,
        "components": {
          "minecraft:block_state": {
            "down": "false",
            "east": "false",
            "north": "false",
            "south": "false",
            "up": "false",
            "west": "false"
          },
          "minecraft:lore": [
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"Down: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"East: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"North: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"South: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"Up: \"}",
            "{\"color\":\"gray\",\"extra\":[{\"color\":\"red\",\"text\":\"false\"}],\"text\":\"West: \"}"
          ],
          "minecraft:item_name": "{\"text\":\"Stripped Red Mushroom Block\"}"
        }
      }
    },
    {
      "id": "shenanigans:quartz/amethyst/amethyst_shards_from_stonecutting",
      "ingredient": {
        "item": "minecraft:amethyst_block"
      },
      "result": {
        "id": "minecraft:amethyst_shard",
        "count": 4
      }
    },
    {
      "id": "shenanigans:quartz/nether_quartz/nether_quartz_from_quartz_block",
      "ingredient": [
        {
          "item": "minecraft:quartz_block"
        },
        {
          "item": "minecraft:smooth_quartz"
        },
        {
          "item": "minecraft:chiseled_quartz_block"
        },
        {
          "item": "minecraft:quartz_bricks"
        },
        {
          "item": "minecraft:quartz_pillar"
        }
      ],
      "result": {
        "id": "minecraft:quartz",
        "count": 4
      }
    },
    {
      "id": "shenanigans:quartz/nether_quartz/quartz_block_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:smooth_quartz"
        },
        {
          "item": "minecraft:chiseled_quartz_block"
        },
        {
          "item": "minecraft:quartz_bricks"
        },
        {
          "item": "minecraft:quartz_pillar"
        },
        {
          "item": "minecraft:quartz_stairs"
        },
        {
          "item": "minecraft:smooth_quartz_stairs"
        }
      ],
      "result": {
        "id": "minecraft:quartz_block",
        "count": 1
      }
    },
    {
      "id": "shenanigans:quartz/nether_quartz/quartz_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:chiseled_quartz_block"
        },
        {
          "item": "minecraft:quartz_bricks"
        },
        {
          "item": "minecraft:quartz_pillar"
        },
        {
          "item": "minecraft:smooth_quartz"
        }
      ],
      "result": {
        "id": "minecraft:quartz_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:quartz/nether_quartz/quartz_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:quartz_stairs"
        },
        {
          "item": "minecraft:smooth_quartz_stairs"
        }
      ],
      "result": {
        "id": "minecraft:quartz_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:quartz/nether_quartz/quartz_stair_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:chiseled_quartz_block"
        },
        {
          "item": "minecraft:quartz_bricks"
        },
        {
          "item": "minecraft:quartz_pillar"
        },
        {
          "item": "minecraft:smooth_quartz"
        }
      ],
      "result": {
        "id": "minecraft:quartz_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:quartz/nether_quartz/smooth_quartz_from_stonecutting",
      "ingredient": {
        "item": "minecraft:smooth_quartz_stairs"
      },
      "result": {
        "id": "minecraft:smooth_quartz",
        "count": 1
      }
    },
    {
      "id": "shenanigans:quartz/nether_quartz/smooth_quartz_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:smooth_quartz_stairs"
      },
      "result": {
        "id": "minecraft:smooth_quartz_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/andesite_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:andesite_stairs"
        },
        {
          "item": "minecraft:polished_andesite"
        },
        {
          "item": "minecraft:polished_andesite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:andesite",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/andesite_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:polished_andesite"
        }
      ],
      "result": {
        "id": "minecraft:andesite_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/andesite/andesite_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:andesite_stairs"
        },
        {
          "item": "minecraft:polished_andesite_stairs"
        },
        {
          "item": "minecraft:polished_andesite_slab"
        }
      ],
      "result": {
        "id": "minecraft:andesite_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/andesite_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_andesite"
        },
        {
          "item": "minecraft:polished_andesite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:andesite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/andesite_wall_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:andesite_stairs"
      },
      "result": {
        "id": "minecraft:andesite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/andesite_wall_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:polished_andesite_stairs"
      },
      "result": {
        "id": "minecraft:andesite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/andesite_wall_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:polished_andesite"
      },
      "result": {
        "id": "minecraft:andesite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/polished_andesite_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:andesite_stairs"
        },
        {
          "item": "minecraft:polished_andesite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_andesite",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/polished_andesite_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:andesite_stairs"
        },
        {
          "item": "minecraft:polished_andesite_stairs"
        },
        {
          "item": "minecraft:andesite_slab"
        }
      ],
      "result": {
        "id": "minecraft:polished_andesite_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/andesite/polished_andesite_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:andesite_stairs"
      },
      "result": {
        "id": "minecraft:polished_andesite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/basalt/basalt_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_basalt"
        },
        {
          "item": "minecraft:smooth_basalt"
        }
      ],
      "result": {
        "id": "minecraft:basalt",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/blackstone_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone"
        },
        {
          "item": "minecraft:polished_blackstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:blackstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/blackstone_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone"
        },
        {
          "item": "minecraft:polished_blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone_slab"
        }
      ],
      "result": {
        "id": "minecraft:blackstone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/blackstone_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_blackstone"
        },
        {
          "item": "minecraft:polished_blackstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:blackstone_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/blackstone_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone"
        },
        {
          "item": "minecraft:polished_blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone_wall"
        }
      ],
      "result": {
        "id": "minecraft:blackstone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/cracked_polished_blackstone_bricks_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:blackstone"
        },
        {
          "item": "minecraft:cracked_polished_blackstone_bricks"
        },
        {
          "item": "minecraft:polished_blackstone_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cracked_polished_blackstone_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_brick_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone_slab"
        },
        {
          "item": "minecraft:polished_blackstone_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_blackstone_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:polished_blackstone_stairs"
      },
      "result": {
        "id": "minecraft:polished_blackstone_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_brick_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone_wall"
        },
        {
          "item": "minecraft:polished_blackstone_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_blackstone_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_bricks_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_blackstone_brick_stairs"
        },
        {
          "item": "minecraft:polished_blackstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_blackstone_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:blackstone"
        },
        {
          "item": "minecraft:polished_blackstone"
        },
        {
          "item": "minecraft:polished_blackstone_bricks"
        }
      ],
      "result": {
        "id": "minecraft:polished_blackstone_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone_stairs"
        },
        {
          "item": "minecraft:polished_blackstone_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_blackstone_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:chiseled_polished_blackstone"
      },
      "result": {
        "id": "minecraft:polished_blackstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:polished_blackstone_bricks"
      },
      "result": {
        "id": "minecraft:polished_blackstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:polished_blackstone_stairs"
      },
      "result": {
        "id": "minecraft:polished_blackstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_pressure_plate_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:blackstone"
      },
      "result": {
        "id": "minecraft:polished_blackstone_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_pressure_plate_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:polished_blackstone_stairs"
      },
      "result": {
        "id": "minecraft:polished_blackstone_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_slab_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:chiseled_polished_blackstone"
      },
      "result": {
        "id": "minecraft:polished_blackstone_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_slab_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:polished_blackstone_stairs"
      },
      "result": {
        "id": "minecraft:polished_blackstone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:chiseled_polished_blackstone"
      },
      "result": {
        "id": "minecraft:polished_blackstone_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/blackstone/polished_blackstone_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_polished_blackstone"
        },
        {
          "item": "minecraft:polished_blackstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_blackstone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/bricks/brick_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:bricks"
      },
      "result": {
        "id": "minecraft:brick",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/bricks/brick_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:flower_pot"
      },
      "result": {
        "id": "minecraft:brick",
        "count": 3
      }
    },
    {
      "id": "shenanigans:stone/bricks/brick_slab_from_brick_stairs",
      "ingredient": {
        "item": "minecraft:brick_stairs"
      },
      "result": {
        "id": "minecraft:brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/bricks/brick_wall_from_brick_stairs",
      "ingredient": {
        "item": "minecraft:brick_stairs"
      },
      "result": {
        "id": "minecraft:brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/bricks/bricks_from_brick_stairs",
      "ingredient": {
        "item": "minecraft:brick_stairs"
      },
      "result": {
        "id": "minecraft:bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/cobblestone/cobblestone_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:stone"
        },
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:cobblestone_stairs"
        },
        {
          "item": "minecraft:mossy_cobblestone"
        },
        {
          "item": "minecraft:mossy_cobblestone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cobblestone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/cobblestone/cobblestone_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:stone_slab"
        },
        {
          "item": "minecraft:cobblestone_stairs"
        },
        {
          "item": "minecraft:mossy_cobblestone_stairs"
        },
        {
          "item": "minecraft:mossy_cobblestone_slab"
        }
      ],
      "result": {
        "id": "minecraft:cobblestone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/cobblestone/cobblestone_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:stone"
        },
        {
          "item": "minecraft:mossy_cobblestone"
        }
      ],
      "result": {
        "id": "minecraft:cobblestone_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/cobblestone/cobblestone_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:stone"
        },
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:mossy_cobblestone"
        },
        {
          "item": "minecraft:mossy_cobblestone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cobblestone_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/cobblestone/cobblestone_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:stone"
        },
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:cobblestone_stairs"
        },
        {
          "item": "minecraft:mossy_cobblestone"
        },
        {
          "item": "minecraft:mossy_cobblestone_stairs"
        },
        {
          "item": "minecraft:mossy_cobblestone_wall"
        }
      ],
      "result": {
        "id": "minecraft:cobblestone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dark_prismarine/dark_prismarine_from_dark_prismarine_stairs",
      "ingredient": {
        "item": "minecraft:dark_prismarine_stairs"
      },
      "result": {
        "id": "minecraft:dark_prismarine",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dark_prismarine/dark_prismarine_slab_from_dark_prismarine_stairs",
      "ingredient": {
        "item": "minecraft:dark_prismarine_stairs"
      },
      "result": {
        "id": "minecraft:dark_prismarine_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dark_prismarine/prismarine_shard_from_stonecutting",
      "ingredient": {
        "item": "minecraft:dark_prismarine"
      },
      "result": {
        "id": "minecraft:prismarine_shard",
        "count": 8
      }
    },
    {
      "id": "shenanigans:stone/deepslate/chiseled_deepslate_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:chiseled_deepslate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/cobbled_deepslate_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:cobbled_deepslate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/cobbled_deepslate_slab_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:cobbled_deepslate_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/deepslate/cobbled_deepslate_stairs_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:cobbled_deepslate_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/cobbled_deepslate_wall_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate_wall"
        }
      ],
      "result": {
        "id": "minecraft:cobbled_deepslate_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/cracked_deepslate_bricks_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:cracked_deepslate_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/cracked_deepslate_tiles_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:cracked_deepslate_tiles",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_brick_slab_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:deepslate_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_brick_stairs_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_brick_wall_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_wall"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_bricks_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_tile_slab_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:deepslate_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_tile_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_tile_stairs_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:deepslate_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_tile_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_tile_wall_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_wall"
        },
        {
          "item": "minecraft:deepslate_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_tile_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/deepslate_tiles_from_deepslate",
      "ingredient": [
        {
          "item": "minecraft:deepslate"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:deepslate_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_tiles",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/polished_deepslate_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:polished_deepslate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/polished_deepslate_slab_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:polished_deepslate_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/deepslate/polished_deepslate_stairs_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:polished_deepslate_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate/polished_deepslate_wall_from_deepslate",
      "ingredient": {
        "item": "minecraft:deepslate"
      },
      "result": {
        "id": "minecraft:polished_deepslate_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cobbled_deepslate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:chiseled_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cobbled_deepslate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cobbled_deepslate_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:chiseled_deepslate"
        }
      ],
      "result": {
        "id": "minecraft:cobbled_deepslate_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cobbled_deepslate_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_slab"
        }
      ],
      "result": {
        "id": "minecraft:cobbled_deepslate_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cobbled_deepslate_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cobbled_deepslate_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cobbled_deepslate_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:chiseled_deepslate"
        }
      ],
      "result": {
        "id": "minecraft:cobbled_deepslate_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cracked_deepslate_bricks_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:cobbled_deepslate"
      },
      "result": {
        "id": "minecraft:cracked_deepslate_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cracked_deepslate_bricks_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:deepslate_brick_stairs"
      },
      "result": {
        "id": "minecraft:cracked_deepslate_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cracked_deepslate_tiles_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:deepslate_tile_stairs"
      },
      "result": {
        "id": "minecraft:cracked_deepslate_tiles",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/cracked_deepslate_tiles_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:cobbled_deepslate"
      },
      "result": {
        "id": "minecraft:cracked_deepslate_tiles",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/deepslate_brick_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:cobbled_deepslate_slab"
        },
        {
          "item": "minecraft:deepslate_brick_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:polished_deepslate_slab"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/deepslate_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "minecraft:deepslate_brick_stairs"
      },
      "result": {
        "id": "minecraft:deepslate_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/deepslate_bricks_from_stonecutting",
      "ingredient": {
        "item": "minecraft:deepslate_brick_stairs"
      },
      "result": {
        "id": "minecraft:deepslate_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/deepslate_from_stonecutting",
      "ingredient": {
        "item": "minecraft:polished_deepslate"
      },
      "result": {
        "id": "minecraft:cobbled_deepslate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/deepslate_tile_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cobbled_deepslate_slab"
        },
        {
          "item": "minecraft:deepslate_tile_stairs"
        },
        {
          "item": "minecraft:deepslate_brick_slab"
        },
        {
          "item": "minecraft:polished_deepslate_slab"
        }
      ],
      "result": {
        "id": "minecraft:deepslate_tile_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/deepslate_tile_wall_from_stonecutting",
      "ingredient": {
        "item": "minecraft:deepslate_tile_stairs"
      },
      "result": {
        "id": "minecraft:deepslate_tile_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/deepslate_tiles_from_stonecutting",
      "ingredient": {
        "item": "minecraft:deepslate_tile_stairs"
      },
      "result": {
        "id": "minecraft:deepslate_tiles",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/polished_deepslate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_deepslate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/polished_deepslate_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        },
        {
          "item": "minecraft:cobbled_deepslate_slab"
        }
      ],
      "result": {
        "id": "minecraft:polished_deepslate_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/polished_deepslate_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_deepslate_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/deepslate_variants/polished_deepslate_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_deepslate_stairs"
        },
        {
          "item": "minecraft:cobbled_deepslate_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_deepslate_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/diorite_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:diorite_stairs"
        },
        {
          "item": "minecraft:polished_diorite"
        },
        {
          "item": "minecraft:polished_diorite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:diorite",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/diorite_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:polished_diorite"
        }
      ],
      "result": {
        "id": "minecraft:diorite_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/diorite/diorite_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:diorite_stairs"
        },
        {
          "item": "minecraft:polished_diorite_stairs"
        },
        {
          "item": "minecraft:polished_diorite_slab"
        }
      ],
      "result": {
        "id": "minecraft:diorite_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/diorite_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_diorite"
        },
        {
          "item": "minecraft:polished_diorite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:diorite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/diorite_wall_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:diorite_stairs"
      },
      "result": {
        "id": "minecraft:diorite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/diorite_wall_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:polished_diorite_stairs"
      },
      "result": {
        "id": "minecraft:diorite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/diorite_wall_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:polished_diorite"
      },
      "result": {
        "id": "minecraft:diorite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/polished_diorite_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:diorite_stairs"
        },
        {
          "item": "minecraft:polished_diorite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_diorite",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/polished_diorite_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:diorite_stairs"
        },
        {
          "item": "minecraft:polished_diorite_stairs"
        },
        {
          "item": "minecraft:diorite_slab"
        }
      ],
      "result": {
        "id": "minecraft:polished_diorite_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/diorite/polished_diorite_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:diorite_stairs"
      },
      "result": {
        "id": "minecraft:polished_diorite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/end_stone_bricks/end_stone_brick_slab_from_end_stone_brick_stairs",
      "ingredient": {
        "item": "minecraft:end_stone_brick_stairs"
      },
      "result": {
        "id": "minecraft:end_stone_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/end_stone_bricks/end_stone_brick_wall_from_end_stone_brick_stairs",
      "ingredient": {
        "item": "minecraft:end_stone_brick_stairs"
      },
      "result": {
        "id": "minecraft:end_stone_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/end_stone_bricks/end_stone_bricks_from_end_stone_brick_stairs",
      "ingredient": {
        "item": "minecraft:end_stone_brick_stairs"
      },
      "result": {
        "id": "minecraft:end_stone_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/end_stone_bricks/end_stone_from_end_stone_bricks",
      "ingredient": {
        "item": "minecraft:end_stone_bricks"
      },
      "result": {
        "id": "minecraft:end_stone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/chiseled_tuff_bricks_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:tuff_brick_stairs"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:chiseled_tuff_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/chiseled_tuff_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:chiseled_tuff",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/polished_tuff_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_tuff",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/polished_tuff_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:tuff_slab"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_tuff_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/polished_tuff_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:tuff_stairs"
      },
      "result": {
        "id": "minecraft:polished_tuff_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/polished_tuff_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:tuff_wall"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_tuff_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_brick_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        },
        {
          "item": "minecraft:tuff_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:tuff_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_brick_slab_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:chiseled_tuff_bricks"
      },
      "result": {
        "id": "minecraft:tuff_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_brick_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        },
        {
          "item": "minecraft:chiseled_tuff_bricks"
        }
      ],
      "result": {
        "id": "minecraft:tuff_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_brick_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:tuff_brick_stairs"
        },
        {
          "item": "minecraft:chiseled_tuff_bricks"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:tuff_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_bricks_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:tuff_brick_stairs"
        },
        {
          "item": "minecraft:chiseled_tuff_bricks"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:tuff_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:polished_tuff"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        },
        {
          "item": "minecraft:chiseled_tuff"
        }
      ],
      "result": {
        "id": "minecraft:tuff",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:polished_tuff_slab"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:tuff_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:polished_tuff"
        },
        {
          "item": "minecraft:chiseled_tuff"
        }
      ],
      "result": {
        "id": "minecraft:tuff_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_tuff"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        },
        {
          "item": "minecraft:chiseled_tuff"
        }
      ],
      "result": {
        "id": "minecraft:tuff_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/experiments_1.21/tuff/tuff_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:tuff_stairs"
        },
        {
          "item": "minecraft:polished_tuff"
        },
        {
          "item": "minecraft:chiseled_tuff"
        },
        {
          "item": "minecraft:polished_tuff_wall"
        },
        {
          "item": "minecraft:polished_tuff_stairs"
        }
      ],
      "result": {
        "id": "minecraft:tuff_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/granite_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:granite_stairs"
        },
        {
          "item": "minecraft:polished_granite"
        },
        {
          "item": "minecraft:polished_granite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:granite",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/granite_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:polished_granite"
        }
      ],
      "result": {
        "id": "minecraft:granite_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/granite/granite_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:granite_stairs"
        },
        {
          "item": "minecraft:polished_granite_stairs"
        },
        {
          "item": "minecraft:polished_granite_slab"
        }
      ],
      "result": {
        "id": "minecraft:granite_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/granite_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:polished_granite"
        },
        {
          "item": "minecraft:polished_granite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:granite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/granite_wall_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:granite_stairs"
      },
      "result": {
        "id": "minecraft:granite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/granite_wall_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:polished_granite_stairs"
      },
      "result": {
        "id": "minecraft:granite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/granite_wall_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:polished_granite"
      },
      "result": {
        "id": "minecraft:granite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/polished_granite_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:granite_stairs"
        },
        {
          "item": "minecraft:polished_granite_stairs"
        }
      ],
      "result": {
        "id": "minecraft:polished_granite",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/polished_granite_slab_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:granite_stairs"
        },
        {
          "item": "minecraft:polished_granite_stairs"
        },
        {
          "item": "minecraft:granite_slab"
        }
      ],
      "result": {
        "id": "minecraft:polished_granite_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/granite/polished_granite_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:granite_stairs"
      },
      "result": {
        "id": "minecraft:polished_granite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mossy_cobblestone/mossy_cobblestone_from_stonecutting",
      "ingredient": {
        "item": "minecraft:mossy_cobblestone_stairs"
      },
      "result": {
        "id": "minecraft:mossy_cobblestone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mossy_cobblestone/mossy_cobblestone_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:mossy_cobblestone_stairs"
      },
      "result": {
        "id": "minecraft:mossy_cobblestone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mossy_cobblestone/mossy_cobblestone_wall_from_stonecutting",
      "ingredient": {
        "item": "minecraft:mossy_cobblestone_stairs"
      },
      "result": {
        "id": "minecraft:mossy_cobblestone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mossy_stone_brick/mossy_stone_brick_slab_from_mossy_stone_brick_stairs",
      "ingredient": {
        "item": "minecraft:mossy_stone_brick_stairs"
      },
      "result": {
        "id": "minecraft:mossy_stone_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mossy_stone_brick/mossy_stone_brick_wall_from_mossy_stone_brick_stairs",
      "ingredient": {
        "item": "minecraft:mossy_stone_brick_stairs"
      },
      "result": {
        "id": "minecraft:mossy_stone_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mossy_stone_brick/mossy_stone_bricks_from_mossy_stone_brick_stairs",
      "ingredient": {
        "item": "minecraft:mossy_stone_brick_stairs"
      },
      "result": {
        "id": "minecraft:mossy_stone_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/mud_brick_slab_from_mud_brick_stairs",
      "ingredient": {
        "item": "minecraft:mud_brick_stairs"
      },
      "result": {
        "id": "minecraft:mud_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/mud_brick_slab_from_packed_mud",
      "ingredient": {
        "item": "minecraft:packed_mud"
      },
      "result": {
        "id": "minecraft:mud_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/mud_brick_stairs_from_packed_mud",
      "ingredient": {
        "item": "minecraft:packed_mud"
      },
      "result": {
        "id": "minecraft:mud_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/mud_brick_wall_from_mud_brick_stairs",
      "ingredient": {
        "item": "minecraft:mud_brick_stairs"
      },
      "result": {
        "id": "minecraft:mud_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/mud_brick_wall_from_packed_mud",
      "ingredient": {
        "item": "minecraft:packed_mud"
      },
      "result": {
        "id": "minecraft:mud_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/mud_bricks_from_mud_brick_stairs",
      "ingredient": {
        "item": "minecraft:mud_brick_stairs"
      },
      "result": {
        "id": "minecraft:mud_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/mud_bricks_from_packed_mud",
      "ingredient": {
        "item": "minecraft:packed_mud"
      },
      "result": {
        "id": "minecraft:mud_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/mud_bricks/packed_mud_from_mud_bricks",
      "ingredient": {
        "item": "minecraft:mud_bricks"
      },
      "result": {
        "id": "minecraft:packed_mud",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/cracked_nether_bricks_from_stonecutting",
      "ingredient": {
        "item": "minecraft:nether_bricks"
      },
      "result": {
        "id": "minecraft:cracked_nether_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/nether_brick_fence_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_nether_bricks"
        },
        {
          "item": "minecraft:nether_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:nether_brick_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/nether_brick_from_stonecutting",
      "ingredient": {
        "item": "minecraft:nether_bricks"
      },
      "result": {
        "id": "minecraft:nether_brick",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/nether_brick_slab_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:nether_brick_stairs"
      },
      "result": {
        "id": "minecraft:nether_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/nether_brick_slab_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:chiseled_nether_bricks"
      },
      "result": {
        "id": "minecraft:nether_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/nether_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "minecraft:chiseled_nether_bricks"
      },
      "result": {
        "id": "minecraft:nether_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/nether_brick_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_nether_bricks"
        },
        {
          "item": "minecraft:nether_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:nether_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/nether_bricks/nether_bricks_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_nether_bricks"
        },
        {
          "item": "minecraft:nether_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:nether_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/prismarine/prismarine_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:prismarine_stairs"
        }
      ],
      "result": {
        "id": "minecraft:prismarine",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/prismarine/prismarine_shard_from_stonecutting",
      "ingredient": {
        "item": "minecraft:prismarine"
      },
      "result": {
        "id": "minecraft:prismarine_shard",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/prismarine/prismarine_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:prismarine_stairs"
      },
      "result": {
        "id": "minecraft:prismarine_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/prismarine/prismarine_wall_from_stonecutting",
      "ingredient": {
        "item": "minecraft:prismarine_stairs"
      },
      "result": {
        "id": "minecraft:prismarine_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/prismarine_bricks/prismarine_brick_slab_from_prismarine_brick_stairs",
      "ingredient": {
        "item": "minecraft:prismarine_brick_stairs"
      },
      "result": {
        "id": "minecraft:prismarine_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/prismarine_bricks/prismarine_bricks_from_prismarine_brick_stairs",
      "ingredient": {
        "item": "minecraft:prismarine_brick_stairs"
      },
      "result": {
        "id": "minecraft:prismarine_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/prismarine_bricks/prismarine_shard_from_stonecutting",
      "ingredient": {
        "item": "minecraft:prismarine_bricks"
      },
      "result": {
        "id": "minecraft:prismarine_shard",
        "count": 9
      }
    },
    {
      "id": "shenanigans:stone/purpur/popped_chorus_fruit_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:purpur_block"
        },
        {
          "item": "minecraft:purpur_pillar"
        }
      ],
      "result": {
        "id": "minecraft:popped_chorus_fruit",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/purpur/purpur_block_from_purpur_pillar",
      "ingredient": {
        "item": "minecraft:purpur_pillar"
      },
      "result": {
        "id": "minecraft:purpur_block",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/purpur/purpur_block_from_purpur_stairs",
      "ingredient": {
        "item": "minecraft:purpur_stairs"
      },
      "result": {
        "id": "minecraft:purpur_block",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/purpur/purpur_slab_from_purpur_stairs",
      "ingredient": {
        "item": "minecraft:purpur_stairs"
      },
      "result": {
        "id": "minecraft:purpur_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/purpur/purpur_slabs_from_purpur_pillar",
      "ingredient": {
        "item": "minecraft:purpur_pillar"
      },
      "result": {
        "id": "minecraft:purpur_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/red_nether_bricks/red_nether_brick_from_stonecutting",
      "ingredient": {
        "item": "minecraft:red_nether_bricks"
      },
      "result": {
        "id": "minecraft:nether_brick",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/red_nether_bricks/red_nether_brick_slab_from_red_nether_brick_stairs",
      "ingredient": {
        "item": "minecraft:red_nether_brick_stairs"
      },
      "result": {
        "id": "minecraft:red_nether_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_nether_bricks/red_nether_brick_wall_from_red_nether_brick_stairs",
      "ingredient": {
        "item": "minecraft:red_nether_brick_stairs"
      },
      "result": {
        "id": "minecraft:red_nether_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_nether_bricks/red_nether_bricks_from_red_nether_brick_stairs",
      "ingredient": {
        "item": "minecraft:red_nether_brick_stairs"
      },
      "result": {
        "id": "minecraft:red_nether_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sand_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:red_sandstone"
        },
        {
          "item": "minecraft:red_sandstone_stairs"
        },
        {
          "item": "minecraft:smooth_red_sandstone"
        },
        {
          "item": "minecraft:smooth_red_sandstone_stairs"
        },
        {
          "item": "minecraft:cut_red_sandstone"
        },
        {
          "item": "minecraft:chiseled_red_sandstone"
        }
      ],
      "result": {
        "id": "minecraft:red_sand",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sandstone_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:red_sandstone_stairs"
      },
      "result": {
        "id": "minecraft:red_sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sandstone_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:cut_red_sandstone"
      },
      "result": {
        "id": "minecraft:red_sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sandstone_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:smooth_red_sandstone"
      },
      "result": {
        "id": "minecraft:red_sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sandstone_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:chiseled_red_sandstone"
        },
        {
          "item": "minecraft:cut_red_sandstone"
        },
        {
          "item": "minecraft:smooth_red_sandstone"
        }
      ],
      "result": {
        "id": "minecraft:red_sandstone_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sandstone_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:red_sandstone_stairs"
        },
        {
          "item": "minecraft:smooth_red_sandstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:red_sandstone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sandstone_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_red_sandstone"
        },
        {
          "item": "minecraft:cut_red_sandstone"
        },
        {
          "item": "minecraft:smooth_red_sandstone"
        },
        {
          "item": "minecraft:smooth_red_sandstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:red_sandstone_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/red_sandstone_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_red_sandstone"
        },
        {
          "item": "minecraft:cut_red_sandstone"
        },
        {
          "item": "minecraft:smooth_red_sandstone"
        },
        {
          "item": "minecraft:red_sandstone_stairs"
        },
        {
          "item": "minecraft:smooth_red_sandstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:red_sandstone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/smooth_red_sandstone_from_stonecutting",
      "ingredient": {
        "item": "minecraft:smooth_red_sandstone_stairs"
      },
      "result": {
        "id": "minecraft:smooth_red_sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/red_sandstone/smooth_red_sandstone_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:smooth_red_sandstone_stairs"
      },
      "result": {
        "id": "minecraft:smooth_red_sandstone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sand_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:sandstone"
        },
        {
          "item": "minecraft:sandstone_stairs"
        },
        {
          "item": "minecraft:smooth_sandstone"
        },
        {
          "item": "minecraft:smooth_sandstone_stairs"
        },
        {
          "item": "minecraft:cut_sandstone"
        },
        {
          "item": "minecraft:chiseled_sandstone"
        }
      ],
      "result": {
        "id": "minecraft:sand",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sandstone_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:sandstone_stairs"
      },
      "result": {
        "id": "minecraft:sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sandstone_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:cut_sandstone"
      },
      "result": {
        "id": "minecraft:sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sandstone_from_stonecutting_3",
      "ingredient": {
        "item": "minecraft:smooth_sandstone"
      },
      "result": {
        "id": "minecraft:sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sandstone_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:chiseled_sandstone"
        },
        {
          "item": "minecraft:cut_sandstone"
        },
        {
          "item": "minecraft:smooth_sandstone"
        }
      ],
      "result": {
        "id": "minecraft:sandstone_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sandstone_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:sandstone_stairs"
        },
        {
          "item": "minecraft:smooth_sandstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:sandstone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sandstone_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_sandstone"
        },
        {
          "item": "minecraft:cut_sandstone"
        },
        {
          "item": "minecraft:smooth_sandstone"
        },
        {
          "item": "minecraft:smooth_sandstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:sandstone_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/sandstone_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:chiseled_sandstone"
        },
        {
          "item": "minecraft:cut_sandstone"
        },
        {
          "item": "minecraft:smooth_sandstone"
        },
        {
          "item": "minecraft:sandstone_stairs"
        },
        {
          "item": "minecraft:smooth_sandstone_stairs"
        }
      ],
      "result": {
        "id": "minecraft:sandstone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/smooth_sandstone_from_stonecutting",
      "ingredient": {
        "item": "minecraft:smooth_sandstone_stairs"
      },
      "result": {
        "id": "minecraft:smooth_sandstone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/sandstone/smooth_sandstone_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:smooth_sandstone_stairs"
      },
      "result": {
        "id": "minecraft:smooth_sandstone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone/stone_button_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:stone_stairs"
      },
      "result": {
        "id": "minecraft:stone_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone/stone_button_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:stone"
      },
      "result": {
        "id": "minecraft:stone_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:stone/stone/stone_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:smooth_stone"
      },
      "result": {
        "id": "minecraft:stone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone/stone_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:stone_stairs"
      },
      "result": {
        "id": "minecraft:stone",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone/stone_pressure_plate_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:stone_stairs"
      },
      "result": {
        "id": "minecraft:stone_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone/stone_pressure_plate_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:stone"
      },
      "result": {
        "id": "minecraft:stone_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone/stone_slab_from_stonecutting",
      "ingredient": {
        "item": "minecraft:stone_stairs"
      },
      "result": {
        "id": "minecraft:stone_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone_bricks/chiseled_stone_bricks_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:end_stone_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:chiseled_stone_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone_bricks/stone_brick_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:stone_slab"
        },
        {
          "item": "minecraft:stone_brick_stairs"
        },
        {
          "item": "minecraft:mossy_stone_brick_stairs"
        },
        {
          "item": "minecraft:mossy_stone_brick_slab"
        }
      ],
      "result": {
        "id": "minecraft:stone_brick_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone_bricks/stone_brick_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:chiseled_stone_bricks"
        },
        {
          "item": "minecraft:mossy_stone_bricks"
        }
      ],
      "result": {
        "id": "minecraft:stone_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/stone_bricks/stone_brick_stairs_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:chiseled_stone_bricks"
        },
        {
          "item": "minecraft:mossy_stone_bricks"
        },
        {
          "item": "minecraft:mossy_stone_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:stone_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone_bricks/stone_brick_wall_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:stone_brick_stairs"
        },
        {
          "item": "minecraft:mossy_stone_brick_stairs"
        },
        {
          "item": "minecraft:mossy_stone_bricks"
        },
        {
          "item": "minecraft:mossy_stone_brick_wall"
        },
        {
          "item": "minecraft:chiseled_stone_bricks"
        }
      ],
      "result": {
        "id": "minecraft:stone_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/stone_bricks/stone_bricks_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:stone_stairs"
        },
        {
          "item": "minecraft:stone_brick_stairs"
        },
        {
          "item": "minecraft:chiseled_stone_bricks"
        },
        {
          "item": "minecraft:mossy_stone_bricks"
        },
        {
          "item": "minecraft:mossy_stone_brick_stairs"
        }
      ],
      "result": {
        "id": "minecraft:stone_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_planks"
        },
        {
          "item": "minecraft:acacia_stairs"
        },
        {
          "item": "minecraft:acacia_fence"
        },
        {
          "item": "minecraft:acacia_pressure_plate"
        },
        {
          "item": "minecraft:acacia_sign"
        }
      ],
      "result": {
        "id": "minecraft:acacia_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_door"
        },
        {
          "item": "minecraft:acacia_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:acacia_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_planks"
        },
        {
          "item": "minecraft:acacia_stairs"
        }
      ],
      "result": {
        "id": "minecraft:acacia_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_door"
        }
      ],
      "result": {
        "id": "minecraft:acacia_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_stairs"
        }
      ],
      "result": {
        "id": "minecraft:acacia_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:acacia_sign"
        }
      ],
      "result": {
        "id": "minecraft:acacia_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_door"
        },
        {
          "item": "minecraft:acacia_sign"
        },
        {
          "item": "minecraft:acacia_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:acacia_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_pressure_plate"
        },
        {
          "item": "minecraft:acacia_door"
        },
        {
          "item": "minecraft:acacia_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:acacia_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_planks"
        }
      ],
      "result": {
        "id": "minecraft:acacia_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_door"
        },
        {
          "item": "minecraft:acacia_stairs"
        }
      ],
      "result": {
        "id": "minecraft:acacia_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_planks"
        }
      ],
      "result": {
        "id": "minecraft:acacia_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:stripped_acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:acacia_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_planks"
        },
        {
          "item": "minecraft:acacia_stairs"
        }
      ],
      "result": {
        "id": "minecraft:acacia_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/acacia_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:acacia_door"
        }
      ],
      "result": {
        "id": "minecraft:acacia_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/stripped_acacia_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:acacia_log"
        },
        {
          "item": "minecraft:acacia_wood"
        },
        {
          "item": "minecraft:stripped_acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_acacia_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/acacia/stripped_acacia_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:acacia_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_acacia_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/acacia/stripped_acacia_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:acacia_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_acacia_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_planks"
        },
        {
          "item": "minecraft:bamboo_stairs"
        },
        {
          "item": "minecraft:bamboo_mosaic"
        },
        {
          "item": "minecraft:bamboo_mosaic_stairs"
        },
        {
          "item": "minecraft:bamboo_fence"
        },
        {
          "item": "minecraft:bamboo_pressure_plate"
        },
        {
          "item": "minecraft:bamboo_sign"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_door"
        },
        {
          "item": "minecraft:bamboo_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_door",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_planks"
        },
        {
          "item": "minecraft:bamboo_stairs"
        },
        {
          "item": "minecraft:bamboo_mosaic"
        },
        {
          "item": "minecraft:bamboo_mosaic_stairs"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_door"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_mosaic_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_mosaic",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_mosaic_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_mosaic_stairs"
        },
        {
          "item": "minecraft:bamboo_planks"
        },
        {
          "item": "minecraft:bamboo_stairs"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_mosaic",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_mosaic_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_mosaic"
        },
        {
          "item": "minecraft:bamboo_planks"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_mosaic_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_mosaic_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_mosaic_stairs"
        },
        {
          "item": "minecraft:bamboo_stairs"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_mosaic_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_mosaic_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_mosaic_slab",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_mosaic_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_mosaic_stairs",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_mosaic_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_mosaic"
        },
        {
          "item": "minecraft:bamboo_planks"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_mosaic_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_mosaic"
        },
        {
          "item": "minecraft:bamboo_mosaic_stairs"
        },
        {
          "item": "minecraft:bamboo_stairs"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:bamboo_sign"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_door"
        },
        {
          "item": "minecraft:bamboo_sign"
        },
        {
          "item": "minecraft:bamboo_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_sign_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        },
        {
          "item": "minecraft:bamboo_pressure_plate"
        },
        {
          "item": "minecraft:bamboo_door"
        },
        {
          "item": "minecraft:bamboo_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_planks"
        },
        {
          "item": "minecraft:bamboo_mosaic"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_door"
        },
        {
          "item": "minecraft:bamboo_stairs"
        },
        {
          "item": "minecraft:bamboo_mosaic_stairs"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_slab",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_planks"
        },
        {
          "item": "minecraft:bamboo_mosaic"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_stairs",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:bamboo_block"
        },
        {
          "item": "minecraft:stripped_bamboo_block"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:bamboo_planks"
        },
        {
          "item": "minecraft:bamboo_stairs"
        },
        {
          "item": "minecraft:bamboo_mosaic"
        },
        {
          "item": "minecraft:bamboo_mosaic_stairs"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/bamboo_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:bamboo_door"
        }
      ],
      "result": {
        "id": "minecraft:bamboo_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/bamboo/stripped_bamboo_block_from_stonecutting_1",
      "ingredient": {
        "item": "minecraft:bamboo_block"
      },
      "result": {
        "id": "minecraft:stripped_bamboo_block",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/bamboo/stripped_bamboo_block_from_stonecutting_2",
      "ingredient": {
        "item": "minecraft:bamboo_hanging_sign"
      },
      "result": {
        "id": "minecraft:stripped_bamboo_block",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_planks"
        },
        {
          "item": "minecraft:birch_stairs"
        },
        {
          "item": "minecraft:birch_fence"
        },
        {
          "item": "minecraft:birch_pressure_plate"
        },
        {
          "item": "minecraft:birch_sign"
        }
      ],
      "result": {
        "id": "minecraft:birch_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_door"
        },
        {
          "item": "minecraft:birch_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:birch_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_planks"
        },
        {
          "item": "minecraft:birch_stairs"
        }
      ],
      "result": {
        "id": "minecraft:birch_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_door"
        }
      ],
      "result": {
        "id": "minecraft:birch_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_stairs"
        }
      ],
      "result": {
        "id": "minecraft:birch_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:birch_sign"
        }
      ],
      "result": {
        "id": "minecraft:birch_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_door"
        },
        {
          "item": "minecraft:birch_sign"
        },
        {
          "item": "minecraft:birch_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:birch_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_pressure_plate"
        },
        {
          "item": "minecraft:birch_door"
        },
        {
          "item": "minecraft:birch_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:birch_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_planks"
        }
      ],
      "result": {
        "id": "minecraft:birch_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_door"
        },
        {
          "item": "minecraft:birch_stairs"
        }
      ],
      "result": {
        "id": "minecraft:birch_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_planks"
        }
      ],
      "result": {
        "id": "minecraft:birch_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:stripped_birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:birch_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_planks"
        },
        {
          "item": "minecraft:birch_stairs"
        }
      ],
      "result": {
        "id": "minecraft:birch_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/birch_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:birch_door"
        }
      ],
      "result": {
        "id": "minecraft:birch_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/stripped_birch_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:birch_log"
        },
        {
          "item": "minecraft:birch_wood"
        },
        {
          "item": "minecraft:stripped_birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_birch_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/birch/stripped_birch_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:birch_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_birch_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/birch/stripped_birch_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:birch_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_birch_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_planks"
        },
        {
          "item": "minecraft:cherry_stairs"
        },
        {
          "item": "minecraft:cherry_fence"
        },
        {
          "item": "minecraft:cherry_pressure_plate"
        },
        {
          "item": "minecraft:cherry_sign"
        }
      ],
      "result": {
        "id": "minecraft:cherry_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_door"
        },
        {
          "item": "minecraft:cherry_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:cherry_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_planks"
        },
        {
          "item": "minecraft:cherry_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cherry_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_door"
        }
      ],
      "result": {
        "id": "minecraft:cherry_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cherry_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:cherry_sign"
        }
      ],
      "result": {
        "id": "minecraft:cherry_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_door"
        },
        {
          "item": "minecraft:cherry_sign"
        },
        {
          "item": "minecraft:cherry_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:cherry_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_pressure_plate"
        },
        {
          "item": "minecraft:cherry_door"
        },
        {
          "item": "minecraft:cherry_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:cherry_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_planks"
        }
      ],
      "result": {
        "id": "minecraft:cherry_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_door"
        },
        {
          "item": "minecraft:cherry_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cherry_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_planks"
        }
      ],
      "result": {
        "id": "minecraft:cherry_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:stripped_cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:cherry_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_planks"
        },
        {
          "item": "minecraft:cherry_stairs"
        }
      ],
      "result": {
        "id": "minecraft:cherry_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/cherry_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:cherry_door"
        }
      ],
      "result": {
        "id": "minecraft:cherry_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/stripped_cherry_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:cherry_log"
        },
        {
          "item": "minecraft:cherry_wood"
        },
        {
          "item": "minecraft:stripped_cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_cherry_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/cherry/stripped_cherry_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:cherry_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_cherry_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/cherry/stripped_cherry_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:cherry_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_cherry_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_planks"
        },
        {
          "item": "minecraft:crimson_stairs"
        },
        {
          "item": "minecraft:crimson_fence"
        },
        {
          "item": "minecraft:crimson_pressure_plate"
        },
        {
          "item": "minecraft:crimson_sign"
        }
      ],
      "result": {
        "id": "minecraft:crimson_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_door"
        },
        {
          "item": "minecraft:crimson_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:crimson_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_planks"
        },
        {
          "item": "minecraft:crimson_stairs"
        }
      ],
      "result": {
        "id": "minecraft:crimson_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_door"
        }
      ],
      "result": {
        "id": "minecraft:crimson_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_stairs"
        }
      ],
      "result": {
        "id": "minecraft:crimson_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:crimson_sign"
        }
      ],
      "result": {
        "id": "minecraft:crimson_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_door"
        },
        {
          "item": "minecraft:crimson_sign"
        },
        {
          "item": "minecraft:crimson_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:crimson_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_pressure_plate"
        },
        {
          "item": "minecraft:crimson_door"
        },
        {
          "item": "minecraft:crimson_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:crimson_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_planks"
        }
      ],
      "result": {
        "id": "minecraft:crimson_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_door"
        },
        {
          "item": "minecraft:crimson_stairs"
        }
      ],
      "result": {
        "id": "minecraft:crimson_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_planks"
        }
      ],
      "result": {
        "id": "minecraft:crimson_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_stem_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_stem",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:stripped_crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:crimson_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_planks"
        },
        {
          "item": "minecraft:crimson_stairs"
        }
      ],
      "result": {
        "id": "minecraft:crimson_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/crimson_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:crimson_door"
        }
      ],
      "result": {
        "id": "minecraft:crimson_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/crimson/stripped_crimson_hyphae_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:stripped_crimson_hyphae",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/stripped_crimson_stem_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:crimson_stem"
        },
        {
          "item": "minecraft:crimson_hyphae"
        },
        {
          "item": "minecraft:stripped_crimson_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:stripped_crimson_stem",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/crimson/stripped_crimson_stem_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:crimson_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_crimson_stem",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_planks"
        },
        {
          "item": "minecraft:dark_oak_stairs"
        },
        {
          "item": "minecraft:dark_oak_fence"
        },
        {
          "item": "minecraft:dark_oak_pressure_plate"
        },
        {
          "item": "minecraft:dark_oak_sign"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_door"
        },
        {
          "item": "minecraft:dark_oak_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_planks"
        },
        {
          "item": "minecraft:dark_oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_door"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_sign"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_door"
        },
        {
          "item": "minecraft:dark_oak_sign"
        },
        {
          "item": "minecraft:dark_oak_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_pressure_plate"
        },
        {
          "item": "minecraft:dark_oak_door"
        },
        {
          "item": "minecraft:dark_oak_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_planks"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_door"
        },
        {
          "item": "minecraft:dark_oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_planks"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:stripped_dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_planks"
        },
        {
          "item": "minecraft:dark_oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/dark_oak_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_door"
        }
      ],
      "result": {
        "id": "minecraft:dark_oak_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/stripped_dark_oak_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_log"
        },
        {
          "item": "minecraft:dark_oak_wood"
        },
        {
          "item": "minecraft:stripped_dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_dark_oak_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/stripped_dark_oak_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_dark_oak_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/dark_oak/stripped_dark_oak_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:dark_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_dark_oak_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_planks"
        },
        {
          "item": "minecraft:jungle_stairs"
        },
        {
          "item": "minecraft:jungle_fence"
        },
        {
          "item": "minecraft:jungle_pressure_plate"
        },
        {
          "item": "minecraft:jungle_sign"
        }
      ],
      "result": {
        "id": "minecraft:jungle_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_door"
        },
        {
          "item": "minecraft:jungle_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:jungle_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_planks"
        },
        {
          "item": "minecraft:jungle_stairs"
        }
      ],
      "result": {
        "id": "minecraft:jungle_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_door"
        }
      ],
      "result": {
        "id": "minecraft:jungle_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_stairs"
        }
      ],
      "result": {
        "id": "minecraft:jungle_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:jungle_sign"
        }
      ],
      "result": {
        "id": "minecraft:jungle_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_door"
        },
        {
          "item": "minecraft:jungle_sign"
        },
        {
          "item": "minecraft:jungle_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:jungle_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_pressure_plate"
        },
        {
          "item": "minecraft:jungle_door"
        },
        {
          "item": "minecraft:jungle_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:jungle_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_planks"
        }
      ],
      "result": {
        "id": "minecraft:jungle_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_door"
        },
        {
          "item": "minecraft:jungle_stairs"
        }
      ],
      "result": {
        "id": "minecraft:jungle_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_planks"
        }
      ],
      "result": {
        "id": "minecraft:jungle_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:stripped_jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:jungle_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_planks"
        },
        {
          "item": "minecraft:jungle_stairs"
        }
      ],
      "result": {
        "id": "minecraft:jungle_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/jungle_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:jungle_door"
        }
      ],
      "result": {
        "id": "minecraft:jungle_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/stripped_jungle_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:jungle_log"
        },
        {
          "item": "minecraft:jungle_wood"
        },
        {
          "item": "minecraft:stripped_jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_jungle_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/jungle/stripped_jungle_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:jungle_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_jungle_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/jungle/stripped_jungle_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:jungle_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_jungle_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_planks"
        },
        {
          "item": "minecraft:mangrove_stairs"
        },
        {
          "item": "minecraft:mangrove_fence"
        },
        {
          "item": "minecraft:mangrove_pressure_plate"
        },
        {
          "item": "minecraft:mangrove_sign"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_door"
        },
        {
          "item": "minecraft:mangrove_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_planks"
        },
        {
          "item": "minecraft:mangrove_stairs"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_door"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_stairs"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:mangrove_sign"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_door"
        },
        {
          "item": "minecraft:mangrove_sign"
        },
        {
          "item": "minecraft:mangrove_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_pressure_plate"
        },
        {
          "item": "minecraft:mangrove_door"
        },
        {
          "item": "minecraft:mangrove_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_planks"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_door"
        },
        {
          "item": "minecraft:mangrove_stairs"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_planks"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:stripped_mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_planks"
        },
        {
          "item": "minecraft:mangrove_stairs"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/mangrove_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:mangrove_door"
        }
      ],
      "result": {
        "id": "minecraft:mangrove_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/stripped_mangrove_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:mangrove_log"
        },
        {
          "item": "minecraft:mangrove_wood"
        },
        {
          "item": "minecraft:stripped_mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_mangrove_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/mangrove/stripped_mangrove_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:mangrove_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_mangrove_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/mangrove/stripped_mangrove_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:mangrove_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_mangrove_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_planks"
        },
        {
          "item": "minecraft:oak_stairs"
        },
        {
          "item": "minecraft:oak_fence"
        },
        {
          "item": "minecraft:oak_pressure_plate"
        },
        {
          "item": "minecraft:oak_sign"
        }
      ],
      "result": {
        "id": "minecraft:oak_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_door"
        },
        {
          "item": "minecraft:oak_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:oak_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_planks"
        },
        {
          "item": "minecraft:oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:oak_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_door"
        }
      ],
      "result": {
        "id": "minecraft:oak_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:oak_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:oak_sign"
        }
      ],
      "result": {
        "id": "minecraft:oak_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_door"
        },
        {
          "item": "minecraft:oak_sign"
        },
        {
          "item": "minecraft:oak_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:oak_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_pressure_plate"
        },
        {
          "item": "minecraft:oak_door"
        },
        {
          "item": "minecraft:oak_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:oak_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_planks"
        }
      ],
      "result": {
        "id": "minecraft:oak_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_door"
        },
        {
          "item": "minecraft:oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:oak_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_planks"
        }
      ],
      "result": {
        "id": "minecraft:oak_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:stripped_oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:oak_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_planks"
        },
        {
          "item": "minecraft:oak_stairs"
        }
      ],
      "result": {
        "id": "minecraft:oak_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/oak_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:oak_door"
        }
      ],
      "result": {
        "id": "minecraft:oak_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/stripped_oak_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:oak_log"
        },
        {
          "item": "minecraft:oak_wood"
        },
        {
          "item": "minecraft:stripped_oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_oak_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/oak/stripped_oak_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:oak_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_oak_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/oak/stripped_oak_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:oak_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_oak_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_planks"
        },
        {
          "item": "minecraft:spruce_stairs"
        },
        {
          "item": "minecraft:spruce_fence"
        },
        {
          "item": "minecraft:spruce_pressure_plate"
        },
        {
          "item": "minecraft:spruce_sign"
        }
      ],
      "result": {
        "id": "minecraft:spruce_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_door"
        },
        {
          "item": "minecraft:spruce_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:spruce_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_planks"
        },
        {
          "item": "minecraft:spruce_stairs"
        }
      ],
      "result": {
        "id": "minecraft:spruce_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_door"
        }
      ],
      "result": {
        "id": "minecraft:spruce_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_log_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_stairs"
        }
      ],
      "result": {
        "id": "minecraft:spruce_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:spruce_sign"
        }
      ],
      "result": {
        "id": "minecraft:spruce_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_door"
        },
        {
          "item": "minecraft:spruce_sign"
        },
        {
          "item": "minecraft:spruce_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:spruce_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_pressure_plate"
        },
        {
          "item": "minecraft:spruce_door"
        },
        {
          "item": "minecraft:spruce_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:spruce_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_planks"
        }
      ],
      "result": {
        "id": "minecraft:spruce_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_door"
        },
        {
          "item": "minecraft:spruce_stairs"
        }
      ],
      "result": {
        "id": "minecraft:spruce_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_planks"
        }
      ],
      "result": {
        "id": "minecraft:spruce_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:stripped_spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:spruce_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_planks"
        },
        {
          "item": "minecraft:spruce_stairs"
        }
      ],
      "result": {
        "id": "minecraft:spruce_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/spruce_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:spruce_door"
        }
      ],
      "result": {
        "id": "minecraft:spruce_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/stripped_spruce_log_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:spruce_log"
        },
        {
          "item": "minecraft:spruce_wood"
        },
        {
          "item": "minecraft:stripped_spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_spruce_log",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/spruce/stripped_spruce_log_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:spruce_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_spruce_log",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/spruce/stripped_spruce_wood_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:spruce_wood"
        }
      ],
      "result": {
        "id": "minecraft:stripped_spruce_wood",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/stripped_warped_hyphae_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:stripped_warped_hyphae",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/stripped_warped_stem_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:stripped_warped_stem",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/stripped_warped_stem_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_hanging_sign"
        }
      ],
      "result": {
        "id": "minecraft:stripped_warped_stem",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_button_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_planks"
        },
        {
          "item": "minecraft:warped_stairs"
        },
        {
          "item": "minecraft:warped_fence"
        },
        {
          "item": "minecraft:warped_pressure_plate"
        },
        {
          "item": "minecraft:warped_sign"
        }
      ],
      "result": {
        "id": "minecraft:warped_button",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_button_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_door"
        },
        {
          "item": "minecraft:warped_fence_gate"
        }
      ],
      "result": {
        "id": "minecraft:warped_button",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_button_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_button",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_door_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_door",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_fence_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_planks"
        },
        {
          "item": "minecraft:warped_stairs"
        }
      ],
      "result": {
        "id": "minecraft:warped_fence",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_fence_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_door"
        }
      ],
      "result": {
        "id": "minecraft:warped_fence",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_fence_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_fence",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_fence_gate_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_fence_gate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_planks_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_planks",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_planks_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_stairs"
        }
      ],
      "result": {
        "id": "minecraft:warped_planks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_planks_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:warped_sign"
        }
      ],
      "result": {
        "id": "minecraft:warped_planks",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_pressure_plate_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_door"
        },
        {
          "item": "minecraft:warped_sign"
        },
        {
          "item": "minecraft:warped_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:warped_pressure_plate",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_pressure_plate_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_pressure_plate",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_sign_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_pressure_plate"
        },
        {
          "item": "minecraft:warped_door"
        },
        {
          "item": "minecraft:warped_trapdoor"
        }
      ],
      "result": {
        "id": "minecraft:warped_sign",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_sign_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_sign",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_slab_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_planks"
        }
      ],
      "result": {
        "id": "minecraft:warped_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_slab_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_door"
        },
        {
          "item": "minecraft:warped_stairs"
        }
      ],
      "result": {
        "id": "minecraft:warped_slab",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_slab_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_slab",
        "count": 8
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_stairs_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_planks"
        }
      ],
      "result": {
        "id": "minecraft:warped_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_stairs_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_stairs",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_stem_from_stonecutting",
      "ingredient": [
        {
          "item": "minecraft:warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_stem",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_trapdoor_from_stonecutting_1",
      "ingredient": [
        {
          "item": "minecraft:warped_stem"
        },
        {
          "item": "minecraft:stripped_warped_stem"
        },
        {
          "item": "minecraft:warped_hyphae"
        },
        {
          "item": "minecraft:stripped_warped_hyphae"
        }
      ],
      "result": {
        "id": "minecraft:warped_trapdoor",
        "count": 4
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_trapdoor_from_stonecutting_2",
      "ingredient": [
        {
          "item": "minecraft:warped_planks"
        },
        {
          "item": "minecraft:warped_stairs"
        }
      ],
      "result": {
        "id": "minecraft:warped_trapdoor",
        "count": 1
      }
    },
    {
      "id": "shenanigans:wood/warped/warped_trapdoor_from_stonecutting_3",
      "ingredient": [
        {
          "item": "minecraft:warped_door"
        }
      ],
      "result": {
        "id": "minecraft:warped_trapdoor",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite"
      },
      "result": {
        "id": "biomeswevegone:dacite_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite"
      },
      "result": {
        "id": "biomeswevegone:dacite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite"
      },
      "result": {
        "id": "biomeswevegone:dacite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_bricks_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite"
      },
      "result": {
        "id": "biomeswevegone:dacite_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:dacite_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/chiseled_dacite_bricks_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_dacite_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/chiseled_dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:chiseled_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/chiseled_dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:chiseled_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/chiseled_dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:chiseled_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_dacite_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_tiles_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:dacite_tiles",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_tile_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_tiles"
      },
      "result": {
        "id": "biomeswevegone:dacite_tile_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_tile_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_tiles"
      },
      "result": {
        "id": "biomeswevegone:dacite_tile_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_tile_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_tiles"
      },
      "result": {
        "id": "biomeswevegone:dacite_tile_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_cobblestone_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_cobblestone"
      },
      "result": {
        "id": "biomeswevegone:dacite_cobblestone_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_cobblestone_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_cobblestone"
      },
      "result": {
        "id": "biomeswevegone:dacite_cobblestone_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/dacite_cobblestone_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:dacite_cobblestone"
      },
      "result": {
        "id": "biomeswevegone:dacite_cobblestone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/mossy_dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:mossy_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:mossy_dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/mossy_dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:mossy_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:mossy_dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/mossy_dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:mossy_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:mossy_dacite_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/cracked_dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:cracked_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:cracked_dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/dacite/cracked_dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:cracked_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:cracked_dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/dacite/cracked_dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:cracked_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:cracked_dacite_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_bricks_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/chiseled_white_dacite_bricks_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_white_dacite_bricks",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/chiseled_white_dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:chiseled_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_white_dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/chiseled_white_dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:chiseled_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_white_dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/chiseled_white_dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:chiseled_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:chiseled_white_dacite_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_tiles_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_tiles",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_tile_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_tiles"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_tile_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_tile_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_tiles"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_tile_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_tile_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_tiles"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_tile_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_cobblestone_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_cobblestone"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_cobblestone_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_cobblestone_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_cobblestone"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_cobblestone_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/white_dacite_cobblestone_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:white_dacite_cobblestone"
      },
      "result": {
        "id": "biomeswevegone:white_dacite_cobblestone_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/mossy_white_dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:mossy_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:mossy_white_dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/mossy_white_dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:mossy_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:mossy_white_dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/mossy_white_dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:mossy_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:mossy_white_dacite_brick_wall",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/cracked_white_dacite_brick_slab_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:cracked_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:cracked_white_dacite_brick_slab",
        "count": 2
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/cracked_white_dacite_brick_stairs_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:cracked_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:cracked_white_dacite_brick_stairs",
        "count": 1
      }
    },
    {
      "id": "shenanigans:stone/white_dacite/cracked_white_dacite_brick_wall_from_stonecutting",
      "ingredient": {
        "item": "biomeswevegone:cracked_white_dacite_bricks"
      },
      "result": {
        "id": "biomeswevegone:cracked_white_dacite_brick_wall",
        "count": 1
      }
    }
  ]

  for (const recipe of recipes) {
    event.custom({ type: "minecraft:stonecutting", ingredient: recipe.ingredient, result: recipe.result }).id(recipe.id)
  }
})
