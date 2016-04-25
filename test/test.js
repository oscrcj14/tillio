var Tillio = require("../lib");

var tileControl = new Tillio($("thumbnails"), $("tiles"));
tileControl.addTile("thumbnailLocation", require("./controls/label"));