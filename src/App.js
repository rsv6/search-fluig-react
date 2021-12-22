import { useEffect, useState } from 'react';
import './App.css';
import { varrer } from './services/varrer'
import { varrerDesc } from './services/varrerDesc';
import datas from './data/data.json'

function App() {

  const [ input, setInput ] = useState("")
  const [ fluigs, setFluigs ] = useState([])
  
  const [ inputDesc, setInputDesc ] = useState("")
  const [ desc, setDesc] = useState([])

  useEffect(() => {
    setFluigs(datas)
  }, [])

  useEffect(() => {
    setDesc(fluigs.map(f=>f.desc_fluig))
  },[fluigs])

  return (
    <div className="App principal">
      <br/>
        <input type="text" value={input} 
          onChange={e=>setInput(e.target.value)} 
          onKeyUp={varrer(input)}
          placeholder='Buscar pelo numero ou descricao fluig'
          size={50}
        />
      <hr/>
      <div className='block-principal'>

        <div className='num_fluig'>
          <div id='lista' className='lista'>
            {fluigs.map(f => {
                return (
                  <a key={f.num_fluig} href='#' className='pai'>
                    <p className='filho'>{f.num_fluig} - {f.desc_fluig}</p>
                  </a>
                )
              })
            }
          </div>
        </div>
        {/* <div className='desc_fluig'>
          <div id='listaDesc' className='listaDesc'>
            {desc.map((d, index) => {
                return (
                  <a key={index} href='#' className='paiDesc'>
                    <p className='filhoDesc'>{d}</p>
                  </a>
                )
              })
            }
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
