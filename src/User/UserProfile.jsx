import React from 'react'
import BasicButton from '../components/BasicButton';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  const [users, setUser] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5&_page=1');
      const data = await res.json();
      setUser(data)
    }
    fetchUsers();
  }, [])

  function goToDetail(userId) {
    navigate(`/user/profile/${userId}`)
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          Name: {user.name} <br />
          Email: {user.email} <br />
          <BasicButton  text="View" onClick={() => goToDetail(user.id)} />
        </div>
      ))}

    </div>
  )
}

export default UserProfile