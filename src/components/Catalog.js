import { message } from 'antd';
import React from 'react';
import { Modal, Button } from 'antd';

const STORED_BOOK_KEY = 'STORED_BOOK_KEY';

function getStoredBooks() {
  try {
    const retrievedBooksString = localStorage.getItem(STORED_BOOK_KEY);
    if (!retrievedBooksString) {
      localStorage.setItem(STORED_BOOK_KEY, "[]")
      return [];
    }
    return JSON.parse(retrievedBooksString);
  }
  catch (err) {
    localStorage.setItem(STORED_BOOK_KEY, '[]');
    return [];
  }
}

// getting a random integer between two values inclusively
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function storeBook(name, numOfBins) {
  console.log('storing book', name);
  const storedBooks = getStoredBooks();
  const found = storedBooks.find(book => {
    return book.name === name;
  })
  if (found) {
    sessionStorage.setItem(STORED_BOOK_KEY, name);
  } else {
    // store the book
    var uniqid = require('uniqid');
    const bookObj = {
      code: uniqid(),
      name: name,
      location: 0,
      bin: getRandomIntInclusive(1, numOfBins),  // store to bin randomly
      level: 0,
      position: 0,
      created_date: 0,
      frequency: 0,
      last_borrowed: 0,
    };
    storedBooks.push(bookObj);
    const storedBooksJson = JSON.stringify(storedBooks);
    localStorage.setItem(STORED_BOOK_KEY, storedBooksJson);
  }
}


export function Catalog(props) {
  const [location, setLocation] = React.useState();
  const [level, setLevel] = React.useState();
  const [position, setPosition] = React.useState();
  const [bin, setBin] = React.useState();

  // when modal open
  React.useEffect(() => {
    if (props.show) {
      storeBook(props.query, props.numOfBins);
      const books = getStoredBooks();
      const found = books.find(book => book.name === props.query);
      if (found) {
        setLocation(found.location);
        setLevel(found.level);
        setPosition(found.position);
        setBin(found.bin);
      }
    }
  }, [props.show, props.query, props.numOfBins]);

  return (
    <pre>
      <u>Book Name</u>: {props.query}{"\n"}
      <u>Location</u>: {location === 0 ? 'storage' : location === 1 ? 'bookshelf' : ''}{"\n"}
      <u>Storage Bin</u>: {bin} {"\n"}
      <u>Level</u>: {level} {"\n"}
      <u>Position</u>: {position} {"\n"}
      {"\n"}
      <Button type="primary" onClick={() => {
        //props.onHide();
        if (location === 0) {
          message.info("Please switch to the Librarian role on the Upper Right Corner to move " + props.query + " from storage bin to bookshelf.");
        }
        else if (location === 1) {
          message.info("You can now retrieve the book on level " + level + " and position " + position);
          message.warn("Please double click on the book to retrieve");
        }
      }}>Retrieve this Book</Button>
    </pre>
  );
}