require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Fade = (function (_Component) {
	_inherits(Fade, _Component);

	function Fade() {
		_classCallCheck(this, Fade);

		_get(Object.getPrototypeOf(Fade.prototype), 'constructor', this).call(this);
		this._showElement = this._showElement.bind(this);
		this._hideElement = this._hideElement.bind(this);
	}

	_createClass(Fade, [{
		key: 'componentWillAppear',
		value: function componentWillAppear(callback) {
			setTimeout(callback, 1); // need at least one tick to fire transition
		}
	}, {
		key: 'componentDidAppear',
		value: function componentDidAppear() {
			this._showElement();
		}
	}, {
		key: 'componentWillEnter',
		value: function componentWillEnter(callback) {
			setTimeout(callback, 1);
		}
	}, {
		key: 'componentDidEnter',
		value: function componentDidEnter() {
			this._showElement();
		}
	}, {
		key: 'componentWillLeave',
		value: function componentWillLeave(callback) {
			this._hideElement();
			setTimeout(callback, this.props.duration);
		}
	}, {
		key: 'componentDidLeave',
		value: function componentDidLeave() {
			// empty
		}
	}, {
		key: '_showElement',
		value: function _showElement() {
			var el = this.refs.element;
			el.style.opacity = 1;
		}
	}, {
		key: '_hideElement',
		value: function _hideElement() {
			var el = this.refs.element;
			el.style.opacity = 0;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = _extends({}, this.props);
			var style = {
				opacity: 0,
				WebkitTransition: 'opacity ' + this.props.duration + 'ms ease-out',
				msTransition: 'opacity ' + this.props.duration + 'ms ease-out',
				transition: 'opacity ' + this.props.duration + 'ms ease-out'
			};
			props.style = _extends(style, this.props.style);
			return _react2['default'].createElement(this.props.component, props, this.props.children);
		}
	}]);

	return Fade;
})(_react.Component);

Fade.propTypes = {
	children: _react.PropTypes.any,
	component: _react.PropTypes.any,
	duration: _react.PropTypes.number,
	style: _react.PropTypes.object
};

Fade.defaultProps = {
	component: 'div',
	duration: 200,
	ref: 'element'
};

exports['default'] = Fade;
module.exports = exports['default'];

},{"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

var Icon = function Icon(props) {
	return _react2['default'].createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: _icons2['default'][props.type] }
	}, props));
};

Icon.propTypes = {
	type: _react.PropTypes.oneOf(Object.keys(_icons2['default']))
};

exports['default'] = Icon;
module.exports = exports['default'];

},{"./icons":7,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _reactDom = require('react-dom');

var FirstChild = function FirstChild(_ref) {
	var children = _ref.children;

	var kids = _react.Children.toArray(children);
	return kids[0] || null;
};

var Portal = (function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		_get(Object.getPrototypeOf(Portal.prototype), 'constructor', this).call(this);
		this.portalElement = null;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			(0, _reactDom.render)(_react2['default'].createElement(_reactAddonsTransitionGroup2['default'], _extends({}, this.props, { component: FirstChild })), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Portal;
})(_react.Component);

exports['default'] = Portal;

Portal.propTypes = {
	children: _react.PropTypes.element
};
module.exports = exports['default'];

},{"react":undefined,"react-addons-transition-group":undefined,"react-dom":undefined}],4:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">' + '<path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"/>' + '</svg>';

},{}],5:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">' + '<path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"/>' + '</svg>';

},{}],6:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' + '<path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>' + '</svg>';

},{}],7:[function(require,module,exports){
'use strict';

module.exports = {
	arrowLeft: require('./arrowLeft'),
	arrowRight: require('./arrowRight'),
	close: require('./close')
};

},{"./arrowLeft":4,"./arrowRight":5,"./close":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var CLOSE_SIZE = 20;
var ARROW_HEIGHT = 120;
var GAP_BOTTOM = 50;
var GAP_TOP = 40;

var styles = {
	// SCENE
	container: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		boxSizing: 'border-box',
		height: '100%',
		left: 0,
		padding: '0 10px',
		position: 'fixed',
		textAlign: 'center',
		top: 0,
		width: '100%',
		zIndex: 2001
	},
	content: {
		display: 'inline-block',
		margin: '0 auto',
		maxWidth: '100%',
		position: 'relative',
		verticalAlign: 'middle'
	},
	contentHeightShim: {
		display: 'inline-block',
		height: '100%',
		lineHeight: 0,
		verticalAlign: 'middle'
	},

	// IMAGES
	image: {
		boxSizing: 'border-box',
		display: 'block',
		lineHeight: 0,
		maxWidth: '100%',
		margin: '0 auto',
		paddingBottom: 50,
		paddingTop: 40,
		height: 'auto',
		width: 'auto',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'

	},
	figure: {
		backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDhweCcgaGVpZ2h0PSc0OHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1kZWZhdWx0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjA4MzMzMzMzMzMzMzMzMzMzcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMTY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDkwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4yNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4zMzMzMzMzMzMzMzMzMzMzcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjQxNjY2NjY2NjY2NjY2NjdzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC41ODMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNzVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuODMzMzMzMzMzMzMzMzMzNHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMzMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC45MTY2NjY2NjY2NjY2NjY2cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PC9zdmc+)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		lineHeight: 1,
		minHeight: 200,
		minWidth: 300,
		margin: 0,
		textAlign: 'center'
	},
	figureShadow: {
		bottom: GAP_BOTTOM,
		boxShadow: '0 0 8px -2px rgba(0,0,0,.6)',
		display: 'block',
		height: 'auto',
		left: 0,
		position: 'absolute',
		right: 0,
		top: GAP_TOP,
		width: 'auto',
		zIndex: -1
	},
	footer: {
		color: 'white',
		lineHeight: 1.3,
		height: GAP_BOTTOM,
		marginTop: -GAP_BOTTOM,
		paddingTop: 5,
		position: 'absolute',
		textAlign: 'left',
		top: '100%',
		left: 0,
		width: '100%',
		cursor: 'auto'
	},
	footerCount: {
		float: 'right',
		fontSize: '.85em',
		opacity: 0.75
	},
	footerCaption: {
		paddingRight: 80
	},

	// BUTTONS
	arrow: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		marginTop: ARROW_HEIGHT / -2,
		maxWidth: 80,
		padding: 20,
		position: 'absolute',
		top: '50%',
		height: ARROW_HEIGHT,
		width: '16%',
		zIndex: 1001,

		// disable user select
		WebkitTouchCallout: 'none',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	arrowNext: {
		right: 0
	},
	arrowPrev: {
		left: 0
	},
	closeBar: {
		height: GAP_TOP,
		left: 0,
		position: 'absolute',
		textAlign: 'right',
		top: 0,
		width: '100%'
	},
	closeButton: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		height: CLOSE_SIZE + 20,
		outline: 'none',
		padding: 10,
		position: 'relative',
		right: -10,
		top: 0,
		verticalAlign: 'bottom',
		width: CLOSE_SIZE + 20
	}
};

exports['default'] = styles;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

"use strict";

