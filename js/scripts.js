

//  $.getJSON({

var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
url += '?' + $.param({
  'api-key': 'dcecf5aafbd2481c8637e3375c7ffa3a'
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function (data) {
  console.log(data);

  $.each(data.results, function (i, val) {
    console.log(val.title);
  });

}).fail(function (err) {
  throw err;
});




// $("button").on("click", function() {
//   $.getJSON({

