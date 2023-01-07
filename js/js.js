// En este ejercicio vas a completar la función scramble, la cual recibirá dos strings, si con los caracteres del primer string puedas construir la palabra del primer string, debe retornar true, de lo contrario retorna false

// "rkqodlw"     y "world"       debe retornar true
// "scriptsjava" y "scriptsjava" debe retornar true
// "jscripts"    y "javascript"  debe retornar false

// OJO, el primer string debe contener la cantidad de letras necesarias para formar la palabra. Le puede sobrar, más no le puede faltar. Una misma letra no se puede usar más de una vez

// "scriptjavx" y "javascript" debe retornar false

// ya que, a pesar de que con las letras del string 1 se puede formar la palabra javascript, le esta faltando una "a".

// Parámetros
// str1 Es el primer string, el que contendrá los caracteres desordenados. Por ejemplo: rkqodlw
// str2 Es el segundo string, el que contendrá la palabra que debe formar str1. Por ejemplo: world


function scramble(str1, str2) {
    // Escribe tu código aquí
    let str1Array = str1.split('');
    let str2Array = str2.split('');
    let str2ArrayLength = str2Array.length;
    let str1ArrayLength = str1Array.length;
    let contador = 0;
    for (let i = 0; i < str2ArrayLength; i++) {
      for (let j = 0; j < str1ArrayLength; j++) {
        if (str2Array[i] === str1Array[j]) {
          contador++;
          str1Array.splice(j, 1);
          str1ArrayLength = str1Array.length;
          break;
        }
      }
    }
    if (contador === str2ArrayLength) {
      return true;
    } else {
      return false;
    }
  }

  console.log(scramble('rkqodlw', 'world'));
  console.log(scramble('scriptsjava', 'scriptsjava'));
  console.log(scramble('jscripts', 'javascript'));
  console.log(scramble('scriptjavx', 'javascript'));