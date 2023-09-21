import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../queries';

const UserInfo = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const users = data.getAllUsers;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>Firstname: {user.firstname}</p>
          <p>Lastname: {user.lastname}</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;