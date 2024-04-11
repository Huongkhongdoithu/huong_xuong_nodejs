import mongoose from "mongoose";
export default async function connectMGDB(dbURL) {
    try {
        await mongoose.connect("mongodb://localhost:27017/db_mybd")
        console.log("Connect thành công")
    } catch(err) {
        console.log("lỗi" + err)
    }
}