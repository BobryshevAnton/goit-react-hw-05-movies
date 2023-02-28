// import { NaviBar } from './NaviBar';
import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from 'Pages/Home/Home';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { MovieSearch } from 'Pages/MovieSearch/MovieSearch';

import { Cast } from './Cast/Cast';
import { Rewievs } from './Rewievs/Rewievs';

import { NotFound } from 'Pages/NotFound';
import { Footer } from './Footer/Footer';

// const Cast = lazy(() => import('./Cast/Cast'));
// const Rewievs = lazy(() => import('./Rewievs/Rewievs'));
// const NotFound = lazy(() => import('Pages/NotFound'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Rewievs />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
// element={<Navigate to="/" />}
