<template>
  <td class="py-4" @contextmenu.prevent="editTeam">
    <input
      v-if="isEditing"
      type="textArea"
      :id="`inline_team_edit_${id}`"
      @blur="cancelEdit"
      @keydown="handleKeydown"
      v-model="editableValue"
      class="border border-gray-200 rounded-md min-h-8 text-wrap max-w-36"
    />
    <div class="text-xs" v-else>
      <p class="font-semibold">{{ displayRole }}</p>
      <p class="text-gray-400 font-semibold">{{ displayTeam }}</p>
    </div>
  </td>
</template>

<script setup>
const { updateCandidateProperty } = useCandidates();
const { role, team, id } = defineProps(["role", "team", "id"]);
const displayTeam = ref(team);
const displayRole = ref(role);
const editableValue = ref(`${displayRole.value}; ${displayTeam.value}`);
const isEditing = ref(false);

function parseInput() {
  let role = null;
  let team = null;
  const input = editableValue.value;
  const parts = input.split(";");

  if (parts.length !== 2) {
    cancelEdit();
    return { role, team };
  }

  role = parts[0].trim();
  team = parts[1].trim();

  return { role, team };
}

const editTeam = (event) => {
  isEditing.value = true;

  setTimeout(() => {
    document.querySelector(`inline_stage_edit__${id}`)?.focus();
  }, 0);
};

// Handle key events (Enter and Esc)
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    const { role, team } = parseInput();

    if (!role || !team) {
      cancelEdit();
      return;
    }

    displayRole.value = role;
    displayTeam.value = team;

    saveStage(role, team);
  } else if (event.key === "Escape") {
    cancelEdit();
  }
};

const saveStage = (role, team) => {
  isEditing.value = false;
  updateCandidateProperty(id, "role", role);
  updateCandidateProperty(id, "team", team);
};

const cancelEdit = () => {
  isEditing.value = false;
  editableValue.value = `${displayRole.value}; ${displayTeam.value}`;
};
</script>
