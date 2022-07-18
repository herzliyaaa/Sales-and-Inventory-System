<template>
  <div>
    <h1>Items</h1>
    <div class="head-btn-container">
      <PrimaryButton text="ADD ITEM" name="addItem" type="submit" onclick="" />
    </div>
    <div v-for="item in items" :key="item.id">
      <div class="item-container">
        <h3>Item Name: {{ item.description }}</h3>
        <p>Barcode: {{ item.barcode }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Cost per Unit: {{ item.cost }}</p>
        <div class="action-container">
          <router-link :to="{ name: 'EditItems', params: { id: item.id } }">
            <PrimaryButton text="edit" onclick="" />
          </router-link>
          <PrimaryButton text="delete" onclick="" />
        </div>
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

.action-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-content: center;
  padding: 3px;
  width: 100%;
  gap: 10px;
}

.head-btn-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-content: center;
  padding: 15px;
}
</style>
