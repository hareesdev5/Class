const mongoose = require('mongoose')



try {
    mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
} catch (error) {
    console.log(error)
}


module.exports = mongoose