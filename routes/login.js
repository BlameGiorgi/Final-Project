const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/', function (req, res, next) {
    if (req.session.user) {
        return res.redirect('/blogs');
    }
    res.render('login', {error: null});
});

router.post('/', async function (req, res, next) {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.render('login', {error: 'Invalid email or password'});
        }

        req.session.user = {email: user.email}

        res.redirect(`/blogs`)
    } catch (e) {
    }
})

module.exports = router;