import mongoose from "mongoose";


const connectDb=async()=>{
try {
    const conn=await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb Database ${conn.connection.host}`.bgMagenta.red);

} catch (error) {
    console.log(`error in mongoDb  ${error}`)

}
}
export default connectDb;