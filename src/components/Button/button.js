import css from './button.module.css';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      Load More
    </button>
  );
};
