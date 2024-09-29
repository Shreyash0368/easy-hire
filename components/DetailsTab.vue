<script setup>
const { id } = defineProps(["id"]);
const { getCandidateById } = useCandidates();
const candidate = getCandidateById(id);
</script>

<template>
  <div class="mb-2 border rounded-sm">
    <div class="border-b flex justify-between px-2 py-1">
      <p class="font-semibold">Basic Details</p>
      <span class="text-gray-400 flex gap-1 items-center font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        Edit Details
      </span>
    </div>
    <div class="flex px-4 py-2">
      <div class="w-2/5 flex flex-col gap-4">
        <InfoPair field="Name" :value="candidate.name" />
        <InfoPair field="Candidate ID" :value="candidate.candidate_id" />
        <InfoPair field="Address" :value="candidate.address" />
      </div>
      <div class="w-3/5 flex flex-col gap-4">
        <InfoPair field="Email" :value="candidate.email" />
        <InfoPair field="Phone" :value="candidate.phone" />
        <InfoPair field="Website" :value="candidate.website" />
      </div>
    </div>
  </div>
  <div class="my-2 border rounded-sm">
    <div class="border-b flex justify-between px-2 py-1">
      <p class="font-semibold">Professional Details</p>
      <span class="text-gray-400 flex gap-1 items-center font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        Edit Details
      </span>
    </div>
    <div class="flex px-4 py-2">
      <div class="w-2/5 flex flex-col gap-4">
        <InfoPair field="Current Job" :value="candidate.currentJob" />
        <InfoPair field="Expected Salary" :value="candidate.expectedSalary" />
        <InfoPair field="Experience" :value="candidate.experience" />
      </div>
      <div class="w-3/5 flex flex-col gap-4">
        <InfoPair
          field="Highest Education"
          :value="candidate.highestEducation"
        />
        <InfoPair field="Current Salary ID" :value="candidate.currentSalary" />
        <div>
          <p class="font-semibold text-gray-400">Skillset</p>
          <div class="flex gap-2">
            <div
              class="px-2 py-1 rounded-full bg-blue-400 font-semibold text-xs"
              v-for="skill in candidate.skills"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
