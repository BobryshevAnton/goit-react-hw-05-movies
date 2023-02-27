import css from './trending.module.css';
import { FilmBase } from 'components/FilmBase/FilmBase';

export const TrendingList = ({ trending }) => {
  return (
    <ul className={css.trendList}>
      {trending.map(({ id, title, name, poster_path }) => {
        return (
          <FilmBase
            key={id}
            id={id}
            name={name}
            title={title}
            poster_path={poster_path}
          />
        );
      })}
    </ul>
  );
};
