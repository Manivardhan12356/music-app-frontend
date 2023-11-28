import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DarkVariantExample() {
   const [songs, setSongs] = useState([]);

   useEffect(() => {
      // Make a GET request to your Flask API
      axios.get('https://python-songs-api.onrender.com')
         .then(response => {
            console.log(response.data)
            setSongs(response.data);
         })
         .catch(error => {
            console.error('Error fetching data:', error);
         });
   }, []); // Empty dependency array ensures the effect runs once on mount

   return (
      <Carousel data-bs-theme="dark">
         {
            songs.map((song) => (
               <Carousel.Item>
                  <img
                     className="d-block w-1/2 h-1/2"
                     src={song.img_src}
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h5>First slide label</h5>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
               </Carousel.Item>
           ))
         }
      </Carousel>
   );
}

export default DarkVariantExample;