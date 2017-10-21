
$(document).ready(function() {

  $('#selected-articles').on('change', function() {

    var selectedArticles = $(this).val();


    $('#stories').empty();

    $('#loader').show()  

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectedArticles + '.json'; 
    url += '?' + $.param({
      'api-key': "dcecf5aafbd2481c8637e3375c7ffa3a"
    });

    if (selectedArticles == ''){
      $('#loader').hide()  
    }

    $.ajax({
      url:url,
      method: 'GET',
    })
    
    .done(function (data) {

      $.each(data.results.filter(function(item) { return item.multimedia.length !== 0 }).slice(0, 12), function(index, value) {
        console.log('data.results:', value)

        $('#loader').hide()  
      
        var outPutAbstract = value.abstract;
        var outPutUrl = value.url;
        var outPutImage = value.multimedia[4].url;
        var stories = $('#stories').append('<a href="' + outPutUrl + '"><div class="news-container" style="background-image:url('+outPutImage+')"><p> ' + outPutAbstract + '</p></div></a>');
          // console.log(stories)

      });
    })
    .fail(function(error){
      throw error;
      // $('.stories').append('reload browser');
    });
  });
});
