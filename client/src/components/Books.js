/*
Principal author: made by Parthkumar Patel
Sub: Faruk Sina Kaya
Sub: Tomoaki Morita 
Sub: Burak Akcal
*/

import React from 'react'
import { Container } from 'react-bootstrap';
import classes from "../layout/books.module.css"

export default function Books() {
    function handleBookName(){
        var bookText;
        var book= prompt("Please enter book name:", "How to get good grades");
        if (book === null || book === "") {
            bookText = "User cancelled the prompt.";
        } else {
            bookText = "You selected " + book + "Wanna review it?";
        }
        document.getElementById("book").innerHTML = bookText;
      }

    return (
        <Container className={`mt-3 ${classes.Container}`}>

        <h2>Book List</h2>
        <button onClick={handleBookName}>Review it</button>
        <p id="book"></p>
        <h1>Fan Book Review Form</h1>
        <hr />
       <form name="myForm" onSubmit={() => alert("hello")}>
         <h1>Book and Review</h1>
         <p>Fan Name:
           <input id="name" type="text" name="name" size="30" maxlength="250"/>
         </p>
         <p>Email:
           <input type="text" name="email" size="30" maxlength="50"/>
         </p>
         <p>Review (optional)</p>
         <textarea  name ="Address" className="form-control" id="exampleFormControlTextarea1" rows="3" cols="80"></textarea>
         <h1>Do you wish to receive regular emails for movies survey?</h1>
         <div className="form-group">
          <input
            type="submit"
            value="Create a Book"
            className="btn btn-primary"
          />
        </div>
         </form>
        </Container>
        
    )
}











     
