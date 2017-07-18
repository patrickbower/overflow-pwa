import * as trello from '../utils/trello';
import * as fetch from '../utils/fetch';

export function getMethod(listId) {
  return fetch.request(fetch.constructor(trello.getCards(listId), 'GET'))
    .then(data => {
      let done = {};
      for (let item of data) {
        if (item.labels.length > 0 || item.labels[0] === 'done') {
          done[item.id] = {
            name: item.name,
            id: item.id,
            label: 'done'
          };
        }
      }
      return done;
    });
}
