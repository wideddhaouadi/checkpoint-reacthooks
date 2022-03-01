
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Movielist from './components/Movielist';
import React ,{useState} from 'react';
import Modal from './components/Modal';
import Addmovie from './components/Modal';

function App() {

const[films, setfilms] = useState([ 
  
   {
     
    img: "https://www.movies.ch/db_data/movies/lordoftherings/artwrk/ki_l/poster2.jpg",
    name: 'lord of the ring 1',
     realisateur :'Peter Jackson',
     acteur:'Elijah Wood, Viggo Mortensen, Orlando Bloom',
     rating:4,
     link:'https://fr.wikipedia.org/wiki/Le_Seigneur_des_anneaux#Films'
     
   },
   {
     
    img:"https://upload.wikimedia.org/wikipedia/en/2/2c/Twotowersbox1.jpg" ,
    name: 'lord of the ring 2',
     realisateur :'Peter Jackson',
     acteur:'Elijah Wood, Viggo Mortensen, Orlando Bloom',
     rating:3,
     link:'https://fr.wikipedia.org/wiki/Le_Seigneur_des_anneaux#Films'
     
   },
   {
     
    img:"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" ,
    name: 'lord of the ring 3',
     realisateur :'Peter Jackson',
     acteur:'Elijah Wood, Viggo Mortensen, Orlando Bloom',
     rating:4,
     link:'https://fr.wikipedia.org/wiki/Le_Seigneur_des_anneaux#Films'
     
   },
   {
     
    img:"https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-670x1024.jpg",
    name: 'THE HOBBIT UNEXPECTED JOURNEY ',
     realisateur :'Peter Jackson',
     acteur:'Martin Freeman,  McKellen',
     rating:5,
     link:'https://fr.wikipedia.org/wiki/Le_Hobbit_:_Un_voyage_inattendu'
     
   },
   {
     
    img: "https://www.filmspourenfants.net/wp-content/uploads/2018/07/paddington-a-349x500.jpg" ,
    name: 'PADDINGTON1 ',
     realisateur :'Paul King',
     acteur:'Hugh Bonneville,  Nicole Kidman ',
     rating:2,
     link:'https://fr.wikipedia.org/wiki/Paddington_(film)'
     
   },
   {
     
    img:"https://media.services.cinergy.ch/media/box1600/cf6b5fb29f0a27dbde7806f407206aa431dd8d63.jpg" ,
    name: 'PADDINGTON2 ',
     realisateur :'Paul King',
     acteur:'Hugh Bonneville,  Nicole Kidman ',
     rating:2,
     link:'https://fr.wikipedia.org/wiki/Paddington_(film)'
     
   }
  
  
  
  
  
  
  
  ])
  const [searchtitle, setsearchtitle] = useState("")
  function serch(ch) {
    setsearchtitle(ch)
  }
  const addnewmovie=(x)=>{
    setfilms([...films,x])
  
  }
  return (
    <div className="App">
     
     <Header serch={serch}/>
     <Addmovie addnewmovie={addnewmovie}/>
     <Movielist films={films.filter((el) => el.name.toUpperCase().includes(searchtitle.toUpperCase().trim()))}/>
    </div>
  );
}

export default App 
