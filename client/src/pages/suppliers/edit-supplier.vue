<template>
  <div v-if="supplier">
    <h3>Supplier Name: {{ supplier.supplierName }}</h3>
    <p>Supplier Address: {{ supplier.supplierAddress }}</p>
    <p>supplier Contact: {{ supplier.supplierContact }}</p>
  </div>
</template>

<script>
import getSupplier from "../../composables/suppliers/getSupplier";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const { error, supplier, load } = getSupplier(route.params.id);
    load();
    return { error, supplier };
  },
};
</script>
