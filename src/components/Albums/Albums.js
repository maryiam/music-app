import React from 'react';
import { Link } from 'react-router-dom';
import client from '../../http/client';
import Album from './Album';
import Breadcrumb from '../Layout/Breadcrumb';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  async componentWillMount() {
    const id = this.props.match.params.id;
    const albums = await client.get(`artist/${id}`);

    this.setState({
      albums: albums.data.items
    });
  }
  render() {
    const artist = this.props.location.state;
    const albums = this.state.albums.map(album => <Album key={album.id} album={album} artist={artist} />);
    return (
      <div className='container'>
        <Breadcrumb title={artist.artistName} />
        <div className='page-header'>
          <h1>Albums</h1>
          <h2>{artist.artistName}</h2>
        </div>
        <div className='container albums'>
          <div className='row'>
            {albums}
          </div>
        </div>
      </div>
    );
  }
}
export default Albums;
