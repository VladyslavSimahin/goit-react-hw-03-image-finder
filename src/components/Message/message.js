import css from './message.module.css';

export const Message = ({ children }) => {
  return (
    <div className={css.MessageContainer}>
      <b className={css.TextMessage}>{children}</b>
    </div>
  );
};
