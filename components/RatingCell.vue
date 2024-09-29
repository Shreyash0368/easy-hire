<script setup>
const { rating, id } = defineProps(["rating", "id"]);
const { updateCandidateProperty } = useCandidates();
const isEditing = ref(false);
const editableRating = ref(rating);
const displayRating = ref(rating);

const editRating = (event) => {
  isEditing.value = true;
  console.log(isEditing.value);

  setTimeout(() => {
    document.querySelector(`rating_inline_${id}`)?.focus();
  }, 0);
};

// Handle key events (Enter and Esc)
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    saveRating();
  } else if (event.key === "Escape") {
    cancelEdit();
  }
};

const saveRating = () => {
  isEditing.value = false;
  if (editableRating.value > 5 || editableRating.value < 0) {
    cancelEdit();
    return;
  }
  updateCandidateProperty(id, "rating", editableRating.value);
  displayRating.value = editableRating.value;
};

const cancelEdit = () => {
  isEditing.value = false;
  editableRating.value = rating;
};
</script>

<template>
  <td class="px-1 py-4">
    <div class="flex" @contextmenu.prevent="editRating">
      <!-- input -->
      <input
        v-if="isEditing"
        type="number"
        :name="`rating_inline_${id}`"
        :id="`rating_inline_${id}`"
        min="0"
        max="5"
        step="0.1"
        v-model="editableRating"
        @blur="cancelEdit"
        @keydown="handleKeydown"
        class="w-16 border h-8 border-gray-200 rounded-md"
      />

      <!-- display -->
      <div class="w-10 flex items-center gap-1 border rounded-full" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="none"
          class="size-3"
          :class="{ 'fill-yellow-300': rating > 0 }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <span class="text-xs font-semibold text-black">{{
          displayRating
        }}</span>
      </div>
    </div>
  </td>
</template>
