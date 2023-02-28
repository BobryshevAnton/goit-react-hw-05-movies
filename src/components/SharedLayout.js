import { Outlet, Link } from 'react-router-dom';
import { Section } from './Section/Section';
import { Suspense } from 'react';

import css from './app.module.css';

export const SharedLayout = () => {
  return (
    <Section>
      <nav className={css.appBar}>
        <Link to="/" className={css.appNav}>
          Home
        </Link>
        <Link to="/movie" className={css.appNav}>
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
