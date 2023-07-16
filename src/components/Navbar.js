import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from '../images/WL.png'

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <a href='/' className='logo'>
                    <img style={{ width: 50, height: 60 }}src={logo} alt='logo' />
                </a>
                <div className='sign-in-button'>
                {user?.displayName ? (
          <div>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleSignOut}>Logout</Button>
            </Stack>
          </div>
        ) : (
          <Link to='/signin'>
            <Button variant="contained">Sign in</Button>
          </Link>
        )}
        </div>
    </div>
  );
};

export default Navbar;