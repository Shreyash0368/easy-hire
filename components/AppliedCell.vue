<template>
  <td class="py-4" @contextmenu.prevent="editAppliedDate">
    <input
      type="date"
      :name="`applied_date_inline_${id}`"
      :id="`applied_date_inline_${id}`"
      class="w-36 border border-gray-200 rounded-md"
      v-if="isEditing"
      @blur="cancelEdit"
      @keydown="handleKeydown"
      v-model="editableDate"
    />

    <p v-else>
      {{ displayDate }}
    </p>
  </td>
</template>

<script setup>
const {updateCandidateProperty} = useCandidates()
const { date, id } = defineProps(["date", "id"]);
const isEditing = ref(false);

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const editableDate = ref(formatDate(date));
const displayDate = ref(formatDate(date));


const editAppliedDate = (event) => {
  isEditing.value = true;
 
  setTimeout(() => {
    document.querySelector(`rating_inline_${id}`)?.focus();
  }, 0);
};

// Handle key events (Enter and Esc)
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    saveAppliedDate();
  } else if (event.key === "Escape") {
    cancelEdit();
  }
};

const saveAppliedDate = () => {
  isEditing.value = false;
  updateCandidateProperty(id, "appliedDate", editableDate.value);
  displayDate.value = formatDate(editableDate.value);
};

const cancelEdit = () => {
  isEditing.value = false;
  editableDate.value = displayDate.value;
};
</script>
