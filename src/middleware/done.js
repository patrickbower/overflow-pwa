import * as trello from '../utils/trello';

export function get(listId) {
  return trello.request(trello.getCards(listId)).then(data => {
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
