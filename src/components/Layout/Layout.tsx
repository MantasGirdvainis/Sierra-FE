import styles from './Layout.module.css';

type Props = { header: string | JSX.Element; children: string | JSX.Element; footer: string | JSX.Element };

export default function Layout({ children, header, footer }: Props): JSX.Element {
  return (
    <>
      {header}
      <main className={styles.marginTop}>{children}</main>
      <footer className={styles.horizontalMargin}>{footer}</footer>
    </>
  );
}
