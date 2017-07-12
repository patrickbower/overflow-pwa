import * as trello from '../utils/trello';

export function put(listId, title) {
  return trello.post(trello.putCard(listId, title)).then(data => {
    return {
      label: 'todo',
      name: data.name
    };
  });
}
