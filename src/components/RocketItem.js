import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/rocketItem.module.css';
import { reserveRocket, cancelReservation } from '../redux/rockets/RocketsSlice';
import RocketBadge from './RocketBadge';

function RocketItem({
  rocketId, rocketName, rocketDescription, flickrImages,
}) {
  const dispatch = useDispatch();
  const { rocketsData } = useSelector((store) => store.rockets);
  const [isReserved, setIsReserved] = useState(false);

  const handleClick = () => {
    const selectedRocketData = rocketsData.find((rocket) => rocket.rocket_id === rocketId);
    if (!selectedRocketData.reserved) {
      dispatch(reserveRocket(rocketId));
      setIsReserved(true);
      return;
    }
    dispatch(cancelReservation(rocketId));
    setIsReserved(false);
  };

  return (
    <div className={styles.rocketItem}>
      <img src={flickrImages} alt={`${rocketName} rocket`} className={styles.rocketImg} />
      <div className={styles.rocketContent}>
        <h3 className={styles.rocketName}>{rocketName}</h3>
        <p className={styles.rocketDescription}>
          {isReserved && <RocketBadge />}
          {rocketDescription}
        </p>
        {!isReserved && (
          <button className={styles.reserveBtn} type="button" onClick={handleClick}>
            Reserve Rocket
          </button>
        )}
        {isReserved && (
          <button className={styles.cancelBtn} type="button" onClick={handleClick}>
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}

RocketItem.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketItem;
