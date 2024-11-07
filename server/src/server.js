const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const isLoggedin = (req, res, next) => {
    const login = false;
    if (login){
        next()
    }   else{
        return res.status(401).json({message:'please login fast'});
    }
};




app.get("/test", (req, res)=>{
    res.status(200).send({
        message: 'get: api tesiting is working'
    });
});

app.get("/api/user", isLoggedin, (req, res)=>{
    res.status(200).send({
        message: 'Profile'
    });
});

app.listen(4000, () =>{
    console.log('server is running at http://localhost:4000');
});