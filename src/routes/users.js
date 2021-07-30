const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/users/signin', (req, res)=>{
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/users/signin',
    failureFlash: true    
}));

router.get('/users/signup', (req,res)=>{
    res.render('users/signup');
});

router.post('/users/signup', async(req,res)=>{
    const {name, email, password, confirmPassword} = req.body;
    const errors = [];
    console.log(req.body);
    if (name.length <= 0) {
        errors.push({text:'Please insert your Name'});
    }
    if (password.length <= 4) {
        errors.push({text:'Password must be at least 4 characters'});
    }
    if(password != confirmPassword){
        errors.push({text: 'Password do not match'});
    }
    if (errors.length > 0) {
        res.render('users/signup',{errors, name, email, password, confirmPassword});
    } 
    else {
        const emailUser = await User.findOne({email:email}); //.lean();
        console.log('email-> ', email);
        console.log('emailUSer-> ', emailUser);
        if (emailUser) {
            //req.flash('error_msg','The Email is already in use');
            errors.push({text: 'The Email is already in use'});
            res.render('users/signup',{errors,name, email, password, confirmPassword});
            //res.redirect('/users/signup',{name, email, password, confirmPassword});
        }
        else{
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg','You are registered');
            res.redirect('/users/signin');
        }
    }
});

module.exports = router;