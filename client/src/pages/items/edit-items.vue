<template>
  <div v-if="item">
    <h3>{{ item.description }}</h3>
    <h3>{{ item.barcode }}</h3>
    <h3>{{ item.quantity }}</h3>
    <h3>{{ item.cost }}</h3>
  </div>
</template>

<script>
import getItem from "../../composables/items/getItem";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const { error, item, load } = getItem(route.params.id);
    load();
    return { error, item };
  },
};
</script>
