import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MovieDetailPage from './MovieDetailPage';

const App = () => {
  const movies = [
    { id: 1, title: 'Movie 1', description: 'Description of Movie 1', trailerLink: 'https://www.youtube.com/embed/video1' },
    { id: 2, title: 'Movie 2', description: 'Description of Movie 2', trailerLink: 'https://www.youtube.com/embed/video2' },
    // Add more movie objects
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetailPage movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
