const Dogs = require('../data/dogs');

module.exports = {
    index,
    show,
    addPage,
    create,
    delete: deleteOne,
    editPage,
    update
};

function update(req, res) {
    Dogs.update(req.params.idx, req.body);
    res.redirect('/dogs');
}

function editPage(req, res) {
    res.render('dogs/update', {dog: Dogs.getOne(req.params.idx), idx: req.params.idx})
}

function create(req, res) {
    Dogs.add(req.body);
    res.redirect('/dogs')
}

function index(req, res) {
    // res.render('path to the view', {object passed to the path})
    res.render('dogs/index', { dogs: Dogs.getAll() })
}

function show(req, res) {
    res.render('dogs/show', { dog: Dogs.getOne(req.params.idx), idx: req.params.idx})
}

function addPage(req ,res) {
    res.render('dogs/new')
}

function deleteOne(req, res) {
    Dogs.deleteOne(req.params.idx);
    res.redirect('/dogs')
}