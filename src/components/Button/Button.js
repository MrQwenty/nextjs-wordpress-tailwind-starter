// import styles from './Button.module.scss';

const Button = ({ children, ...rest }) => {
  // let buttonClassName = styles.button;

  // if (className) {
  //   buttonClassName = `${buttonClassName} ${className}`;
  // }

  return (
    <button {...rest} className="">
      {children}
    </button>
  );
};

export default Button;
