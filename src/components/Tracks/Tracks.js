import React from 'react';
import client from '../../http/client';
import Track from './Track';
import Breadcrumb from '../Layout/Breadcrumb';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }

  async componentWillMount() {
    const id = this.props.match.params.id;
    const tracks = await client.get(`album/${id}`);
    this.setState({
      tracks: tracks.data.items
    });
  }

  render() {
    const info = this.props.location.state;
    const tracks = this.state.tracks.map(track => <Track key={track.id} track={track} />);
    const previousHeaderItems = [
      {
        title: info.artistName,
        path: `/albums/${info.artistId}`,
        state: {
          artistName: info.artistName,
          artistId: info.artistId
        }
      }
    ];
    return (
      <div className='container'>
        <Breadcrumb title={info.album} previous={previousHeaderItems} />
        <div className='page-header'>
          <h1>Pistes</h1>
          <h2>{info.artistName} - {info.album}</h2>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6 col-lg-6'>
            <img src={info.image ? info.image.url : 'http://placehold.it/640x640'} className='thumbnail img-responsive' alt={info.album} />
          </div>
          <div className='col-xs-12 col-md-6 col-lg-6'>
            <ul className='list-group'>
              {tracks}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracks;
