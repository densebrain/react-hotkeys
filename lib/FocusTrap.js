import React from 'react';
import filterProps from "react-valid-props";

const FocusTrap = React.createClass({

  propTypes: {
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    focusName: React.PropTypes.string, // Currently unused
    component: React.PropTypes.any
  },

  getDefaultProps() {
    return {
      component: 'div'
    };
  },

  render() {
    const Component = this.props.component;

    return (
      <Component tabIndex="-1" {...filterProps(this.props)}>
        {this.props.children}
      </Component>
    );
  }

});

export default FocusTrap;
