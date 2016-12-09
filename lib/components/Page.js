var _templateObject = babelHelpers.taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { passOn } from '../utils';

function PageContainer(props) {
  var children = props.children,
      tagName = props.tagName,
      debug = props.debug,
      fluid = props.fluid,
      rest = babelHelpers.objectWithoutProperties(props, ['children', 'tagName', 'debug', 'fluid']);

  var newChildren = passOn(children, [Row], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
    };
  });
  return React.createElement(tagName || 'div', rest, newChildren);
}

PageContainer.propTypes = {
  children: React.PropTypes.node,
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  debug: React.PropTypes.bool,
  fluid: React.PropTypes.bool,
  width: React.PropTypes.string
};

var Page = styled(PageContainer)(_templateObject, function (props) {
  return props.fluid ? 'width: 100%;' : '\n      margin: 0 auto;\n      max-width: 100%;\n      ' + (props.width ? 'width: ' + props.width + ';' : 'width: 960px;') + '\n    ';
});

export default Page;