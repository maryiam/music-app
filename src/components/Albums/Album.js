import React from 'react';
import { Link } from 'react-router-dom';

function Album(props) {
  const images = props.album.images;
  const albumImg = images.find(image => image.height >= 300);
  const location = {
    pathname: `/tracks/${props.album.id}`,
    state: {
      image: images.find(image => image.height >= 600),
      album: props.album.name,
      artistName: props.artist.artistName,
      artistId: props.artist.artistId
     }
  }
  return (
    <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3'>
      <div className='thumbnail text-center'>
        <Link to={location}>
          <img src={albumImg ? albumImg.url : 'http://placehold.it/300x300'} alt={props.album.name} />
        </Link>
        <div className='caption'>
          <h4>{props.album.name}</h4>
        </div>
      </div>
    </div>
  );
}
export default Album;
