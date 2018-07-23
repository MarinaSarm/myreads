import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ShowShelves extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onMoveFromShelf: PropTypes.func.isRequired
  }
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.props.children}
        </div>
        <div className="open-search">
          <Link
            to="/search"
            >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ShowShelves
