# fDetect.js - 移动设备、浏览器检测插件

## Example
demo：[http://frender.github.io/fDetect.js](http://frender.github.io/fDetect.js)

## Usage

### normal
```html
<script src="baseUrl/fDetect.js"></script>
```
```javascript
console.log(window.fDetect);
/*
{
    "browser": {"name":"chrome","version":"43.0"},
    "isChrome": true,
    "isSafari": false,
    "isFirefox": false,
    "isOpera": false,
    "isIE": false,
    
    "device": {"name":"unknow","version":"unknow"},
    "isIOS": false,
    "isAndroid": false,
    "isWinPhone": false,
    
    "browser_version": 0,
    "device_version": 0
}
*/
```

### amd
```javascript
require(['fDetect'], function(fDetect) {

    console.log(fDetect);
    /*
    {
        "browser": {"name":"chrome","version":"43.0"},
        "isChrome": true,
        "isSafari": false,
        "isFirefox": false,
        "isOpera": false,
        "isIE": false,
    
        "device": {"name":"unknow","version":"unknow"},
        "isIOS": false,
        "isAndroid": false,
        "isWinPhone": false,
    
        "browser_version": 0,
        "device_version": 0
    }
    */
});
```

## Installation
```javascript
bower install fDetect.js --save(-dev)
```
or
```javascript
npm install fdetect.js --save(-dev)
```

##Version
- **1.0.0**

