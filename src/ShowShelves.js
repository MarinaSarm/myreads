import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class ShowShelves extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
  }
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
                <ListBooks
                  shelf="currentlyReading"
                  onMoveBook={this.props.onMoveFromShelf}
                  books={this.props.booksOnShelf} />
                <ListBooks
                  shelf="wantToRead"
                  onMoveBook={this.props.onMoveFromShelf}
                  books={this.props.booksOnShelf} />
                <ListBooks
                  shelf="read"
                  onMoveBook={this.props.onMoveFromShelf}
                  books={this.props.booksOnShelf} />
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ShowShelves
