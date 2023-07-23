import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/WorkoutCard.css'
import { format } from 'date-fns'; 

const Workout = ({ selectedDate }) => {
  const wodData = {
    '24/07/2023': {
      strength: ['12 biceps curls', '12 hollow rocks'],
      wod: ['400m run', '12 US swings at 24/16kg', '12 C2B/PU'],
    },
    // Add more entries for other dates if needed
  };

  const wod = wodData[format(selectedDate, 'dd/MM/yyyy')];

  return (
    <Card className="workout-card">
      <CardContent>
        <Typography variant="h5" component="b" gutterBottom>
          WORKOUT
        </Typography>
        {wod ? (
          <>
            <Typography variant="body1">
              <b>Strength:</b>
            </Typography>
            <ul>
              {wod.strength.map((exercise, index) => (
                <li key={`strength-${index}`}>{exercise}</li>
              ))}
            </ul>
            <Typography variant="body1">
              <b>WOD:</b>
            </Typography>
            <ul>
              {wod.wod.map((exercise, index) => (
                <li key={`wod-${index}`}>{exercise}</li>
              ))}
            </ul>
          </>
        ) : (
          <Typography variant="body1">No Workout Selected</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Workout;
