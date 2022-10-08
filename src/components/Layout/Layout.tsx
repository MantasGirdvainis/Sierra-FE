import styles from './Layout.module.css';

type Props = { header: string | JSX.Element; children: string | JSX.Element; footer: string | JSX.Element };

// eslint-disable-next-line
export default function Layout({ children, header, footer }: Props) {
  return (
    <>
      <header className={styles.horizontalMargin}>{header}</header>
      <main className={styles.horizontalMargin}>{children}</main>
      <footer className={styles.horizontalMargin}>{footer}</footer>
    </>
  );
}
