import React from 'react';

const CoachList = ({ coaches }) => {
  return (
    <div>
      <h2>List of Coaches</h2>
      <ul>
        {coaches.map((coach, index) => (
          <li key={index}>
            {coach.firstName} {coach.lastName} - {coach.specialty} - Age: {coach.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoachList;
