import React from 'react';
// This is an undocumented utility that is subject to change.
// Please do not use this externally. Eventually I will likely
// expose it once it's been cleaned and made reusable.
//
// The passOn function applies a specific set of properties
// to the children components. It will only apply the props
// to a component type that exists in the ofTypes array.
export default function (children, ofTypes) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (r) {
    return r;
  };

  var response = React.Children.map(children,
  // Check to see if the child's component type is whitelisted,
  // and then process it.
  function (child) {
    return React.isValidElement(child) && ofTypes.includes(child.type) ? React.cloneElement(child, process(child)) : child;
  });
  return response;
}