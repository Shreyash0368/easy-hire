<script setup>
const { heading, className } = defineProps(["heading", "className"]);
</script>

<template>
  <th v-if="heading === 'Checkbox'">
    <div class="flex justify-center items-center">
      <input
        id="checkbox-table-search-1"
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
    </div>
  </th>
  <th
    v-else
    scope="col"
    class="py-3 capitalize"
    :class="{'cursor-move': heading !== 'Candidate Name'}, className"
  >
    <div class="flex items-center">
      {{ heading }}
      <a href="#"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </a>
    </div>
  </th>
</template>
