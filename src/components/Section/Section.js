import css from './sections.module.css';

export const Section = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};
