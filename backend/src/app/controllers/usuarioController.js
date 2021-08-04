const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const authConfig = require('../../config/autenticacao.json')
const Usuario = require('../models/usuario');


const router = express.Router();

function gerarToken(params ={}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}


router.post('/', async (req, res) => {

    const {
        cpf
    } = req.body;

    try {

        if (await Usuario.findOne({
                cpf
            }))
            return res.status(400).send({
                mensagem: 'Usuario ja cadastrado!!'
            });


        const usuario = await Usuario.create(req.body);
        
        usuario.dsSenha = undefined;

        return res.send({
            usuario,
            token: gerarToken({
                id: usuario.id
            }),
        })        


    } catch (err) {
        return res.status(401).send({
            mensagem: 'Falha ao registrar uma nova usuario'
        });
    }


});

router.post('/autenticacao', async (req,res) =>{

    const { cpf, dsSenha} = req.body;

    const usuario = await Usuario.findOne({
        cpf
    }).populate('funcao').select('+dsSenha');

    if(!usuario)
        return res.status(400).send({
            mensagem: 'Usuario nao encontrado!!'
        });

        if(!await bcrypt.compare(dsSenha, usuario.dsSenha))
        return res.status(400).send({
            mensagem: 'Senha Invalido'
        });

        usuario.dsSenha = undefined;
        

        res.send({
            usuario,
            token: gerarToken({
                id: usuario.id
            }),
        })
});

router.get('/', async (req, res) => {
    try {

        const usuario = await Usuario.find().populate('funcao') 
        return res.send({
            usuario,
            token: gerarToken({
                id: usuario.id
            }),
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item!!'
        });

    }
})


router.get('/:usuarioId', async (req, res) => {

    try {

        const usuario = await Usuario.findById(req.params.usuarioId).select('+dsSenha').populate('funcao');
        return res.send({
            usuario,
            token: gerarToken({
                id: usuario.id
            }),
        });

    } catch (err) {
        return res.status(400).send({
            mensagem: 'Falha ao buscar o Item Id!!'
        });
    }
})

router.put('/:usuarioId', async (req,res) =>{

    try {
        const { cpf, dsSenha } = req.body

        const usuario = await Usuario.findOne({ cpf }).select('+dsSenha') ;

        usuario.dsSenha = dsSenha
        
        await usuario.save()

        return res.send({
            usuario,
            token: gerarToken({
                id: usuario.id
            }),
        });

        
    } catch (err) {
        console.log(err)
        return res.send({ mensagem: "Erro ao Atualizar"})
        
    }
})

router.delete('/:usuarioId', async (req, res) => {

    try {

        await Usuario.findByIdAndRemove(req.params.usuarioId);
        return res.send({ mensagem: "Usuario removido!!"})

    } catch (err) {
        return res.send({
            mensagem: "Erro ao deletar"
        })
    }

})

module.exports = app => app.use('/usuario', router);