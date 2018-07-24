import React, { Component } from 'react'

class BookDisplay extends Component {
  render() {
    let thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''
    let author = this.props.book.authors ? this.props.book.authors : []
    let titles = this.props.book.title ? this.props.book.title : ''
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.props.onMoveBookThis(this.props.book, event)} value={this.props.shelf}>
              <option value="move" disabled>Move to...{this.props.shelf}</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{titles}</div>
        <div className="book-authors">{author.join(', ')}</div>
      </div>
    )
  }
}

export default BookDisplay
