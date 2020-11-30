// Fare una to do list.

$(document).ready(
  function() {


    var coseDaFare = [
      {
        title:"Colazione",
        body:"robe da mangiare"
      },
      {
        title:"Pulizia",
        body:"fare la doccia",
      },
      {
        title:"Lavoro",
        body:"fare esercizio object",
      },
      {
        title:"Allenamento",
        body:"fare esercizio fisico",
      }
    ];



    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < coseDaFare.length; i++) {
      var html = template(coseDaFare[i]);
      $("#prova").append(html);
    }
    console.log(source);



















  }
);
