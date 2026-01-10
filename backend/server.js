import app from './src/app.js'
import dotenv from 'dotenv';
import { config } from './src/config/config.js';
import { connectDb } from './src/db/db.js';
dotenv.config();
connectDb()

app.listen(config.port,()=>{
    console.log(`Server is running on port ${config.port}`);
})