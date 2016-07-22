require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _componentsGallery = require('./components/Gallery');

var _componentsGallery2 = _interopRequireDefault(_componentsGallery);

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var IMAGE_NAMES = ['cat', 'cats', 'chameleon', 'dog', 'ducks', 'goat', 'ostrich', 'pigeon', 'pigs', 'seagulls', 'wasp', 'yawn'];
var IMAGE_MAP = IMAGE_NAMES.map(function (img) {
  return {
    src: './images/800-' + img + '.jpg',
    thumbnail: './images/thumbnail-' + img + '.jpg',
    srcset: ['./images/1024-' + img + '.jpg 1024w', './images/800-' + img + '.jpg 800w', './images/500-' + img + '.jpg 500w', './images/320-' + img + '.jpg 320w'],
    caption: capitalizeFirstLetter(img)
  };
});
var IMAGES_PRELOAD = IMAGE_MAP.map(function (img) {
  return _react2['default'].createElement('img', { key: img.caption, src: './images/1024-' + img + '.jpg' });
});

var VIDEO = [{
  src: 'QJ2o62Msosg',
  type: 'youtube',
  thumbnail: 'http://img.youtube.com/vi/QJ2o62Msosg/1.jpg'
}];

var MEDIA = IMAGE_MAP.concat(VIDEO);

(0, _reactDom.render)(_react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'p',
    { style: { marginBottom: 40 } },
    'Use your keyboard to navigate ',
    _react2['default'].createElement(
      'kbd',
      null,
      'left'
    ),
    ' ',
    _react2['default'].createElement(
      'kbd',
      null,
      'right'
    ),
    ' ',
    _react2['default'].createElement(
      'kbd',
      null,
      'esc'
    ),
    ' — Also, try resizing your browser window.'
  ),
  _react2['default'].createElement(_componentsGallery2['default'], { images: MEDIA }),
  _react2['default'].createElement(
    'p',
    null,
    'Images courtesy of ',
    _react2['default'].createElement(
      'a',
      { href: 'http://gratisography.com/', target: '_blank' },
      'Gratisography'
    )
  ),
  _react2['default'].createElement(
    'div',
    { style: { display: 'none' } },
    IMAGES_PRELOAD
  )
), document.getElementById('example'));

},{"./components/Gallery":4,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

module.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 30" enable-background="new 0 0 24 24" xml:space="preserve">' + '<g>' + '<polygon fill="white" points="19,14 19,18 5,18 5,14 2,14 2,18 2,22 5,22 19,22 22,22 22,18 22,14  "/>' + '<polygon fill="white" points="15,9.9 15,2 9,2 9,9.9 5.8,9.9 12,16.1 18.2,9.9  "/>' + '</g>' + '</svg>';

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var DownloadButton = (function (_Component) {
    _inherits(DownloadButton, _Component);

    function DownloadButton() {
        _classCallCheck(this, DownloadButton);

        _get(Object.getPrototypeOf(DownloadButton.prototype), 'constructor', this).call(this);
    }

    _createClass(DownloadButton, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'button',
                {
                    title: 'Download',
                    style: {
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        float: 'left',
                        height: 40,
                        outline: 'none',
                        padding: 10,
                        position: 'relative',
                        left: -10,
                        top: 0,
                        verticalAlign: 'bottom',
                        width: 40
                    },
                    onClick: this.props.handler
                },
                _react2['default'].createElement('span', {
                    dangerouslySetInnerHTML: { __html: _icon2['default'] }
                })
            );
        }
    }]);

    return DownloadButton;
})(_react.Component);

