import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';



const Books = () => {
    const navigation = useNavigation();
console.log(navigation.state);
if (navigation.state === "loading") {
  return <LoadingSpinner />;
}
    //  const booksData = useLoaderData();
     const  {books} = useLoaderData();
    //  console.log(booksData.books);
     console.log(books);
    
    return (
        <div className='my-container'>
        <div className='grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2'>
        
        {
            books.map(book => <Book key={book.isbn13} book={book}></Book>)
        }
        </div>
            
        </div>
    );
};

export default Books;