import * as trello from '../utils/trello';
import * as fetch from '../utils/fetch';

export function compleate(cardId) {
  return fetch.request(fetch.constructor(trello.compleate(cardId), 'POST'))
    .then(data => {
      return true;
    });
}
