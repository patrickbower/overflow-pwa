import * as trello from '../utils/trello';

export function get(listId) {
  return trello.request(trello.getCards(listId)).then(data => {
    let todos = {};
    for (let item of data) {
      if (item.labels.length === 0 || item.labels[0] === 'undefined') {
        todos[item.id] = {
          name: item.name,
          id: item.id,
          label: 'todo'
        };
      }
    }
    return todos;
  });
}
