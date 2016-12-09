var _templateObject = babelHelpers.taggedTemplateLiteral(['\n    @media (min-width: ', 'px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', 'px) {\n      ', '\n    }\n  ']);

import { css } from 'styled-components';

var sizes = {
  sm: 500,
  md: 768,
  lg: 1100
};

export default Object.keys(sizes).reduce(function (acc, label) {
  var accumulator = acc;
  accumulator[label] = function () {
    return css(_templateObject, sizes[label], css.apply(undefined, arguments));
  };
  return accumulator;
}, {});