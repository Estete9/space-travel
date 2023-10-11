import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from './Missions';
import { fetchMissions } from '../redux/missions/missionsSlice';

function MissionsList() {
  const { missions, isLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading && !missions.length) {
      dispatch(fetchMissions());
    }
  }, [dispatch, isLoading, missions.length]);

  return (
    <table className="table">
      <thead className="tableHeader">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Missions
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
          />
        ))}
      </tbody>
    </table>
  );
}

export default MissionsList;
