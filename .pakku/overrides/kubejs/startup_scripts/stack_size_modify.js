ItemEvents.modification(event => {
	event.modify([
		'minecraft:egg',
		'minecraft:brown_egg',
		'minecraft:blue_egg',
		'minecraft:ender_pearl'
	], item => {item.maxStackSize = 64})
})
