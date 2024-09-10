import React from 'react';

const Gymnasium = ({ gym }) => {
  return (
    <div>
      <h2>{gym.name}</h2>
      <p>Address: {gym.address}</p>
      <p>Phone: {gym.phone}</p>
    </div>
  );
};

export default Gymnasium;
