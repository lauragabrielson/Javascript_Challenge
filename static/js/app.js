// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// select the form
var form = d3.select("#form");

// define function to populate table with filtered data
function populateTable(data){
    
    tbody.html("");

    data.forEach((sighting) => {

        var row = tbody.append("tr");
               
        Object.values(sighting).forEach((val) => {
           var cell = row.append("td");
           cell.text(val);
       });
    })
}

// define function to filter data upon click and paths to variables
function handleClick(){
    d3.event.preventDefault();
    

    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    var filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    if(city) {
        filterData = filterData.filter((row) => row.city === city);
    }
    if(state) {
        filterData = filterData.filter((row) => row.state === state);
    }
    if(country) {
        filterData = filterData.filter((row) => row.country === country);
    }
    if(shape) {
        filterData = filterData.filter((row) => row.shape === shape);
    }
    populateTable(filterData);
}

// // execute filter on button click - unncomment to use filter button and comment out keyup below
// d3.selectAll("#filter-btn").on('click', handleClick);

// execute filter on keyup - filters as you type
d3.selectAll("#form").on('keyup', handleClick);



