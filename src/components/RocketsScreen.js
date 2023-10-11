import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRocketsAPI } from '../redux/rockets/RocketsSlice';

const RocketsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsAPI());
  }, [dispatch]);

  return <div>RocketsScreen</div>;
};

export default RocketsScreen;
