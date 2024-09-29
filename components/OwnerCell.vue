<script setup>
const {updateCandidateProperty} = useCandidates()
const { id, owner } = defineProps(["id", "owner"]);
const isEditing = ref(false);
const editableOwner = ref(owner);
const displayName = ref(owner);

const editName = (event) => {
  isEditing.value = true;
  setTimeout(() => {
    document.querySelector("input:focus")?.focus();
  }, 0);
};

// Handle key events (Enter and Esc)
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    saveName(); 
  } else if (event.key === "Escape") {
    cancelEdit(); 
  }
};

const saveName = () => {
  isEditing.value = false;
  updateCandidateProperty(id, 'applicationOwner', editableOwner.value);
  displayName.value = editableOwner.value;
};

const cancelEdit = () => {
  isEditing.value = false;
};
</script>

<template>
  <th
    class="text-sm font-semibold px-2 sm:px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
    scope="row"
  >
    <div
      @contextmenu.prevent="editName"
      class="flex gap-1 items-center"
    >
      <img
        class="h-4 w-4 sm:w-6 sm:h-6 rounded-full"
        src="https://picsum.photos/200/300"
        alt="Profile image"
      />

      <!-- Editing Mode -->
      <input
        v-if="isEditing"
        v-model="editableOwner"
        @blur="cancelEdit"
        @keydown="handleKeydown"
        class="border border-gray-300 rounded p-1 w-4/5 "
      />
      <!-- Display Mode -->
      <span v-else>{{ displayName }}</span>
    </div>
  </th>
</template>
