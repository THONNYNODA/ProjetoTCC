const jwt = require('jsonwebtoken');
const authConfig = require('../../config/autenticacao.json');

module.exports = (req, res, next) =>{

    const authHeader = req.headers.authorization;

    if(!authHeader)
    return res.status(401).send({mensagem: 'Nao ha Token'});

    const parts = authHeader.split(' ');

    if(!parts.lengt == 2)
    return res.status(401).send({ mensagem: 'Erro no Token'});

    const [ scheme , token ] = parts;

    if(!/^Bearer$/i.test(scheme))
    return res.status(401).send({ mensagem: 'Token Malformado'});

    jwt.verify(token, authConfig.secret, (err, decoded) =>{

        if(err) return res.status(401).send({ mensagem: 'Token Invalido'});

        req.usuarioId = decoded.id;
        return next();
    })

}