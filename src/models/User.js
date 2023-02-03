const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userShema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLenght: 3
    },
    password: {
        type: String,
        required: true,
        minLenght: [6, "Password is too short"]
    }
})


userShema.pre('save', function(next){
    bcrypt.hash(this.password, 10).
    then(hash => {
    this.password = hash
    next();
    });
});

userShema.method('validatePassword', function(password){

  return bcrypt.compare(password, this.password);
  
})

const User = mongoose.model('User', userShema);

module.exports = User;