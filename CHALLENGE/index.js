var pregunta;
var puntos=0;
var ronda_actual=0;
var posibles_respuestas;

window.onload = function() {
const categoria=preguntas.filter(pregunta => pregunta.categoria === rondas[ronda_actual])
pregunta=categoria[Math.floor(Math.random() * (5 - 0) + 0)]
posibles_respuestas = [
  pregunta.respuesta,
  pregunta.incorrecta1,
  pregunta.incorrecta2,
  pregunta.incorrecta3
]
posibles_respuestas.sort(() => Math.random() - 0.5)

var element = document.getElementById("pregunta");
element.innerHTML = pregunta.pregunta;

var elemento_puntaje = document.getElementById("puntaje");
elemento_puntaje.innerHTML = puntos;

var element1 = document.getElementById("categoria");
element1.innerHTML = pregunta.categoria;

var element2 = document.getElementById("btn1");
element2.innerHTML = posibles_respuestas[0];

var element3 = document.getElementById("btn2");
element3.innerHTML = posibles_respuestas[1];

var element4 = document.getElementById("btn3");
element4.innerHTML = posibles_respuestas[2];

var element5 = document.getElementById("btn4");
element5.innerHTML = posibles_respuestas[3];

}
function oprimir_btn(event) {
let respuesta_seleccionada = event.target.innerHTML
if (pregunta.respuesta == respuesta_seleccionada)
{
if(ronda_actual <= 3)
{
  puntos = puntos + 20
  ronda_actual = ronda_actual + 1
  siguiente_ronda(ronda_actual);
}
else if(ronda_actual == 4)
{
  puntos = puntos + 20
  ronda_actual = ronda_actual + 1
  elemento_puntaje = document.getElementById("puntaje");
  elemento_puntaje.innerHTML = puntos;
  alert("GANASTE 100 PUNTOS!!")
}
}
else{
  puntos  = 0 
  alert("Respuesta Incorrecta")
  window.location.reload()
}elemento_puntaje = document.getElementById("puntaje");
 elemento_puntaje.innerHTML = puntos;
}
function siguiente_ronda(ronda)
{
const categoria=preguntas.filter(pregunta => pregunta.categoria === rondas[ronda_actual])
pregunta=categoria[Math.floor(Math.random() * (5 - 0) + 0)]
posibles_respuestas = [
  pregunta.respuesta,
  pregunta.incorrecta1,
  pregunta.incorrecta2,
  pregunta.incorrecta3
]
posibles_respuestas.sort(() => Math.random() - 0.5)
var element = document.getElementById("pregunta");
element.innerHTML = pregunta.pregunta;

var element1 = document.getElementById("categoria");
element1.innerHTML = pregunta.categoria;

var element2 = document.getElementById("btn1");
element2.innerHTML = posibles_respuestas[0];

var element3 = document.getElementById("btn2");
element3.innerHTML = posibles_respuestas[1];

var element4 = document.getElementById("btn3");
element4.innerHTML = posibles_respuestas[2];

var element5 = document.getElementById("btn4");
element5.innerHTML = posibles_respuestas[3];
}
function myFunction() {
  var txt;
  var r = confirm("??Estas seguro que quieres salir del juego?");
  if (r == true) {
    window.location.reload()
  }
}
let preguntas = [ 
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ??De qu?? famosa pel??cula de Disney es el personaje Jafar?",
      "respuesta": "Aladdin",
      "incorrecta1": "Kroger",
      "incorrecta2": "El Rey Le??n??",
      "incorrecta3": "Kris"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": "??C??mo se llama el p??jaro s??mbolo de los Juegos del Hambre?",
      "respuesta": "Sinsajo",
      "incorrecta1": "Lechuza??",
      "incorrecta2": "Gale",
      "incorrecta3": "Llamas"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ??C??mo se llama el primer hijo de Goku de Dragon Ball?",
      "respuesta": "Gohan",
      "incorrecta1": "Goten??",
      "incorrecta2": "Trunks",
      "incorrecta3": "Vegetta"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ??C??mo se llama la beb?? de Los Simpsons?",
      "respuesta": "Maggie",
      "incorrecta1": "Marge",
      "incorrecta2": "Lisa",
      "incorrecta3": "Magi"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ??C??mo se llama la princesa de Disney conocida como \"La Sirenita\"?",
      "respuesta": "Ariel??",
      "incorrecta1": "Aurora",
      "incorrecta2": "Estrella",
      "incorrecta3": "Mar"
  },
  {
      "categoria": "GEOGRAF??A",
      "pregunta": "??A qu?? pa??s pertenece la isla de Tasmania?",
      "respuesta": "Australia",
      "incorrecta1": "Portugal",
      "incorrecta2": "Estados Unidos",
      "incorrecta3": "Ninguna Es Correcta"
  },
  {
      "categoria": "GEOGRAF??A",
      "pregunta": "??En cu??l de los siguientes pa??ses NO hay ning??n desierto?",
      "respuesta": "Alemania",
      "incorrecta1": "Mongolia",
      "incorrecta2": "Chile",
      "incorrecta3": "Espa??a"
  },
  {
      "categoria": "GEOGRAF??A",
      "pregunta": "??En qu?? pa??s situar??as la ciudad de Cali?",
      "respuesta": "Colombia",
      "incorrecta1": "Venezuela",
      "incorrecta2": "Costa Rica",
      "incorrecta3": "Chile"
  },
  {
      "categoria": "GEOGRAF??A",
      "pregunta": "??Cu??l de estas caracter??sticas no pertenece al clima Mediterr??neo?",
      "respuesta": "Lluvias Muy Abundantes",
      "incorrecta1": "Veranos Secos Y Calurosos",
      "incorrecta2": "Es Un Tipo De Clima Templado",
      "incorrecta3": "Variables Temperaturas En Primavera"
  },
  {
      "categoria": "GEOGRAF??A",
      "pregunta": "??Con cu??ntos pa??ses limita Argentina?",
      "respuesta": "5",
      "incorrecta1": "4",
      "incorrecta2": "3",
      "incorrecta3": "2"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "??Cu??l es la ciudad m??s antigua de Am??rica Latina?",
      "respuesta": "Caral",
      "incorrecta1": "Valpara??so",
      "incorrecta2": "Arequipa",
      "incorrecta3": "La Paz"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "??Con qu?? emperador estuvo casada Cleopatra?",
      "respuesta": "Todas Son Correctas",
      "incorrecta1": "Ptolomeo XIV",
      "incorrecta2": "Julio C??sar",
      "incorrecta3": "Marco Antonio"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "El Renacimiento marc?? el inicio de la Edad???",
      "respuesta": "Moderna",
      "incorrecta1": "Antig??edad Cl??sica",
      "incorrecta2": "Contempor??nea",
      "incorrecta3": "Media"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "??Qu?? pa??s fue dirigido por Stalin?",
      "respuesta": "Uni??n Sovi??tica",
      "incorrecta1": "Cuba",
      "incorrecta2": "Alemania",
      "incorrecta3": "Polonia"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "??Qu?? se celebra el 8 de Marzo?",
      "respuesta": "El D??a De La Mujer",
      "incorrecta1": "El D??a Del Trabajo",
      "incorrecta2": "El D??a Del Medio Ambiente",
      "incorrecta3": "El D??a Del Ni??o"
  },
  {
      "categoria": "CIENCIA Y T??CNOLOGIA",
      "pregunta": "M??sculos que se encargan de los movimientos involuntarios.",
      "respuesta": "Lisos",
      "incorrecta1": "Estriados",
      "incorrecta2": "Card??acos",
      "incorrecta3": "Esquel??ticos"
  },
  {
      "categoria": "CIENCIA Y T??CNOLOGIA",
      "pregunta": "Enfermedad que ataca al h??gado.",
      "respuesta": "Hepatitis",
      "incorrecta1": "Renitis",
      "incorrecta2": "Bulimia",
      "incorrecta3": "Onicomicosis"
  },
  {
      "categoria": "CIENCIA Y T??CNOLOGIA",
      "pregunta": " Funci??n principal del intestino grueso",
      "respuesta": "Absorci??n De Agua",
      "incorrecta1": "Producci??n De Insulina",
      "incorrecta2": "Producci??n De Gluc??geno",
      "incorrecta3": "Producci??n Del Jugo Pancre??tico",
      "imagen": "https://i.ibb.co/pJ8q4JB/image.jpg"
  },
  {
      "categoria": "CIENCIA Y T??CNOLOGIA",
      "pregunta": "Cambio de s??lido a gaseoso.",
      "respuesta": "Sublimaci??n",
      "incorrecta1": "Cohesi??n",
      "incorrecta2": "Evaporaci??n",
      "incorrecta3": "Condensaci??n",
      "imagen": "https://i.ibb.co/6v4nGBq/Materia.jpg"
  },
  {
      "categoria": "CIENCIA Y T??CNOLOGIA",
      "pregunta": " ??rgano del cuerpo humano produce la bilis.",
      "respuesta": "H??gado",
      "incorrecta1": "P??ncreas",
      "incorrecta2": "Estomago",
      "incorrecta3": "Ri????n",
    "imagen": "https://i.ibb.co/31Fhj8j/000.jpg"
  },
  {
      "categoria": "QU??MICA",
      "pregunta": "??Cu??l es la f??rmula qu??mica del agua?",
      "respuesta": "H2O",
      "incorrecta1": "HO",
      "incorrecta2": "HO2",
      "incorrecta3": "Agu",
      "imagen": "https://i.ibb.co/g6kcqTK/thumbs-b-c-0970f11a6d81d650d9c47ea21f10a751.jpg"
  },
  {
      "categoria": "QU??MICA",
      "pregunta": "??Cu??l es el s??mbolo de Bromo?",
      "respuesta": "Br",
      "incorrecta1": "No Es Un Elemento, Es Un Compuesto",
      "incorrecta2": "B",
      "incorrecta3": "BH"
  },
  {
      "categoria": "QU??MICA",
      "pregunta": "??Qu?? compuesto qu??mico es el componente activo de los pimientos picantes?",
      "respuesta": "Capsaicina",
      "incorrecta1": "Celobiosa",
      "incorrecta2": "Galactosa",
      "incorrecta3": "Glucosa"
  },
  {
      "categoria": "QU??MICA",
      "pregunta": "??Cu??l es el s??mbolo del Sodio?",
      "respuesta": "Na",
      "incorrecta1": "Mn",
      "incorrecta2": "Li",
      "incorrecta3": "Au"
  },
  {
      "categoria": "QU??MICA",
      "pregunta": "??Cu??l es el nombre com??n del ??cido asc??rbico?",
      "respuesta": "Vitamina C",
      "incorrecta1": "??cido C??trico",
      "incorrecta2": "Vitamina B6",
      "incorrecta3": "Vitamina B12"
  }
]
let rondas=
  [
       "ENTRETENIMIENTO","GEOGRAF??A","HISTORIA","CIENCIA Y T??CNOLOGIA", "QU??MICA"
  ]