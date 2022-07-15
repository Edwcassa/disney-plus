import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
  const customTitle = (movie) => movie.title.replace(/\s+/g, '-').toLowerCase()
  const customCategory = (movie) => movie.category.replace(/\s+/g, '-').toLowerCase()
  const link = `/${customCategory(movie)}/${customTitle(movie)}/${movie.id}`

  return (
    <div>
      <div className='brandMovie mr-5 z-50'>
        <Link to={link} className='scroll-smooth'>
          <img src={movie.cardImg} alt={movie.title} className=' rounded ' />
        </Link>
      </div>
    </div>
  )
}
export default Card
