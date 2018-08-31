let flashMessage = {
  init: function () {
    let messages = $('#flash_messages_bootstrap');
    if (! messages.is(':visible')) {
      messages.slideDown(500);
    }
  },
  insert: function (message, className) {
    let alert = $('<div class="alert alert-dismissible" role="alert"></div>');
    switch (className) {
      case 'error':
        alert.addClass('alert-danger');
        break;
      case 'success':
        alert.addClass('alert-success');
        break;
      default:
        alert.addClass('alert-info');
    }
    let button = $('<button type="button" class="close" data-dismiss="alert"></button>')
      .append('<span aria-hidden="true">&times;</span>');
    alert.append(button).append(message);

    let container = $('#flash_messages_bootstrap');
    if (container.is(':visible')) {
      alert.hide();
      container.append(alert);
      alert.slideDown();
      return;
    }

    container.append(alert);
    container.slideDown();
  }
};
