import express from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

// 启用 CORS，并允许携带cookie
app.use(cors({
    origin: 'http://localhost:5173', // 允许前端的地址
    credentials: true // 允许跨域请求时携带cookie
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(3000, ()=>{
    console.log("server is running....")
})