<template>
  <button
    class="primary-btn"
    id="myBtn"
    type="{{type}}"
    name="{{name}}"
    @click="
      {
        {
          onClick;
        }
      }
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
};
</script>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  onClick: {
    type: String,
    required: false,
  },
});
</script>

<style lang="css">
.primary-btn {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-bottom: 0.5rem;
  background-color: #6d28d9;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
}

.primary-btn:hover,
.primary-btn:focus,
.primary-btn:focus:not(:focus-visible) {
  background-color: #5b21b6;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
