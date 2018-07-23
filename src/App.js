import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import ShowShelves from './ShowShelves'

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

          <SearchBooks />

          <ShowShelves booksOnShelf={this.state.booksArray} onMoveFromShelf={this.moveBook}/>

      </div>
    )
  }
}

export default BooksApp
