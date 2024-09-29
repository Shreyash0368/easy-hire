<script setup>
const { field, value } = defineProps(["field", "value"]);
</script>

<template>
  <div>
    <p class="font-semibold text-gray-400">{{ field }}</p>
    <p>{{ value ? value: "-" }}</p>
  </div>
</template>
