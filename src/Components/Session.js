import React from 'react';

const SessionList = ({ sessions }) => {
  return (
    <div>
      <h2>List of Sessions</h2>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            {session.sportType} - {session.schedule} - Max Members: {session.maxMembers}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
