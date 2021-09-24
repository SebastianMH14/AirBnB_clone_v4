$(function () {
    const amenitiesId = [];
    const amenitiesName = [];
    $('input:checkbox').click(function () {
      if ($(this).is(':checked')) {
        amenitiesId.push($(this).attr('data-id'));
        amenitiesName.push($(this).attr('data-name'));
        console.log(amenitiesName)
      } else {
        amenitiesId.splice(amenitiesId.indexOf($(this).attr('data-id')), 1);
        amenitiesName.splice(amenitiesName.indexOf($(this).attr('data-name')), 1);
      }
      $('.amenities h4').text(amenitiesName.join(', '));
    });
});

$.get('http://0.0.0.0:5001/api/v1/status', function (data) {
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  }, 'json');

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (const place of data) {
        const holder = '<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div><div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div></div><div class="description">' + place.description + '</div></article>';
        $(holder).appendTo('SECTION.places');
      }
    }
  });
