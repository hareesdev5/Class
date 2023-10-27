import bcrypt from 'bcryptjs'

const hashPasword = async(password)=>{
    let salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
    let hash = await bcrypt.hash(password,salt)

    return hash
}


export default hashPasword