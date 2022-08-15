import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingAsync } from '../redux/greeting/greeting';

const Greeeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetingAsync());
  }, []);

  const Style = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  };

  return (
    <div style={Style}>
      <h1>{greeting}</h1>
    </div>
  );
};
export default Greeeting;
