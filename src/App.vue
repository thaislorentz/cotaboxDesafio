<template>
  <Header/>
  <div class="informations">
    <h2 class="title">DATA</h2>
    <span class="subtitle"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </span>
  </div>
  <div class="body">
    <div class="body-table">
      <Table :persons="persons" />
    </div>
    <Chart :persons="persons" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Header from "./components/Header/Index.vue";
import Chart from "./components/Chart/Index.vue";
import Table from "./components/Table/Index.vue";

export default {
  name: "App",
  components: {
    Header,
    Table,
    Chart,
  },
  setup() {
    const store = useStore();
    const persons = computed(() => store.state.person);

    return {
      persons,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  -webkit-appearance: none;
}
.body {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
}
.body-table {
  display: flex;
  width: 50%;
}
.informations {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: #394b50;
}
.title {
  font-size: 40px;
}
.subtitle {
  font-size: 21px;
}
@media screen and (max-width: 1000px) {
  .body {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }
  .body-table {
  width: 100%;
}
}
@media screen and (max-width: 800px) {
  .informations {
    padding: 20px;
  }
  .title {
    font-size: 25px;
  }
  .subtitle {
    font-size: 18px;
  }
}
</style>
