<template>
  <input name="{{name}}" />
</template>

<script>
export default {
  name: "FormInput",
};
</script>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
