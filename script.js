let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";


//Funcion que se activa cuando le damos al boton Si
document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML = "Pedro Sanchez te lo agradece con un besito UwU";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      var imagenCambiar = document.getElementById("pt");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "Tu veras pero Pedrito te perseguira";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("siBtn").innerHTML = "Cuidado con las patatas"

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML = "Pedro sad";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      var imagenCambiar = document.getElementById("p2");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "30px 50px";
      document.getElementById("siBtn").innerHTML = "Pero wenooo"

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML ="Piensalo bien";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      var imagenCambiar = document.getElementById("p1");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px";
      document.getElementById("siBtn").innerHTML = "Si, para salvar a pedro"

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "No sigas";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      var imagenCambiar = document.getElementById("p2");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px";
      document.getElementById("siBtn").innerHTML = "Si, para un pedro felix"

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML = "Pedro esta llorando";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("pt");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "80px";
      document.getElementById("siBtn").style.padding = "60px 80px";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "pedro morira";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("p1");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML = "pedrooooo";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      var imagenCambiar = document.getElementById("p2");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "80px 100px";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "paraaaa";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("pt");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "110px";
      document.getElementById("siBtn").style.padding = "90px 110px";

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML = "brother para";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("p1");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "100px 120px";

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML = "STOP";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      var imagenCambiar = document.getElementById("p2");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "130px";
      document.getElementById("siBtn").style.padding = "110px 130px";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML ="Piensatelo";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("pt");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      document.getElementById("siBtn").style.fontSize = "140px";
      document.getElementById("siBtn").style.padding = "120px 140px";

      noButtonState++;
      break;
    case 11:
      document.getElementById("noBtn").innerHTML = "nooo";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("p1");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      document.getElementById("siBtn").style.fontSize = "150px";
      document.getElementById("siBtn").style.padding = "130px 150px";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML ="respetaaa";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      var imagenCambiar = document.getElementById("p2");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "160px";
      document.getElementById("siBtn").style.padding = "140px 160px";

      noButtonState++;
      break;

    case 13:
      document.getElementById("noBtn").innerHTML ="heyyyy";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("pt");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      document.getElementById("siBtn").style.fontSize = "170px";
      document.getElementById("siBtn").style.padding = "150px 170px";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML = "Pedrooooo";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";

      var imagenCambiar = document.getElementById("p1");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "180px";
      document.getElementById("siBtn").style.padding = "160px 180px";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML ="Vengaaa";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      var imagenCambiar = document.getElementById("p2");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "200px";
      document.getElementById("siBtn").style.padding = "180px 200px";

      noButtonState++;
      break;

    case 16:
      document.getElementById("noBtn").innerHTML = "por favooooooor";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState = 0;
      break;

    default:
      // Por si acaso, maneja cualquier otro caso aquí
      break;
  }
});
