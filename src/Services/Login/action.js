import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from './constant';

export const toggleFlag = (username, password) => dispatch => {
  dispatch({
    type: LOGIN_START,
  });
  fetch(
    'https://api-stage-temp.kpktest.axfood.se/axfood/axfood-security/login',
    {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    },
  ).then(response => {
    if (!(response.status === 200)) {
      dispatch({
        type: LOGIN_FAILURE,
      });
    } else {
      var token = response.headers.map.authorization;
      token = token.slice(7);
      dispatch({
        type: LOGIN_SUCCESS,
        data: token,
      });
    }
  });
};
