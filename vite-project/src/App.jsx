import { useEffect, useState } from 'react'
import { handleFetch } from './utils.js';
import { API_ID, API_KEY } from './config.js'
import NavBar from './components/NavBar.jsx';
import './App.css'
import HomePage from './components/HomePage.jsx';


function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await handleFetch(`https://api.edamam.com/api/recipes/v2/?type=public&app_id=${API_ID}&app_key=%20${API_KEY}`)
      if (data) setData(data)
      if (error) setError(error.message)
    }
  fetchData();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      <NavBar color='black' title="Nourish" />
      <HomePage />
      <div className="ui container"></div>
    </div>
  );
}

export default App;