import mongoose = require("mongoose")

export const connectDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI as string)

        console.log("MongoDB Connected Successfully:", connectionDB.connection.host);

    } catch (error) {
        console.error('DB function error:', error)
    }
}