import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAPI } from '../redux/rockets/RocketsSlice';

const RocketsScreen = () => {
  const dispatch = useDispatch();

  const { rocketsData, isLoading, error } = useSelector((store) => store.rockets);

  useEffect(() => {
    dispatch(fetchRocketsAPI());
  }, [dispatch]);

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
      <div>this is Rocket screen</div>
    </div>
  );
};

export default RocketsScreen;
