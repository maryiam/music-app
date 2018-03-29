import React from 'react';
import { Link } from 'react-router-dom';

function Artist(props) {
  const images = props.artist.images;
  const artistImg = images[images.length - 1];
  const location = {
    pathname: `/albums/${props.artist.id}`,
    state: {
      artistName: props.artist.name,
      artistId: props.artist.id
    }
  }
  return (
    <div className='media'>
      <div className='media-left'>
        <Link to={location}>
          <img className='media-object artist-img' src={artistImg ? artistImg.url : 'http://placehold.it/64x64'} alt='*' />
        </Link>
      </div>
      <div className='media-body'>
        <h4 className='media-heading'>{props.artist.name}</h4>
        <p className='artist-genre'>{props.artist.genres.join(',')}</p>
      </div>
    </div>
  );
}

export default Artist;
