<template>
  <div>
    <h1>Customers</h1>
    <PrimaryButton text="ADD CUSTOMER" />
  </div>
</template>

<script>
import PrimaryButton from "../../components/button/button.vue";
export default {
  name: "CustomersList",
  components: {
    PrimaryButton,
  },
};
</script>
