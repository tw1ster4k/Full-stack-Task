require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {sequelize} = require("./db/models")

//импорт роутов
const newMessageRoute = require('./routes/newMessageRoute');
const MessageRoute = require('./routes/MessageRoute');

const app = express();

const corsOptions = {
    origin: [
        'http://localhost:3000',
    ],
    optionsSuccessStatus: 200,
    credentials: true
};
app.use(cors(corsOptions))


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/newmessage', newMessageRoute)
app.use('/message', MessageRoute)




app.listen(4000, async () => {
    try {
        await sequelize.authenticate();
        console.log("Сооединение с базой установлено!")
    } catch (error) {
        console.log(error)
    }
    console.log("Сервер запущен!")
})