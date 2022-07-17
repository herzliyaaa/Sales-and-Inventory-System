<template>
  <div v-if="item">
    <h3>{{ item.description }}</h3>
  </div>
</template>

<script>
import getItem from "../../composables/items/getItem";

export default {
  props: ["id"],
  setup(props) {
    const { error, item, load } = getItem(props.id);
    load();
    return { error, item };
  },
};
</script>
