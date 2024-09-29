<template>
  <div
    :id="`edit-modal-${id}`"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-gray-100 rounded-lg shadow px-5 pt-3">
        <h3 class="text-lg font-semibold">Edit Candidate Details</h3>

        <form class="flex flex-col py-5 gap-3 text-gray-600 font-semibold">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="outline-none rounded border-none"
            :placeholder="candidate.name"
            v-model="name"
          />

          <label for="rating">Ratings (0 - 5.0)</label>
          <input
            type="number"
            max="5"
            min="0"
            step="0.1"
            :id="`rating-${id}`"
            class="outline-none rounded border-none"
            :placeholder="candidate.rating"
            v-model="rating"
          />

          <label for="team">Team</label>
          <input
            type="text"
            id="team"
            class="outline-none rounded border-none"
            :placeholder="candidate.team"
            v-model="team"
          />

          <label for="role">Role</label>
          <input
            type="text"
            id="role"
            class="outline-none rounded border-none"
            :placeholder="candidate.role"
            v-model="role"
          />

          <label for="applied">Applied Date</label>
          <input
            type="text"
            id="applied"
            class="outline-none rounded border-none"
            :placeholder="candidate.appliedDate"
            onfocus="(this.type = 'date')"
            onblur="(this.type = 'text')"
            v-model="appliedDate"
          />
        </form>
        <!-- Modal footer -->
        <p class="text-sm text-gray-600">
          *Leave fields without any changes as blank
        </p>
        <div
          class="flex items-center justify-between border-t py-4 border-gray-200 rounded-b"
        >
          <button
            :data-modal-hide="`edit-modal-${id}`"
            type="button"
            class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Cancel
          </button>
          <button
            :data-modal-hide="`edit-modal-${id}`"
            type="button"
            :onclick="handleSubmit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = defineProps(["id"]);
const { getCandidateById, updateCandidate } = useCandidates();
const candidate = getCandidateById(id);
const emit = defineEmits(["update"]);
const hidden = ref(true);
const name = ref(null);
const rating = ref();
const team = ref(null);
const role = ref(null);
const appliedDate = ref(null);

const handleSubmit = () => {
  updateCandidate(id, {
    name: name.value,
    rating: rating.value,
    team: team.value,
    role: role.value,
    appliedDate: appliedDate.value,
  });

  emit("update", getCandidateById(id));
};
const clearForm = () => {
  name.value = null;
  rating.value = null;
  team.value = null;
  role.value = null;
  appliedDate.value = null;
};

watch(hidden, (newValue) => {
  if (!newValue) clearForm();
});

onMounted(() => {
  const modal = document.getElementById(`edit-modal-${id}`);

  const observer = new MutationObserver(() => {
    hidden.value = modal.getAttribute("aria-hidden") === "true";
  });

  observer.observe(modal, {
    attributes: true,
    attributeFilter: ["aria-hidden"],
  });

  const input = document.getElementById(`rating-${id}`);

  input.addEventListener("input", function () {
    // Convert the input value to a number
    const max = parseFloat(this.max);
    const min = parseFloat(this.min);

    // Ensure the value stays within the min/max range
    if (rating.value > max) {
      rating.value = max;
    } else if (rating.value < min) {
      rating.value = min;
    }
  });

  // remove observer before unmount
  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>
