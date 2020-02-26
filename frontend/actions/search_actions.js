import { searchRequest, boroughRequest } from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = (payload) => ({
    type: RECEIVE_SEARCH,
    payload
})

export const search = (query) => dispatch => {
    // debugger;
    return searchRequest(query)
    .then(payload => dispatch(receiveSearch(payload)));
}

export const filterByBorough = (borough) => dispatch => {
    // debugger;
    return boroughRequest(borough)
    .then(payload => dispatch(receiveSearch(payload)));
}