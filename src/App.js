import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    booksArray: [],
    showSearchPage: false
  }
  /**
  *grab books from BooksAPI
  */
  componentDidMount() {
    BooksAPI.getAll().then((booksArray) => {
      this.setState({ booksArray })
    })
  }
  moveBook = (book, event) => {
    const movedBook = this.state.booksArray.filter( (b) => b.id === book.id)
    const targetShelf = event.target.value
    if (targetShelf !== "none") {
      movedBook[0].shelf = targetShelf
      this.setState((state) => ({
        booksArray: (state.booksArray.filter( (b) => b.id !== book.id )).concat( movedBook )
      }))
    } else {
      this.setState((state) => ({
        booksArray: (state.booksArray.filter( (b) => b.id !== book.id ))
      }))
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                    <ListBooks
                      shelf="currentlyReading"
                      onMoveBook={this.moveBook}
                      books={this.state.booksArray} />
                    <ListBooks
                      shelf="wantToRead"
                      onMoveBook={this.moveBook}
                      books={this.state.booksArray} />
                    <ListBooks
                      shelf="read"
                      onMoveBook={this.moveBook}
                      books={this.state.booksArray} />
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
