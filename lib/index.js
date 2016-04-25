var Tillio = function (thumbnailDiv, tileDiv) {
	this._thumbnailDiv = thumbnailDiv;
	this._tileDiv = tileDiv;
};

module.exports = Tillio;

Tillio.prototype.addTile = function (thumbnailImage, tileControl) {
	tileControl.initialize(this._tileDiv);
	console.log("Implement add tile - " + thumbnailImage + " - " + tileControl);
};