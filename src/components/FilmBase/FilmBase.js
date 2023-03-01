import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg'
            }
            alt={name ?? title}
          />
          <h2 className={css.filmName}>{title ?? name}</h2>
        </div>
      </NavLink>
    </>
  );
};
export default FilmBase;
FilmBase.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
