function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}
//Funktionen för att visa avgångstabellen samt beräkna gångtid för Liljeholmen
function uppdatera(){
  document.getElementById('departures').innerHTML = "";
  var div = document.getElementById('departures');
  const url = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=539ac9fe254a4528b9b71a4f0c4f09a6&siteid=9294&timewindow=10';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let departures = data.ResponseData.Metros;
      return departures.map(function (departure) {
        let div1 = createNode('div');
            div2 = createNode('div');
        div1.innerHTML = '<div class ="div1"></div>'
          var devtext = "";
          var gangvag = parseInt(document.getElementById("gangvag").value);
          var avgangtid = departure.DisplayTime;
          var n = avgangtid.includes(":");
          if (n == true) {
            var avgangtid = "";
          }
          else{
            var avgangtid = parseInt(avgangtid.replace(" min", ""));
          }
         if(departure.Deviations != null)
          {
            for(var i = 0; i <departure.Deviations.length; i++)
            {
              var obj = departure.Deviations[i];
              devtext += obj.Text;
            }
          }
          //Beräkning av gångtid
         var totaltid = avgangtid - gangvag; //Tiden när resenären ska börja gå mot hållplatsen
         if(isNaN(totaltid) || avgangtid < gangvag){ 
           totaltid = ""
         }
         else if(avgangtid == gangvag){
           totaltid ="Gå nu"
         }
         else if(totaltid == 1){
           totaltid = "Gå nu"
         }
         else{
           totaltid = "Gå om " + (totaltid - 1) +" min" 
         }
        //Utskrift av avgångstabellen 
        div2.innerHTML = `<div class ="linje">${departure.LineNumber + " " + departure.Destination + '</div><div class="avgang">' + departure.DisplayTime + '<div class="ag">' + totaltid + "</div></div>" + '<div class ="dev">' + devtext + "</div>"}`;
        append(div1, div2);
        append(div, div1);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Funktionen för att visa avgångstabellen samt beräkna gångtid för Margeretelundsskolan
function maggan(){
  document.getElementById('departures').innerHTML = "";
  const div = document.getElementById('departures');
  const url = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=539ac9fe254a4528b9b71a4f0c4f09a6&siteid=2633&timewindow=10';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let departures = data.ResponseData.Buses;
      return departures.map(function (departure) {
        let div1 = createNode('div'),
          div2 = createNode('div');
        div1.innerHTML = '<div class ="div1"></div>'
          var devtext = "";
          var gangvag = parseInt(document.getElementById("gangvag").value);
          var avgangtid = departure.DisplayTime;
          var n = avgangtid.includes(":");
          if (n == true) {
            var avgangtid = "";
          }
          else{
            var avgangtid = parseInt(avgangtid.replace(" min", ""));
          }
          if(departure.Deviations != null)
          {
            for(var i = 0; i <departure.Deviations.length; i++)
            {
              var obj = departure.Deviations[i];
              devtext += obj.Text;
            }
          }
          //Beräkning av gångtid
          var totaltid = avgangtid - gangvag; //Tiden när resenären ska börja gå mot hållplatsen
          if(isNaN(totaltid) || avgangtid < gangvag){ 
            totaltid = ""
          }
          else if(avgangtid == gangvag){
            totaltid ="Gå nu"
          }
          else if(totaltid == 1){
            totaltid = "Gå nu"
          }
          else{
            totaltid = "Gå om " + (totaltid - 1) +" min" 
          }
          //Utskrift av avgångstabellen
          div2.innerHTML = `<div class ="linje">${departure.LineNumber + " " + departure.Destination + '</div><div class="avgang">' + departure.DisplayTime + '<div class="ag">' + totaltid + "</div></div>" + '<div class ="dev">' + devtext + "</div>"}`;        append(div1, div2);
        append(div, div1);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Funktionen för att visa avgångstabellen samt beräkna gångtid för Danderyds Sjukhus
function ds(){
  document.getElementById('departures').innerHTML = "";
  const div = document.getElementById('departures');
  const url = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=539ac9fe254a4528b9b71a4f0c4f09a6&siteid=9201&timewindow=10';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let departures = data.ResponseData.Buses;
      return departures.map(function (departure) {
        let div1 = createNode('div'),
          div2 = createNode('div');
        div1.innerHTML = '<div class ="div1"></div>'
          var devtext = "";
          var gangvag = parseInt(document.getElementById("gangvag").value);
          var avgangtid = departure.DisplayTime;
          var n = avgangtid.includes(":");
          if (n == true) {
            var avgangtid = "Hejhopp";
          }
          else{
            var avgangtid = parseInt(avgangtid.replace(" min", ""));
          }
          if(departure.Deviations != null)
          {
            for(var i = 0; i <departure.Deviations.length; i++)
            {
              var obj = departure.Deviations[i];
              devtext += obj.Text;
            }
          }
          //Beräkning av gångtid
          var totaltid = avgangtid - gangvag; //Tiden när resenären ska börja gå mot hållplatsen
          if(isNaN(totaltid)  || avgangtid < gangvag){ 
            totaltid = ""
          }
          else if(avgangtid == gangvag){
            totaltid ="Gå nu"
          }
          else if(totaltid == 1){
            totaltid = "Gå nu"
          }
          else{
            totaltid = "Gå om " + (totaltid - 1) +" min" 
          }
          //Utskrift av avgångstabellen
          div2.innerHTML = `<div class ="linje">${departure.LineNumber + " " + departure.Destination + '</div><div class="avgang">' + departure.DisplayTime + '<div class="ag">' + totaltid + "</div></div>" + '<div class ="dev">' + devtext + "</div>"}`;        append(div1, div2);
        append(div, div1);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Funktionen för att visa störningsinfo för Danderyds Sjukhus
function storningds(){
  const ul = document.getElementById('storning');
  const url2 = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/deviations.json?key=56bfebf849d6410bbfdfee308126e4d3&siteId=9201';
  fetch(url2)
    .then((resp) => resp.json())
    .then(function (data) {
      let storning = data.ResponseData;
      return storning.map(function (deviations) {
        let li = createNode('li'),
          span = createNode('span');
        //Utskrift av störningsinfo
        span.innerHTML = `${"<hr>" + "<h3>" + deviations.ScopeElements + "</h3>" + "<h4>" + deviations.Header + "</h4>" + deviations.Details}`;
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Funktionen för att visa störningsinfo för Margeretelundsskolan
function storningmaggan(){
  const ul = document.getElementById('storning');
  const url2 = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/deviations.json?key=56bfebf849d6410bbfdfee308126e4d3&siteId=2633';
  fetch(url2)
    .then((resp) => resp.json())
    .then(function (data) {
      let storning = data.ResponseData;
      return storning.map(function (deviations) {
        let li = createNode('li'),
          span = createNode('span');
          //Utskrift av störningsinfo
        span.innerHTML = `${"<hr>" + "<h3>" + deviations.ScopeElements + "</h3>" + "<h4>" + deviations.Header + "</h4>" + deviations.Details}`;
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Funktionen för att visa störningsinfo för Liljeholmen
function storninglilje(){
  const ul = document.getElementById('storning');
  const url2 = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/deviations.json?key=56bfebf849d6410bbfdfee308126e4d3&siteId=9294';
  fetch(url2)
    .then((resp) => resp.json())
    .then(function (data) {
      let storning = data.ResponseData;
      return storning.map(function (deviations) {
        let li = createNode('li'),
          span = createNode('span');
        //Utskrift av störningsinfo
        span.innerHTML = `${"<hr>" + "<h3>" + deviations.ScopeElements + "</h3>" + "<h4>" + deviations.Header + "</h4>" + deviations.Details}`;
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}