module.exports = function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
};

},{}],10:[function(require,module,exports){
// Don't try and apply overflow/padding if the scroll is already blocked
'use strict';

var bodyBlocked = false;

var allowScroll = function allowScroll() {
	if (typeof window === 'undefined' || !bodyBlocked) return;

	//  FIXME iOS ignores overflow on body

	try {
		var target = document.body;

		target.style.paddingRight = '';
		target.style.overflowY = '';

		bodyBlocked = false;
	} catch (err) {
		console.error('Failed to find body element. Err:', err);
	}
};

var blockScroll = function blockScroll() {
	if (typeof window === 'undefined' || bodyBlocked) return;

	//  FIXME iOS ignores overflow on body

	try {
		var scrollBarWidth = window.innerWidth - document.body.clientWidth;

		var target = document.body;

		target.style.paddingRight = scrollBarWidth + 'px';
		target.style.overflowY = 'hidden';

		bodyBlocked = true;
	} catch (err) {
		console.error('Failed to find body element. Err:', err);
	}
};

module.exports = {
	allowScroll: allowScroll,
	blockScroll: blockScroll
};

},{}],11:[function(require,module,exports){
// Return true if window + document

'use strict';

module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

},{}],12:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bindFunctions = require('./bindFunctions');

var _bindFunctions2 = _interopRequireDefault(_bindFunctions);

var _bodyScroll = require('./bodyScroll');

var _bodyScroll2 = _interopRequireDefault(_bodyScroll);

var _canUseDom = require('./canUseDom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

module.exports = {
	bindFunctions: _bindFunctions2['default'],
	bodyScroll: _bodyScroll2['default'],
	canUseDom: _canUseDom2['default']
};

},{"./bindFunctions":9,"./bodyScroll":10,"./canUseDom":11}],"react-images":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jss = require('jss');

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssPx = require('jss-px');

var _jssPx2 = _interopRequireDefault(_jssPx);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _stylesDefault = require('./styles/default');

var _stylesDefault2 = _interopRequireDefault(_stylesDefault);

var jss = (0, _jss.create)();
exports.jss = jss;
var useSheet = (0, _reactJss2['default'])(jss);
exports.useSheet = useSheet;
jss.use((0, _jssCamelCase2['default'])());
jss.use((0, _jssNested2['default'])());
jss.use((0, _jssPx2['default'])());
jss.use((0, _jssVendorPrefixer2['default'])());

var Lightbox = (function (_Component) {
  _inherits(Lightbox, _Component);

  _createClass(Lightbox, null, [{
    key: 'theme',
    value: function theme(themeStyles) {
      var extStyles = _extends({}, _stylesDefault2['default']);
      for (var key in extStyles) {
        if (key in themeStyles) {
          extStyles[key] = _extends({}, _stylesDefault2['default'][key], themeStyles[key]);
        }
      }
      return extStyles;
    }
  }]);

  function Lightbox() {
    _classCallCheck(this, Lightbox);

    _get(Object.getPrototypeOf(Lightbox.prototype), 'constructor', this).call(this);

    _utils2['default'].bindFunctions.call(this, ['close', 'gotoNext', 'gotoPrev', 'handleImageClick', 'handleKeyboardInput', 'handleResize']);

    this.state = { windowHeight: 0 };
  }

  _createClass(Lightbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!_utils2['default'].canUseDom) return;

      if (nextProps.isOpen && nextProps.enableKeyboardInput) {
        window.addEventListener('keydown', this.handleKeyboardInput);
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      } else {
        window.removeEventListener('keydown', this.handleKeyboardInput);
        window.removeEventListener('resize', this.handleResize);
      }

      if (nextProps.isOpen) {
        _utils2['default'].bodyScroll.blockScroll();
      } else {
        _utils2['default'].bodyScroll.allowScroll();
      }
    }

    // ==============================
    // METHODS
    // ==============================

  }, {
    key: 'close',
    value: function close(e) {
      if (e.target.id !== 'react-images-container') return;

      if (this.props.backdropClosesModal && this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext(event) {
      if (this.props.currentImage === this.props.images.length - 1) return;
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.props.onClickNext();
    }
  }, {
    key: 'gotoPrev',
    value: function gotoPrev(event) {
      if (this.props.currentImage === 0) return;
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.props.onClickPrev();
    }
  }, {
    key: 'handleImageClick',
    value: function handleImageClick() {
      if (!this.props.onClickImage) return;

      this.props.onClickImage();
    }
  }, {
    key: 'handleKeyboardInput',
    value: function handleKeyboardInput(event) {
      if (event.keyCode === 37) {
        this.gotoPrev(event);
        return true;
      } else if (event.keyCode === 39) {
        this.gotoNext(event);
        return true;
      } else if (event.keyCode === 27) {
        this.props.onClose();
        return true;
      }
      return false;
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      this.setState({
        windowHeight: window.innerHeight || 0
      });
    }

    // ==============================
    // RENDERERS
    // ==============================

  }, {
    key: 'renderArrowPrev',
    value: function renderArrowPrev() {
      if (this.props.currentImage === 0) return null;
      var classes = this.props.sheet.classes;

      return _react2['default'].createElement(
        'button',
        { title: 'Previous (Left arrow key)',
          type: 'button',
          className: classes.arrow + ' ' + classes.arrowPrev,
          onClick: this.gotoPrev,
          onTouchEnd: this.gotoPrev
        },
        _react2['default'].createElement(_Icon2['default'], { type: 'arrowLeft' })
      );
    }
  }, {
    key: 'renderArrowNext',
    value: function renderArrowNext() {
      if (this.props.currentImage === this.props.images.length - 1) return null;
      var classes = this.props.sheet.classes;

      return _react2['default'].createElement(
        'button',
        { title: 'Next (Right arrow key)',
          type: 'button',
          className: classes.arrow + ' ' + classes.arrowNext,
          onClick: this.gotoNext,
          onTouchEnd: this.gotoNext
        },
        _react2['default'].createElement(_Icon2['default'], { type: 'arrowRight' })
      );
    }
  }, {
    key: 'renderCloseBar',
    value: function renderCloseBar() {
      var classes = this.props.sheet.classes;

      return _react2['default'].createElement(
        'div',
        { className: classes.closeBar },
        this.renderCustomControls(),
        this.renderCloseButton()
      );
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      if (!this.props.showCloseButton) return null;
      var classes = this.props.sheet.classes;

      return _react2['default'].createElement(
        'button',
        {
          title: 'Close (Esc)',
          className: classes.closeButton,
          onClick: this.props.onClose
        },
        _react2['default'].createElement(_Icon2['default'], { type: 'close' })
      );
    }
  }, {
    key: 'renderCustomControls',
    value: function renderCustomControls() {
      if (!this.props.customControls) return null;
      return this.props.customControls;
    }
  }, {
    key: 'renderDialog',
    value: function renderDialog() {
      if (!this.props.isOpen) return null;
      var classes = this.props.sheet.classes;

      return _react2['default'].createElement(
        _Fade2['default'],
        { id: 'react-images-container',
          key: 'dialog',
          duration: 250,
          className: classes.container,
          onClick: this.close,
          onTouchEnd: this.close
        },
        _react2['default'].createElement('span', { className: classes.contentHeightShim }),
        _react2['default'].createElement(
          'div',
          { className: classes.content },
          this.renderCloseBar(),
          this.renderImages()
        ),
        this.renderArrowPrev(),
        this.renderArrowNext()
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter(caption) {
      var _props = this.props;
      var currentImage = _props.currentImage;
      var images = _props.images;
      var imageCountSeparator = _props.imageCountSeparator;
      var showImageCount = _props.showImageCount;
      var classes = this.props.sheet.classes;

      if (!caption && !showImageCount) return null;

      var imageCount = showImageCount ? _react2['default'].createElement(
        'div',
        { className: classes.footerCount },
        currentImage + 1,
        imageCountSeparator,
        images.length
      ) : null;
      var figcaption = caption ? _react2['default'].createElement(
        'figcaption',
        { className: classes.footerCaption },
        caption
      ) : null;

      return _react2['default'].createElement(
        'div',
        { className: classes.footer },
        imageCount,
        figcaption
      );
    }
  }, {
    key: 'createMedia',
    value: function createMedia(image, sizes, srcset) {
      var classes = this.props.sheet.classes;
      var windowHeight = this.state.windowHeight;

      if (image.type && image.type === 'youtube') {
        return _react2['default'].createElement(_reactYoutube2['default'], {
          videoId: image.src,
          opts: {
            playerVars: {
              autoplay: 1
            }
          }
        });
      }

      return _react2['default'].createElement('img', { className: classes.image,
        onClick: this.handleImageClick,
        sizes: sizes,
        src: image.src,
        srcSet: srcset,
        style: {
          cursor: this.props.onClickImage ? 'pointer' : 'auto',
          maxHeight: windowHeight
        }
      });
    }
  }, {
    key: 'renderImages',
    value: function renderImages() {
      var _props2 = this.props;
      var images = _props2.images;
      var currentImage = _props2.currentImage;
      var classes = this.props.sheet.classes;
      var windowHeight = this.state.windowHeight;

      if (!images || !images.length) return null;

      var image = images[currentImage];

      var srcset = undefined;
      var sizes = undefined;

      if (image.srcset) {
        srcset = image.srcset.join();
        sizes = '100vw';
      }

      return _react2['default'].createElement(
        'figure',
        { key: 'image ' + currentImage,
          className: classes.figure,
          style: { maxWidth: this.props.width }
        },
        _react2['default'].createElement(
          _reactSwipeable2['default'],
          { onSwipedLeft: this.gotoNext, onSwipedRight: this.gotoPrev },
          this.createMedia(image, sizes, srcset)
        ),
        this.renderFooter(images[currentImage].caption)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Portal2['default'],
        null,
        this.renderDialog()
      );
    }
  }]);

  return Lightbox;
})(_react.Component);

