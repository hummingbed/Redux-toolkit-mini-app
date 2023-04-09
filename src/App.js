import React from 'react';
// import { Counter } from './features/counter/Counter';
import UserList from './features/User/UserList'
import { Routes, Route } from 'react-router-dom';
import AddUser from './features/User/AddUser';
import EditUser from './features/User/EditUser';


function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-0">
      <div className="text-center font-bold text-2xl text-gray-700">crud with redux toolkit</div>
      <Routes >
        <Route path='/' element={<UserList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes >
    </div>
  );
}

export default App;
