window.TodoList = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(data) {
    //this.tasks = new TodoList.Collections.Tasks(data.tasks);
    //new TodoList.Routers.Tasks();

    alert('HEY!');
    Backbone.history.start();
  }
};

$(document).ready(function() {
  TodoList.initialize();
});