Lightbox.displayName = 'Lightbox';

Lightbox.propTypes = {
  backdropClosesModal: _react.PropTypes.bool,
  currentImage: _react.PropTypes.number,
  customControls: _react.PropTypes.arrayOf(_react.PropTypes.node),
  enableKeyboardInput: _react.PropTypes.bool,
  imageCountSeparator: _react.PropTypes.string,
  images: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    src: _react.PropTypes.string.isRequired,
    srcset: _react.PropTypes.array,
    caption: _react.PropTypes.string,
    type: _react.PropTypes.string
  })).isRequired,
  isOpen: _react.PropTypes.bool,
  onClickImage: _react.PropTypes.func,
  onClickNext: _react.PropTypes.func,
  onClickPrev: _react.PropTypes.func,
  onClose: _react.PropTypes.func.isRequired,
  sheet: _react.PropTypes.object,
  showCloseButton: _react.PropTypes.bool,
  showImageCount: _react.PropTypes.bool,
  width: _react.PropTypes.number
};

Lightbox.defaultProps = {
  currentImage: 0,
  enableKeyboardInput: true,
  imageCountSeparator: ' of ',
  onClickShowNextImage: true,
  showCloseButton: true,
  showImageCount: true,
  width: 900
};

exports['default'] = useSheet(Lightbox, _stylesDefault2['default']);

},{"./Fade":1,"./Icon":2,"./Portal":3,"./styles/default":8,"./utils":12,"jss":undefined,"jss-camel-case":undefined,"jss-nested":undefined,"jss-px":undefined,"jss-vendor-prefixer":undefined,"react":undefined,"react-jss":undefined,"react-swipeable":undefined,"react-youtube":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFuaWVsZmx5bm4vZ2l0aHViL3JlYWN0LWltYWdlcy9zcmMvRmFkZS5qcyIsIi9Vc2Vycy9kYW5pZWxmbHlubi9naXRodWIvcmVhY3QtaW1hZ2VzL3NyYy9JY29uLmpzIiwiL1VzZXJzL2RhbmllbGZseW5uL2dpdGh1Yi9yZWFjdC1pbWFnZXMvc3JjL1BvcnRhbC5qcyIsIi9Vc2Vycy9kYW5pZWxmbHlubi9naXRodWIvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9hcnJvd0xlZnQuanMiLCIvVXNlcnMvZGFuaWVsZmx5bm4vZ2l0aHViL3JlYWN0LWltYWdlcy9zcmMvaWNvbnMvYXJyb3dSaWdodC5qcyIsIi9Vc2Vycy9kYW5pZWxmbHlubi9naXRodWIvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9jbG9zZS5qcyIsIi9Vc2Vycy9kYW5pZWxmbHlubi9naXRodWIvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9pbmRleC5qcyIsIi9Vc2Vycy9kYW5pZWxmbHlubi9naXRodWIvcmVhY3QtaW1hZ2VzL3NyYy9zdHlsZXMvZGVmYXVsdC5qcyIsIi9Vc2Vycy9kYW5pZWxmbHlubi9naXRodWIvcmVhY3QtaW1hZ2VzL3NyYy91dGlscy9iaW5kRnVuY3Rpb25zLmpzIiwiL1VzZXJzL2RhbmllbGZseW5uL2dpdGh1Yi9yZWFjdC1pbWFnZXMvc3JjL3V0aWxzL2JvZHlTY3JvbGwuanMiLCIvVXNlcnMvZGFuaWVsZmx5bm4vZ2l0aHViL3JlYWN0LWltYWdlcy9zcmMvdXRpbHMvY2FuVXNlRG9tLmpzIiwiL1VzZXJzL2RhbmllbGZseW5uL2dpdGh1Yi9yZWFjdC1pbWFnZXMvc3JjL3V0aWxzL2luZGV4LmpzIiwiL1VzZXJzL2RhbmllbGZseW5uL2dpdGh1Yi9yZWFjdC1pbWFnZXMvc3JjL0xpZ2h0Ym94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FC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QUUsaUJBQVUsSUFBSTtBQUMzQixTQUFPLEVBQUUsaUJBQVUsSUFBSSxDQUFDLFVBQVU7QUFDbEMsT0FBSyxFQUFFLGlCQUFVLE1BQU07QUFDdkIsaUJBQWUsRUFBRSxpQkFBVSxJQUFJO0FBQy9CLGdCQUFjLEVBQUUsaUJBQVUsSUFBSTtBQUM5QixPQUFLLEVBQUUsaUJBQVUsTUFBTTtDQUN4QixDQUFDOztBQUVGLFFBQVEsQ0FBQyxZQUFZLEdBQUc7QUFDdEIsY0FBWSxFQUFFLENBQUM7QUFDZixxQkFBbUIsRUFBRSxJQUFJO0FBQ3pCLHFCQUFtQixFQUFFLE1BQU07QUFDM0Isc0JBQW9CLEVBQUUsSUFBSTtBQUMxQixpQkFBZSxFQUFFLElBQUk7QUFDckIsZ0JBQWMsRUFBRSxJQUFJO0FBQ3BCLE9BQUssRUFBRSxHQUFHO0NBQ1gsQ0FBQzs7cUJBRWEsUUFBUSxDQUFDLFFBQVEsNkJBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRmFkZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3Nob3dFbGVtZW50ID0gdGhpcy5fc2hvd0VsZW1lbnQuYmluZCh0aGlzKTtcblx0XHR0aGlzLl9oaWRlRWxlbWVudCA9IHRoaXMuX2hpZGVFbGVtZW50LmJpbmQodGhpcyk7XG5cdH1cblx0Y29tcG9uZW50V2lsbEFwcGVhciAoY2FsbGJhY2spIHtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrLCAxKTsgLy8gbmVlZCBhdCBsZWFzdCBvbmUgdGljayB0byBmaXJlIHRyYW5zaXRpb25cblx0fVxuXHRjb21wb25lbnREaWRBcHBlYXIgKCkge1xuXHRcdHRoaXMuX3Nob3dFbGVtZW50KCk7XG5cdH1cblx0Y29tcG9uZW50V2lsbEVudGVyIChjYWxsYmFjaykge1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2ssIDEpO1xuXHR9XG5cdGNvbXBvbmVudERpZEVudGVyICgpIHtcblx0XHR0aGlzLl9zaG93RWxlbWVudCgpO1xuXHR9XG5cdGNvbXBvbmVudFdpbGxMZWF2ZSAoY2FsbGJhY2spIHtcblx0XHR0aGlzLl9oaWRlRWxlbWVudCgpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2ssIHRoaXMucHJvcHMuZHVyYXRpb24pO1xuXHR9XG5cdGNvbXBvbmVudERpZExlYXZlICgpIHtcblx0XHQvLyBlbXB0eVxuXHR9XG5cblx0X3Nob3dFbGVtZW50ICgpIHtcblx0XHRjb25zdCBlbCA9IHRoaXMucmVmcy5lbGVtZW50O1xuXHRcdGVsLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHR9XG5cdF9oaWRlRWxlbWVudCAoKSB7XG5cdFx0Y29uc3QgZWwgPSB0aGlzLnJlZnMuZWxlbWVudDtcblx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gMDtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcblx0XHRjb25zdCBzdHlsZSA9IHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRXZWJraXRUcmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoaXMucHJvcHMuZHVyYXRpb259bXMgZWFzZS1vdXRgLFxuXHRcdFx0bXNUcmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoaXMucHJvcHMuZHVyYXRpb259bXMgZWFzZS1vdXRgLFxuXHRcdFx0dHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGlzLnByb3BzLmR1cmF0aW9ufW1zIGVhc2Utb3V0YCxcblx0XHR9O1xuXHRcdHByb3BzLnN0eWxlID0gT2JqZWN0LmFzc2lnbihzdHlsZSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHR0aGlzLnByb3BzLmNvbXBvbmVudCxcblx0XHRcdHByb3BzLFxuXHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdCk7XG5cdH1cbn1cblxuRmFkZS5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG5cdGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkZhZGUuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdkaXYnLFxuXHRkdXJhdGlvbjogMjAwLFxuXHRyZWY6ICdlbGVtZW50Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhZGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMnO1xuXG5jb25zdCBJY29uID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuXG5cdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpY29uc1twcm9wcy50eXBlXSB9fVxuXHRcdHsuLi5wcm9wc31cblx0Lz5cbik7XG5cbkljb24ucHJvcFR5cGVzID0ge1xuXHR0eXBlOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoaWNvbnMpKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtYWRkb25zLXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgRmlyc3RDaGlsZCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0bGV0IGtpZHMgPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblx0cmV0dXJuIGtpZHNbMF0gfHwgbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcnRhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucG9ydGFsRWxlbWVudCA9IG51bGw7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHApO1xuXHRcdHRoaXMucG9ydGFsRWxlbWVudCA9IHA7XG5cdFx0dGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcblx0fVxuXHRjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXHRcdHJlbmRlcihcblx0XHRcdDxUcmFuc2l0aW9uIHsuLi50aGlzLnByb3BzfSBjb21wb25lbnQ9e0ZpcnN0Q2hpbGR9IC8+LFxuXHRcdFx0XHR0aGlzLnBvcnRhbEVsZW1lbnRcblx0XHQpO1xuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMucG9ydGFsRWxlbWVudCk7XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoXG5cdCc8c3ZnIGZpbGw9XCJ3aGl0ZVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj4nXG5cdFx0KyAnPHBhdGggZD1cIk0yMTMuNywyNTZMMjEzLjcsMjU2TDIxMy43LDI1NkwzODAuOSw4MS45YzQuMi00LjMsNC4xLTExLjQtMC4yLTE1LjhsLTI5LjktMzAuNmMtNC4zLTQuNC0xMS4zLTQuNS0xNS41LTAuMkwxMzEuMSwyNDcuOSBjLTIuMiwyLjItMy4yLDUuMi0zLDguMWMtMC4xLDMsMC45LDUuOSwzLDguMWwyMDQuMiwyMTIuN2M0LjIsNC4zLDExLjIsNC4yLDE1LjUtMC4ybDI5LjktMzAuNmM0LjMtNC40LDQuNC0xMS41LDAuMi0xNS44IEwyMTMuNywyNTZ6XCIvPidcblx0KyAnPC9zdmc+J1xuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKFxuXHQnPHN2ZyBmaWxsPVwid2hpdGVcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+J1xuXHRcdCsgJzxwYXRoIGQ9XCJNMjk4LjMsMjU2TDI5OC4zLDI1NkwyOTguMywyNTZMMTMxLjEsODEuOWMtNC4yLTQuMy00LjEtMTEuNCwwLjItMTUuOGwyOS45LTMwLjZjNC4zLTQuNCwxMS4zLTQuNSwxNS41LTAuMmwyMDQuMiwyMTIuNyBjMi4yLDIuMiwzLjIsNS4yLDMsOC4xYzAuMSwzLTAuOSw1LjktMyw4LjFMMTc2LjcsNDc2LjhjLTQuMiw0LjMtMTEuMiw0LjItMTUuNS0wLjJMMTMxLjMsNDQ2Yy00LjMtNC40LTQuNC0xMS41LTAuMi0xNS44IEwyOTguMywyNTZ6XCIvPidcblx0KyAnPC9zdmc+J1xuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKFxuXHQnPHN2ZyBmaWxsPVwid2hpdGVcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+J1xuXHRcdCsgJzxwYXRoIGQ9XCJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgTDI1NiwxOTcuOEwxMjQuOSw2OC4zYy0yLjYtMi42LTYuMS00LTkuOC00Yy0zLjcsMC03LjIsMS41LTkuOCw0TDY4LDEwNS45Yy01LjQsNS40LTUuNCwxNC4yLDAsMTkuNmwxMzEuNSwxMzBMNjguNCwzODcuMSBjLTIuNiwyLjYtNC4xLDYuMS00LjEsOS44YzAsMy43LDEuNCw3LjIsNC4xLDkuOGwzNy40LDM3LjZjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xTDI1NiwzMTMuMWwxMzAuNywxMzEuMSBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXpcIi8+J1xuXHQrICc8L3N2Zz4nXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFycm93TGVmdDogcmVxdWlyZSgnLi9hcnJvd0xlZnQnKSxcblx0YXJyb3dSaWdodDogcmVxdWlyZSgnLi9hcnJvd1JpZ2h0JyksXG5cdGNsb3NlOiByZXF1aXJlKCcuL2Nsb3NlJyksXG59O1xuIiwiY29uc3QgQ0xPU0VfU0laRSA9IDIwO1xuY29uc3QgQVJST1dfSEVJR0hUID0gMTIwO1xuY29uc3QgR0FQX0JPVFRPTSA9IDUwO1xuY29uc3QgR0FQX1RPUCA9IDQwO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdC8vIFNDRU5FXG5cdGNvbnRhaW5lcjoge1xuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC44KScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0bGVmdDogMCxcblx0XHRwYWRkaW5nOiAnMCAxMHB4Jyxcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdHRvcDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdHpJbmRleDogMjAwMSxcblx0fSxcblx0Y29udGVudDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpbjogJzAgYXV0bycsXG5cdFx0bWF4V2lkdGg6ICcxMDAlJyxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcblx0Y29udGVudEhlaWdodFNoaW06IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRsaW5lSGVpZ2h0OiAwLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHR9LFxuXG5cdC8vIElNQUdFU1xuXHRpbWFnZToge1xuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0bGluZUhlaWdodDogMCxcblx0XHRtYXhXaWR0aDogJzEwMCUnLFxuXHRcdG1hcmdpbjogJzAgYXV0bycsXG5cdFx0cGFkZGluZ0JvdHRvbTogNTAsXG5cdFx0cGFkZGluZ1RvcDogNDAsXG5cdFx0aGVpZ2h0OiAnYXV0bycsXG5cdFx0d2lkdGg6ICdhdXRvJyxcblxuXHRcdC8vIGRpc2FibGUgdXNlciBzZWxlY3Rcblx0XHRXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcblx0XHR1c2VyU2VsZWN0OiAnbm9uZScsXG5cblx0fSxcblx0ZmlndXJlOiB7XG5cdFx0YmFja2dyb3VuZEltYWdlOiAndXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwbk5EaHdlQ2NnYUdWcFoyaDBQU2MwT0hCNEp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01UQXdJaUJ3Y21WelpYSjJaVUZ6Y0dWamRGSmhkR2x2UFNKNFRXbGtXVTFwWkNJZ1kyeGhjM005SW5WcGJDMWtaV1poZFd4MElqNDhjbVZqZENCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU1UQXdJaUJvWldsbmFIUTlJakV3TUNJZ1ptbHNiRDBpYm05dVpTSWdZMnhoYzNNOUltSnJJajQ4TDNKbFkzUStQSEpsWTNRZ0lIZzlKelEyTGpVbklIazlKelF3SnlCM2FXUjBhRDBuTnljZ2FHVnBaMmgwUFNjeU1DY2djbmc5SnpVbklISjVQU2MxSnlCbWFXeHNQU2NqWm1abVptWm1KeUIwY21GdWMyWnZjbTA5SjNKdmRHRjBaU2d3SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1ITW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9NekFnTlRBZ05UQXBJSFJ5WVc1emJHRjBaU2d3SUMwek1Da25QaUFnUEdGdWFXMWhkR1VnWVhSMGNtbGlkWFJsVG1GdFpUMG5iM0JoWTJsMGVTY2dabkp2YlQwbk1TY2dkRzg5SnpBbklHUjFjajBuTVhNbklHSmxaMmx1UFNjd0xqQTRNek16TXpNek16TXpNek16TXpNemN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BISmxZM1FnSUhnOUp6UTJMalVuSUhrOUp6UXdKeUIzYVdSMGFEMG5OeWNnYUdWcFoyaDBQU2N5TUNjZ2NuZzlKelVuSUhKNVBTYzFKeUJtYVd4c1BTY2pabVptWm1abUp5QjBjbUZ1YzJadmNtMDlKM0p2ZEdGMFpTZzJNQ0ExTUNBMU1Da2dkSEpoYm5Oc1lYUmxLREFnTFRNd0tTYytJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTZHZjR0ZqYVhSNUp5Qm1jbTl0UFNjeEp5QjBiejBuTUNjZ1pIVnlQU2N4Y3ljZ1ltVm5hVzQ5SnpBdU1UWTJOalkyTmpZMk5qWTJOalkyTmpaekp5QnlaWEJsWVhSRGIzVnVkRDBuYVc1a1pXWnBibWwwWlNjdlBqd3ZjbVZqZEQ0OGNtVmpkQ0FnZUQwbk5EWXVOU2NnZVQwbk5EQW5JSGRwWkhSb1BTYzNKeUJvWldsbmFIUTlKekl3SnlCeWVEMG5OU2NnY25rOUp6VW5JR1pwYkd3OUp5Tm1abVptWm1ZbklIUnlZVzV6Wm05eWJUMG5jbTkwWVhSbEtEa3dJRFV3SURVd0tTQjBjbUZ1YzJ4aGRHVW9NQ0F0TXpBcEp6NGdJRHhoYm1sdFlYUmxJR0YwZEhKcFluVjBaVTVoYldVOUoyOXdZV05wZEhrbklHWnliMjA5SnpFbklIUnZQU2N3SnlCa2RYSTlKekZ6SnlCaVpXZHBiajBuTUM0eU5YTW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9NVEl3SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1DNHpNek16TXpNek16TXpNek16TXpNemN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BISmxZM1FnSUhnOUp6UTJMalVuSUhrOUp6UXdKeUIzYVdSMGFEMG5OeWNnYUdWcFoyaDBQU2N5TUNjZ2NuZzlKelVuSUhKNVBTYzFKeUJtYVd4c1BTY2pabVptWm1abUp5QjBjbUZ1YzJadmNtMDlKM0p2ZEdGMFpTZ3hOVEFnTlRBZ05UQXBJSFJ5WVc1emJHRjBaU2d3SUMwek1Da25QaUFnUEdGdWFXMWhkR1VnWVhSMGNtbGlkWFJsVG1GdFpUMG5iM0JoWTJsMGVTY2dabkp2YlQwbk1TY2dkRzg5SnpBbklHUjFjajBuTVhNbklHSmxaMmx1UFNjd0xqUXhOalkyTmpZMk5qWTJOalkyTmpkekp5QnlaWEJsWVhSRGIzVnVkRDBuYVc1a1pXWnBibWwwWlNjdlBqd3ZjbVZqZEQ0OGNtVmpkQ0FnZUQwbk5EWXVOU2NnZVQwbk5EQW5JSGRwWkhSb1BTYzNKeUJvWldsbmFIUTlKekl3SnlCeWVEMG5OU2NnY25rOUp6VW5JR1pwYkd3OUp5Tm1abVptWm1ZbklIUnlZVzV6Wm05eWJUMG5jbTkwWVhSbEtERTRNQ0ExTUNBMU1Da2dkSEpoYm5Oc1lYUmxLREFnTFRNd0tTYytJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTZHZjR0ZqYVhSNUp5Qm1jbTl0UFNjeEp5QjBiejBuTUNjZ1pIVnlQU2N4Y3ljZ1ltVm5hVzQ5SnpBdU5YTW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9NakV3SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1DNDFPRE16TXpNek16TXpNek16TXpNMGN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BISmxZM1FnSUhnOUp6UTJMalVuSUhrOUp6UXdKeUIzYVdSMGFEMG5OeWNnYUdWcFoyaDBQU2N5TUNjZ2NuZzlKelVuSUhKNVBTYzFKeUJtYVd4c1BTY2pabVptWm1abUp5QjBjbUZ1YzJadmNtMDlKM0p2ZEdGMFpTZ3lOREFnTlRBZ05UQXBJSFJ5WVc1emJHRjBaU2d3SUMwek1Da25QaUFnUEdGdWFXMWhkR1VnWVhSMGNtbGlkWFJsVG1GdFpUMG5iM0JoWTJsMGVTY2dabkp2YlQwbk1TY2dkRzg5SnpBbklHUjFjajBuTVhNbklHSmxaMmx1UFNjd0xqWTJOalkyTmpZMk5qWTJOalkyTmpaekp5QnlaWEJsWVhSRGIzVnVkRDBuYVc1a1pXWnBibWwwWlNjdlBqd3ZjbVZqZEQ0OGNtVmpkQ0FnZUQwbk5EWXVOU2NnZVQwbk5EQW5JSGRwWkhSb1BTYzNKeUJvWldsbmFIUTlKekl3SnlCeWVEMG5OU2NnY25rOUp6VW5JR1pwYkd3OUp5Tm1abVptWm1ZbklIUnlZVzV6Wm05eWJUMG5jbTkwWVhSbEtESTNNQ0ExTUNBMU1Da2dkSEpoYm5Oc1lYUmxLREFnTFRNd0tTYytJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTZHZjR0ZqYVhSNUp5Qm1jbTl0UFNjeEp5QjBiejBuTUNjZ1pIVnlQU2N4Y3ljZ1ltVm5hVzQ5SnpBdU56VnpKeUJ5WlhCbFlYUkRiM1Z1ZEQwbmFXNWtaV1pwYm1sMFpTY3ZQand2Y21WamRENDhjbVZqZENBZ2VEMG5ORFl1TlNjZ2VUMG5OREFuSUhkcFpIUm9QU2MzSnlCb1pXbG5hSFE5SnpJd0p5QnllRDBuTlNjZ2NuazlKelVuSUdacGJHdzlKeU5tWm1abVptWW5JSFJ5WVc1elptOXliVDBuY205MFlYUmxLRE13TUNBMU1DQTFNQ2tnZEhKaGJuTnNZWFJsS0RBZ0xUTXdLU2MrSUNBOFlXNXBiV0YwWlNCaGRIUnlhV0oxZEdWT1lXMWxQU2R2Y0dGamFYUjVKeUJtY205dFBTY3hKeUIwYnowbk1DY2daSFZ5UFNjeGN5Y2dZbVZuYVc0OUp6QXVPRE16TXpNek16TXpNek16TXpNek5ITW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9Nek13SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1DNDVNVFkyTmpZMk5qWTJOalkyTmpZMmN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BDOXpkbWMrKScsXG5cdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG5cdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG5cdFx0bGluZUhlaWdodDogMSxcblx0XHRtaW5IZWlnaHQ6IDIwMCxcblx0XHRtaW5XaWR0aDogMzAwLFxuXHRcdG1hcmdpbjogMCxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHR9LFxuXHRmaWd1cmVTaGFkb3c6IHtcblx0XHRib3R0b206IEdBUF9CT1RUT00sXG5cdFx0Ym94U2hhZG93OiAnMCAwIDhweCAtMnB4IHJnYmEoMCwwLDAsLjYpJyxcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0dG9wOiBHQVBfVE9QLFxuXHRcdHdpZHRoOiAnYXV0bycsXG5cdFx0ekluZGV4OiAtMSxcblx0fSxcblx0Zm9vdGVyOiB7XG5cdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0bGluZUhlaWdodDogMS4zLFxuXHRcdGhlaWdodDogR0FQX0JPVFRPTSxcblx0XHRtYXJnaW5Ub3A6IC1HQVBfQk9UVE9NLFxuXHRcdHBhZGRpbmdUb3A6IDUsXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXG5cdFx0dG9wOiAnMTAwJScsXG5cdFx0bGVmdDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGN1cnNvcjogJ2F1dG8nLFxuXHR9LFxuXHRmb290ZXJDb3VudDoge1xuXHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdGZvbnRTaXplOiAnLjg1ZW0nLFxuXHRcdG9wYWNpdHk6IDAuNzUsXG5cdH0sXG5cdGZvb3RlckNhcHRpb246IHtcblx0XHRwYWRkaW5nUmlnaHQ6IDgwLFxuXHR9LFxuXG5cdC8vIEJVVFRPTlNcblx0YXJyb3c6IHtcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyOiAnbm9uZScsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdG1hcmdpblRvcDogQVJST1dfSEVJR0hUIC8gLTIsXG5cdFx0bWF4V2lkdGg6IDgwLFxuXHRcdHBhZGRpbmc6IDIwLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogJzUwJScsXG5cdFx0aGVpZ2h0OiBBUlJPV19IRUlHSFQsXG5cdFx0d2lkdGg6ICcxNiUnLFxuXHRcdHpJbmRleDogMTAwMSxcblxuXHRcdC8vIGRpc2FibGUgdXNlciBzZWxlY3Rcblx0XHRXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcblx0XHRXZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsXG5cdFx0TW96VXNlclNlbGVjdDogJ25vbmUnLFxuXHRcdG1zVXNlclNlbGVjdDogJ25vbmUnLFxuXHRcdHVzZXJTZWxlY3Q6ICdub25lJyxcblx0fSxcblx0YXJyb3dOZXh0OiB7XG5cdFx0cmlnaHQ6IDAsXG5cdH0sXG5cdGFycm93UHJldjoge1xuXHRcdGxlZnQ6IDAsXG5cdH0sXG5cdGNsb3NlQmFyOiB7XG5cdFx0aGVpZ2h0OiBHQVBfVE9QLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dGV4dEFsaWduOiAncmlnaHQnLFxuXHRcdHRvcDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHR9LFxuXHRjbG9zZUJ1dHRvbjoge1xuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRoZWlnaHQ6IENMT1NFX1NJWkUgKyAyMCxcblx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdFx0cGFkZGluZzogMTAsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0cmlnaHQ6IC0xMCxcblx0XHR0b3A6IDAsXG5cdFx0dmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG5cdFx0d2lkdGg6IENMT1NFX1NJWkUgKyAyMCxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiIsIi8qKlxuXHRCaW5kIG11bHRpcGxlIGNvbXBvbmVudCBtZXRob2RzOlxuXG5cdCogQHBhcmFtIHt0aGlzfSBjb250ZXh0XG5cdCogQHBhcmFtIHtBcnJheX0gZnVuY3Rpb25zXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Li4uXG5cdFx0YmluZEZ1bmN0aW9ucy5jYWxsKHRoaXMsIFsnaGFuZGxlQ2xpY2snLCAnaGFuZGxlT3RoZXInXSk7XG5cdH1cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZEZ1bmN0aW9ucyAoZnVuY3Rpb25zKSB7XG5cdGZ1bmN0aW9ucy5mb3JFYWNoKGYgPT4gKHRoaXNbZl0gPSB0aGlzW2ZdLmJpbmQodGhpcykpKTtcbn07XG4iLCIvLyBEb24ndCB0cnkgYW5kIGFwcGx5IG92ZXJmbG93L3BhZGRpbmcgaWYgdGhlIHNjcm9sbCBpcyBhbHJlYWR5IGJsb2NrZWRcbmxldCBib2R5QmxvY2tlZCA9IGZhbHNlO1xuXG5jb25zdCBhbGxvd1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFib2R5QmxvY2tlZCkgcmV0dXJuO1xuXG5cdC8vICBGSVhNRSBpT1MgaWdub3JlcyBvdmVyZmxvdyBvbiBib2R5XG5cblx0dHJ5IHtcblx0XHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuXG5cdFx0dGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuXHRcdHRhcmdldC5zdHlsZS5vdmVyZmxvd1kgPSAnJztcblxuXHRcdGJvZHlCbG9ja2VkID0gZmFsc2U7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmaW5kIGJvZHkgZWxlbWVudC4gRXJyOicsIGVycik7XG5cdH1cbn07XG5cbmNvbnN0IGJsb2NrU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgYm9keUJsb2NrZWQpIHJldHVybjtcblxuXHQvLyAgRklYTUUgaU9TIGlnbm9yZXMgb3ZlcmZsb3cgb24gYm9keVxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2Nyb2xsQmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuXG5cdFx0dGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbEJhcldpZHRoICsgJ3B4Jztcblx0XHR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cblx0XHRib2R5QmxvY2tlZCA9IHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmaW5kIGJvZHkgZWxlbWVudC4gRXJyOicsIGVycik7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbGxvd1Njcm9sbCxcblx0YmxvY2tTY3JvbGwsXG59O1xuIiwiLy8gUmV0dXJuIHRydWUgaWYgd2luZG93ICsgZG9jdW1lbnRcblxubW9kdWxlLmV4cG9ydHMgPSAhIShcblx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblx0JiYgd2luZG93LmRvY3VtZW50XG5cdCYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4pO1xuIiwiaW1wb3J0IGJpbmRGdW5jdGlvbnMgZnJvbSAnLi9iaW5kRnVuY3Rpb25zJztcbmltcG9ydCBib2R5U2Nyb2xsIGZyb20gJy4vYm9keVNjcm9sbCc7XG5pbXBvcnQgY2FuVXNlRG9tIGZyb20gJy4vY2FuVXNlRG9tJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGJpbmRGdW5jdGlvbnMsXG5cdGJvZHlTY3JvbGwsXG5cdGNhblVzZURvbSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xuaW1wb3J0IHJlYWN0SnNzIGZyb20gJ3JlYWN0LWpzcyc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2pzcy1jYW1lbC1jYXNlJztcbmltcG9ydCBweCBmcm9tICdqc3MtcHgnO1xuaW1wb3J0IG5lc3RlZCBmcm9tICdqc3MtbmVzdGVkJztcbmltcG9ydCB2ZW5kb3JQcmVmaXhlciBmcm9tICdqc3MtdmVuZG9yLXByZWZpeGVyJztcbmltcG9ydCBTd2lwZWFibGUgZnJvbSAncmVhY3Qtc3dpcGVhYmxlJztcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xuXG5leHBvcnQgbGV0IGpzcyA9IGNyZWF0ZSgpO1xuZXhwb3J0IGxldCB1c2VTaGVldCA9IHJlYWN0SnNzKGpzcyk7XG5qc3MudXNlKGNhbWVsQ2FzZSgpKTtcbmpzcy51c2UobmVzdGVkKCkpO1xuanNzLnVzZShweCgpKTtcbmpzcy51c2UodmVuZG9yUHJlZml4ZXIoKSk7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBGYWRlIGZyb20gJy4vRmFkZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL1BvcnRhbCc7XG5cbmltcG9ydCBkZWZhdWx0U3R5bGVzIGZyb20gJy4vc3R5bGVzL2RlZmF1bHQnO1xuXG5jbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0aGVtZSAodGhlbWVTdHlsZXMpIHtcbiAgICBjb25zdCBleHRTdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBleHRTdHlsZXMpIHtcbiAgICAgIGlmIChrZXkgaW4gdGhlbWVTdHlsZXMpIHtcbiAgICAgICAgZXh0U3R5bGVzW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzW2tleV0sIHRoZW1lU3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0U3R5bGVzO1xuICB9XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdXRpbHMuYmluZEZ1bmN0aW9ucy5jYWxsKHRoaXMsIFtcbiAgICAgICdjbG9zZScsXG4gICAgICAnZ290b05leHQnLFxuICAgICAgJ2dvdG9QcmV2JyxcbiAgICAgICdoYW5kbGVJbWFnZUNsaWNrJyxcbiAgICAgICdoYW5kbGVLZXlib2FyZElucHV0JyxcbiAgICAgICdoYW5kbGVSZXNpemUnLFxuICAgIF0pO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgd2luZG93SGVpZ2h0OiAwIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgaWYgKCF1dGlscy5jYW5Vc2VEb20pIHJldHVybjtcblxuICAgIGlmIChuZXh0UHJvcHMuaXNPcGVuICYmIG5leHRQcm9wcy5lbmFibGVLZXlib2FyZElucHV0KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmlzT3Blbikge1xuICAgICAgdXRpbHMuYm9keVNjcm9sbC5ibG9ja1Njcm9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dGlscy5ib2R5U2Nyb2xsLmFsbG93U2Nyb2xsKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE1FVEhPRFNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgY2xvc2UgKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuaWQgIT09ICdyZWFjdC1pbWFnZXMtY29udGFpbmVyJykgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuYmFja2Ryb3BDbG9zZXNNb2RhbCAmJiB0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgIH1cblxuICB9XG4gIGdvdG9OZXh0IChldmVudCkge1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gKHRoaXMucHJvcHMuaW1hZ2VzLmxlbmd0aCAtIDEpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DbGlja05leHQoKTtcblxuICB9XG4gIGdvdG9QcmV2IChldmVudCkge1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tQcmV2KCk7XG5cbiAgfVxuICBoYW5kbGVJbWFnZUNsaWNrICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMub25DbGlja0ltYWdlKSByZXR1cm47XG5cbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tJbWFnZSgpO1xuXG4gIH1cbiAgaGFuZGxlS2V5Ym9hcmRJbnB1dCAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHRoaXMuZ290b1ByZXYoZXZlbnQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgdGhpcy5nb3RvTmV4dChldmVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuICBoYW5kbGVSZXNpemUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCxcbiAgICB9KTtcblxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFJFTkRFUkVSU1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICByZW5kZXJBcnJvd1ByZXYgKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzLnNoZWV0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gdGl0bGU9XCJQcmV2aW91cyAoTGVmdCBhcnJvdyBrZXkpXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5hcnJvd30gJHtjbGFzc2VzLmFycm93UHJldn1gfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmdvdG9QcmV2fVxuICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmdvdG9QcmV2fVxuICAgICAgPlxuICAgICAgICA8SWNvbiB0eXBlPVwiYXJyb3dMZWZ0XCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyQXJyb3dOZXh0ICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50SW1hZ2UgPT09ICh0aGlzLnByb3BzLmltYWdlcy5sZW5ndGggLSAxKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzLnNoZWV0O1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHRpdGxlPVwiTmV4dCAoUmlnaHQgYXJyb3cga2V5KVwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuYXJyb3d9ICR7Y2xhc3Nlcy5hcnJvd05leHR9YH1cbiAgICAgICAgb25DbGljaz17dGhpcy5nb3RvTmV4dH1cbiAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5nb3RvTmV4dH1cbiAgICAgICAgPlxuICAgICAgICA8SWNvbiB0eXBlPVwiYXJyb3dSaWdodFwiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG4gIHJlbmRlckNsb3NlQmFyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCYXJ9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDdXN0b21Db250cm9scygpfVxuICAgICAgICB7dGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZW5kZXJDbG9zZUJ1dHRvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnNob3dDbG9zZUJ1dHRvbikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzLnNoZWV0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgdGl0bGU9XCJDbG9zZSAoRXNjKVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfVxuICAgICAgPlxuICAgICAgICA8SWNvbiB0eXBlPVwiY2xvc2VcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuICByZW5kZXJDdXN0b21Db250cm9scyAoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmN1c3RvbUNvbnRyb2xzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXN0b21Db250cm9scztcbiAgfVxuICByZW5kZXJEaWFsb2cgKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4pIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcy5zaGVldDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RmFkZSBpZD1cInJlYWN0LWltYWdlcy1jb250YWluZXJcIlxuICAgICAgICBrZXk9XCJkaWFsb2dcIlxuICAgICAgICBkdXJhdGlvbj17MjUwfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmNsb3NlfVxuICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmNsb3NlfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudEhlaWdodFNoaW19IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckNsb3NlQmFyKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVySW1hZ2VzKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJBcnJvd1ByZXYoKX1cbiAgICAgICAge3RoaXMucmVuZGVyQXJyb3dOZXh0KCl9XG4gICAgICA8L0ZhZGU+XG4gICAgKTtcbiAgfVxuICByZW5kZXJGb290ZXIgKGNhcHRpb24pIHtcbiAgICBjb25zdCB7IGN1cnJlbnRJbWFnZSwgaW1hZ2VzLCBpbWFnZUNvdW50U2VwYXJhdG9yLCBzaG93SW1hZ2VDb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cbiAgICBpZiAoIWNhcHRpb24gJiYgIXNob3dJbWFnZUNvdW50KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGltYWdlQ291bnQgPSBzaG93SW1hZ2VDb3VudCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNvdW50fT5cbiAgICAgICAge2N1cnJlbnRJbWFnZSArIDF9XG4gICAgICAgIHtpbWFnZUNvdW50U2VwYXJhdG9yfVxuICAgICAgICB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgIDwvZGl2PilcbiAgICAgIDogbnVsbDtcbiAgICBjb25zdCBmaWdjYXB0aW9uID0gY2FwdGlvblxuICAgICAgPyA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyQ2FwdGlvbn0+e2NhcHRpb259PC9maWdjYXB0aW9uPlxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICAgIHtpbWFnZUNvdW50fVxuICAgICAgICB7ZmlnY2FwdGlvbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgICBjcmVhdGVNZWRpYShpbWFnZSwgc2l6ZXMsIHNyY3NldCkge1xuICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzLnNoZWV0O1xuICAgICAgY29uc3QgeyB3aW5kb3dIZWlnaHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmIChpbWFnZS50eXBlICYmIGltYWdlLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8WW91VHViZVxuICAgICAgICAgICAgICB2aWRlb0lkPXtpbWFnZS5zcmN9XG4gICAgICAgICAgICAgIG9wdHM9e3tcbiAgICAgICAgICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgICAgICAgICBhdXRvcGxheTogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW1hZ2VDbGlja31cbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxuICAgICAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMucHJvcHMub25DbGlja0ltYWdlID8gJ3BvaW50ZXInIDogJ2F1dG8nLFxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHdpbmRvd0hlaWdodCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBcblxuICB9XG4gIHJlbmRlckltYWdlcyAoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMsIGN1cnJlbnRJbWFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG4gICAgY29uc3QgeyB3aW5kb3dIZWlnaHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWltYWdlcyB8fCAhaW1hZ2VzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpbWFnZSA9IGltYWdlc1tjdXJyZW50SW1hZ2VdO1xuXG4gICAgbGV0IHNyY3NldDtcbiAgICBsZXQgc2l6ZXM7XG5cbiAgICBpZiAoaW1hZ2Uuc3Jjc2V0KSB7XG4gICAgICBzcmNzZXQgPSBpbWFnZS5zcmNzZXQuam9pbigpO1xuICAgICAgc2l6ZXMgPSAnMTAwdncnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZmlndXJlIGtleT17YGltYWdlICR7Y3VycmVudEltYWdlfWB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWd1cmV9XG4gICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH19XG4gICAgICAgID5cbiAgICAgICAgPFN3aXBlYWJsZSBvblN3aXBlZExlZnQ9e3RoaXMuZ290b05leHR9IG9uU3dpcGVkUmlnaHQ9e3RoaXMuZ290b1ByZXZ9PlxuICAgICAgICAgICAge3RoaXMuY3JlYXRlTWVkaWEoaW1hZ2UsIHNpemVzLCBzcmNzZXQpfVxuICAgICAgICA8L1N3aXBlYWJsZT5cbiAgICAgICAge3RoaXMucmVuZGVyRm9vdGVyKGltYWdlc1tjdXJyZW50SW1hZ2VdLmNhcHRpb24pfVxuICAgICAgPC9maWd1cmU+XG4gICAgKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsPlxuICAgICAgICB7dGhpcy5yZW5kZXJEaWFsb2coKX1cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuXG5MaWdodGJveC5kaXNwbGF5TmFtZSA9ICdMaWdodGJveCc7XG5cbkxpZ2h0Ym94LnByb3BUeXBlcyA9IHtcbiAgYmFja2Ryb3BDbG9zZXNNb2RhbDogUHJvcFR5cGVzLmJvb2wsXG4gIGN1cnJlbnRJbWFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY3VzdG9tQ29udHJvbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgZW5hYmxlS2V5Ym9hcmRJbnB1dDogUHJvcFR5cGVzLmJvb2wsXG4gIGltYWdlQ291bnRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgc3Jjc2V0OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2tJbWFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xpY2tOZXh0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGlja1ByZXY6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaGVldDogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ltYWdlQ291bnQ6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkxpZ2h0Ym94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VycmVudEltYWdlOiAwLFxuICBlbmFibGVLZXlib2FyZElucHV0OiB0cnVlLFxuICBpbWFnZUNvdW50U2VwYXJhdG9yOiAnIG9mICcsXG4gIG9uQ2xpY2tTaG93TmV4dEltYWdlOiB0cnVlLFxuICBzaG93Q2xvc2VCdXR0b246IHRydWUsXG4gIHNob3dJbWFnZUNvdW50OiB0cnVlLFxuICB3aWR0aDogOTAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU2hlZXQoTGlnaHRib3gsIGRlZmF1bHRTdHlsZXMpO1xuIl19
