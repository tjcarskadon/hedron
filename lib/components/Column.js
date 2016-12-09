var _templateObject = babelHelpers.taggedTemplateLiteral(['\n  display: block;\n  ', '\n  box-sizing: border-box;\n  ', '\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: block;\n  ', '\n  box-sizing: border-box;\n  ', '\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = babelHelpers.taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']);

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { divvy, media, passOn } from '../utils';

function ColumnContainer(props) {
  var children = props.children,
      tagName = props.tagName,
      debug = props.debug,
      divisions = props.divisions,
      fluid = props.fluid,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xsShift = props.xsShift,
      smShift = props.smShift,
      mdShift = props.mdShift,
      lgShift = props.lgShift,
      rest = babelHelpers.objectWithoutProperties(props, ['children', 'tagName', 'debug', 'divisions', 'fluid', 'xs', 'sm', 'md', 'lg', 'xsShift', 'smShift', 'mdShift', 'lgShift']);

  var newChildren = passOn(children, [Row], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
    };
  });
  return React.createElement(tagName || 'div', rest, newChildren);
}

ColumnContainer.propTypes = {
  children: React.PropTypes.node,
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  debug: React.PropTypes.bool,
  divisions: React.PropTypes.number,
  fluid: React.PropTypes.bool,
  xs: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
  xsShift: React.PropTypes.number,
  smShift: React.PropTypes.number,
  mdShift: React.PropTypes.number,
  lgShift: React.PropTypes.number
};

ColumnContainer.defaultProps = {
  divisions: 12
};

var Column = styled(ColumnContainer)(_templateObject, function (props) {
  return props.debug ? 'background-color: rgba(50, 50, 255, .1);\n  border: 1px solid #fff;' : '';
}, function (props) {
  return props.fluid ? 'padding: 0;' : 'padding: 20px;';
}, function (props) {
  return props.xs ? 'width: ' + divvy(props.divisions, props.xs) + '%;' : null;
}, function (props) {
  return props.xsShift ? 'margin-left: ' + divvy(props.divisions, props.xsShift) + '%;' : null;
}, media.sm(_templateObject2, function (props) {
  return props.sm ? 'width: ' + divvy(props.divisions, props.sm) + '%;' : null;
}, function (props) {
  return props.smShift ? 'margin-left: ' + divvy(props.divisions, props.smShift) + '%;' : null;
}), media.md(_templateObject2, function (props) {
  return props.md ? 'width: ' + divvy(props.divisions, props.md) + '%;' : null;
}, function (props) {
  return props.mdShift ? 'margin-left: ' + divvy(props.divisions, props.mdShift) + '%;' : null;
}), media.lg(_templateObject2, function (props) {
  return props.lg ? 'width: ' + divvy(props.divisions, props.lg) + '%;' : null;
}, function (props) {
  return props.lgShift ? 'margin-left: ' + divvy(props.divisions, props.lgShift) + '%;' : null;
}));

export default Column;