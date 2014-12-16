window.Task = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(data) {
    new Task.Routers.Tasks();

    Backbone.history.start();
  }
};

$(document).ready(function() {
  Task.initialize();
});
