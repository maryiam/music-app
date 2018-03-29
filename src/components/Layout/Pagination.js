import React from 'react';

class Pagination extends React.Component {
  nextPage(pagesCount) {
    if (this.isLastPage(pagesCount)) {
      return;
    }

    this.props.handleNextPage();
  }

  previousPage() {
    if (this.isFirstPage()) {
      return;
    }

    this.props.handlePreviousPage();
  }

  isFirstPage () {
    return this.props.currentPage === 0;
  }

  isLastPage (pagesCount) {
    return this.props.currentPage + 1 >= pagesCount;
  }

  render() {
    const pages = [];
    const pagesCount = this.props.itemsLength < this.props.itemsPerPage ? 1 : Math.floor(this.props.itemsLength / this.props.itemsPerPage);

    for (let i = 0; i < pagesCount; i++) {
      pages.push(<li key={i}><a className={this.props.currentPage === i ? 'active' : ''}
        onClick={this.props.handleGoToPage.bind(this, i)}>{i + 1}</a></li>);
    }

    if (this.props.itemsLength === 0) {
      return (null);
    }

    return (
      <div className='container text-center'>
        <nav aria-label='Page navigation'>
          <ul className='pagination'>
            <li>
              <a aria-label='Previous' className={this.isFirstPage() ? 'disabled' : ''}
                onClick={this.previousPage.bind(this)}>
                <span aria-hidden='true'>&laquo;</span>
              </a>
            </li>
            {pages}
            <li>
              <a aria-label='Next' className={this.isLastPage(pagesCount) ? 'disabled' : ''}
                onClick={this.nextPage.bind(this, pagesCount)}>
                <span aria-hidden='true'>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
