import express from'express'
import colors from'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDb from './dbconfig/db.js';
import authRoutes from'./routes/authRoute.js'
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoute.js'
import cors from 'cors'
import path from 'path'
import{fileURLToPath} from 'url'

dotenv.config();


// const __filename=fileURLToPath(import.meta.url)
// const __dirname=path.dirname(__filename)


connectDb()

const app=express()


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))

// app.use('/api/v1/auth',authRoutes)

// app.use('/api/v1/category',categoryRoutes)

// app.use('/api/v1/product',productRoutes)


app.get('/',(req,res)=>{
  res.send('deployed successfully')
});
// app.use('*',function(req,res){
// res.sendFile(path.join(__dirname,'./client/build/index.html'))
// })




const PORT=process.env.PORT;

//run listen
app.listen(PORT,()=>{
console.log(`Server running on ${process.env.DEV_MODE} mode ${PORT}`.bgCyan.white);
})
