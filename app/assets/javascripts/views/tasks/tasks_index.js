Task.Views.TasksIndex = Backbone.View.extend({
  template: JST['tasks/index'],

  render: function() {
    this.$el.html(this.template);
    return this;
  }
});
