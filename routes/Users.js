const express = require('express');
const User = require('../models/User');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

router.use(cors());

// Secret Key
process.env.SECRET_KEY = 'secret';

router.post('/register', (req, res) => {
    const today = new Date();
    let userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        create: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if(!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    User.create({first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hash})
                        .then(user => {
                            res.json({status: user.email + ' registered'});
                        })
                        .catch(err => {
                            res.send('Error creating user: ' + err);
                        });
                });
            } else {
                res.json({error: 'User already exists'});
            }
        })
        .catch(err => {
            res.send('Error creating user: ' + err);
        });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        console.log(user);
        console.log(user.password);
        if(user) {
            if (bcrypt.compareSync(req.body.password, user.dataValues.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                });
                res.send(token);
            } else {
                res.status(400).json({error: 'Passwords do not match'});
            }
        } else {
            res.status(400).json({error: 'User does not exist'});
        }
    })
    .catch(err => console.log(err));
});

router.get('/', async (req, res) => {
    let users = await User.findAll({ raw: true });
    console.log(users);
    res.json(users);
});

module.exports = router;