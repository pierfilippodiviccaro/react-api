import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'
function App() {
 const [attori,setAttori] = useState([]);
 const [totale, setTotale] = useState(null);
const [totalePagine, setTotalePagine] =useState(null); 
  const [caricamento, setCaricamento] = useState(false);
  const [pagina, setPagina] = useState(1);

  useEffect(()=>{
    fetchAttori();
  },[pagina])

  function fetchAttori(){
    setCaricamento(true);
    axios
    .get('https://lanciweb.github.io/demo/api/actors/','https://lanciweb.github.io/demo/api/actresses/')
    .then((resp)=>{
      setAttori(resp.data.results)
      setTotale(resp.data.info.count)
      setTotalePagine(resp.data.info.pages)
      setCaricamento(false);
    }) 
  }

return (
    <>
      <div className="container">
        <h1>Actors</h1>
        <p>list of actors fetched from an api</p>
      </div>
    </>
  )
}

export default App
