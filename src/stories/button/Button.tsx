import styles from './Button.module.css';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: 'classic' | 'strawberry' | 'close' | 'calendar';
  }
> = ({ children, kind = 'classic', ...props }) => {
  return (
    <button type="button" {...props} className={styles[kind]}>
      {kind === 'close' || kind === 'strawberry' ? (
        <div>
          <div></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

Button.displayName = 'Button';
