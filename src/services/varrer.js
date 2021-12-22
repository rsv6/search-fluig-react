import React from "react";


// apenas para subir o git
export const varrer = (input) => {
  var lista, pai, filho, i, p, txtValue, 

  lista = document.getElementById("lista")    
  pai = document.querySelectorAll(".pai")     
  filho = document.querySelectorAll(".filho") 


  for(i = 0; i < filho.length; i++) {        
    p = pai[i].textContent                    
    txtValue = p                           

    if(txtValue.indexOf(input) > -1) {        
      pai[i].style.display = ""              
    } else {  
      pai[i].style.display = "none"           
    }
  }
}