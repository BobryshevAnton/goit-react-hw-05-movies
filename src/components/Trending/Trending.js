import { fetchTrendings } from 'fetch/fetch';
import { useState, useEffect } from 'react';
import { TrendingList } from './TrendingList';
import { Section } from 'components/Section/Section';

import css from './trending.module.css';

export const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetchTrendings().then(({ data }) => setTrending(data.results));
  }, []);

  return (
    <>
      <Section>
        {/* <div className={css.trend}> */}
        <div className={css.trendStyle}>
          <h2 className={css.trendTitle}>Trending films today: </h2>
        </div>
      </Section>
      <Section>
        <TrendingList trending={trending} />
        {/* </div> */}
      </Section>
    </>
  );
};
