import css from './sections.module.css';
import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};
export default Section;

Section.propTypes = {
  children: PropTypes.any,
};
