window.onload = function() {
  let pregunta

const categoria=preguntas.filter(pregunta => pregunta.categoria === "Geografía")
pregunta=categoria[Math.floor(Math.random() * (5 - 0) + 0)]
var element = document.getElementById("pregunta");
element.innerHTML = pregunta.pregunta;


var element2 = document.getElementById("btn1");
element2.innerHTML = pregunta.respuesta;

var element3 = document.getElementById("btn2");
element3.innerHTML = pregunta.incorrecta2;

var element4 = document.getElementById("btn3");
element4.innerHTML = pregunta.incorrecta3;

var element5 = document.getElementById("btn4");
element5.innerHTML = pregunta.incorrecta4;




}

function oprimir_btn(i) {
  if (suspender_botones) {
    return
  }
  suspender_botones = true
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++
    btn_correspondiente[i].style.background = "lightgreen"
  } else {
    btn_correspondiente[i].style.background = "pink"
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "lightgreen"
      break
    }
  }

let preguntas = [ 
  
  {
      "categoria": "Entretenimiento",
      "pregunta": " ¿De qué famosa película de Disney es el personaje Jafar?",
      "respuesta": "Aladdin",
      "incorrecta1": "Kroger",
      "incorrecta2": "El Rey León ",
      "incorrecta3": "Kris\r"
  },
 
  {
      "categoria": "Entretenimiento",
      "pregunta": "¿Cómo se llama el pájaro símbolo de los Juegos del Hambre?",
      "respuesta": "Sinsajo",
      "incorrecta1": "Lechuza ",
      "incorrecta2": "Gale",
      "incorrecta3": "Llamas\r"
  },
 

  {
      "categoria": "Entretenimiento",
      "pregunta": " ¿Cómo se llama el primer hijo de Goku de Dragon Ball?",
      "respuesta": "Gohan",
      "incorrecta1": "Goten ",
      "incorrecta2": "Trunks",
      "incorrecta3": "Vegetta\r"
  },
 
  {
      "categoria": "Entretenimiento",
      "pregunta": " ¿Cómo se llama la bebé de Los Simpsons?",
      "respuesta": "Maggie",
      "incorrecta1": "Marge",
      "incorrecta2": "Lisa",
      "incorrecta3": "Magi\r"
  },
  {
      "categoria": "Entretenimiento",
      "pregunta": " ¿Cómo se llama la princesa de Disney conocida como \"La Sirenita\"?",
      "respuesta": "Ariel ",
      "incorrecta1": "Aurora",
      "incorrecta2": "Estrella",
      "incorrecta3": "Mar\r"
  },
  {
      "categoria": "Geografía",
      "pregunta": "¿A qué país pertenece la isla de Tasmania?",
      "respuesta": "Australia",
      "incorrecta1": "Portugal",
      "incorrecta2": "Estados Unidos",
      "incorrecta3": "Ninguna Es Correcta\r"
  },
  {
      "categoria": "Geografía",
      "pregunta": "¿En cuál de los siguientes países NO hay ningún desierto?",
      "respuesta": "Alemania",
      "incorrecta1": "Mongolia",
      "incorrecta2": "Chile",
      "incorrecta3": "España\r"
  },

 
  {
      "categoria": "Geografía",
      "pregunta": "¿En qué país situarías la ciudad de Cali?",
      "respuesta": "Colombia",
      "incorrecta1": "Venezuela",
      "incorrecta2": "Costa Rica",
      "incorrecta3": "Chile\r"
  },
  {
      "categoria": "Geografía",
      "pregunta": "¿Cuál de estas características no pertenece al clima Mediterráneo?",
      "respuesta": "Lluvias Muy Abundantes",
      "incorrecta1": "Veranos Secos Y Calurosos",
      "incorrecta2": "Es Un Tipo De Clima Templado",
      "incorrecta3": "Variables Temperaturas En Primavera\r"
  },
  
  
  {
      "categoria": "Geografía",
      "pregunta": "¿Con cuántos países limita Argentina?",
      "respuesta": "5",
      "incorrecta1": "4",
      "incorrecta2": "3",
      "incorrecta3": "2\r"
  },
 
 
  {
      "categoria": "Historia",
      "pregunta": "¿Cuál es la ciudad más antigua de América Latina?",
      "respuesta": "Caral",
      "incorrecta1": "Valparaíso",
      "incorrecta2": "Arequipa",
      "incorrecta3": "La Paz\r"
  },
  {
      "categoria": "Historia",
      "pregunta": "¿Con qué emperador estuvo casada Cleopatra?",
      "respuesta": "Todas Son Correctas",
      "incorrecta1": "Ptolomeo XIV",
      "incorrecta2": "Julio César",
      "incorrecta3": "Marco Antonio\r"
  },
  
  {
      "categoria": "Historia",
      "pregunta": "El Renacimiento marcó el inicio de la Edad…",
      "respuesta": "Moderna",
      "incorrecta1": "Antigüedad Clásica",
      "incorrecta2": "Contemporánea",
      "incorrecta3": "Media\r"
  },
  {
      "categoria": "Historia",
      "pregunta": "¿Qué país fue dirigido por Stalin?",
      "respuesta": "Unión Soviética",
      "incorrecta1": "Cuba",
      "incorrecta2": "Alemania",
      "incorrecta3": "Polonia\r"
  },
  {
      "categoria": "Historia",
      "pregunta": "¿Qué se celebra el 8 de Marzo?",
      "respuesta": "El Día De La Mujer",
      "incorrecta1": "El Día Del Trabajo",
      "incorrecta2": "El Día Del Medio Ambiente",
      "incorrecta3": "El Día Del Niño\r"
  },
  
 
  {
      "categoria": "Ciencia y técnologia",
      "pregunta": "Músculos que se encargan de los movimientos involuntarios.",
      "respuesta": "Lisos",
      "incorrecta1": "Estriados",
      "incorrecta2": "Cardíacos",
      "incorrecta3": "Esqueléticos\r"
  },
  {
      "categoria": "Ciencia y técnologia",
      "pregunta": "Enfermedad que ataca al hígado.",
      "respuesta": "Hepatitis",
      "incorrecta1": "Renitis",
      "incorrecta2": "Bulimia",
      "incorrecta3": "Onicomicosis\r"
  },
  {
      "categoria": "Ciencia y técnologia",
      "pregunta": " Función principal del intestino grueso",
      "respuesta": "Absorción De Agua",
      "incorrecta1": "Producción De Insulina",
      "incorrecta2": "Producción De Glucógeno",
      "incorrecta3": "Producción Del Jugo Pancreático\r",
      "imagen": "https://i.ibb.co/pJ8q4JB/image.jpg"
  },
  
  {
      "categoria": "Ciencia y técnologia",
      "pregunta": "Cambio de sólido a gaseoso.",
      "respuesta": "Sublimación",
      "incorrecta1": "Cohesión",
      "incorrecta2": "Evaporación",
      "incorrecta3": "Condensación\r",
      "imagen": "https://i.ibb.co/6v4nGBq/Materia.jpg"
  },
  {
      "categoria": "Ciencia y técnologia",
      "pregunta": " Órgano del cuerpo humano produce la bilis.",
      "respuesta": "Hígado",
      "incorrecta1": "Páncreas",
      "incorrecta2": "Estomago",
      "incorrecta3": "Riñón\r",
    "imagen": "https://i.ibb.co/31Fhj8j/000.jpg"
  },
  
  
  {
      "categoria": "Química",
      "pregunta": "¿Cuál es la fórmula química del agua?",
      "respuesta": "H2O",
      "incorrecta1": "HO",
      "incorrecta2": "HO2",
      "incorrecta3": "Agu\r",
      "imagen": "https://i.ibb.co/g6kcqTK/thumbs-b-c-0970f11a6d81d650d9c47ea21f10a751.jpg"
  },
  {
      "categoria": "Química",
      "pregunta": "¿Cuál es el símbolo de Bromo?",
      "respuesta": "Br",
      "incorrecta1": "No Es Un Elemento, Es Un Compuesto",
      "incorrecta2": "B",
      "incorrecta3": "BH\r"
  },
 
  {
      "categoria": "Química",
      "pregunta": "¿Qué compuesto químico es el componente activo de los pimientos picantes?",
      "respuesta": "Capsaicina",
      "incorrecta1": "Celobiosa",
      "incorrecta2": "Galactosa",
      "incorrecta3": "Glucosa\r"
  },
  
  {
      "categoria": "Química",
      "pregunta": "¿Cuál es el símbolo del Sodio?",
      "respuesta": "Na",
      "incorrecta1": "Mn",
      "incorrecta2": "Li",
      "incorrecta3": "Au\r"
  },
  {
      "categoria": "Química",
      "pregunta": "¿Cuál es el nombre común del ácido ascórbico?",
      "respuesta": "Vitamina C",
      "incorrecta1": "Ácido Cítrico",
      "incorrecta2": "Vitamina B6",
      "incorrecta3": "Vitamina B12\r"
  }
 

]
