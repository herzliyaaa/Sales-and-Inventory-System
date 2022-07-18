<template>
  <div v-if="customer">
    <h3>Customer FirstName: {{ customer.firstname }}</h3>
    <p>Customer LastName: {{ customer.lastname }}</p>
    <p>Customer Address: {{ customer.customerAddress }}</p>
    <p>Customer Contact: {{ customer.customerContact }}</p>
  </div>
</template>

<script>
import getCustomer from "../../composables/customers/getCustomer";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const { error, customer, load } = getCustomer(route.params.id);
    load();
    return { error, customer };
  },
};
</script>
