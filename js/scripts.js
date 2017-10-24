$(document).ready(function() {

  var lookUp = function(){
    $('header').addClass('new-layout');
    $('.logo img').addClass('resize-logo');
    var selectedArticles = $('select').val();

    //empty articles before loading more

    $('#stories').empty();

    //show loader during loading page
    $('#loader').show();  

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectedArticles + '.json'; 
    url += '?' + $.param({
      'api-key': "dcecf5aafbd2481c8637e3375c7ffa3a"
    });

    //hide loader upon loading articles
    if (selectedArticles == 'section'){
      $('#loader').hide();  
      return true;
    }

    $.ajax({
      url:url,
      method: 'GET',
    })
    
    .done(function (data) {

            // filter data for articles with images and only allow 12 srticles 

      $.each(data.results.filter(function(item) { return item.multimedia.length !== 0 }).slice(0, 12), function(index, value) {
        // console.log('data.results:', value)

        $('#loader').hide(); 
      
        var outPutAbstract = value.abstract;
        var outPutUrl = value.url;
        var imageQuality = value.multimedia.length -1;
        var outPutImage = value.multimedia[imageQuality].url;
        var stories = $('#stories').append('<a href="' + outPutUrl + '"><div class="news-container" style="background-image:url('+outPutImage+')"><p> ' + outPutAbstract + '</p></div></a>');

      });
    })
    .fail(function(error){
      $('.stories').append('reload browser');      
      throw error;
    });
  };

  //reload articles upon return to website
  lookUp();

  $('#selected-articles').on('change', function() {
    lookUp();
  });

  $(function() {
    $('select').selectric();
  });
});
