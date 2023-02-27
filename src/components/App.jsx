// import { NaviBar } from './NaviBar';
import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Trending } from './Trending/Trending';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
//
import { Cast } from './Cast/Cast';
import { Rewievs } from './Rewievs/Rewievs';
import { MovieSearch } from 'Pages/MovieSearch/MovieSearch';
//
import { NotFound } from 'Pages/NotFound';

import css from './app.module.css';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className={css.appBar}>
          <nav>
            <NavLink to="/" className={css.appNav}>
              Home
            </NavLink>
            <NavLink to="/movie" className={css.appNav}>
              Movie
            </NavLink>
          </nav>
        </div>
        <Routes>
          {/* <Route path="/" element={<NaviBar />} /> */}
          <Route path="/" element={<Trending />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Rewievs />} />
          </Route>
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
};
// element={<Navigate to="/" />}
