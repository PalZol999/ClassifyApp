import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { UserAuth } from './context/AuthContext';

function TextBlock() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">What is Classify?</h1>
        <p id="textblock-content">
          Life is full of unknown situations: Will the vacuum cleaner bag be full? Is the beer I'm drinking watered down?
          Are we going to run today?<br /><br />
          Here is the answer to your questions (at least regarding the "run"!)<br /><br />
          With Classify, you can book your spot for any ongoing courses of the week with your favorite coach! AND...
          You can even see the workouts of the day!<br /><br />
          What a sweet relief! Now, you can prepare yourself for what and with whom you will suffer.<br /><br />
          (Please note: these workouts are not carved in stone. They can vary depending on the weather, available equipment, and the coach's feeling.)
        </p><br /><br />
        {user?.displayName ? (
          <div className="button-container">
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
      <footer id='textblock-footer'>Created By&nbsp;<a id="textblock-devsense">PalZol</a></footer>
    </div>
  );
}

export default TextBlock;
