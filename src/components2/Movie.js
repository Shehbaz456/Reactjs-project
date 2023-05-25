const Movie = (props) => {
  return (
    <div className="Movie">
    <img src={props.img} alt="loading" />
    <p>{props.title}</p>
    <p>{props.Year}</p>
    </div>
  )
}

export default Movie
