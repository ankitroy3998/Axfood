import {STORE_DATA} from './constant';

export const getStoreData = header => dispatch => {
  fetch(
    'https://api-stage.kpktest.axfood.se/axfood/axfood-product-scan/stores',
    {
      method: 'GET',
      headers: {
        authorization: header,
      },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson);
      dispatch({
        type: STORE_DATA,
        data: responseJson,
      });
    });
};
