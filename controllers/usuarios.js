const { response, request } = require("express");

const usuariosGet= (req=request, res=response) => {
    const {edad, phone}= req.query
    res.json({
        msg: "get API",
        edad,
        phone
    })
}

const usuariosPost= (req=request, res=response) => {
    const body= req.body
    res.json({
        //msg: "post API",
        body
    })
}

const usuariosPut= (req=request, res=response) => {
    const id= req.params.id
    res.json({
        msg: "put API",
        id
    })
}

const usuariosPatch= (req=request, res=response) => {
    res.json({
        msg: "patch API"
    })
}

const usuariosDelete= (req=request, res=response) => {
    res.json({
        msg: "delete API"
    })
}

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}