const db = {
    'user': [
        {id: 1, name: 'John'},
        {id: 2, name: 'Ron'}
    ]
};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    let collection = await list(table);
    return collection.filter(item => item.id == id)[0] || null;
}

async function upsert(table, data) {
    db[collection].push(data);
}

async function remove(table, data) {
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove
}