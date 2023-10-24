import "./index.css";

const SimilarMovieCard = ({ movieDetails }) => {
  const { posterPath, title } = movieDetails;

  return (
    <li className="similar-movie-card-container">
      <img src={posterPath} alt={title} className="similar-movie-card-image" />
    </li>
  );
};

export default SimilarMovieCard;
