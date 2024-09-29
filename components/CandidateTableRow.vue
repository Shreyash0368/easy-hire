<script setup>
import NameCell from "./NameCell.vue";
const { id, headers } = defineProps(["id", "headers"]);
const { getCandidateById } = useCandidates();
const candidate = ref(getCandidateById(id));


const handleUpdate = (newObj) => {
  candidate.value = newObj;  
}
</script>

<template>
  <tr class="bg-white border-b hover:bg-gray-50">
    <!-- checkbox -->
    <td class="w-4 py-4 px-6">
      <div class="flex items-center">
        <input
          id="checkbox-table-search-1"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
      </div>
    </td>
    <NameCell :id="id" :name="candidate.name" />
    
    <template v-for="header in headers">
      <RatingCell
        v-if="header.name === 'Ratings'"
        :rating="candidate.rating"
        :id="id"
      />
      <StageCell
        v-else-if="header.name === 'Stages'"
        :stageNo="candidate.pipelineStageNo"
        :stageName="candidate.pipelineStage"
        :id="id"
      />
      <TeamCell
        v-else-if="header.name === 'Team'"
        :role="candidate.role"
        :team="candidate.team"
      />
      <OwnerCell
        v-else-if="header.name === 'Owner'"
        :owner="candidate.applicationOwner"
        :id="id"
      />
      <AppliedCell
        v-else-if="header.name === 'Applied Date'"
        :date="candidate.appliedDate"
        :id="id"
      />
    </template>

    <!-- elipse -->
    <td class="sm:px-4 py-4">
      <button :data-modal-target="`edit-modal-${id}`" :data-modal-toggle="`edit-modal-${id}`" class="flex justify-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="gray"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
    </td>
  </tr>
  
  <EditModal :id="id" @update="handleUpdate"/>
  <CandidateAside :id="id" />
</template>
