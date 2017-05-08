function MiembroSquad(id, nombre, apellido,  edad, hobby1, hobby2, hobby3){
this.id = id;
this.nombre =  nombre;	
this.apellido = apellido; 
this.edad = edad;
this.hobby1 = hobby1;
this.hobby2 = hobby2;
this.hobby3 = hobby3;
this.listado = function(){
  return ("Nombre: " + this.nombre + " " + this.apellido + "<br>" + "Edad: " + this.edad + " años." + 
    "<br>" + "Hobbies: <ul><li>" + this.hobby1 + "</li><li>" + this.hobby2 + "</li><li>" + this.hobby3 + "</li>");
};
 }
 /* contructor*/
 

var int1 = new MiembroSquad("1", "Macarena","Baltra", 27, "Encuadernar", "Bailar", "Series");
var int2 = new MiembroSquad("2", "Susana","Arce", 28, "Ficción", "Crear cosas", "Escribir");
var int3 = new MiembroSquad("3", "Berenisse","Rios", 28, "Leer", "Viajar", "Yoga");
var int4 = new MiembroSquad("4", "Claudia","Rivera", 33, "Estar con gatos", "Escribir y leer", "Bailar y hacer yoga");
var int5 = new MiembroSquad("5", "Nicole","Aliste", 32, "Video juegos", "Escuchar música en inglés", "Aprender");
var int6 = new MiembroSquad("6", "Francisca","Ruiz-Tagle", 35, "Ilustrar", "Hacer clases de manualidades", "Pasar tiempo con su pug");
var int7 = new MiembroSquad("7", "Daniela","Medina", 20, "Bailar", "Ver animé", "Dormir");
var int8 = new MiembroSquad("8", "Andrea","Miranda", 24, "Dibujar", "Leer", "Aprender cosas nuevas");
/* datos de cada integrante*/

var arreglo = [int1, int2, int3, int4, int5, int6, int7, int8];

var num=1;
arreglo.forEach(function(ele){
  var aux = document.getElementById("list"); 
  aux.innerHTML += "<div id='"+num+"'>"+ele.listado()+"</div><textarea id='comen"+num+"' rows='4' cols='50' placeholder='Escribe tu comentario'></textarea><br><button onclick='agregar("+ele.id+")'>Enviar comentario</button><p><div id='listar"+num+"'></div>";
  num++;

});

function Comentar(id,comentario,like){
  this.id = id;
  this.comentario = comentario;
  this.like = like;
}

function agregar(idUser){
    var input = document.getElementById('comen'+idUser).value;
console.log (input);
    var contTarea = document.getElementById("listar"+idUser);
    console.log (contTarea);

    contTarea.innerHTML += "<li>"+input+" <button id='like"+idUser+"' onclick='like("+idUser+")'>♥</button></li>";
   
    
     input = "";
}

function like(numero){
  var input = document.getElementById('like'+numero).value;
  var mostrar = document.getElementById('like'+numero);

  var sum = "";
  mostrar.innerHTML += ((sum+1).length);
  console.log (sum);
  console.log ("paso por aqui");
  
}

