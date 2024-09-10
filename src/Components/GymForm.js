import React, { useState } from 'react';

const GymForm = ({ addGym }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addGym({ name, address, phone });
    setName('');
    setAddress('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add New Gymnasium</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Gym Name" required />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Gym Address" required />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Gym Phone" required />
      <button type="submit">Add Gym</button>
    </form>
  );
};

export default GymForm;
