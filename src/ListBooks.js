import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookDisplay from './BookDisplay'

class ListBooks extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }
  render() {
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            {this.props.shelf === "currentlyReading" && "Currently Reading"}
            {this.props.shelf === "wantToRead" && "Want to Read"}
            {this.props.shelf === "read" && "Read"}
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.filter((book) => book.shelf === this.props.shelf).map((book) => (
                <li key={book.id}>
                  <BookDisplay
                  shelf={book.shelf}
                  onMoveBookThis={this.props.onMoveBook}
                  books={this.props.books}
                  book={book}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default ListBooks
