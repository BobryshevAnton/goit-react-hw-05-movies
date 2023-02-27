import css from './filmConteiner.module.css';
import { TrendingList } from 'components/Trending/TrendingList';

export const FilmConteiner = ({ films }) => {
  return (
    <div className={css.trend}>
      <div className={css.trendStyle}>
        <h2 className={css.trendTitle}>Search film name: </h2>
      </div>

      <TrendingList trending={films} />
    </div>
  );
};
