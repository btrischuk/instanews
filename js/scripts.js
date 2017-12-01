$(document).ready(() => {
  $('select').selectric();

  const lookUp = function lookUp() {

    $('header').addClass('new-layout');
    $('.logo img').addClass('resize-logo');
    const selectedArticles = $('select').val();

    //empty articles before loading more

    $('#stories').empty();

    //show loader during loading page
    $('#loader').show();

    let url = `https://api.nytimes.com/svc/topstories/v2/${selectedArticles}.json`;
    url += `?${$.param({ 'api-key': 'dcecf5aafbd2481c8637e3375c7ffa3a' })}`;

    //hide loader upon loading articles

    $.ajax({
      url,
      method: 'GET'
    }).done(data => {

      data.results.filter(item => item.multimedia.length !== 0).slice(0, 12).forEach(value => {

        const outPutAbstract = value.abstract;
        const outPutUrl = value.url;
        const imageQuality = value.multimedia.length - 1;
        const outPutImage = value.multimedia[imageQuality].url;

        $('#stories').append(`<a href="${outPutUrl}"><div class="news-container" style="background-image:url(${outPutImage})"><p> ${outPutAbstract}</p></div></a>`);
      });
    }).fail(error => {
      $('.stories').append('Reload Browser');
      throw error;
    }).always(() => {
      $('#loader').hide();
    });
  };
  //reload articles upon return to website

  $('#selected-articles').on('change', () => {
    lookUp();
  });
});