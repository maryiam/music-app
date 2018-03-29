import React from 'react';

class Track extends React.Component {
  convertDuration(millisec) {
    const minutes = Math.floor(millisec / 60000);
    const seconds = Math.floor((millisec % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  render() {
    const track = this.props.track;
    return (
      <li className='list-group-item'><a href={track.external_urls.spotify}>#. {track.name} </a><span className='badge'>{this.convertDuration(track.duration_ms)}</span></li>
    );
  }
}

export default Track;
