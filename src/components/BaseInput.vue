<template>
  <div class="uk-container">
    <form class="uk-inline-block">
      <div class="uk-margin" uk-margin>
        <div uk-form-custom="target: true">
          <input
            class="uk-input uk-form-width-medium"
            type="text"
            :placeholder="placeHolder"
            v-model="input"
          />

          <button
            @click.prevent="captureInput()"
            :id="id"
            class="uk-button uk-button-secondary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      default: 1
    },
    placeHolder: {
      type: String
    }
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    captureInput() {
      this.$emit("captureInput", this.input);
    }
  }
};
</script>

<style lang="scss" scoped></style>
class="uk-input uk-form-width-medium"
