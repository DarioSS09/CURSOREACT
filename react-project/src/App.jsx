import MovieList from './MovieList'
import './CSS/App.css'

const peliculas=[
  {
      imgUrl:'https://media.themoviedb.org/t/p/w220_and_h330_face/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg',
      nombre: 'Smile 2',
      fecha:'Oct 16, 2024'
  },
  {
      imgUrl:'https://media.themoviedb.org/t/p/w220_and_h330_face/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg',
      nombre: 'Wicked',
      fecha:'Nov 28, 2024'
  },
  {
      imgUrl:'https://media.themoviedb.org/t/p/w220_and_h330_face/bx92hl70NUhojjO3eV6LqKllj4L.jpg',
      nombre: 'GTMAX',
      fecha:'Nov 19, 2024'
  }
]

function App() {
  return(
    <div>
      <MovieList peliculas={peliculas}/>
    </div>
  )
}

export default App
