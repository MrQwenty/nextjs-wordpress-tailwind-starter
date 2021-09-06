import Container from 'components/Container';

// import styles from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className="">
      <Container>{children}</Container>
    </header>
  );
};

export default Header;
