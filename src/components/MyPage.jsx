import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/myProfile.css';
import { fetchMissions } from '../redux/missions/missionsSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const { missions } = useSelector((state) => state.missions);
  const activeMissions = missions.filter((active) => active.reserved);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    } else {
      setLoaded(true);
    }
  }, [dispatch, missions]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className="myProfile">
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ marginBottom: '10px' }}>My Missions</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {activeMissions.map((missions) => (
              <tr key={missions.mission_id}>
                <td style={{ border: '1px solid #dedede', padding: '23px', backgroundColor: 'white' }}>{missions.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyProfile;
