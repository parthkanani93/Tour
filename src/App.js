import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import LIST from './shared/list';
import './App.css';

function App() {
  

  const [video, setvideo] = useState("https://www.youtube.com/embed/LZFF8EuaGjM?start=4");




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
              LIST.map((list) =>
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
