import React from 'react';
import { UserAuth } from '../context/AuthContext';
import Calendar from './Calendrier';


const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12" style={{ color: 'white' }}>Account</h1>
      <div className="text-center pt-6 font-color-white">
        <p style={{ color: 'white' }}>Welcome, {user?.displayName}</p>
        <div className="text-center pt-6">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Account;
