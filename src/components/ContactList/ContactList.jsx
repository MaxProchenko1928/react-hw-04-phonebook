import PropTypes from 'prop-types';

const ContactList = ({ users, removeUser }) => {
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name}: </span>
            {user.number}
            <button type="button" onClick={() => removeUser(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  removeUser: PropTypes.func.isRequired,
};

export default ContactList;
