import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import ShowShelves from './ShowShelves'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    booksArray: []
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
    BooksAPI.update(book, targetShelf)
    BooksAPI.getAll().then((booksArray) => {
      this.setState({ booksArray })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowShelves booksOnShelf={this.state.booksArray} onMoveFromShelf={this.moveBook}>
            <ListBooks
              shelf="currentlyReading"
              onMoveBook={this.moveBook}
              books={this.state.booksArray}>
            </ListBooks>
            <ListBooks
              shelf="wantToRead"
              onMoveBook={this.moveBook}
              books={this.state.booksArray}>

            </ListBooks>
            <ListBooks
              shelf="read"
              onMoveBook={this.moveBook}
              books={this.state.booksArray}>

            </ListBooks>
          </ShowShelves>
        )} />
        <Route path="/search" render={() => (
            <SearchBooks
            books={this.state.booksArray}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
