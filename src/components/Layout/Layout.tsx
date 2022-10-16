import styles from './Layout.module.css';
import Header from '../Header/header';

type Props = { header: string | JSX.Element; children: string | JSX.Element; footer: string | JSX.Element };

// eslint-disable-next-line
export default function Layout({ children, header, footer }: Props) {
  return (
    <>
      <Header />
      <main className={styles.marginTop}>{children}</main>
      <footer className={styles.horizontalMargin}>{footer}</footer>
    </>
  );
}
