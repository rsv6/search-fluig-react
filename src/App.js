import { useEffect, useState } from 'react';
import './App.css';
import { varrer } from './services/varrer'
import datas from './data/data.json'

function App() {

  const [ input, setInput ] = useState("")
  const [ fluigs, setFluigs ] = useState([])

  useEffect(() => {
    setFluigs(datas)
  }, [])

  // const varrer = () => {
  //   var lista, pai, filho, i, p, txtValue

  //   lista = document.getElementById("lista")    // div id="lista"
  //   pai = document.querySelectorAll(".pai")     // a class="pai"
  //   filho = document.querySelectorAll(".filho") // p class="filho"

  //   for(i = 0; i < filho.length; i++) {         // iterable for length filho
  //     p = pai[i].textContent                    // get all textContent of the pai
  //     txtValue = p                              // add a variable txtValue

  //     if(txtValue.indexOf(input) > -1) {        // verify if value input exist
  //       pai[i].style.display = ""               // if exist show
  //     } else {  
  //       pai[i].style.display = "none"           // if not exist not show
  //     }
  //   }
  // }

  return (
    <div className="App">
      <br/>
      <input type="text" value={input} 
        onChange={e=>setInput(e.target.value)} 
        onKeyUp={varrer(input)}
        placeholder='Buscar fluig'
      />
      <hr/>

      <div id='lista' className='lista'>
        {fluigs.map(f => {
              return (
                <a key={f.num_fluig} href='#' className='pai'>
                  <p className='filho'>{f.num_fluig}</p>
                </a>
              )
          })
        }
      </div>
    </div>
  );
}

export default App;
