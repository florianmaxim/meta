"use strict";Object.defineProperty(exports,"__esModule",{value:true});var isMobile={Android:function Android(){return navigator.userAgent.match(/Android/i)},BlackBerry:function BlackBerry(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function iOS(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function Opera(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function Windows(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i)},any:function any(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};exports.default=isMobile;