import { List } from 'immutable';

export function getListObject (array) {
  return List(array);
}

export function addElementToList (list, element) {
  if (!List.isList(list)) {
    throw new Error('The first argument must be an Immutable List');
  }

  return list.push(element);
}
