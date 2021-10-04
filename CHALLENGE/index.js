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
  var r = confirm("¿Estas seguro que quieres salir del juego?");
  if (r == true) {
    window.location.reload()
  }
}
let preguntas = [ 
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ¿De qué famosa película de Disney es el personaje Jafar?",
      "respuesta": "Aladdin",
      "incorrecta1": "Kroger",
      "incorrecta2": "El Rey León ",
      "incorrecta3": "Kris"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": "¿Cómo se llama el pájaro símbolo de los Juegos del Hambre?",
      "respuesta": "Sinsajo",
      "incorrecta1": "Lechuza ",
      "incorrecta2": "Gale",
      "incorrecta3": "Llamas"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ¿Cómo se llama el primer hijo de Goku de Dragon Ball?",
      "respuesta": "Gohan",
      "incorrecta1": "Goten ",
      "incorrecta2": "Trunks",
      "incorrecta3": "Vegetta"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ¿Cómo se llama la bebé de Los Simpsons?",
      "respuesta": "Maggie",
      "incorrecta1": "Marge",
      "incorrecta2": "Lisa",
      "incorrecta3": "Magi"
  },
  {
      "categoria": "ENTRETENIMIENTO",
      "pregunta": " ¿Cómo se llama la princesa de Disney conocida como \"La Sirenita\"?",
      "respuesta": "Ariel ",
      "incorrecta1": "Aurora",
      "incorrecta2": "Estrella",
      "incorrecta3": "Mar"
  },
  {
      "categoria": "GEOGRAFÍA",
      "pregunta": "¿A qué país pertenece la isla de Tasmania?",
      "respuesta": "Australia",
      "incorrecta1": "Portugal",
      "incorrecta2": "Estados Unidos",
      "incorrecta3": "Ninguna Es Correcta"
  },
  {
      "categoria": "GEOGRAFÍA",
      "pregunta": "¿En cuál de los siguientes países NO hay ningún desierto?",
      "respuesta": "Alemania",
      "incorrecta1": "Mongolia",
      "incorrecta2": "Chile",
      "incorrecta3": "España"
  },
  {
      "categoria": "GEOGRAFÍA",
      "pregunta": "¿En qué país situarías la ciudad de Cali?",
      "respuesta": "Colombia",
      "incorrecta1": "Venezuela",
      "incorrecta2": "Costa Rica",
      "incorrecta3": "Chile"
  },
  {
      "categoria": "GEOGRAFÍA",
      "pregunta": "¿Cuál de estas características no pertenece al clima Mediterráneo?",
      "respuesta": "Lluvias Muy Abundantes",
      "incorrecta1": "Veranos Secos Y Calurosos",
      "incorrecta2": "Es Un Tipo De Clima Templado",
      "incorrecta3": "Variables Temperaturas En Primavera"
  },
  {
      "categoria": "GEOGRAFÍA",
      "pregunta": "¿Con cuántos países limita Argentina?",
      "respuesta": "5",
      "incorrecta1": "4",
      "incorrecta2": "3",
      "incorrecta3": "2"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "¿Cuál es la ciudad más antigua de América Latina?",
      "respuesta": "Caral",
      "incorrecta1": "Valparaíso",
      "incorrecta2": "Arequipa",
      "incorrecta3": "La Paz"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "¿Con qué emperador estuvo casada Cleopatra?",
      "respuesta": "Todas Son Correctas",
      "incorrecta1": "Ptolomeo XIV",
      "incorrecta2": "Julio César",
      "incorrecta3": "Marco Antonio"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "El Renacimiento marcó el inicio de la Edad…",
      "respuesta": "Moderna",
      "incorrecta1": "Antigüedad Clásica",
      "incorrecta2": "Contemporánea",
      "incorrecta3": "Media"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "¿Qué país fue dirigido por Stalin?",
      "respuesta": "Unión Soviética",
      "incorrecta1": "Cuba",
      "incorrecta2": "Alemania",
      "incorrecta3": "Polonia"
  },
  {
      "categoria": "HISTORIA",
      "pregunta": "¿Qué se celebra el 8 de Marzo?",
      "respuesta": "El Día De La Mujer",
      "incorrecta1": "El Día Del Trabajo",
      "incorrecta2": "El Día Del Medio Ambiente",
      "incorrecta3": "El Día Del Niño"
  },
  {
      "categoria": "CIENCIA Y TÉCNOLOGIA",
      "pregunta": "Músculos que se encargan de los movimientos involuntarios.",
      "respuesta": "Lisos",
      "incorrecta1": "Estriados",
      "incorrecta2": "Cardíacos",
      "incorrecta3": "Esqueléticos"
  },
  {
      "categoria": "CIENCIA Y TÉCNOLOGIA",
      "pregunta": "Enfermedad que ataca al hígado.",
      "respuesta": "Hepatitis",
      "incorrecta1": "Renitis",
      "incorrecta2": "Bulimia",
      "incorrecta3": "Onicomicosis"
  },
  {
      "categoria": "CIENCIA Y TÉCNOLOGIA",
      "pregunta": " Función principal del intestino grueso",
      "respuesta": "Absorción De Agua",
      "incorrecta1": "Producción De Insulina",
      "incorrecta2": "Producción De Glucógeno",
      "incorrecta3": "Producción Del Jugo Pancreático",
      "imagen": "https://i.ibb.co/pJ8q4JB/image.jpg"
  },
  {
      "categoria": "CIENCIA Y TÉCNOLOGIA",
      "pregunta": "Cambio de sólido a gaseoso.",
      "respuesta": "Sublimación",
      "incorrecta1": "Cohesión",
      "incorrecta2": "Evaporación",
      "incorrecta3": "Condensación",
      "imagen": "https://i.ibb.co/6v4nGBq/Materia.jpg"
  },
  {
      "categoria": "CIENCIA Y TÉCNOLOGIA",
      "pregunta": " Órgano del cuerpo humano produce la bilis.",
      "respuesta": "Hígado",
      "incorrecta1": "Páncreas",
      "incorrecta2": "Estomago",
      "incorrecta3": "Riñón",
    "imagen": "https://i.ibb.co/31Fhj8j/000.jpg"
  },
  {
      "categoria": "QUÍMICA",
      "pregunta": "¿Cuál es la fórmula química del agua?",
      "respuesta": "H2O",
      "incorrecta1": "HO",
      "incorrecta2": "HO2",
      "incorrecta3": "Agu",
      "imagen": "https://i.ibb.co/g6kcqTK/thumbs-b-c-0970f11a6d81d650d9c47ea21f10a751.jpg"
  },
  {
      "categoria": "QUÍMICA",
      "pregunta": "¿Cuál es el símbolo de Bromo?",
      "respuesta": "Br",
      "incorrecta1": "No Es Un Elemento, Es Un Compuesto",
      "incorrecta2": "B",
      "incorrecta3": "BH"
  },
  {
      "categoria": "QUÍMICA",
      "pregunta": "¿Qué compuesto químico es el componente activo de los pimientos picantes?",
      "respuesta": "Capsaicina",
      "incorrecta1": "Celobiosa",
      "incorrecta2": "Galactosa",
      "incorrecta3": "Glucosa"
  },
  {
      "categoria": "QUÍMICA",
      "pregunta": "¿Cuál es el símbolo del Sodio?",
      "respuesta": "Na",
      "incorrecta1": "Mn",
      "incorrecta2": "Li",
      "incorrecta3": "Au"
  },
  {
      "categoria": "QUÍMICA",
      "pregunta": "¿Cuál es el nombre común del ácido ascórbico?",
      "respuesta": "Vitamina C",
      "incorrecta1": "Ácido Cítrico",
      "incorrecta2": "Vitamina B6",
      "incorrecta3": "Vitamina B12"
  }
]
let rondas=
  [
       "ENTRETENIMIENTO","GEOGRAFÍA","HISTORIA","CIENCIA Y TÉCNOLOGIA", "QUÍMICA"
  ]