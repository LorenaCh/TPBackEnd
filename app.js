const express = require('express');
const PORT = process.env.PORT || 8080;
const rp = require('request-promise');
const URL='https://reclutamiento-14cf7.firebaseio.com/personas.json';

const {body, validationResult} = require('express-validator');
const app = express();

app.use(express.json());
app.set('view engine','ejs')
app.use(express.urlencoded({
  extended: true
}));


app.get("/mostrarPersonas",(req,res)=>{
  getUsers().then(user => {
      res.json(user);
  })
    .catch(err => {
      res.status(400);
      res.json(error);
    });
});

function getUsers(){
  let options = {
    url: URL,
    method: 'GET',
    json: true,
    headers:{
      'User-Agent': 'request-promise',
    },
  }

  return rp(options);
}

app.get('/crearPersonas',(req,res)=>{
  res.render("index");
});

app.post('/registrar',[
  body('name').trim().notEmpty().withMessage('Ingrese un nombre')
    .isAlpha().withMessage('El nombre solo debe contener caracteres'),
  body('lastName').trim().notEmpty().withMessage('Ingrese un apellido')
    .isAlpha().withMessage('El apellido solo debe contener caracteres'),
  body('dni')
    .notEmpty().withMessage('Ingrese el DNI')
    .isNumeric().withMessage('El DNI debe contener solamente digitos')
    .isLength({min:8,max:10}).withMessage('Debe contener entre 8 y 10 digitos')
],(req,res)=>{
    const errors =  validationResult(req);
    if(!errors.isEmpty()){
      console.log(req.body)
      const valores = req.body;
      const validaciones = errors.array();
      console.log(errors)
      res.status(400).render('index',{validaciones:validaciones,valores:valores});
    }else{
      rp({
        url:URL,
        method:'POST',
        body:{
          nombre:req.body.name,
          apellido: req.body.lastName,
          dni: req.body.dni
        },
        json:true
      }).then(res.status(201).json(req.body))
        .catch(res.status(500));
    }


})

app.listen(PORT,()=>{
  console.log("Servidor iniciado");
});
