// Las funciones flecha siempre son anónimas.
window.addEventListener('load', () => {
  // Declaracion de variables
  let resultado = document.getElementById('resultado');
  let cifrado = document.getElementById('btn-cifrado');
  let descifrado = document.getElementById('btn-descifrado');

  // validacion del input
  let validate = (cadena) => {
    let alerta = true;
    if (cadena.length === 0) {
      document.getElementById('resultado').innerHTML = '';
      alerta = 'Error. el campo esta vacio';
    } else if (!isNaN(cadena)) {
      document.getElementById('resultado').innerHTML = '';
      alerta = 'Error. el campo solo acepta texto';
    }
    return alerta;
  };

  // Funcion para cifrar
  let cipher = () => {
    // Obtener el valor de lo que ingresa el usuario input type=text
    let cadena = document.getElementById('txt-input').value;

    let valid = validate(cadena);
    if (valid !== true) {
      alert(valid);
      return;
    }
    // creamos un array
    let caracteres = [];
    let caracteresCipher = [];
    // Recorrer la cadena que es el texto ingresado por el usuario
    for (let i = 0; i < cadena.length; i++) {
      // El array caracteres almacenara los caracteres especificado de una cadena
      caracteres[i] = cadena.charAt(i).charCodeAt(0);
      // Junto con el metodo charCodeAt la cual devuelve un numero indicando el valor Unicode del caracter en el ndice proporcionado.
    }
    for (let n = 0; n < caracteres.length; n++) {

      let cipherNumber = (caracteres[n] - 65 + 33) % 26 + 65;
      // El array caracteres almacenara los caracteres con el metodo devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
      caracteresCipher.push(String.fromCharCode(cipherNumber));

      console.log(cipherNumber);
    }

    console.log(caracteresCipher.join(''));
    // Esta propiedad devuelve la sintaxis HTML (resultado) de mi array caracteres.
    resultado.innerHTML = caracteresCipher.join('');
    // document.getElementById('txt-input').value = '';
  };
  console.log(cipher);

  let decipher = () => {
    // Obtener el valor de lo que ingresa el usuario input type=text
    let cadena = document.getElementById('txt-input').value;

    let valid = validate(cadena);
    if (valid !== true) {
      alert(valid);
      return;
    }
    // dividira cadena con una separacion de coma la cual resultara mi variable caracteres
    let caracteres = cadena.split(',');
    for (let i = 0; i < cadena; i++) {
      // El array caracteres almacenara cadena creada mediante el uso de una secuencia de val Unicode especificada.
      caracteres[i] = String.fromCharCode(caracteres[i]);
    }
    // Esta propiedad devuelve la sintaxis HTML (resultado) de mi array caracteres.
    resultado.innerHTML = caracteres.toString();
  };
  console.log(decipher);

  cifrado.addEventListener('click', event => {
    event.preventDefault();
    cipher();
  });
  descifrado.addEventListener('click', event => {
    event.preventDefault();
    decipher();
  });
});