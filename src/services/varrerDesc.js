import React from "react";

export const varrerDesc = (inputDesc) => {
  var lista, pai, filho, i, p, txtValue

  lista = document.getElementById("listaDesc")    
  pai = document.querySelectorAll(".paiDesc")     
  filho = document.querySelectorAll(".filhoDesc") 

  for(i = 0; i < filho.length; i++) {         
    p = pai[i].textContent                    
    txtValue = p                              

    if(txtValue.indexOf(inputDesc) > -1) {       
      pai[i].style.display = ""              
    } else {  
      pai[i].style.display = "none"         
    }
  }
}