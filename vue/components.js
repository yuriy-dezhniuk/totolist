Vue.component('todo-item', {
  template: '\
    <li>\
      <input type="checkbox" name="scales"\
        v-on:change="$emit(\'change\', stage ? stage = false : stage = true )">\
      <span v-bind:class="{done: stage, undone: !stage}"></span>\
      {{ title }}  {{ stage }}\
      <button v-on:click="$emit(\'remove\')">Удалить</button>\
    </li>\
  ',
  props: ['title', 'stage',],
  model: {
    event: 'change',
  },
});

