// Create web server
// Use Express.js
// Create a server that responds to the following requests:
// GET /comments - returns a list of comments
// POST /comments - create a new comment
// DELETE /comments - delete all comments

// comments.js
const express = require('express');
const app = express();
app.use(express.json());
const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

app.delete('/comments', (req, res) => {
  comments.length = 0;
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// To test the server, you can use curl or Postman. You can also use the following code to send a request to the server:
// const axios = require('axios');
// axios.get('http://localhost:3000/comments')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// axios.post('http://localhost:3000/comments', {