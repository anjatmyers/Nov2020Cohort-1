

const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

let password = "some user password";


//20 random characters 
let salt = crypto.randomBytes(20).toString('hex');

//console.log(salt);

// hash combination of our password and salt
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');

//console.log(key);

let hash = key.toString('hex');

// console.log(hash);


let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}`;

//console.log(stored_pass);

//username
////// a person logging in 

// [pbkdf2_sha256, 3600, salt, hash]

let pass_parts = stored_pass.split('*');

//console.log(pass_parts);

let newPassword = 'some user      password';

let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword, 
    pass_parts[2],
    parseInt(pass_parts[1]),
    256, 
    'sha256'
);

console.log(keyNewLogin);

let hashNewLogin = keyNewLogin.toString('hex');


//comparing database hash with new hash
if(hashNewLogin === pass_parts[3]){
    console.log('Passwords match');
}
else{
    console.log('what are you doing? try again?');
}






