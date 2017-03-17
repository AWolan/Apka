import Vue from 'vue';

export default Vue.component('App', {
  template: `
    <div id="appo">
      <img src="./assets/logo.png">
      Test
      <router-view></router-view>
    </div>
  `,
  // given data as parameters
  props: {
    a: {
      type: String,
      required: true,
      default: 'A',
      validator: function (value) {
        return value && value.length > 0;
      }
    }
  },
  // data available from template
  data: {},

  computed: {},
  // methods available from template
  methods: {
    b: function() {
      // emit up (to parent) event b
      this.$emit('b');
    }
  }
});
