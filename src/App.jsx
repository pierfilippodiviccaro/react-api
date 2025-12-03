import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
 const [attori,setAttori] = useState([]);
 const [totale, setTotale] = useState(null);
const [totalePagine, setTotalePagine] =useState(null); 
  const [caricamento, setCaricamento] = useState(false);
  const [pagina, setPagina] = useState(1);

  useEffect(()=>{
    fetchAttori();
  },[page])

  function fetchAttori(){
    setCaricamento(true);
    axios
    .get
  }

return (
    <>
      
    </>
  )
}

export default App
