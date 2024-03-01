/*
const HomeModel = require('../models/HomeModel');
//Caso queira buscar os dados utilize (find) no lugar de (create) sem nececidade de titulo ou descrição.
HomeModel.create({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descrição de teste.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));*/

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};

















