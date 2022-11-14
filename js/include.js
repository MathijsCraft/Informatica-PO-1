const lang = document.documentElement.lang;
const language = lang.toString().toLowerCase();
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = '../' + language + '/elements/' + $(this).data('include') + '.html'
      // console.log(file)
      $(this).load(file)
    })
  })