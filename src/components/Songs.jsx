

import Card from 'react-bootstrap/Card';

function Songs({ filteredData }) {

   

   return (
      <div className='bg-gray-300'>
         <h1 className='text-5xl text-center py-5 font-bold'>Songs</h1>
      <div className='flex gap-5 flex-wrap justify-center py-10 '> 
            {filteredData.map(song => (
            <Card key={song.title} style={{ width: '18rem', margin: '10px' }} className='hover:shadow-md hover:scale-110 transition'>
               <Card.Img variant="top" src={song.img_src} alt={song.title} />
               <Card.Body>
                  <Card.Title>{song.title}</Card.Title>
                  <Card.Text>
                     Artist: {song.artist}<br />
                     Album: {song.album}<br />

                  </Card.Text>
                 <audio src={song.src} controls className='w-full'></audio>
               </Card.Body>
            </Card>
         ))}
         </div>
      </div>
   );
}

export default Songs;
