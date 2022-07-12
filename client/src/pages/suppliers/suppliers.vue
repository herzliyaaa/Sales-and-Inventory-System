<template>
  <div>
    <h1>Suppliers</h1>
    <PrimaryButton text="ADD SUPPLIER" />
  </div>
</template>

<script>
import PrimaryButton from "../../components/button/button.vue";
export default {
  name: "SuppliersList",
  components: {
    PrimaryButton,
  },
};
</script>
