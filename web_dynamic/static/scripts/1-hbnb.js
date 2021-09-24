$(function () {
  const amenitiesId = [];
  const amenitiesName = [];
  $('input:checkbox').click(function () {
    if (($this).is(':checked')) {
      amenitiesId.push($(this).attr('data-id'));
      amenitiesName.push($(this).attr('data-name'));
    } else {
      amenitiesId.splice(amenitiesId.indexOf($(this).attr('data-id')), 1);
      amenitiesName.splice(amenitiesName.indexOf($(this).attr('data-name')), 1);
    }
    $('.amenities h4').text(amenitiesName.join(', '));
  });
});
