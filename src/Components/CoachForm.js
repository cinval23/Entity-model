import React, { useState } from 'react';

const CoachForm = ({ addCoach }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [specialty, setSpecialty] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addCoach({ firstName, lastName, age, specialty });
    setFirstName('');
    setLastName('');
    setAge('');
    setSpecialty('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add New Coach</h3>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" required />
      <button type="submit">Add Coach</button>
    </form>
  );
};

export default CoachForm;
