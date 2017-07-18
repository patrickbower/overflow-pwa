import * as trello from '../utils/trello';
import * as fetch from '../utils/fetch';

export function getMethod() {
  return fetch.request(fetch.constructor(trello.getLists(), 'GET'))
    .then(data => {
      const lists = data.map(listItem => {
        return {
          name: listItem.name,
          id: listItem.id
        };
      });
      return lists;
    });
}
