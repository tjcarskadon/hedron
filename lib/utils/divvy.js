// Divvy is a function for dividing up a grid.
// divvy(12, 6) returns: (100 / 12) * 6
// This can then be used by the grid system.
// i.e. width: ${divvy(12, 4)};
export default function () {
  var divisions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
  var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return 100 / divisions * span;
}