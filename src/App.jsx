import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'

function App() {
  const [attori, setAttori] = useState([]);  
  const [caricamento, setCaricamento] = useState(false);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetchAttori();
  }, [pagina]);

  function fetchAttori() {
    setCaricamento(true);
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then((resp) => {
        console.log(resp.data); 
        setAttori(resp.data.results || resp.data || []);
        setCaricamento(false);
      })
  }

  return (
    <>
      <header>
        <h1>Actors</h1>
        <p>actors fetched from an api</p>
      </header>

      {caricamento ? (
        <p>Caricamento...</p>
      ) : (
        <div>
          {attori.length > 0 ? ( 
            attori.map((attore) => (
              <div className="col" key={attore.id}>  
                <Card attore={attore} /> 
              </div>
            ))
          ) : (
            <p>Nessun attore trovato</p>
          )}
        </div>
      )}

      <span>Pagina {pagina}</span>
    </>
  );
}

export default App;
