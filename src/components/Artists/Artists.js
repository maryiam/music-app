import React from 'react';
import SearchBar from '../Layout/SearchBar.js';
import { Link } from 'react-router-dom';

import Artist from './Artist';
import Pagination from '../Layout/Pagination';

import client from '../../http/client';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      currentPage: 0
    }
  }

  async searchArtists(text) {
    const artists = await client.get(`search/${text}`);
    this.setState({
      artists: artists.data.artists.items
    });
  }

  goToPage(position) {
    this.setState({
      currentPage: position
    });
  }

  previousPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }

  nextPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

  render() {
    const artistsPerPage = 5;
    const start = artistsPerPage * this.state.currentPage + this.state.currentPage;
    const end = start + artistsPerPage;
    const displayableItems = this.state.artists.slice(start, end);

    const artists = displayableItems.map(artist => <Artist key={artist.id} artist={artist} />)
    return (
      <div className='container'>
        <div className='container'>
          <div className='page-header'>
            <h1>Artistes</h1>
          </div>
          <SearchBar handleSearch={this.searchArtists.bind(this)} />
        </div>
        <div className='container artists'>
          {artists}
        </div>
        <Pagination
          itemsLength={this.state.artists.length}
          itemsPerPage={artistsPerPage}
          currentPage={this.state.currentPage}
          handlePreviousPage={this.previousPage.bind(this)}
          handleNextPage={this.nextPage.bind(this)}
          handleGoToPage={this.goToPage.bind(this)} />
      </div>
    );
  }
}

export default Artists;
