import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }
  render() {
    console.log(this.props.books)
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
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select onChange={(event) => this.props.onMoveBook(book, event)} value={this.shelf}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors.join(', ')}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default ListBooks
