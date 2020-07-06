import React from 'react';
import NavBar from './components/nav'
import Image from "./components/image"
import Typography from '@material-ui/core/Typography'

import './App.css';

function App() {
  return (
    <div>
      
      <NavBar />
      <Typography variant='h4'>
          Welcome to KooseHub, where we appreciate koose!
      </Typography>
      
      <Image />
    </div>
  );
}

export default App;