exports['default'] = DownloadButton;
module.exports = exports['default'];

},{"./icon":2,"react":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var _DownloadButton = require('./DownloadButton');

var _DownloadButton2 = _interopRequireDefault(_DownloadButton);

var Gallery = (function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    _get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  _createClass(Gallery, [{
    key: 'openLightbox',
    value: function openLightbox(index, event) {
      event.preventDefault();
      this.setState({
        currentImage: index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: 'gotoPrevious',
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: 'handleClickImage',
    value: function handleClickImage() {
      if (this.state.currentImage === this.props.images.length - 1) return;

      this.gotoNext();
    }
  }, {
    key: 'renderGallery',
    value: function renderGallery() {
      var _this = this;

      if (!this.props.images) return;
      var gallery = this.props.images.map(function (obj, i) {
        return _react2['default'].createElement(
          'a',
          {
            href: obj.src,
            key: i,
            onClick: function (e) {
              return _this.openLightbox(i, e);
            },
            style: styles.thumbnail
          },
          _react2['default'].createElement('img', {
            height: styles.thumbnail.size,
            src: obj.thumbnail,
            style: styles.thumbnailImage,
            width: styles.thumbnail.size
          })
        );
      });

      return _react2['default'].createElement(
        'div',
        { style: styles.gallery },
        gallery
      );
    }
  }, {
    key: 'handleDownload',
    value: function handleDownload() {
      window.open(this.props.images[this.state.currentImage].src);
    }
  }, {
    key: 'render',
    value: function render() {
      var customControls = [_react2['default'].createElement(_DownloadButton2['default'], { key: 'Download', handler: this.handleDownload.bind(this) })];
      return _react2['default'].createElement(
        'div',
        { className: 'section' },
        this.props.heading && _react2['default'].createElement(
          'h2',
          null,
          this.props.heading
        ),
        this.props.subheading && _react2['default'].createElement(
          'p',
          null,
          this.props.subheading
        ),
        this.renderGallery(),
        _react2['default'].createElement(_reactImages2['default'], {
          currentImage: this.state.currentImage,
          customControls: customControls,
          images: this.props.images,
          isOpen: this.state.lightboxIsOpen,
          onClickPrev: this.gotoPrevious,
          onClickNext: this.gotoNext,
          onClickImage: this.handleClickImage,
          onClose: this.closeLightbox,
          theme: this.props.theme
        })
      );
    }
  }]);

  return Gallery;
})(_react.Component);

;

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  heading: _react.PropTypes.string,
  images: _react.PropTypes.array,
  sepia: _react.PropTypes.bool,
  subheading: _react.PropTypes.string
};

var THUMBNAIL_SIZE = 72;

var styles = {
  gallery: {
    marginLeft: -5,
    marginRight: -5,
    overflow: 'hidden'
  },
  thumbnail: {
    backgroundSize: 'cover',
    borderRadius: 3,
    float: 'left',
    height: THUMBNAIL_SIZE,
    margin: 5,
    overflow: 'hidden',
    width: THUMBNAIL_SIZE
  },
  thumbnailImage: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%'
  }
};

// height: THUMBNAIL_SIZE,
// left: '50%',
// position: 'relative',
//
// WebkitTransform: 'translateX(-50%)',
// MozTransform:    'translateX(-50%)',
// msTransform:     'translateX(-50%)',
// transform:       'translateX(-50%)',
exports['default'] = Gallery;
module.exports = exports['default'];

},{"./DownloadButton":3,"react":undefined,"react-images":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFuaWVsZmx5bm4vZ2l0aHViL3JlYWN0LWltYWdlcy9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2RhbmllbGZseW5uL2dpdGh1Yi9yZWFjdC1pbWFnZXMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvRG93bmxvYWRCdXR0b24vaWNvbi5qcyIsIi9Vc2Vycy9kYW5pZWxmbHlubi9naXRodWIvcmVhY3QtaW1hZ2VzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0Rvd25sb2FkQnV0dG9uL2luZGV4LmpzIiwiL1VzZXJzL2RhbmllbGZseW5uL2dpdGh1Yi9yZWFjdC1pbWFnZXMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLE9BQU87Ozs7d0JBQ0YsV0FBVzs7aUNBQ2Qsc0JBQXNCOzs7O0FBRTFDLFNBQVMscUJBQXFCLENBQUUsR0FBRyxFQUFFO0FBQ25DLFNBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ25EOztBQUVELElBQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsSSxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRztTQUFLO0FBQ3hDLE9BQUcsb0JBQWtCLEdBQUcsU0FBTTtBQUM5QixhQUFTLDBCQUF3QixHQUFHLFNBQU07QUFDMUMsVUFBTSxFQUFFLG9CQUNXLEdBQUcsbUNBQ0osR0FBRyxrQ0FDSCxHQUFH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QjtBQUNELFdBQVMsRUFBRTtBQUNULGtCQUFjLEVBQUUsT0FBTztBQUN2QixnQkFBWSxFQUFFLENBQUM7QUFDZixTQUFLLEVBQUUsTUFBTTtBQUNiLFVBQU0sRUFBRSxjQUFjO0FBQ3RCLFVBQU0sRUFBRSxDQUFDO0FBQ1QsWUFBUSxFQUFFLFFBQVE7QUFDbEIsU0FBSyxFQUFFLGNBQWM7R0FDdEI7QUFDRCxnQkFBYyxFQUFFO0FBQ2QsV0FBTyxFQUFFLE9BQU87QUFDaEIsVUFBTSxFQUFFLE1BQU07QUFDZCxZQUFRLEVBQUUsTUFBTTtHQVNqQjtDQUNGLENBQUM7Ozs7Ozs7Ozs7cUJBRWEsT0FBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vY29tcG9uZW50cy9HYWxsZXJ5JztcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuY29uc3QgSU1BR0VfTkFNRVMgPSBbJ2NhdCcsICdjYXRzJywgJ2NoYW1lbGVvbicsICdkb2cnLCAnZHVja3MnLCAnZ29hdCcsICdvc3RyaWNoJywgJ3BpZ2VvbicsICdwaWdzJywgJ3NlYWd1bGxzJywgJ3dhc3AnLCAneWF3biddO1xuY29uc3QgSU1BR0VfTUFQID0gSU1BR0VfTkFNRVMubWFwKGltZyA9PiAoe1xuICBzcmM6IGAuL2ltYWdlcy84MDAtJHtpbWd9LmpwZ2AsXG4gIHRodW1ibmFpbDogYC4vaW1hZ2VzL3RodW1ibmFpbC0ke2ltZ30uanBnYCxcbiAgc3Jjc2V0OiBbXG4gICAgYC4vaW1hZ2VzLzEwMjQtJHtpbWd9LmpwZyAxMDI0d2AsXG4gICAgYC4vaW1hZ2VzLzgwMC0ke2ltZ30uanBnIDgwMHdgLFxuICAgIGAuL2ltYWdlcy81MDAtJHtpbWd9LmpwZyA1MDB3YCxcbiAgICBgLi9pbWFnZXMvMzIwLSR7aW1nfS5qcGcgMzIwd2AsXG4gIF0sXG4gIGNhcHRpb246IGNhcGl0YWxpemVGaXJzdExldHRlcihpbWcpLFxufSkpO1xuY29uc3QgSU1BR0VTX1BSRUxPQUQgPSBJTUFHRV9NQVAubWFwKGltZyA9PiB7XG4gIHJldHVybiA8aW1nIGtleT17aW1nLmNhcHRpb259IHNyYz17YC4vaW1hZ2VzLzEwMjQtJHtpbWd9LmpwZ2B9IC8+O1xufSk7XG5cbmNvbnN0IFZJREVPID0gW3tcbiAgc3JjOiAnUUoybzYyTXNvc2cnLFxuICB0eXBlOiAneW91dHViZScsXG4gIHRodW1ibmFpbDogJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvUUoybzYyTXNvc2cvMS5qcGcnLFxufV07XG5cbmNvbnN0IE1FRElBID0gSU1BR0VfTUFQLmNvbmNhdChWSURFTyk7XG5cbnJlbmRlcihcblx0PGRpdj5cblx0XHQ8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PlVzZSB5b3VyIGtleWJvYXJkIHRvIG5hdmlnYXRlIDxrYmQ+bGVmdDwva2JkPiA8a2JkPnJpZ2h0PC9rYmQ+IDxrYmQ+ZXNjPC9rYmQ+ICZtZGFzaDsgQWxzbywgdHJ5IHJlc2l6aW5nIHlvdXIgYnJvd3NlciB3aW5kb3cuPC9wPlxuXHRcdDxHYWxsZXJ5IGltYWdlcz17TUVESUF9IC8+XG5cdFx0PHA+SW1hZ2VzIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9XCJodHRwOi8vZ3JhdGlzb2dyYXBoeS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R3JhdGlzb2dyYXBoeTwvYT48L3A+XG5cdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+e0lNQUdFU19QUkVMT0FEfTwvZGl2PlxuXHQ8L2Rpdj4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChcbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAzMFwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAyNCAyNFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+J1xuICAgICAgICArICc8Zz4nXG4gICAgICAgICAgICArICc8cG9seWdvbiBmaWxsPVwid2hpdGVcIiBwb2ludHM9XCIxOSwxNCAxOSwxOCA1LDE4IDUsMTQgMiwxNCAyLDE4IDIsMjIgNSwyMiAxOSwyMiAyMiwyMiAyMiwxOCAyMiwxNCAgXCIvPidcbiAgICAgICAgICAgICsgJzxwb2x5Z29uIGZpbGw9XCJ3aGl0ZVwiIHBvaW50cz1cIjE1LDkuOSAxNSwyIDksMiA5LDkuOSA1LjgsOS45IDEyLDE2LjEgMTguMiw5LjkgIFwiLz4nXG4gICAgICAgICsgJzwvZz4nXG4gICAgKyAnPC9zdmc+J1xuKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb3dubG9hZEljb24gZnJvbSAnLi9pY29uJztcblxuY2xhc3MgRG93bmxvYWRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIkRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogRG93bmxvYWRJY29uIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZXMnO1xuaW1wb3J0IERvd25sb2FkQnV0dG9uIGZyb20gJy4vRG93bmxvYWRCdXR0b24nO1xuXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlnaHRib3hJc09wZW46IGZhbHNlLFxuICAgICAgY3VycmVudEltYWdlOiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmNsb3NlTGlnaHRib3ggPSB0aGlzLmNsb3NlTGlnaHRib3guYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvdG9OZXh0ID0gdGhpcy5nb3RvTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ290b1ByZXZpb3VzID0gdGhpcy5nb3RvUHJldmlvdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrSW1hZ2UgPSB0aGlzLmhhbmRsZUNsaWNrSW1hZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5MaWdodGJveCA9IHRoaXMub3BlbkxpZ2h0Ym94LmJpbmQodGhpcyk7XG4gIH1cbiAgb3BlbkxpZ2h0Ym94IChpbmRleCwgZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEltYWdlOiBpbmRleCxcbiAgICAgIGxpZ2h0Ym94SXNPcGVuOiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIGNsb3NlTGlnaHRib3ggKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEltYWdlOiAwLFxuICAgICAgbGlnaHRib3hJc09wZW46IGZhbHNlLFxuICAgIH0pO1xuICB9XG4gIGdvdG9QcmV2aW91cyAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlIC0gMSxcbiAgICB9KTtcbiAgfVxuICBnb3RvTmV4dCAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlICsgMSxcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVDbGlja0ltYWdlICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2UgPT09IHRoaXMucHJvcHMuaW1hZ2VzLmxlbmd0aCAtIDEpIHJldHVybjtcblxuICAgIHRoaXMuZ290b05leHQoKTtcbiAgfVxuICByZW5kZXJHYWxsZXJ5ICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaW1hZ2VzKSByZXR1cm47XG4gICAgY29uc3QgZ2FsbGVyeSA9IHRoaXMucHJvcHMuaW1hZ2VzLm1hcCgob2JqLCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e29iai5zcmN9XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9wZW5MaWdodGJveChpLCBlKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLnRodW1ibmFpbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgaGVpZ2h0PXtzdHlsZXMudGh1bWJuYWlsLnNpemV9XG4gICAgICAgICAgICBzcmM9e29iai50aHVtYm5haWx9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLnRodW1ibmFpbEltYWdlfVxuICAgICAgICAgICAgd2lkdGg9e3N0eWxlcy50aHVtYm5haWwuc2l6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5nYWxsZXJ5fT5cbiAgICAgICAge2dhbGxlcnl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGhhbmRsZURvd25sb2FkICgpIHtcbiAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmltYWdlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZV0uc3JjKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGxldCBjdXN0b21Db250cm9scyA9IFtcbiAgICAgIDxEb3dubG9hZEJ1dHRvbiBrZXk9XCJEb3dubG9hZFwiIGhhbmRsZXI9e3RoaXMuaGFuZGxlRG93bmxvYWQuYmluZCh0aGlzKX0gLz4sXG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLmhlYWRpbmcgJiYgPGgyPnt0aGlzLnByb3BzLmhlYWRpbmd9PC9oMj59XG4gICAgICAgIHt0aGlzLnByb3BzLnN1YmhlYWRpbmcgJiYgPHA+e3RoaXMucHJvcHMuc3ViaGVhZGluZ308L3A+fVxuICAgICAgICB7dGhpcy5yZW5kZXJHYWxsZXJ5KCl9XG4gICAgICAgIDxMaWdodGJveFxuICAgICAgICAgIGN1cnJlbnRJbWFnZT17dGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2V9XG4gICAgICAgICAgY3VzdG9tQ29udHJvbHM9e2N1c3RvbUNvbnRyb2xzfVxuICAgICAgICAgIGltYWdlcz17dGhpcy5wcm9wcy5pbWFnZXN9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmxpZ2h0Ym94SXNPcGVufVxuICAgICAgICAgIG9uQ2xpY2tQcmV2PXt0aGlzLmdvdG9QcmV2aW91c31cbiAgICAgICAgICBvbkNsaWNrTmV4dD17dGhpcy5nb3RvTmV4dH1cbiAgICAgICAgICBvbkNsaWNrSW1hZ2U9e3RoaXMuaGFuZGxlQ2xpY2tJbWFnZX1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmNsb3NlTGlnaHRib3h9XG4gICAgICAgICAgdGhlbWU9e3RoaXMucHJvcHMudGhlbWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5HYWxsZXJ5LmRpc3BsYXlOYW1lID0gJ0dhbGxlcnknO1xuR2FsbGVyeS5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LFxuICBzZXBpYTogUHJvcFR5cGVzLmJvb2wsXG4gIHN1YmhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBUSFVNQk5BSUxfU0laRSA9IDcyO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdhbGxlcnk6IHtcbiAgICBtYXJnaW5MZWZ0OiAtNSxcbiAgICBtYXJnaW5SaWdodDogLTUsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBoZWlnaHQ6IFRIVU1CTkFJTF9TSVpFLFxuICAgIG1hcmdpbjogNSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2lkdGg6IFRIVU1CTkFJTF9TSVpFLFxuICB9LFxuICB0aHVtYm5haWxJbWFnZToge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAvLyBoZWlnaHQ6IFRIVU1CTkFJTF9TSVpFLFxuICAgIC8vIGxlZnQ6ICc1MCUnLFxuICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vXG4gICAgLy8gV2Via2l0VHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgLy8gTW96VHJhbnNmb3JtOiAgICAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgLy8gbXNUcmFuc2Zvcm06ICAgICAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgLy8gdHJhbnNmb3JtOiAgICAgICAndHJhbnNsYXRlWCgtNTAlKScsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl19
