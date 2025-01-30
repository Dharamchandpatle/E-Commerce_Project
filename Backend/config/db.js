const mongoose =  require("mongoose")

async function  connectDB(){
    try {
        mongoose.connect(process.env.DB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
          })
    } catch (err) {
        console.log(err);    
        console.log("Database connection is failed ");    
    }
}

module.exports = connectDB


