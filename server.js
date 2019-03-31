var express = require('express')
var http = require('http')
const bodyParser = require('body-parser');
var app = express()
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/hello', (req, res) => {
  res.status(200).send("Bienvenido API REST")
})
 
app.get('/hello/:name', function url (req, res){

  let respuesta = {
    mensaje: '',
    name: req.params.name
   };
  
  respuesta = {
    Message: `Hello ${respuesta.name} from  ` 
   };

  res.send(respuesta);
})

function testurl (){
  // 1. ARRANGE
  var x = 5;
  var y = 1;
  var sum1 = x + y;

  // 2. ACT
  var sum2 = addTwoNumbers(x, y);

  console.log('url() Deberia entregar el nombre de la url.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  
  // 3. ASSERT
  if ( sum1 === sum2 ) 
    return console.log('Passed.');
  
  console.log('Failed.');
}

//testurl();


http.createServer(app).listen(8001, () => {
  console.log('Servidor levantado en http://localhost:8001');
});