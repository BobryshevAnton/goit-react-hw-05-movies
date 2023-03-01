import { TrendingList } from 'components/Trending/TrendingList';
import PropTypes from 'prop-types';
import css from './filmConteiner.module.css';

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
export default FilmConteiner;

FilmConteiner.propTypes = {
  films: PropTypes.object,
};
