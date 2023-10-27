import mongoose from 'mongoose'



try {
    mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
} catch (error) {
    console.log(error)
}


export default mongoose