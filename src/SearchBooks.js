import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookDisplay from './BookDisplay'

class SearchBooks extends Component {
  state = {
    query: '',
    booksSearch: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if (query) {
      BooksAPI.search(query).then((booksSearch) => this.setState({booksSearch: booksSearch}))
    } else {

    }this.setState({booksSearch: []})
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.booksSearch.length > 0 &&
          this.state.booksSearch.map((book) => {
            let shelfOfBook="none"
            this.props.books.map((b) => {
              if (b.id === book.id) {
                shelfOfBook = b.shelf
              }
              return shelfOfBook
            })
            this.props.updateShelf(book, shelfOfBook)
            return (
              <li key={book.id}>
                <BookDisplay
                shelf={shelfOfBook}
                onMoveBookThis={this.props.onMoveFromShelf}
                book={book}
                books={this.props.books}/>
              </li>
            )
          })}
          {this.state.booksSearch.length === 0 && <div>No matches</div>}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
