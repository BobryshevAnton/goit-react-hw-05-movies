import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('Pages/Home/Home'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const MovieSearch = lazy(() => import('Pages/MovieSearch/MovieSearch'));

const Cast = lazy(() => import('./Cast/Cast'));
const Rewievs = lazy(() => import('./Rewievs/Rewievs'));
const NotFound = lazy(() => import('Pages/NotFound'));
const Footer = lazy(() => import('./Footer/Footer'));

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
