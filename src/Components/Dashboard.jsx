import React, { useContext } from 'react';
import Options from './Options';
import Navbar from './Navbar';
import DashLayout from './DashLayout';
import '../css/LoadScreen.css';
import { useParams } from 'react-router-dom';
import { LoginContext } from '../App';

const users = [
  {
    id: 1,
    name: "Sample User 1",
    email: 'sampleuser1@mail.com',
    password: 'sampleuser1',
    balance: 10000,
  },
  {
    id: 2,
    name: "Sample User2",
    email: 'sampleuser2@mail.com',
    password: 'sampleuser2',
    balance: 20000,
  }
];

const Dashboard = () => {
  const { userId } = useParams();
  const user = users.find(u => u.id === parseInt(userId));

  return (
    <div className='load-screen'>
      <Navbar />
      <DashLayout user={user} />
    </div>
  );
}

export default Dashboard;
