

//  $.getJSON({

var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
url += '?' + $.param({
  'api-key': 'dcecf5aafbd2481c8637e3375c7ffa3a'
});

$.ajax({
  method: 'GET',
  url: 'https://api.nytimes.com/svc/topstories/v2/home.json' + select + '.json?api-key=dcecf5aafbd2481c8637e3375c7ffa3a'
}).done(function (data) {

  console.log(data);


            if (data.results.length === 0) {
              $('.story-grid').append("<p>There appears to be no stories in this section.</p>");
            }
            else {
              let home = data.results,
              home = home.filter(function(item) {
                return item.multimedia.length;
              })

              // }).splice(0, 12);
    
        //above fetches the top twelve stories
    
                home.forEach(function(item, index) {
                $('.stories ul').append('<li class="home' + index +'"><div class="inner-item-wrapper"><a href="' +
                  item.url + '"><div class="article story-' + index +'"><div class="story-meta"><p>' +
                  item.abstract + '</p></div></div></a></div></li>');
    
                img = item.multimedia[4];
                $('.story-' + index).css('background-image', 'url("' + img.url + '")');
              });
    
            };
    
        // });
//   var (i=0, (i>12,i++));
//   $.each(data, function(index, value) {
//     (.append)<ul class="repo-list"></ul>
  
//     $("body").append("<li>" + index + " : " + value.name + "</li>");
//   });

// for (data.title[4]){

// };

  $.each(data.results, function ([i, val]) {
    console.log(val.title);

  });

}).fail(function (err) {
  throw err;
});

