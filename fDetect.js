/**
 * @name 		fDetect.js 
 * @version 	0.1.0
 * @author 		Frend
 *
 * @gist		
 * @git 			
 */

!function(root, factory) {

	if (typeof define == 'function' && define.amd) {
		define(factory);
	} else if (typeof module != 'undefined' && module.exports) {
		module.exports = factory();
	} else {
		window[root] = factory();
	}

}('fDetect', function() {

	'use strict';

	var ua = navigator.userAgent;

	/*
	 * fDetect object
	 */
	var fDetect = {

		//current browser info
		browser 		: {},
		isChrome 		: false,
		isSafari 		: false,
		isFirefox 		: false,
		isOpera 		: false,
		isIE 			: false,

		//current device
		device 			: {},
		isIOS 			: false,
		isAndroid 		: false,
		isWinPhone 		: false,

		//browser version
		browser_version : 0,

		//device version
		device_version 	: 0

	};

	var fDetectOpts = {};

	var regExpMap = {
		//device os
		iosDevice			: /(iphone|ipod|ipad)/i,
		androidDevice 		: /android/i,
		likeAndroidDevice	: /like android/i,
		winPhoneDevice		: /windows phone/i,
		//os version
		iosVersion			: /version\/(\d+(\.\d+)?)/i,
		androidVersion		: /android(\s)*(\d+(\.\d+)?)/i,
		edgeVersion			: /edge\/(\d+(\.\d+)?)/i,
		winPhoneVersion		: /iemobile\/(\d+(\.\d+)?)/i,

		//browser
		chrome 				: /chrome|crios|crmo/i,
		safari 				: /safari/i,
		firefox 			: /firefox|iceweasel/i,
		opera 				: /opera|opr/i,
		ie 					: /msie|trident/i,
		//browser version
		chromeVersion		: /(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i,
		safariVersion		: /version\/(\d+(\.\d+)?)/i,
		firefoxVersion		: /(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i,
		operaVersion		: /(?:opera|opr)[\s\/](\d+(\.\d+)?)/i,
		ieVersion			: /(?:msie |rv:)(\d+(\.\d+)?)/i
	};

	/*
	 * extend object
	 */
	function _extend(origin, opstions) {
		for (var prop in opstions) {
			if (origin.hasOwnProperty(prop)) {
				origin[prop] = opstions[prop];
			}
		}

		return origin;
	}

	/*
	 * get device name
	 */
	function _getDevice() { 
		_isIOS() ? (function() {
			fDetectOpts.device = {name: 'ios', version: _getDeviceVersion('ios')};
			fDetectOpts.isIOS = true;
		})() : 
		_isAndroid() ? (function() {
			fDetectOpts.device = {name: 'android', version: _getDeviceVersion('android')};
			fDetectOpts.isAndroid = true;
		})() : 
		_isWinPhone() ? (function() {
			fDetectOpts.device = {name: 'winPhone', version: _getDeviceVersion('winPhone')};
			fDetectOpts.isWinPhone = true;
		})() : (function() {
			fDetectOpts.device = {name: 'unknow', version: 'unknow'};
		})();
	}

	/*
	 * is ios
	 */
	function _isIOS() {
		return regExpMap.iosDevice.test(ua);
	}

	/*
     * is android
	 */
	function _isAndroid() {
		return !regExpMap.likeAndroidDevice.test(ua) && regExpMap.androidDevice.test(ua);
	}

	/*
	 * is win phone
	 */
	function _isWinPhone() {
		return regExpMap.winPhoneDevice.test(ua);
	}

	/*
	 * get device version
	 */
	function _getDeviceVersion(device) {
		switch (device) {
			case 'ios' : 
				return ua.match(regExpMap.iosVersion) && ua.match(regExpMap.iosVersion)[1];
			case 'android':
				return ua.match(regExpMap.androidVersion) && ua.match(regExpMap.androidVersion)[2];
			case 'winPhone':
				return ua.match(regExpMap.edgeVersion) && ua.match(regExpMap.edgeVersion)[1] || ua.match(regExpMap.winPhoneVersion) && ua.match(regExpMap.winPhoneVersion)[1];
			default:
				break;
		}
	}

	function _getBrowser() {
		_isChrome() ? (function() {
			fDetectOpts.browser = {name: 'chrome', version: _getBrowserVersion('chrome')};
			fDetectOpts.isChrome = true;
		})() : 
		_isSafari() ? (function() {
			fDetectOpts.browser = {name: 'safari', version: _getBrowserVersion('safari')};
			fDetectOpts.isSafari = true;
		})() :
		_isFirefox() ? (function() {
			fDetectOpts.browser = {name: 'firefox', version: _getBrowserVersion('firefox')};
			fDetectOpts.isFirefox = true;
		})() : 
		_isOpera() ? (function() {
			fDetectOpts.browser = {name: 'opera', version: _getBrowserVersion('opera')};
			fDetectOpts.isOpera = true;
		})() : 
		_isIE ? (function() {
			fDetectOpts.browser = {name: 'ie', version: _getBrowserVersion('ie')};
			fDetectOpts.isIE = true;
		}) : (function() {
			fDetectOpts.browser = {name: 'unknow', version: 'unknow'};
		})();
	}

	function _isChrome() {
		return regExpMap.chrome.test(ua);
	}

	function _isSafari() {
		return regExpMap.safari.test(ua);
	}

	function _isFirefox() {
		return regExpMap.firefox.test(ua);
	}

	function _isOpera() {
		return regExpMap.opera.test(ua);
	}

	function _isIE() {
		return regExpMap.ie.test(ua);
	}

	function _getBrowserVersion(browser) {
		switch (browser) {
			case 'chrome' : 
				return ua.match(regExpMap.chromeVersion) && ua.match(regExpMap.chromeVersion)[1];
			case 'safari':
				return ua.match(regExpMap.safariVersion) && ua.match(regExpMap.safariVersion)[1];
			case 'firefox':
				return ua.match(regExpMap.firefoxVersion) && ua.match(regExpMap.firefoxVersion)[1];
			case 'opera':
				return ua.match(regExpMap.safariVersion) && ua.match(regExpMap.safariVersion)[1] || ua.match(regExpMap.operaVersion) && ua.match(regExpMap.operaVersion)[1];
			case 'ie':
				return ua.match(regExpMap.ieVersion) && ua.match(regExpMap.ieVersion)[1];
			default:
				break;
		}
	}

	function _init() {
		_getDevice();
		_getBrowser();
	}

	_init();

	return _extend(fDetect, fDetectOpts);

});