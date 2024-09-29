<script setup>
import draggable from "vuedraggable";
const { candidates } = useCandidates();

const checkMove = (evt) => {
  // Disable dragging based on name
  return (
    evt.draggedContext.element.name !== "Checkbox" &&
    evt.draggedContext.element.name !== "Candidate Name"
  );
};

const headers = ref([
  { name: "Checkbox", class: "" },
  { name: "Candidate Name", class: "min-w-40" },
  { name: "Ratings", class: "min-w-20" },
  { name: "Stages", class: "min-w-44" },
  { name: "Team", class: "min-w-36" },
  { name: "Applied Date", class: "min-w-36" },
  { name: "Owner", class: "min-w-40" },
]);
</script>

<template>
  <div class="relative overflow-x-auto sm:rounded-lg min-w-4">
    <table class="w-full text-xs sm:text-sm ">
      <thead class="text-gray-700 ">
        <draggable v-model="headers" tag="tr" item-key="name" :move="checkMove">
          <template #item="{ element }">
            <CandidateTableHeading
              :class-name="element.class"
              :heading="element.name"              
            />
          </template>
        </draggable>
      </thead>
      <tbody >
        <CandidateTableRow
          v-for="(candidate, index) of candidates"
          :id="candidate.candidate_id"
          :key="index"
          :headers="headers"
        />
      </tbody>
    </table>
  </div>
</template>
