

import styles from './App.module.css';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {

  return (
    <section className={styles.section}>
      <h1 className={`${styles.header} text text_type_main-medium`}>Страница не существует</h1>
      <h1 className={`${styles.header} text text_type_main-medium`}>Page not found (error 404)</h1>
      <p className={styles.footer}>
        <Link to='/' className={`${styles.link} text text_type_main-default`}>
          Вернуться на главную
        </Link>
      </p>
    </section>
  );
}