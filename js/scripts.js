
$(document).ready(function() {

$('#selected-articles').on('change', function() {

  var selectedArticles = $(this).val();

  $("#stories").empty();

  $(#stories)

  // console.log(selected-articles);
  var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectedArticles + '.json'; 
  url += '?' + $.param({
    'api-key': "dcecf5aafbd2481c8637e3375c7ffa3a"
});

$.ajax({
  url:url,
  method: 'GET',
})
.done(function (data) {

 

  $.each(data.results.filter(function(item) { return item.multimedia.length !== 0 }).splice(0, 12), function(index, value) {
    console.log('data.results:', value)


  var outputTitle = value.title;
  var outputUrl = value.url;
  // console.log(value)
  var outputImage = value.multimedia[4].url;

    $('#stories').append('<a href="' + url 


    // $('#stories').append('<li>' + '<h2>' + '<a href="' + outputUrl + '">' + outputTitle + '</h2>' + outputImage + '</a>' + '</li>');
    
    //$('#stories').append('<li>' + outputImage + '<h2>' + outputTitle + '</h2>' + '</li>');
});
}); 
});
});
//   console.log(data);


//             if (data.results.length === 0) {
//               $('.story-grid').append("<p>There appears to be no stories in this section.</p>");
//             }
//             else {
//               let home = data.results,
//               home = home.filter(function(item) {
//                 return item.multimedia.length;
//               })

              // }).splice(0, 12);
    
        //above fetches the top twelve stories
    
            //     home.forEach(function(item, index) {
            //     $('.stories ul').append('<li class="home' + index +'"><div class="inner-item-wrapper"><a href="' +
            //       item.url + '"><div class="article story-' + index +'"><div class="story-meta"><p>' +
            //       item.abstract + '</p></div></div></a></div></li>');
    
            //     img = item.multimedia[4];
            //     $('.story-' + index).css('background-image', 'url("' + img.url + '")');
            //   });
    
            // };
    
        // });
//   var (i=0, (i>12,i++));
//   $.each(data, function(index, value) {
//     (.append)<ul class="repo-list"></ul>
  
//     $("body").append("<li>" + index + " : " + value.name + "</li>");
//   });

// for (data.title[4]){

// };

//   $.each(data.results, function ([i, val]) {
//     console.log(val.title);

//   });

// }).fail(function (err) {
//   throw err;
// });

// });