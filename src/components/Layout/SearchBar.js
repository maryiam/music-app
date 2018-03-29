import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.state.searchText;
    if (!value) {
      return;
    }
    this.props.handleSearch(value);
  }

  detectChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>Rechercher un artiste Spotify</div>
        <div className='panel-body'>
          <form className='form-inline'>
            <div className='form-group'>
              <input type='search' className='form-control' placeholder='Mot(s)-clé(s)' value={this.state.searchText} onChange={this.detectChange.bind(this)} />
            </div>
            <button type='submit' className='btn btn-primary' onClick={this.onSubmit.bind(this)}>Chercher</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
