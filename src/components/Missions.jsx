import PropTypes from 'prop-types';

function Missions({ name, description, id }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{id}</td>
    </tr>
  );
}

Missions.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Missions;
