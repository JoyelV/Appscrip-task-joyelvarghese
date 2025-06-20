import React from 'react';
import styles from './styles/Title.module.css';

function Title() {
  return (
    <section id="title-main-section" className={styles.titleMainSection}>
      <div>
        <h1 className={styles.titleHead}>DISCOVER OUR PRODUCTS</h1>
        <h2 className={styles.titleBody}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor
          integer scelerisque nibh amet mi ut elementum dolor.
        </h2>
      </div>
    </section>
  );
}

export default Title;