const { response } = require('express');

const usuariosGet =  (req = request, res = response) => {

    const query = req.query;
    res.json({
        msg: "get API",
        query
    });
  }

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.status(201).json({
        msg: "post API",
        body
    });
  }

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.status(500).json({
        msg: "put API",
        id
    });
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API"
    });
  }

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API"
    });
  }


  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
  }