import React, { useEffect } from 'react';
import Routes from 'routes';
import Container from 'styled/container';
import { devices } from 'redux/reducers/devices';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(devices.get());
  }, []);

  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;
