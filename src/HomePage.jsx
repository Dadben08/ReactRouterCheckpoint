import { Link } from 'react-router-dom';

const HomePage = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movies/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
