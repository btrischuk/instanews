$(document).ready(() => {
  
  let lookUp = () => {

      $('header').addClass('new-layout');
      $('.logo img').addClass('resize-logo');
      let selectedArticles = $('select').val();
  
    //empty articles before loading more

    $('#stories').empty();

    //show loader during loading page
    $('#loader').show();  

    // let url = 'https://api.nytimes.com/svc/topstories/v2/' + selectedArticles + '.json'; 
    // url += '?' + $.param({
    //   'api-key': 'dcecf5aafbd2481c8637e3375c7ffa3a'
    // });

    let url = `https://api.nytimes.com/svc/topstories/v2/${selectedArticles}.json`; 
    url += `?${$.param({
    'api-key': 'dcecf5aafbd2481c8637e3375c7ffa3a'
    })}`;

    //hide loader upon loading articles
    if (selectedArticles === 'section'){
      $('#loader').hide();  
      return true;
    }

    $.ajax({
      url:url,
      method: 'GET',
    })
    
    .done( (data) => {

      // filter data for articles with images and only allow 12 srticles 

      $.each(data.results.filter((item) => { return item.multimedia.length !== 0 }).slice(0, 12), (index, value) => {

        $('#loader').hide(); 
      
        let outPutAbstract = value.abstract;
        let outPutUrl = value.url;
        let imageQuality = value.multimedia.length -1;
        let outPutImage = value.multimedia[imageQuality].url;
        // let stories = $('#stories').append('<a href="' + outPutUrl + '"><div class="news-container" style="background-image:url('+outPutImage+')"><p> ' + outPutAbstract + '</p></div></a>');
        let stories = $('#stories').append(`<a href="${outPutUrl}"><div class="news-container" style="background-image:url(${outPutImage})"><p> ${outPutAbstract}</p></div></a>`);
      });
    })

    .fail((error) => {
      $('.stories').append('Reload Browser');      
      throw error;
    });
  };

  //reload articles upon return to website

  $('#selected-articles').on('change', () => {
    lookUp();
  });

  $(() => {
    $('select').selectric();
  });
});
