import React, { memo } from 'react';

import styles from './GifItem.module.css';

const GifItem = memo(({ imageUrl = '', title = '' }) => {
  return (
    <div className={styles.gifItem}>
      <video className={styles.gifImage} src={imageUrl} autoPlay muted loop />
      <div className={styles.gifTitleContainer}>
        <div className={styles.gifTitleBg}></div>
        <h4 className={styles.gifTitle}>{title}</h4>
      </div>
    </div>
  );
});

export default GifItem;
