import React from 'react';

import UserList from '../components/UserList';

const Users = () => {
  const USERS = [{ 
    id: 'u1', 
    name: 'Luis Miguel', 
    image: 'https://avatars.githubusercontent.com/u/43793337', 
    places: 3 }]
  return <UserList items={USERS} />;
};

export default Users;
