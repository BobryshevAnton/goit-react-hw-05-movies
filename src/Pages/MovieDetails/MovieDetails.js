import { useParams } from 'react-router-dom';
import { fetchDetails } from 'fetch/fetch';
import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Section } from 'components/Section/Section';

import css from './movie.module.css';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [details, setDetailsFilm] = useState([]);

  useEffect(() => {
    fetchDetails(movieId).then(({ data }) => setDetailsFilm(data));
  }, [movieId]);

  const goBack = location?.state?.from ?? '/';

  return (
    <>
      <Section>
        <NavLink className={css.movieBtn} to={goBack}>
          Back to movie
        </NavLink>
      </Section>
      <Section>
        <div className={css.moviePage}>
          <img
            className={css.movieImg}
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
            }
            alt={details.title ?? details.name}
          />
          <div className={css.movieInfo}>
            <h2>{details.original_title}</h2>
            <p className={css.movieTitle}>
              User score:
              <span className={css.movieSubT}> {details.vote_average}</span>
            </p>
            <p className={css.movieTitle}>Overview: </p>
            <span className={css.movieSubT}> {details.overview}</span>

            <p className={css.movieTitle}>Genres:</p>
            <span className={css.movieSubT}>
              {details.genres
                ? details.genres.map(el => el.name).join(' ')
                : ''}
            </span>
          </div>
        </div>
        <div className={css.movieAddInfo}>
          <h1 className={css.addTitle}>Additional information</h1>
          <ul className={css.addList}>
            <li>
              <NavLink to="cast">
                <h2 className={css.movieTitle}>Cast information:</h2>
              </NavLink>
            </li>
            <li>
              <NavLink to="rewievs">
                <h2 className={css.movieTitle}>Rewiev information:</h2>
              </NavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      </Section>
    </>
  );
};
export default MovieDetails;
