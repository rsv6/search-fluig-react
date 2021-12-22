import React from "react";


// apenas para subir o git
export const varrer = (input) => {
  var lista, pai, filho, i, p, txtValue

  lista = document.getElementById("lista")    // div id="lista"
  pai = document.querySelectorAll(".pai")     // a class="pai"
  filho = document.querySelectorAll(".filho") // p class="filho"

  for(i = 0; i < filho.length; i++) {         // iterable for length filho
    p = pai[i].textContent                    // get all textContent of the pai
    txtValue = p                              // add a variable txtValue

    if(txtValue.indexOf(input) > -1) {        // verify if value input exist
      pai[i].style.display = ""               // if exist show
    } else {  
      pai[i].style.display = "none"           // if not exist not show
    }
  }
}