"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _video_pause = _interopRequireDefault(require("../assets/video_pause.svg"));

var _video_play = _interopRequireDefault(require("../assets/video_play.svg"));

var _video_enter_fullscreen = _interopRequireDefault(require("../assets/video_enter_fullscreen.svg"));

var _video_exit_fullscreen = _interopRequireDefault(require("../assets/video_exit_fullscreen.svg"));

var _video_volume_mute = _interopRequireDefault(require("../assets/video_volume_mute.svg"));

var _video_volume_low = _interopRequireDefault(require("../assets/video_volume_low.svg"));

var _video_volume_med = _interopRequireDefault(require("../assets/video_volume_med.svg"));

var _video_volume_max = _interopRequireDefault(require("../assets/video_volume_max.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VideoPlayer = function VideoPlayer(_ref) {
  var children = _ref.children,
      videoId = _ref.videoId,
      height = _ref.height,
      width = _ref.width;
  var durationWidth = 300;
  var volumeWidth = 80;
  var thumbRadius = 20;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      player = _useState2[0],
      setPlayer = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPlaying = _useState4[0],
      setPlaying = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isFullscreen = _useState6[0],
      setFullscreen = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      progress = _useState8[0],
      setProgress = _useState8[1];

  var _useState9 = (0, _react.useState)(200),
      _useState10 = _slicedToArray(_useState9, 2),
      duration = _useState10[0],
      setDuration = _useState10[1];

  var _useState11 = (0, _react.useState)(100),
      _useState12 = _slicedToArray(_useState11, 2),
      volume = _useState12[0],
      setVolume = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      progressInterval = _useState14[0],
      setProgressInterval = _useState14[1];

  (0, _react.useEffect)(function () {
    setPlayer(new YT.Player("player-".concat(videoId), {
      videoId: videoId,
      playerVars: {
        controls: 0,
        enablejsapi: 1,
        rel: 0,
        fs: 0,
        cc_lang_pref: "en",
        cc_load_policy: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    }));

    var changeFullscreen = function changeFullscreen() {
      var parentHeight = document.getElementById("parent-".concat(videoId)).offsetHeight;
      setFullscreen(window.innerHeight === parentHeight);
    };

    document.addEventListener("fullscreenchange", changeFullscreen);
    document.addEventListener("mozfullscreenchange", changeFullscreen);
    document.addEventListener("webkitfullscreenchange", changeFullscreen);
    document.addEventListener("msfullscreenchange", changeFullscreen);
    return function () {
      document.removeEventListener("fullscreenchange", changeFullscreen);
      document.removeEventListener("mozfullscreenchange", changeFullscreen);
      document.removeEventListener("webkitfullscreenchange", changeFullscreen);
      document.removeEventListener("msfullscreenchange", changeFullscreen);
    };
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      return clearInterval(progressInterval);
    };
  }, [progressInterval]);

  var onPlayerReady = function onPlayerReady(e) {
    setProgressInterval(setInterval(function () {
      return updateProgress(e);
    }, 1000));
    setDuration(e.target.getDuration());
    e.target.setVolume(volume);
  };

  var onPlayerStateChange = function onPlayerStateChange(e) {
    if (e.data === YT.PlayerState.PLAYING) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  var updateProgress = function updateProgress(e) {
    //checks if dragging progress bar
    var sliderStatus = document.getElementById("progressSlider").getAttribute("data-is-progress-drag");

    if (!sliderStatus || sliderStatus === "false") {
      setProgress(e.target.getCurrentTime());
    }
  };

  var togglePlay = function togglePlay() {
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  var toggleFullscreen = function toggleFullscreen() {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.getElementById("parent-".concat(videoId)).requestFullscreen();
    }
  };

  var getVolumeIcon = function getVolumeIcon() {
    if (volume < 1) {
      return /*#__PURE__*/_react["default"].createElement(_video_volume_mute["default"], {
        className: styles.button
      });
    } else if (volume < 33) {
      return /*#__PURE__*/_react["default"].createElement(_video_volume_low["default"], {
        className: styles.button
      });
    } else if (volume < 66) {
      return /*#__PURE__*/_react["default"].createElement(_video_volume_med["default"], {
        className: styles.button
      });
    } else {
      return /*#__PURE__*/_react["default"].createElement(_video_volume_max["default"], {
        className: styles.button
      });
    }
  };

  var convertThumbToValue = function convertThumbToValue(x, width, range) {
    var val = (x + Math.floor(thumbRadius / 2)) / width * range;
    if (val < 0) return 0;else if (val > range) return range;else return val;
  };

  var handleProgressChange = function handleProgressChange(x) {
    var val = convertThumbToValue(x, durationWidth, duration);
    setProgress(val);
    player.seekTo(val);
  };

  var handleVolumeChange = function handleVolumeChange(x) {
    var val = convertThumbToValue(x, volumeWidth, 100);
    setVolume(val);
    player.setVolume(val);
  };

  var onThumbDown = function onThumbDown(e) {
    e.preventDefault();
    var parent, setter;

    if (e.target.id === "progressThumb") {
      parent = document.getElementById("progressSlider");
      setter = handleProgressChange;
      parent.setAttribute("data-is-progress-drag", true); //allows interval to know if progress is being dragged
    } else if (e.target.id === "volumeThumb") {
      parent = document.getElementById("volumeSlider");
      setter = handleVolumeChange;
    }

    document.onmousemove = trackThumb(e.target, parent, setter);
    document.onmouseup = onThumbUp;
    document.ontouchmove = trackThumb(e.target, parent, setter, true);
    document.ontouchend = onThumbUp;
  };

  var onThumbUp = function onThumbUp(e) {
    e.preventDefault();
    document.onmousemove = null;
    document.onmouseup = null;
    document.ontouchmove = null;
    document.ontouchend = null;
    document.getElementById("progressSlider").setAttribute("data-is-progress-drag", false);
  };

  var trackThumb = function trackThumb(thumb, parent, setter) {
    var isMobile = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (!parent) return null;
    var currX;
    var thumbOffset = Math.floor(thumbRadius / 2);
    var leftBound = -1 * thumbOffset;
    var rightBound = parent.getBoundingClientRect().width - thumbOffset;
    return function (e) {
      if (!currX) {
        //start of drag
        currX = isMobile ? e.changedTouches[0].clientX : e.clientX;
      } else {
        var movement = (isMobile ? e.changedTouches[0].clientX : e.clientX) - currX;
        var newThumbX = thumb.offsetLeft + movement;

        if (newThumbX < leftBound) {
          thumb.style.left = leftBound;
        } else if (newThumbX > rightBound) {
          thumb.style.left = rightBound;
        } else {
          thumb.style.left = "".concat(newThumbX, "px"); //not updating
        }

        setter(newThumbX);
        currX = isMobile ? e.changedTouches[0].clientX : e.clientX;
      }
    };
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "parent-".concat(videoId),
    className: styles.parentContainer,
    style: {
      height: "".concat(height, "px"),
      width: "".concat(width, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("script", {
    src: "https://www.youtube.com/iframe_api"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "player-".concat(videoId),
    className: styles.video
  }), !isPlaying && /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.playButton,
    onClick: function onClick() {
      return player.playVideo();
    }
  }, /*#__PURE__*/_react["default"].createElement(_video_play["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.controlsContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.controls
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: togglePlay
  }, isPlaying ? /*#__PURE__*/_react["default"].createElement(_video_pause["default"], {
    className: styles.button
  }) : /*#__PURE__*/_react["default"].createElement(_video_play["default"], {
    className: styles.button
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "progressSlider",
    className: styles.progressBar,
    style: {
      width: "".concat(durationWidth, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "progressThumb",
    className: styles.thumb,
    onMouseDown: onThumbDown,
    onTouchStart: onThumbDown,
    style: {
      width: "".concat(thumbRadius, "px"),
      height: "".concat(thumbRadius, "px"),
      left: "".concat(progress / duration * durationWidth - thumbRadius / 2, "px"),
      top: "".concat(-1 * thumbRadius / 4, "px")
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.innerBar,
    style: {
      width: "".concat(progress / duration * durationWidth, "px")
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.volumeContainer
  }, getVolumeIcon(), /*#__PURE__*/_react["default"].createElement("div", {
    id: "volumeSlider",
    className: styles.volumeBar,
    style: {
      width: "".concat(volumeWidth, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "volumeThumb",
    className: styles.thumb,
    onMouseDown: onThumbDown,
    onTouchStart: onThumbDown,
    style: {
      width: "".concat(thumbRadius, "px"),
      height: "".concat(thumbRadius, "px"),
      left: "".concat(volume / 100 * volumeWidth - thumbRadius / 2, "px"),
      top: "".concat(-1 * thumbRadius / 4, "px")
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.innerBar,
    style: {
      width: "".concat(volume / 100 * volumeWidth, "px")
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: toggleFullscreen
  }, isFullscreen ? /*#__PURE__*/_react["default"].createElement(_video_exit_fullscreen["default"], {
    className: styles.button
  }) : /*#__PURE__*/_react["default"].createElement(_video_enter_fullscreen["default"], {
    className: styles.button
  })))), children);
};

var _default = VideoPlayer;
exports["default"] = _default;
