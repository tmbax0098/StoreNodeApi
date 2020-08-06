var express = require('express');
var router = express.Router();
const UserModel = require('./../../models/UserModel');
const hash = require('hash.js');
var jwt = require('jsonwebtoken');


router.post('/account/login', function (req, res, next) {

    let user = new UserModel(req.body);

    user.validate()
        .then(() => UserModel.findOne({email: user.email}, (err, result) => {

            console.log("result ==> ", result);

            if (err) {
                console.log(err);
            } else {
                if (result === null) {
                    //item not found
                    //send answer to user
                    res.status(200).json({message: "username of password not found"});
                } else {
                    //item found
                    let password = hash.sha256().update(user.password).digest('hex');

                    console.log("password ==> ", password);

                    if (result.password === password) {

                        var token = jwt.sign({email: user.email, createdDate: Date.now()}, 'kdsafkjsafdsajfvb46514564');

                        res.status(200).json({token: token, message: "user are login successfully"});
                    } else {
                        res.status(200).json({message: "username of password not found"});
                    }
                }
            }

        }))
        .catch(error => console.log(error));

});

module.exports = router;
