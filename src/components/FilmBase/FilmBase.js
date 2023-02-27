import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './filmBAse.module.css';

export const FilmBase = ({ id, poster_path, name, title }) => {
  const location = useLocation();
  return (
    <>
      <NavLink
        key={id}
        state={{ from: location }}
        to={`/movie/${id}`}
        className={css.filmCardTitle}
      >
        <div className={css.filmCard}>
          <img
            className={css.filmImg}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={name ?? title}
          />
          <h2>{title ?? name}</h2>
        </div>
      </NavLink>
    </>
  );
};
