<template>
  <div>
    <h1>Items</h1>
    <PrimaryButton text="ADD ITEM" name="addItem" type="submit" onclick="" />
    <div v-for="item in items" :key="item.id">
      <h3>{{ item.description }}</h3>
    </div>
  </div>
</template>

<script>
import getItems from "../../composables/items/getItems";
import PrimaryButton from "@/components/button/button.vue";
export default {
  name: "ItemsList",
  components: {
    PrimaryButton,
  },

  setup() {
    const { items, error, load } = getItems();
    load();

    return { items, error };
  },
};
</script>
