<script setup>
const { updateCandidateProperty } = useCandidates();
const { stageNo, stageName, id } = defineProps(["stageNo", "stageName", "id"]);
const displayStageNo = ref(stageNo);
const displayStageName = ref(stageName);
const editableValue = ref(`${displayStageNo.value}; ${displayStageName.value}`);
const isEditing = ref(false);

const getStageColor = (n) => {
  if (n <= displayStageNo.value) {
    switch (displayStageNo.value) {
      case 1:
        return "bg-green-400";
      case 2:
        return "bg-green-600";
      case 3:
        return "bg-orange-400";
      case 4:
        return "bg-yellow-500";
      case 5:
        return "bg-red-500";
      case 6:
        return "bg-purple-500";
    }
  }
  return "bg-gray-400";
};

function parseInput() {
  let numberPart = null;
  let textPart = null;
  const input = editableValue.value;
  const parts = input.split(";");

  if (parts.length !== 2) {
    cancelEdit();
    return { numberPart, textPart };
  }

  numberPart = parts[0].trim();
  textPart = parts[1].trim();

  // Check if the first part is a valid number
  if (isNaN(numberPart) || numberPart === "") {
    cancelEdit();
    return { numberPart: null, textPart: null };
  }

  return { numberPart: parseInt(numberPart), textPart };
}

const editStageNo = (event) => {
  isEditing.value = true;

  setTimeout(() => {
    document.querySelector(`inline_stage_edit__${id}`)?.focus();
  }, 0);
};

// Handle key events (Enter and Esc)
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    const { numberPart, textPart } = parseInput();

    if (!numberPart || !textPart) {
      cancelEdit();
      return;
    }

    displayStageName.value = textPart;
    displayStageNo.value = numberPart;

    saveStage(numberPart, textPart);
  } else if (event.key === "Escape") {
    cancelEdit();
  }
};

const saveStage = (number, text) => {
  isEditing.value = false;
  updateCandidateProperty(id, "pipelineStageNo", number);
  updateCandidateProperty(id, "pipelineStage", text);
};

const cancelEdit = () => {
  isEditing.value = false;
  editableValue.value = `${displayStageNo.value}; ${displayStageName.value}`;
};
</script>

<template>
  <td class="py-4" @contextmenu.prevent="editStageNo">
    <input
      v-if="isEditing"
      type="text"
      :id="`inline_stage_edit_${id}`"
      :placeholder="editableValue"
      v-model="editableValue"
      @blur="cancelEdit"
      @keydown="handleKeydown"
      class="border border-gray-200 rounded-md h-8 w-36"
    />
    <div v-else>
      <!-- stage name -->
      <div class="flex items-center gap-1 text-xs font-semibold">
        {{ displayStageName }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <!-- visual indicator -->
      <div class="flex gap-1 py-1">
        <div
          v-for="n in 6"
          :key="n"
          :class="getStageColor(n)"
          class="h-2 w-3 sm:h-4 sm:w-5 p-1 rounded-sm flex justify-center items-center text-white"
        >
          <span class="hidden text-xs sm:block">{{
            n <= displayStageNo ? n : ""
          }}</span>
        </div>
      </div>
    </div>
  </td>
</template>
