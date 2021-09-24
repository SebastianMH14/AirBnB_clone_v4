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

$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('DIV#api_status').addClass('available');
  } else {
    $('DIV#api_status').removeClass('avalable');
  }
});
