import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAPI } from '../redux/rockets/RocketsSlice';
import RocketItem from './RocketItem';
import styles from '../styles/rocketsScreen.module.css';

const RocketsScreen = () => {
  const dispatch = useDispatch();
  const { rocketsData, isLoading, error } = useSelector((store) => store.rockets);

  useEffect(() => {
    if (isLoading && !rocketsData.length) {
      dispatch(fetchRocketsAPI());
    }
  }, [dispatch, isLoading, rocketsData.length]);

  if (isLoading) {
    return <div>Users loading...</div>;
  }

  if (error) {
    return <div>{`We encountered an error: ${JSON.stringify(error)}`}</div>;
  }

  if (!rocketsData.length) {
    return (
      <section>
        <header>
          <h2>There are no rockets for the moment</h2>
          <h4>Our rocket list is empty</h4>
        </header>
      </section>
    );
  }

  return (
    <div>
      <ul>
        {rocketsData.map((rocket) => (
          <li key={rocket.rocket_id} className={styles.rocketItemWrapper}>
            <RocketItem
              id={rocket.rocket_id}
              rocketName={rocket.rocket_name}
              rocketDescription={rocket.description}
              flickrImages={rocket.flickr_images[0]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsScreen;
