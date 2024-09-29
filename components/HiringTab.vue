<script setup>
const { id } = defineProps(["id"]);
const candidate = useCandidates().getCandidateById(id);

const hiringStages = ref([
  "Applied",
  "Screening",
  "HR Interview",
  "Technical Interview",
  "Final Round",
  "Offer",
]);
</script>

<template>
  <div class="px-3">
    <div class="font-semibold">
      <p class="text-sm">
        <span class="text-gray-400">Stage of:</span>
        {{ `${candidate.team} - ${candidate.role}` }}
      </p>
    </div>

    <ol
      class="flex my-3 justify-between items-center w-full px-2 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-sm"
    >
      <StepperStage
        v-for="(stage, sIndex) in hiringStages"
        :stage-name="stage"
        :stage-no="candidate.pipelineStageNo"
        :index="sIndex"
      />
    </ol>

    <!-- table 1 -->
    <div class="mb-2 border rounded-sm px-3">
      <div class="border-b flex justify-between px-3 py-1">
        <p class="font-semibold">Details</p>
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
      <div class="flex px-3 py-2">
        <div class="w-2/5 flex flex-col gap-4">
          <InfoPair field="Status" value="" />
          <InfoPair field="Stage" :value="candidate.pipelineStage" />
          <InfoPair field="Date" :value="candidate.pipelineStageDate" />
        </div>
        <div class="w-3/5 flex flex-col gap-4">
          <div>
            <p class="font-semibold text-gray-400">Assignee</p>
            <div class="flex gap-2 items-center">
              <img
                class="h-4 w-4 sm:w-6 sm:h-6 rounded-full"
                src="https://picsum.photos/200/300"
                alt="Jese image"
              />
              <div class="ps-1">
                {{ candidate.name }}
              </div>
            </div>
          </div>
          <div>
            <p class="font-semibold text-gray-400">Owner</p>
            <div class="flex gap-2 items-center">
              <img
                class="h-4 w-4 sm:w-6 sm:h-6 rounded-full"
                src="https://picsum.photos/200/300"
                alt="Jese image"
              />
              <div class="ps-1">
                {{ candidate.applicationOwner }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- table 2 -->
    <div class="mb-2 border rounded-sm px-3">
      <div class="border-b flex justify-between px-3 py-1">
        <p class="font-semibold">Notes</p>
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

      <!-- add note icon -->
      <div
        class="flex ml-2 gap-1 items-center pl-8 py-2 text-sm text-green-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="size-5 fill-green-500"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="font-semibold">Add Note</span>
      </div>

      <!-- notes -->
      <div
        class="flex flex-col px-1 items-center"
        v-for="(review, index) in candidate.reviews"
      >
        <div class="w-full my-3 flex justify-between items-center px-2">
          <!-- review -->
          <div class="flex gap-2 items-center">
            <img
              class="h-6 w-6 rounded-full -mt-4"
              src="https://picsum.photos/200/300"
              alt="Jese image"
            />
            <div>
              <p>{{ review.name }} - {{ review.date }}</p>
              <p>{{ review.comment }}</p>
              <p class="text-green-500 font-semibold">2 replies</p>
            </div>
          </div>
          <!-- message icon -->
          <div>
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
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </div>
        </div>
        <hr
          v-if="index < candidate.reviews.length - 1"
          class="text-center w-11/12"
        />
      </div>
    </div>
  </div>
</template>
