const express = require('express')

const app = express()
const port = 1234

/* 1. Set the templating engine👇 */
app.set('view engine', 'ejs')
app.set('views', 'view')

app.get('/', index);
app.get('/rappers', rappers);

function index(req, res) {
  res.send('Hello Templating!');
}

/* 2. Send the data with the template 👇 */
function rappers(req, res) {
  res.render('rappers', {data: data}) 
}

/* 3. List of rappers as an array of objects 👇 */

const data = [
  {
    name: 'Famke Louise',
    biography: 'Famke Louise Meijer (Amsterdam, 9 december 1998), bekend onder haar artiestennaam Famke Louise, is een Nederlands vlogger, model en zangeres.',
    instagram: 'https://www.instagram.com/famkelouise_'
  },
  {
    name: 'Kraantje Pappie',
    biography: 'Alex van der Zouwen (Rozenburg, 1 juli 1986), bekend onder zijn artiestennaam Kraantje Pappie, is een Nederlands hiphopartiest en televisiepresentator. Hij staat voornamelijk bekend om zijn unieke, vaak off-beat en overdreven manier van rappen.',
    instagram: 'https://www.instagram.com/kraantjepappie/?hl=en'
  },
  {
    name: 'Bizzey',
    biography: 'Leendert (Leo) Roelandschap (Amersfoort, 11 mei 1985), beter bekend onder zijn artiestennaam Bizzey, is een Nederlands hiphopartiest en dj.',
    instagram: 'https://www.instagram.com/bizzey/'
  }
]

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
