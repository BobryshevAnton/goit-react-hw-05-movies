import css from './movieSearch.module.css';
import { fetchSearchMovies } from 'fetch/fetch';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { FilmBase } from 'components/FilmBase/FilmBase';
import { Section } from 'components/Section/Section';

export const MovieSearch = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    if (name === '') return;
    fetchSearchMovies(name).then(({ data }) => {
      setFilms([...data.results]);
    });
  }, [name]);

  const handleSubmit = value => {
    setSearchParams({ name: value });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <Section>
        <ul className={css.trendList}>
          {films.map(({ id, title, name, poster_path }) => {
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
      </Section>
    </>
  );
};
