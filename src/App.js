import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { useState, useEffect } from "react";




function App() {

  const [topMovie, setTopMovie] = useState([]);

  const GetTopMovie = async () => {

  const temp = fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
    method: 'GET',
    headers: {
        'X-API-KEY': '18a36a7c-6691-4f21-addd-634100eb3a88',
        'Content-Type': 'application/json',
    },
})
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))
setTopMovie(temp.data.data.slice(0, 10));
};

useEffect(()=>{
  GetTopMovie();
},[]);

console.log(topMovie);
  return (
    <div className="App">
      <Header/> 
      {(topMovie.films || []).map((movie)=>(
        <Card
        title = {movie.nameRu}
        
        />
      ))}
      <Card/>
    </div>
  );
}

export default App;
