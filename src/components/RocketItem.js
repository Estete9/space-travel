import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/rocketItem.module.css';

function RocketItem({ rocketName, rocketDescription, flickrImages }) {
  return (
    <div className={styles.rocketItem}>
      <img src={flickrImages} alt="SpaceX rocket" className={styles.rocketImg} />
      <div className={styles.rocketContent}>
        <h3 className={styles.rocketName}>{rocketName}</h3>
        <p className={styles.rocketDescription}>{rocketDescription}</p>
        <button className={styles.reserveBtn} type="button">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

RocketItem.propTypes = {
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketItem;
