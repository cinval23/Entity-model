import React, { useState } from 'react';

const SessionForm = ({ addSession }) => {
  const [sportType, setSportType] = useState('');
  const [schedule, setSchedule] = useState('');
  const [maxMembers, setMaxMembers] = useState(20);

  const onSubmit = (e) => {
    e.preventDefault();
    addSession({ sportType, schedule, maxMembers });
    setSportType('');
    setSchedule('');
    setMaxMembers(20);
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add New Session</h3>
      <input type="text" value={sportType} onChange={(e) => setSportType(e.target.value)} placeholder="Sport Type" required />
      <input type="text" value={schedule} onChange={(e) => setSchedule(e.target.value)} placeholder="Schedule" required />
      <input type="number" value={maxMembers} onChange={(e) => setMaxMembers(e.target.value)} placeholder="Max Members" required />
      <button type="submit">Add Session</button>
    </form>
  );
};

export default SessionForm;
