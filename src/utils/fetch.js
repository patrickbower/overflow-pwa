import * as trello from './trello';

export function constructor(url, methodType) {
  var requestObject = new Request(trello.query(url), {method: `${methodType}`});
  return requestObject;
}

export function request(credentials) {
  return fetch(credentials)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(function(err) {
      throw new Error(err);
    });
}
