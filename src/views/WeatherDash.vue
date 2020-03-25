<template>
  <div class="uk-grid-small uk-child-width-1" uk-grid>
    <div class="uk-width-1-3@m">
      <div class="uk-container uk-container-xlarge">
        <BaseInput
          @captureInput="captureInput($event)"
          id="123"
          placeHolder="Search Cities"
        ></BaseInput>
        <ul class="uk-list uk-list-striped">
          <baseLi v-for="item in searchHistory" :key="item.id">
            <p>{{ item }}</p>
          </baseLi>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  data() {
    return {
      searchHistory: [],
      search: ""
    };
  },
  methods: {
    captureInput(x) {
      this.search = x;
      this.searchHistory.push(x);
      this.searchCity(x);
    },
    searchCity(x) {
      EventService.getCurrentWeather(x).then(res => console.log(res.data));
    }
  }
};
</script>

<style scoped></style>
