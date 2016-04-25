(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Tillio = function (thumbnailDiv, tileDiv) {
	this._thumbnailDiv = thumbnailDiv;
	this._tileDiv = tileDiv;
};

module.exports = Tillio;

Tillio.prototype.addTile = function (thumbnailImage, tileControl) {
	tileControl.initialize(this._tileDiv);
	console.log("Implement add tile - " + thumbnailImage + " - " + tileControl);
};
},{}],2:[function(require,module,exports){
// Required for tillio compatability
var initialize = function (outerDiv) {
	console.log("Implement label load - " + outerDiv);
};

module.exports = {
	initialize: initialize
};
},{}],3:[function(require,module,exports){
var Tillio = require("../lib");

var tileControl = new Tillio($("thumbnails"), $("tiles"));
tileControl.addTile("thumbnailLocation", require("./controls/label"));
},{"../lib":1,"./controls/label":2}]},{},[3]);
