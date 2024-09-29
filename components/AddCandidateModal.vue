<script setup>
const hidden = ref(true);
const name = ref(null);
const rating = ref(null);
const stageNo = ref(null);
const stageName = ref(null);
const team = ref(null);
const role = ref(null);
const appliedDate = ref(null);
const owner = ref(null);

onMounted(() => {
  const input = document.getElementById("rating");
  const stageNo = document.getElementById("stageNo");

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

  stageNo.addEventListener("input", function () {
    // Convert the input value to a number
    const max = parseFloat(this.max);
    const min = parseFloat(this.min);

    // Ensure the value stays within the min/max range
    if (stageNo.value > max) {
      stageNo.value = max;
    } else if (stageNo.value < min) {
      stageNo.value = min;
    }
  });

  const modal = document.getElementById(`add-modal`);

  const observer = new MutationObserver(() => {
    hidden.value = modal.getAttribute("aria-hidden") === "true";
  });

  observer.observe(modal, {
    attributes: true,
    attributeFilter: ["aria-hidden"],
  });

  // remove observer before unmount
  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div
    id="add-modal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
        <!-- Modal Header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Add Candidate
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="add-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <form class="flex flex-col gap-3 text-gray-600 font-semibold">
            <input
              type="text"
              id="name"
              class="outline-none rounded border-none"
              placeholder="Name"
              v-model="name"
            />

            <input
              type="number"
              max="5"
              min="0"
              step="0.1"
              id="rating"
              class="outline-none rounded border-none"
              placeholder="Ratings"
              v-model="rating"
            />

            <input
              type="number"
              id="stageNo"
              class="outline-none rounded border-none"
              min="1"
              max="6"
              step="1"
              placeholder="Stage No"
              v-model="stageNo"
            />

            <input
              type="text"
              id="stageName"
              class="outline-none rounded border-none"
              placeholder="Stage Name"
              v-model="stageName"
            />

            <input
              type="text"
              id="team"
              class="outline-none rounded border-none"
              placeholder="Team"
              v-model="team"
            />

            <input
              type="text"
              id="role"
              class="outline-none rounded border-none"
              placeholder="Role"
              v-model="role"
            />

            <input
              type="text"
              id="applied"
              class="outline-none rounded border-none"
              placeholder="Application Date"
              onfocus="(this.type = 'date')"
              onblur="(this.type = 'text')"
              v-model="appliedDate"
            />

            <input
              type="text"
              id="owner"
              class="outline-none rounded border-none"
              placeholder="Owner"
              v-model="owner"
            />
          </form>
        </div>

        <!-- Modal footer -->
        <div
          class="flex flex-row-reverse items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b"
        >
          <button
            data-modal-hide="add-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            I accept
          </button>
          <button
            data-modal-hide="add-modal"
            type="button"
            class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
