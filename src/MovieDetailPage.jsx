import { useParams, Link } from 'react-router-dom';

const MovieDetailPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div>
        <h3>Trailer:</h3>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetailPage;
