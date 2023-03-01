import { useParams } from 'react-router-dom';
import { fetchCredits } from 'fetch/fetch';
import { useState, useEffect } from 'react';
import css from './cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();

  const [castInfo, setCastInfo] = useState([]);
  useEffect(() => {
    fetchCredits(movieId).then(({ data }) => setCastInfo(data.cast));
  }, [movieId]);
  return (
    <>
      {castInfo.length !== 0 ? (
        <ul className={css.castList}>
          {castInfo.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id + name + character} className={css.castCard}>
                <img
                  className={css.castImg}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
                  }
                  alt={name}
                />
                <p className={css.castTitle}>{name}</p>
                <p className={css.castTitle}>{character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.castTitle}>
          <br />
          Sorry, we dont have any casts for this movie.
        </p>
      )}
    </>
  );
};
export default Cast;
