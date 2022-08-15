const GET_GREETING = 'helloWorldReactReils/greeting/GET_GREETING';

export const getGreeting = (data) => {
  return {
    type: GET_GREETING,
    payload: {
      data,
    },
  };
};

const getGreetingAsync = () => (dispatch) => {
  fetch('/messages.json')
    .then((response) => {
      return response.json();
    })
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
      return action.payload.data;
    default:
      return state;
  }
};

export default reducer;
export { getGreetingAsync };
