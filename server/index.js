require("dotenv").config();
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT;
const db = require('./models');

app.use(express.json())
app.use(cors())
app.use("/api/posts", require('./routes/Posts.routes') )

db.sequelize.sync().then(()=>{
    app.listen(PORT, () => console.log(`Server is running on:   ${PORT}`))
})


