// from data.js
var tableData = data;

let tbody = d3.select("tbody");

function filterUFO(data){

    tbody.html("");

    data.forEach((sighting) => {

        let row = tbody.append("tr");
               
        Object.values(sighting).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    })
}

function handleClick(){
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filterData = tableData;

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
    filterUFO(filterData);
}

d3.selectAll("#filter-btn").on('click', handleClick);

filterUFO(tableData);



// // from data.js
// var tableData = data;

// // select table
// var table = d3.select("table");

// // select body
// var tbody = d3.select("tbody");

// // // select button
// var button = d3.select("#filter-btn");

// // select input element
// var datetimeInput = d3.select("#datetime");

// // select the form
// var form = d3.select("#form");

// // create event handlers 
// button.on("click", handleClick);
// form.on("submit", handleClick);
// datetimeInput.on("change", handleClick);

// create striped table
// table.attr("class", "table table-striped");



// // This function is triggered when the button is clicked
// function handleClick() {
//     console.log("Filter was clicked!");
  
//     // We can use d3 to see the object that dispatched the event
//     console.log(d3.event.target);
//   }
  
//   // We can use the `on` function in d3 to attach an event to the handler function

  
// button.on("click", handleClick); 

  
// var date = data.map(data.datetime);

// var date = data.datetime

// console.log(date)
// // Iterate through each sighting
// function handleClick () {
//     d3.event.preventDefault();
//     datetimeInput.on("change", function() {
//         var newDate = d3.event.target.value;
//             if (newDate === data.datetime) {
//                      data.forEach((sighting) => {
//                     var row = tbody.append("tr");
//                     Object.entries(sighting).forEach(([key, value]) => {
//                     var cell = row.append("td");
//                     cell.text(value);
//                 });
//             });
//         }
//     });
// };
// button.on("click", handleClick);
  
// Iterate through each sighting
// datetimeInput.on("change", function() {
//     d3.event.preventDefault();
//     var newDate = d3.event.target.value;
//     console.log(newDate);
//     if (newDate === data.datetime) {
//         data.forEach((sighting) => {
//             var row = tbody.append("tr");
//             Object.entries(sighting).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//       });
//     }
// });

// datetimeInput.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(newDate);
// });
// if (newDate === date) {
//     data.forEach((sighting) => {
//         var row = tbody.append("tr");
//         Object.entries(sighting).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
//         });
//       });
// }




// // Iterate through each sighting  
// data.forEach(([datetime, city, state, country, shape, durationMinutes, comment]) => {

//     // Append one table row per sighting
//     var row = tbody.append("tr");
  
//     // append cells
//     row.append("td").text(datetime);
//     row.append("td").text(cit);
//     row.append("td").text(state);
//     row.append("td").text(country);
//     row.append("td").text(shape);
//     row.append("td").text(durationMinutes);
//     row.append("td").text(comment);
//   });
  

// // select table body
// var tbody = d3.select("tbody");

// // append row to table body
// var row = tbody.append("tr");

// // append
// row.append("td").text(newGrade[0]);

// // append
// row.append("td").text(newGrade[1]);