import React from "react";
import { Routes , Route , Link } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import Age from "./Age.js";
import MyComponent from "./click.js";
import Form  from "./form.js";
import State from "./state.js";
import BookList from "./BookList.js";
import NotFound from "./NotFound.js";

function App() {
  return (
   <>
      <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/book">Book</Link></li>
      <li><Link to="/age">Age Calculator</Link></li>
      <li><Link to="/form">Form</Link></li>   
      <li><Link to="/mycomp">Click</Link></li>   
      <li><Link to="/state">State</Link></li>
      <li><Link to="/booklist/:id">Booklist</Link></li>
      <li><Link to="/booklist/new">BooksList New</Link></li>
      </ul>
   <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/book" element={<Books />}/>
      <Route path="/booklist/:id" element={<BookList />}/>
      <Route path="/booklist/new" element={<Books />}/>
      <Route path="/age" element={<Age />}/>
      <Route path="/form" element={<Form />}/>
      <Route path="/mycomp" element={<MyComponent />}/>
      <Route path="/state" element={<State />}/>
      <Route path='*' element={<NotFound />}/>
      </Routes>
   </>
  );
}

export default App;
