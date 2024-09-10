import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GymList from './components/GymList';
import MemberList from './components/MemberList';
import SessionList from './components/SessionList';
import CoachList from './components/CoachList';
import GymForm from './components/GymForm';
import MemberForm from './components/MemberForm';
import SessionForm from './components/SessionForm';
import CoachForm from './components/CoachForm';

function App() {
  // Sample state data for gyms, members, sessions, and coaches
  const [gyms, setGyms] = useState([]);
  const [members, setMembers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [coaches, setCoaches] = useState([]);

  // Functions to add new gyms, members, sessions, and coaches
  const addGym = (gym) => setGyms([...gyms, gym]);
  const addMember = (member) => setMembers([...members, member]);
  const addSession = (session) => setSessions([...sessions, session]);
  const addCoach = (coach) => setCoaches([...coaches, coach]);

  return (
    <div className="App">
      <Header />
      <GymForm addGym={addGym} />
      <GymList gyms={gyms} />
      <MemberForm addMember={addMember} />
      <MemberList members={members} />
      <SessionForm addSession={addSession} />
      <SessionList sessions={sessions} />
      <CoachForm addCoach={addCoach} />
      <CoachList coaches={coaches} />
      <Footer />
    </div>
  );
}

export default App;
