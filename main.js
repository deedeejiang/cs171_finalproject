/* main JS file */
var dateFormatter = d3.timeFormat("%Y-%m-%d");
var dateParser = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

// Load data
loadData();

function loadData() {
    d3.csv("data/citibike-sample.csv", function(data) {
        for (var i = 0; i < data.length; i++) {
            data[i].tripduration = +data[i].tripduration;
            // data[i].starttime = dateParser(data[i].starttime);
            // data[i].endtime = dateParser(data[i].endtime);

        }
        console.log(data);
    })
}
