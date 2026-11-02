import React from "react";

function Navbar() {
  return (
    <nav>
      <h2>Library Management System</h2>
      <a href="/">Home</a> | 
      <a href="/books"> Books</a>
    </nav>
  );
}

function BookList() {
  const books = [
    "Java Programming",
    "Python Programming",
    "Web Development",
    "Data Structures",
    "Artificial Intelligence"
  ];

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;