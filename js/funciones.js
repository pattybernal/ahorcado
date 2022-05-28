function id(str){
    return document.getElementById(str);
  }

  function obtener_random (num_min, num_max) {
    const amplitud_valores = num_max - num_min; //el valor mas alto menos el valor del random 
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min; //Math.floor elimina el decimal y siempre tira el entero hacia abajo para no pasarse del numero de palabras que tiene el array
    return valor_al_azar;
  }