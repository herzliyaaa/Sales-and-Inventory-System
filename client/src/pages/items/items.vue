<template>
  <div>
    <h1>Items</h1>
    <PrimaryButton text="ADD ITEM" name="addItem" type="submit" onclick="" />
    <div v-for="item in items" :key="item.id">
      <div class="item-container">
        <h3>Item Name: {{ item.description }}</h3>
        <p>Barcode: {{ item.barcode }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Cost per Unit: {{ item.cost }}</p>
      </div>
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

<style>
.item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: rgb(232, 238, 222);
}
</style>
