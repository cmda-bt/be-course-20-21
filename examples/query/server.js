const express = require('express')

const app = express()
const port = 1234

app.get('/', index);
app.get('/file/:type', file);

function index(req, res) {
  res.send('Hello Query!');
}

/* Part of the live demo below 👇 */
function file(req, res) {
  console.log(req.params);
  if(req.params.type === 'mp3') {
    console.log('Send .mp3 file!')
  } else if (req.params.type === 'image') {
    console.log('Send doggo picture. Much doggo!')
  } else {
    console.log(req.params.type);
  }
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
