<script setup>
const { stageName, stageNo, index } = defineProps([
  "stageName",
  "stageNo",
  "index",
]);
</script>

<template>
  <li
    class="flex items-center  gap-2"
    :class="{ 'text-orange-400': stageNo === index + 1 }"
  >
    <span>{{ stageName }}</span>
    <svg
      v-if="index < 5"
      class="size-2 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 10"
      
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m7 9 4-4-4-4M1 9l4-4-4-4"
      />
    </svg>
  </li>
</template>
