<template>
  <div>
    <h1>Customers</h1>
    <div class="head-btn-container">
      <PrimaryButton
        text="ADD CUSTOMER"
        name="addItem"
        type="submit"
        onclick=""
      />
    </div>
    <div v-for="customer in customers" :key="customer.id">
      <div class="item-container">
        <h3>Customer FirstName: {{ customer.firstname }}</h3>
        <p>Customer LastName: {{ customer.lastname }}</p>
        <p>Customer Address: {{ customer.customerAddress }}</p>
        <p>Customer Contact: {{ customer.customerContact }}</p>
        <div class="action-container">
          <PrimaryButton text="edit" onclick="" />
          <PrimaryButton text="delete" onclick="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "../../components/button/button.vue";
import getCustomers from "../../composables/customers/getCustomers";
export default {
  name: "CustomersList",
  components: {
    PrimaryButton,
  },
  setup() {
    const { customers, error, load } = getCustomers();
    load();

    return { customers, error };
  },
};
</script>
