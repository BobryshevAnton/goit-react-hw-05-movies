import { useParams } from 'react-router-dom';
import { fetchReviews } from 'fetch/fetch';
import { useState, useEffect } from 'react';

import css from './rewiew.module.css';

export const Rewievs = () => {
  const { movieId } = useParams();
  const [rewInfo, setRewInfo] = useState([]);
  useEffect(() => {
    fetchReviews(movieId).then(({ data }) => setRewInfo(data.results));
  });

  return (
    <>
      {rewInfo.length !== 0 ? (
        <ul>
          {rewInfo.map(({ author, content }) => {
            return (
              <li key={author}>
                <h2 className={css.rewTitle}>
                  Autor:
                  <span className={css.rewTitle}> {author}</span>
                </h2>
                <p className={css.rewTitle}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.rewTitle}>
          <br />
          Sorry, we dont have any rewievs for this movie.
        </p>
      )}
    </>
  );
};
export default Rewievs;
