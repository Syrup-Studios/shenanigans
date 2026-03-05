ServerEvents.tags('item', event => {
    const stripped_logs = ['bountifulfares:stripped_walnut_log', 'bountifulfares:stripped_hoary_log'];
    
    event.add('c:stripped_logs', stripped_logs);
})