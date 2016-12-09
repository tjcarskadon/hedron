var _templateObject = babelHelpers.taggedTemplateLiteral(['\n  /*display: flex;*/\n  ', '\n  /*flex-direction: row;*/\n  ', ';\n  flex-wrap: wrap;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  /*display: flex;*/\n  ', '\n  /*flex-direction: row;*/\n  ', ';\n  flex-wrap: wrap;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import { divvy, passOn } from '../utils';

function RowContainer(props) {
  var children = props.children,
      tagName = props.tagName,
      debug = props.debug,
      divisions = props.divisions,
      alignContent = props.alignContent,
      alignItems = props.alignItems,
      alignSelf = props.alignSelf,
      justifyContent = props.justifyContent,
      order = props.order,
      rest = babelHelpers.objectWithoutProperties(props, ['children', 'tagName', 'debug', 'divisions', 'alignContent', 'alignItems', 'alignSelf', 'justifyContent', 'order']);

  var newChildren = passOn(children, [Column], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug,
      divisions: divisions
    };
  });
  return React.createElement(tagName || 'section', rest, newChildren);
}

RowContainer.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  debug: React.PropTypes.bool,
  tagName: React.PropTypes.string,
  // grid props
  divisions: React.PropTypes.number,
  // flex props
  alignContent: React.PropTypes.string,
  alignItems: React.PropTypes.string,
  alignSelf: React.PropTypes.string,
  justifyContent: React.PropTypes.string,
  order: React.PropTypes.string,
  flexDisplay: React.PropTypes.string,
  flexDirection: React.PropTypes.string
};

RowContainer.defaultProps = {
  divisions: 12
};

var Row = styled(RowContainer)(_templateObject, function (props) {
  return props.flexDisplay ? 'display: ' + props.flexDisplay + ';' : 'display: flex';
}, function (props) {
  return props.flexDirection ? 'flex-direction: ' + props.flexDirection + ';' : 'flex-direction: row';
}, function (props) {
  return props.alignContent ? 'align-content: ' + props.alignContent + ';' : null;
}, function (props) {
  return props.alignItems ? 'align-items: ' + props.alignItems + ';' : null;
}, function (props) {
  return props.alignSelf ? 'align-self: ' + props.alignSelf + ';' : null;
}, function (props) {
  return props.justifyContent ? 'justify-content: ' + props.justifyContent + ';' : null;
}, function (props) {
  return props.order ? 'order: ' + props.order + ';' : null;
});

export default Row;