const bcrypt = require('bcrypt')

const generateHashPass = (password,saltRounds=10)=>{
 return bcrypt.hashSync(password, saltRounds)
}
const verifyPass = (password,hash)=>{
    return bcrypt.compareSync(password, hash);
}

module.exports ={
 generateHashPass,
 verifyPass 
}