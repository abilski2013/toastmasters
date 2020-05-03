d3.csv("unemployment_data.csv").then(function (data) {
    console.log(data);
    console.log(data[0]["Area"]);
    var selector = [];
    for (i = 0; i < data.length; i++) {
        var state = data[i]["Area"];
        if (selector.includes(state) == false) {
            selector.push(state);
        }
    }
    console.log(selector);
    var select = document.getElementById("stateSelect");
    for (var i = 0; i<selector.length; i++) {
        var opt = selector[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    } 
    var years = [];
    var unemp = [];
    var selected = d3.select("#stateSelect").property("value");
    console.log(selected);
    for (i = 0; i < data.length; i++) {
        var year = data[i]["Date"];
        if (years.includes(year) == false) {
            years.push(year);
        }
        if (data[i]["Area"] == selected) {
            unemp.push(data[i]["Unemployment_Rate"]);
        }
    }
    console.log(years);
    console.log(unemp);
    var trace1 = {
        x: years,
        y: unemp,
        type: 'scatter'
    };
    var data1 = [trace1];
    var layout = {
        title: "Unemployment History"
    };
    Plotly.newPlot('chart1', data1, layout);
    d3.select("#stateSelect").on("change", update);
    function update() {
        var years = [];
        var unemp = [];
        var selected = d3.select("#stateSelect").property("value");
        console.log(selected);
        for (i = 0; i < data.length; i++) {
            var year = data[i]["Date"];
            if (years.includes(year) == false) {
            years.push(year);
        }
            if (data[i]["Area"] == selected) {
            unemp.push(data[i]["Unemployment_Rate"]);
        }
        }
        console.log(years);
        console.log(unemp);
        var trace1 = {
            x: years,
            y: unemp,
            type: 'scatter'
        };
        var data1 = [trace1];  
        var layout = {
            title: "Unemployment History"
        };
        Plotly.newPlot('chart1', data1, layout);        
    }
    
    
    
    
    var selector2 = [];
    for (i = 0; i < data.length; i++) {
        var year = data[i]["Date"];
        if (selector2.includes(year) == false) {
            selector2.push(year);
        }
    }
    console.log(selector2);
    var select = document.getElementById("yearSelect");
    for (var i = 0; i<selector2.length; i++) {
        var opt = selector2[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    } 
    var states = [];
    var unemp = [];
    var selected = d3.select("#yearSelect").property("value");
    console.log(selected);
    for (i = 0; i < data.length; i++) {
        if (data[i]["Date"] == selected) {
            states.push(data[i]["Area"]);
            unemp.push(data[i]["Unemployment_Rate"]);
        }
    }
    console.log(states);
    console.log(unemp);
    var trace2 = {
        x: states,
        y: unemp,
        type: 'bar'
    };
    var data2 = [trace2];
    var layout = {
        title: "Unemployment - all states by year",
        margin: {b: 165}
    };
    Plotly.newPlot('chart2', data2, layout);
    d3.select("#yearSelect").on("change", updates);
    function updates() {
        var states = [];
        var unemp = [];
        var selected = d3.select("#yearSelect").property("value");
        console.log(selected);
        for (i = 0; i < data.length; i++) {
            if (data[i]["Date"] == selected) {
            states.push(data[i]["Area"]);
            unemp.push(data[i]["Unemployment_Rate"]);
        }
        }
        console.log(states);
        console.log(unemp);
        var trace2 = {
            x: states,
            y: unemp,
            type: 'bar'
        };
        var data2 = [trace2];  
        var layout = {
            title: "Unemployment - all states by year",
            margin: {b: 165}
        };
        Plotly.newPlot('chart2', data2, layout);        
    }    
    
    
    
});

