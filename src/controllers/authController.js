const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) =>{
    res.render('auth/login');
})

router.post('/login', (req, res) =>{

    const {username, password} = req.body;

    res.redirect('/');
})

router.get('/register', (req, res) =>{

    res.render('auth/register')
})

router.post('/register', async (req, res) =>{

    const {username, password, repeatPassword} = req.body;

    const existingUser = await authService.getUserByUsername(username);

    if(password !== repeatPassword){
        throw "Wrong username or password!";
    }

    if(existingUser){
        return res.status(404).end();
    }

    await authService.register(username, password)


    res.redirect('/')
})


module.exports = router;