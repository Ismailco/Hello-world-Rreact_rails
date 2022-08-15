const GET_GREETING = 'helloWorldReactReils/greeting/GET_GREETING';

export const getGreeting = () => {
  return {
    type: GET_GREETING,
    greeting: 'Hello world',
  };
};

const getGreetingAsync = () => (dispatch) => {
  fetch('/messages.json')
    .then((response) => response.json())
    .then((res) => {
      dispatch(getGreeting(res.greeting));
    })
    .catch((error) => {
      console.log(error);
    });
};

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        greeting: action.greeting,
      };
    default:
      return state;
  }
};

export default reducer;
export { getGreetingAsync };