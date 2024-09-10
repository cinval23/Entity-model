import React from 'react';

const MemberList = ({ members }) => {
  return (
    <div>
      <h2>List of Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member.firstName} {member.lastName} - {member.gender} - {member.dateOfBirth}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
