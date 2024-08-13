import { Map } from 'immutable';

export default function accessImmutableObject (object, array) {
  const immutableObject = Map(object);
  const value = immutableObject.getIn(array);

  return value;
}
