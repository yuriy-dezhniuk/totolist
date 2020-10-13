Vue.component('todo-item', {
  template: `
    <li class="list-item">
      <div>
        <input type="checkbox" name="scales" :checked="stage" v-on:change="changeStage">
        <span class="indicator" v-bind:class="{done: stage}"></span>
        <span v-bind:class="{linethrough: stage}">
          {{ title }}
        </span>
      </div>
      <button class="btn delete-item-btn" v-on:click="$emit('remove')">Delete</button>
    </li>
  `,
  props: ['title', 'stage',],
  methods: {
    changeStage() {
      this.$emit('ubdatestate', !this.stage);
    },
  },

});

