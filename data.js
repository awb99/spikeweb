var csv = require('csv-parser')
var fs = require('fs')

var releases = [
  { EIId: 103, Name: "AU Australia CPI"},
  { EIId : 999, Name: "ZZ Test Data"},
  { EIId : 888, Name: "YY Test Data"},
  { EIId : 777, Name: "XX Test Data"},
  { EIId : 111, Name: "AA Test Data"}

];


var loadDataEiid = function (eiid, result) {
  var data = [];
  var eiString = eiid + "";
  fs.createReadStream('analysis.csv')
    .pipe( csv() )
    .on('data', function(row) {
      //console.log('row', row.symbol + " " + row.EIId);
      if (row.EIId === eiString) {
        //console.log('yeah.....');
        data.push (row);
      }
    })
    .on('end', function() {
      //console.log('end');
      result (data);
    })
}

module.exports.releases = releases;
module.exports.loadDataEiid = loadDataEiid;
