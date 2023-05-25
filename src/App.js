// import { element } from 'prop-types';
import './App.css';
import Header from './components2/Header';
import Movie from './components2/Movie';
import MovieData from './components2/movieData.json'
function App() {
  return (
    <div className="App">
    <Header/>
    <div className="main">
    { 
      MovieData.map((element,index)=>{
        return(
          <Movie 
          img = {element.Poster}
          title={element.Title} 
          Year = {element.Year} 
          />
        )
      })

    }
    </div>
    </div>
  );
}

export default App;
