const express = require('express');
const products = require("./data/products")
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const { errorHandler } = require("./middlewares/errorMiddleware");
const bodyParser= require('body-parser');
const app = express();


app.use(cors());
app.use(express.json({limit: '500mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(bodyParser.json({limit: '500mb', extended: true}));


dotenv.config();

connectDb();

// app.get("/products",(req,res)=>{
//     res.json(products);
// })
// app.get("/products/:id",(req,res)=>{
//     const product = products.find((p)=>p._id === req.params.id);
//     res.json(product);
// })
const productRoutes = require("./route/productsRoute");
const usersRoutes = require("./route/UsersRoute");
const orderRoutes = require("./route/orderRoute");
const blogRoute = require("./route/blogRoute")
const whereRoute = require("./route/whereRoute")
const storyRoute = require("./route/storyRoute")
const messageRoute = require("./route/messageRoute");
const conversationRoute = require("./route/conversationRoute");




app.use("/api", productRoutes);
 app.use("/api/users", usersRoutes);
 app.use("/api/orders", orderRoutes);
 app.use("/api/blogs", blogRoute);
 app.use("/api/where", whereRoute);
 app.use("/api/story", storyRoute);
 app.use("/api/messages", messageRoute);
 app.use("/api/conversations", conversationRoute);




app.use(errorHandler);

app.listen(process.env.PORT || 8080,()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on PORT ${process.env.PORT}`);
})

