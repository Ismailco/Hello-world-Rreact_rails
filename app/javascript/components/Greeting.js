import React from 'react';

const Greeeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetingAsync());
  }, []);
  return (
    <div>
      <h1>getGreetingAsync</h1>
    </div>
  );
};
export default Greeeting;
