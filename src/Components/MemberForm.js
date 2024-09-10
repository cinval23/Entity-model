import React, { useState } from 'react';

const MemberForm = ({ addMember }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addMember({ firstName, lastName, address, dateOfBirth, gender });
    setFirstName('');
    setLastName('');
    setAddress('');
    setDateOfBirth('');
    setGender('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add New Member</h3>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
      <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Date of Birth" required />
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" required />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
