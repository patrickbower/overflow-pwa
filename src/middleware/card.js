import * as trello from '../utils/trello';

export function put(listId, title) {
  return trello.request(trello.putCard(listId, title)).then(data => {
    console.log('returned data from trello', data);
  });
}
