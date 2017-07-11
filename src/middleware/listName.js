import * as trello from "../utils/trello";

export function listName() {
  return trello.request(trello.get.lists).then(data => {
    const lists = data.map(listItem => {
      return {
        name: listItem.name,
        id: listItem.id
      };
    });
    return lists;
  });
}
