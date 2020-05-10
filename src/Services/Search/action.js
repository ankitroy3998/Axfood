import {SEARCH_DATA} from './constant';

export const getSearchData = (keyword, header) => dispatch => {
  fetch(
    'https://api-stage.kpktest.axfood.se/axfood/axfood-product-scan/searchResults/' +
      keyword +
      '?',
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
        type: SEARCH_DATA,
        data: responseJson,
      });
    });
};
