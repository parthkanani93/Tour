import React ,{useState} from 'react';
import './App.css';

function App() {
  const list = [
    {
      id: 1,
      name: "Tajmahal",
      link: "https://www.youtube.com/embed/44rTTLjZZz4?start=10&end=476"
    },
    {
      id: 2,
      name: "Great Wall Chaina",
      link: "https://www.youtube.com/embed/EotbKqZmBuY?start=19&end=294"

    },
    {
      id: 3,
      name: "Christ the Redeemer Statue",
      link: "https://www.youtube.com/embed/hpoGtOfZoYY?start=0"
    },
    {
      id: 4,
      name: "Machu Picchu (Peru)",
      link: "https://www.youtube.com/embed/lNIEZ61PyG0?start=0"
    },
    {
      id: 5,
      name: "Chichen Itza (Yucatan Peninsula, Mexico)",
      link: "https://www.youtube.com/embed/0PqTqcGoS0w?start=0"

    }
  ]

  const [video,setvideo]=useState("")




  return (
    <div className="App">
      <div className="video-background">
        <div className="video-foreground">
          <iframe src={`${video}&version=3&controls=0&showinfo=0&rel=0&autoplay=1&loop=1`} allow="autoplay" frameBorder="0" allowFullScreen></iframe>


        </div>
      </div>

      <div id="vidtop-content">
        <div className="vid-info">
          <h1>Tour</h1>
          {list.map((list)=>
            <li onClick={()=>setvideo(list.link)} key={list.id}>{list.name}</li>
            
            
            )}

        </div>
      </div>

    </div>
  );
}

export default App;
