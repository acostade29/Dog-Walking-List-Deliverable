 const Dogs = require('../data/dogs');


module.exports = { 
    index,
    show
};

function index(req,res) {
    res.render('dogs/index',{dogs: Dogs.getAll()})
}


function show(req, res) {
    res.render('dogs/show', { dog: Dogs.getOne(req.params.idx)})
}