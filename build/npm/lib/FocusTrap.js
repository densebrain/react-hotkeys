'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactValidProps = require("react-valid-props");

var _reactValidProps2 = _interopRequireDefault(_reactValidProps);

var FocusTrap = _react2['default'].createClass({
  displayName: 'FocusTrap',

  propTypes: {
    onFocus: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    focusName: _react2['default'].PropTypes.string, // Currently unused
    component: _react2['default'].PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      component: 'div'
    };
  },

  render: function render() {
    var Component = this.props.component;

    return _react2['default'].createElement(
      Component,
      _extends({ tabIndex: '-1' }, (0, _reactValidProps2['default'])(this.props)),
      this.props.children
    );
  }

});

exports['default'] = FocusTrap;
module.exports = exports['default'];