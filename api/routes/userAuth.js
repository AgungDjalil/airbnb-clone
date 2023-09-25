const express = require('express');
const Router = express.Router()
const jwt = require('jsonwebtoken')

// models
const User = require('../models/user')

Router.post('/register', async function(req, res) {

    const { name, email, password } = req.body

    try {
        
        const makeUser = new User({ name, email, password })

        await makeUser.save()

        res.sendStatus(200)

    } catch (err) {

        res.sendStatus(422).json({err})

    }
    
})

Router.post('/login', async function (req, res) {

    const { email, password } = req.body

    if(email && password) {

        const user = await User.findUser(email, password)
        
        if(user) {

            jwt.sign({email: user.emal, id: user.id}, process.env.JWT_TOKEN, {}, (err, token) => {

                if(err) throw err;

                res.cookie('token', token, { signed: true }).json(user);
            })

        } else {

            res.sendStatus(404)
        }

    } else {

        res.sendStatus(422)
    }
})

Router.get('/profile', function (req, res) {

    const token  = req.signedCookies.token

    if(token) {

        jwt.verify(token, process.env.JWT_TOKEN, {}, async (err, user) => {

            if (err) throw err;

            const { id, email, name } = await User.findById(user.id);
            
            res.json({id, email, name})
        })

    } else {

        res.json({})
    }
})

module.exports = Router
