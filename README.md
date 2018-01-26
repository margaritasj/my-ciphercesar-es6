# CIFRADO CESAR #

* **Track:** _Especialización Front-end._
* **Alumna:** _Margarita Sutta Juarez._

***

>Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha
>>Por ejemplo:
>>>Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
>>>Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
>Consideraciones Específicas

>>Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números.

***

## PSEUDOCODIGO ##

funcion cipher 
    variable cadena = document.getElementById("entrada").value
      
    array caracteres = []; //creamos un array 
    array caracteresCipher =[];
      si(cadena.length > 0){
          alerta('Ingrese su texto porfavor');
      }
  	    para ( i = 0; i < cadena.length; i++){ 
            caracteres[i] = cadena.charAt(i).charCodeAt(0);         
        }
        para ( n = 0; n < caracteres.length; n++){
            var cipherNumber = (caracteres[n]  - 65 + 33) % 26 + 65
            caracteresCipher.push(String.fromCharCode(cipherNumber))
        }
}

funcion decipher{
    variable cadena = document.getElementById("entrada").value;       
    variable caracteres = cadena.split(',');
  	    para ( i = 0; i < cadena; i++){
    	    caracteres[i] = String.fromCharCode(caracteres[i]);//// El array caracteres almacenara los caracteres con el método devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
  	    }  
}

***

## HERRAMIENTAS UTILIZADAS ##

- HTML5.

- CSS3.

- ES6.

- jQuery.

- Bootstrap v4.

## EXTRA ##
[Link de repositorio con ES5](https://github.com/margb13/My-CipherCesar)
