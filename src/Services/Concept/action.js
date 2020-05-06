import {CONCEPT_DATA} from './constant';

export const getConceptData = header => dispatch => {
  fetch(
    'https://api-stage.kpktest.axfood.se/axfood/axfood-product-scan/concepts',
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
        type: CONCEPT_DATA,
        data: responseJson,
      });
    });
};
