import React from "react";

class BookShelf extends React.Component {
  state = {};

  render() {
  /* display the book int he right shelf*/
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.shelfTitle}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book)=>(book.imageLinks)).map(book =>
              <li key={book.id} className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                    }}
                  />
                  <div className="book-shelf-changer">
              		{/*On change pass the book id and event*/}
                    <select value={book.shelf} onChange={event => this.props.updateShelf(book.id, event)}>
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
            	{/*Disply the book title and author*/}
                <div className="book-title">
                  {book.title}
                </div>
                <div className="book-authors">
                  {book.authors &&
                    <div className="book-authors">
                      {book.authors[0]}
                    </div>}
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;