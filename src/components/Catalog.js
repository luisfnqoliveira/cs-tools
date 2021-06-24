import React from 'react';

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

export function Catalog(props) {
  const [location, setLocation] = React.useState();
  const [level, setLevel] = React.useState();
  const [position, setPosition] = React.useState();
  const [bin, setBin] = React.useState();

  // when modal open
  React.useEffect(() => {
    // console.log("catalog use effect")
    if (props.show) {
      const books = getStoredBooks();
      const found = books.find(book => book.name === props.query);
      if (found) {
        setLocation(found.location);
        setLevel(found.level);
        setPosition(found.position);
        setBin(found.bin);
      }
    }
    props.onHide();
  }, [props.show, props.query, props.numOfBins]);

  return (
    <pre>
      <u>Book Name</u>: {props.query}{"\n"}
      <u>Location</u>: {location === 0 ? 'storage' : location === 1 ? 'bookshelf' : ''}{"\n"}
      <div style={{ display: location === 0 ? 'block' : 'none'}}><u>Storage Bin</u>: {bin} </div>
      <div style={{ display: location === 1 ? 'block' : 'none'}}><u>Level</u>: {level} </div> 
      <div style={{ display: location === 1 ? 'block' : 'none'}}><u>Position</u>: {position}</div>
    </pre>
  );
}