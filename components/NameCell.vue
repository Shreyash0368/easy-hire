<script setup>
import { Drawer } from "flowbite";
const {updateCandidateProperty} = useCandidates()
const { id, name } = defineProps(["id", "name"]);
const isEditing = ref(false);
const editableName = ref(name);
const displayName = ref(name);

onMounted(() => {
  const $drawer = document.getElementById(`candidate-drawer-right-${id}`);
  const $button = document.getElementById(`drawer-open-btn-${id}`);

  if ($drawer) {
    const drawer = new Drawer($drawer, { placement: "right" });

    $button.addEventListener("click", () => {
      drawer.show();
    });
  }
});

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
  updateCandidateProperty(id, 'name', editableName.value);
  displayName.value = editableName.value;
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
    <button
      @contextmenu.prevent="editName"
      :id="`drawer-open-btn-${id}`"
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
        v-model="editableName"
        @blur="cancelEdit"
        @keydown="handleKeydown"
        class="border border-gray-300 rounded p-1 w-4/5"
      />
      <!-- Display Mode -->
      <span v-else>{{ displayName }}</span>
    </button>
  </th>
</template>
