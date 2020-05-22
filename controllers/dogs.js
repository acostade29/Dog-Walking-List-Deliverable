 const Dogs = require('../data/dogs');


module.exports = { 
    index
};

function index(req,res) {
    res.render('dogs/index',{dogs: Dogs.getAll()})
}