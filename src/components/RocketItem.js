import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/rocketItem.module.css';
import { reserveRocket, cancelReservation } from '../redux/rockets/RocketsSlice';

function RocketItem({
  rocketId, rocketName, rocketDescription, flickrImages,
}) {
  const dispatch = useDispatch();
  const { rocketsData } = useSelector((store) => store.rockets);

  const handleClick = () => {
    const selectedRocketData = rocketsData.find((rocket) => rocket.rocket_id === rocketId);
    if (!selectedRocketData.reserved) {
      dispatch(reserveRocket(rocketId));
      return;
    }
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className={styles.rocketItem}>
      <img src={flickrImages} alt={`${rocketName} rocket`} className={styles.rocketImg} />
      <div className={styles.rocketContent}>
        <h3 className={styles.rocketName}>{rocketName}</h3>
        <p className={styles.rocketDescription}>{rocketDescription}</p>
        <button className={styles.reserveBtn} type="button" onClick={handleClick}>
          Reserve Rocket
        </button>
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
