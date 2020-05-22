const dogs = [
    {name: 'Conito', owner:'Maria'},
    {name: 'Cachito', owner:'Jesus'},
    {name: 'Cookie', owner:'Jose'},
    {name: 'Ruby', owner:'Chuchu'},
];

module.exports = {
    getAll,
    getOne,
    deleteOne
}

function getAll() {
    return dogs;
}

function getOne(idx) {
    return dogs[idx];
}
 
function deleteOne(idx) {
    dogs.splice(idx, 1);
}