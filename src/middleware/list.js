import * as trello from '../utils/trello';

export function get() {
  return trello.request(trello.getLists()).then(data => {
    const lists = data.map(listItem => {
      return {
        name: listItem.name,
        id: listItem.id
      };
    });
    return lists;
  });
}
