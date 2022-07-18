<template>
  <div>
    <h1>Suppliers</h1>
    <div class="head-btn-container">
      <PrimaryButton
        text="ADD SUPPLIER"
        name="addItem"
        type="submit"
        onclick=""
      />
    </div>
    <div v-for="supplier in suppliers" :key="supplier.id">
      <div class="item-container">
        <h3>Supplier Name: {{ supplier.supplierName }}</h3>
        <p>Supplier Address: {{ supplier.supplierAddress }}</p>
        <p>supplier Contact: {{ supplier.supplierContact }}</p>
        <div class="action-container">
          <router-link
            :to="{ name: 'EditSupplier', params: { id: supplier.id } }"
          >
            <PrimaryButton text="edit" onclick="" />
          </router-link>
          <PrimaryButton text="delete" onclick="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "../../components/button/button.vue";
import getSuppliers from "../../composables/suppliers/getSuppliers";
export default {
  name: "SuppliersList",
  components: {
    PrimaryButton,
  },
  setup() {
    const { suppliers, error, load } = getSuppliers();
    load();

    return { suppliers, error };
  },
};
</script>
