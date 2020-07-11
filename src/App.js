import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
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
      link: "https://www.youtube.com/embed/lNIEZ61PyG0?start=6"
    },
    {
      id: 5,
      name: "Chichen Itza (Yucatan Peninsula, Mexico)",
      link: "https://www.youtube.com/embed/0PqTqcGoS0w?start=0"

    },
    {
      id: 6,
      name: "The Roman Colosseum (Rome)",
      link: "https://www.youtube.com/embed/1j2keKi-gcs?start=136"

    },
    {
      id: 7,
      name: "Petra (Jordan)",
      link: "https://www.youtube.com/embed/HCoyRrylVrg?start=7"

    },
    {
      id: 8,
      name: "Burj Khalifa",
      link: "https://www.youtube.com/embed/po4Y7mX8P2A?start=0"

    },
    {
      id: 9,
      name: "Bora Bora Iceland French Polynesia",
      link: "https://www.youtube.com/embed/O_9TgmIg1nA?start=6"

    },
    {
      id: 10,
      name: "Costa Rica",
      link: "https://www.youtube.com/embed/LXb3EKWsInQ?start=0&end=303"

    },
    {
      id: 11,
      name: "Pyramids of Giza, Egypt",
      link: "https://www.youtube.com/embed/Dtw2vfKihXA?start=10"

    }
  ]

  const [video, setvideo] = useState("https://www.youtube.com/embed/LZFF8EuaGjM?start=4")




  return (
    <div className="App">
      <div className="video-background">
        <div className="video-foreground">
          <iframe title="Tour" src={`${video}&version=3&controls=0&showinfo=0&rel=0&autoplay=1&loop=1`} allow="autoplay" frameBorder="0" allowFullScreen></iframe>


        </div>
      </div>

      <div id="vidtop-content" >
      
        <div className="vid-info mt-2 mr-2" style={{borderRadius: 20}} >
        <h1>Tour</h1>
        <h5 ><a style={{width : "30%" , backgroundColor : "red",borderRadius: 20}} href="https://github.com/parthkanani93" rel="noopener noreferrer" target="_blank">Follow Me</a></h5>
          
          <ListGroup className="mt-5" >

            {
              list.map((list) =>
                <ListGroupItem style={{width : "70%",borderRadius: 20  }} className="mt-0" onClick={() => setvideo(list.link)} key={list.id} tag="a" href="#" action >
                  {list.name}
                </ListGroupItem>

              )
            }
          </ListGroup>
        </div>
      </div>

    </div>
  );
}

export default App;
