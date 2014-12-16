Task.Routers.Tasks = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    alert('router index');
    var view = new Task.Views.TasksIndex();

    view.render();
  }
});
