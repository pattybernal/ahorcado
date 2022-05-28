function validar() {
  console.log('ingresÓ palabra');
  nuevaPalabra.reset();
  return false;
}

function recibirPalabra(input) {
  let palabraNueva = input.value;
  const verificacion = new RegExp(/[^a-zA-Z]/);
  const comparacionMin = new RegExp(/[a-z]/);

      if(verificacion.test(palabraNueva)) {
          error.innerHTML = "Ingrese la palabra (únicamente  letras)";
          error.classList.add("mensaje-error");
      } else {
          if(comparacionMin.test(palabraNueva)) {
              error.innerHTML = "Solo letras en mayúsculas";
              error.classList.add("mensaje-error");
          } else {
              lista.push(palabraNueva);
              error.innerHTML = "¡Palabra agregada con éxito!";
              error.classList.add("mensaje-correcto");
              input.value = "";
          }
      }
  }



