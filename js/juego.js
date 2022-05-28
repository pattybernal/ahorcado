let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas veces acerté

const palabras = [
  'rinoceronte', 'programar', 'oruga', 'alcaravan', 'cachalote', 'zancudo', 'serpiente', 'ornitorrinco', 'teclado', 'tecnologia', 
  'microfono', 'impresora', 'parlantes', 'trebol', 'planta', 'eucalipto', 'anturio', 'triciclo', 'vehículo', 'motocicleta', 'patineta', 
  'avion', 'locomotora', 'camion', 'java', 'programacion', 'javascript', 'html', 'mango', 'funciones', 'codigo', 'batman',
  'superheroe', 'escritorio', 'supermam', 'equilibrado', 'inteligente', 'amable', 'malgeniado', 'portugues', 'idioma', 'mandarin',
  'aleman', 'arabe', 'coreano', 'ajedrez', 'juego', 'domino', 'ahorcado', 'bielorrusia', 'pais', 'filipinas', 'vietnam', 'arroz', 
  'alimento', 'chorizo', 'hamburguesa', 'chocolate', 'galletas', 'anteojos', 'diccionario', 'libreta', 'papaya',
  'error', 'genetica', 'oracion', 'juventud'  
  ];

const btn = id('btnJugar');
const imagen = id('imagen');
const btn_letras = document.querySelectorAll('#letras button');

/* INICIAR JUEGO */
btn.addEventListener('click', iniciar);

function iniciar(event){
    id('resultado').innerHTML = '';  //para desaparecer el alert al iniciar otro juego el juego
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;

    const parrafo = id('adivinarPalabra');
    parrafo.innerHTML= " ";    /*para vaciar el parrafo y generar un nuevo span*/
    
    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random (0, cant_palabras); 

    palabrita = palabras[valor_al_azar];
    console.log(palabrita);
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
      btn_letras[ i ].disabled = false;
    }
   
    for( let i = 0; i < cant_letras; i++) {
      const span = document.createElement( 'span' );
      parrafo.appendChild(span);
    }  
}
 
/*ADIVINAR PALABRA */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#adivinarPalabra span' );
    const button = event.target;  //cuál de todas las letras llamó  la función.
    button.disabled = true;

    const letra = button.innerHTML.toUpperCase( );
    const palabra = palabrita.toUpperCase( );   //o toLowerCase() , depende el caso

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ) {
        if( letra == palabra[i] ) {    //la variable i es la posición de la letra en la palabra
                                       //que coincide con el span al que tenemos que mostarle esta letra...
          spans[i].innerHTML = letra;
          cant_aciertos++;
          acerto = true;
        } 
    }

    if( acerto == false ){
        cant_errores++;
        const source = `img/img${cant_errores}.png`;
        const imagen = id('imagen');
        imagen.src = source;
    }

    if(  cant_errores == 10) {
      id('resultado').innerHTML = " Perdiste, la palabra era " + palabrita;
      game_over();

    } else if (cant_aciertos == palabrita.length){
      imagen.src = 'img/ganador.png';
      id('resultado').innerHTML += "<p>!!! GANASTE ¡¡¡</p>" 
      game_over();
    }

    /*console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );  */
}

/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btn.disabled = false;
}

game_over( );

