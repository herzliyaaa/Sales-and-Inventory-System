<template>
  <div>
    <h1>Items</h1>
    <PrimaryButton text="ADD ITEM" />
  </div>
</template>

<script>
import PrimaryButton from "@/components/button/button.vue";
export default {
  name: "ItemsList",
  components: {
    PrimaryButton,
  },
};
</script>
