// import bcrypt from 'bcryptjs'
const bcrypt = require('bcryptjs')
const { model } = require('mongoose')

const hashPasword = async(password)=>{
    let salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
    let hash = await bcrypt.hash(password,salt)

    return hash
}


module.exports = hashPasword
// export default hashPasword