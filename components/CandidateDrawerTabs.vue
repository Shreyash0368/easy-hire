<script setup>
const { id } = defineProps(["id"]);
</script>

<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap gap-2 -mb-px text-sm font-medium text-center"
      id="default-styled-tab"
      data-tabs-toggle="#default-styled-tab-content"
      data-tabs-active-classes="text-purple-500 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
      data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
      role="tablist"
    >
      <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg"
          :id="`details-styled-tab-${id}`"
          :data-tabs-target="`#styled-details-${id}`"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Details
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          :id="`resume-styled-tab-${id}`"
          :data-tabs-target="`#styled-resume-${id}`"
          type="button"
          role="tab"
          aria-controls="dashboard"
          aria-selected="false"
        >
          Resume
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          :id="`pipeline-styled-tab-${id}`"
          :data-tabs-target="`#styled-pipeline-${id}`"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          Hiring Pipeline
        </button>
      </li>
      <li role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          :id="`interviews-styled-tab-${id}`"
          :data-tabs-target="`#styled-interviews-${id}`"
          type="button"
          role="tab"
          aria-controls="contacts"
          aria-selected="false"
        >
          Interviews
        </button>
      </li>
    </ul>
  </div>
  <div id="default-styled-tab-content">
    <div
      class="hidden px-2 py-1"
      :id="`styled-details-${id}`"
      role="tabpanel"
      aria-labelledby="details-tab"
    >
      <DetailsTab :id="id" />
    </div>
    <div
      class="hidden px-2"
      :id="`styled-resume-${id}`"
      role="tabpanel"
      aria-labelledby="resume-tab"
    >
      <ResumeTab />
    </div>
    <div
      class="hidden px-2"
      :id="`styled-pipeline-${id}`"
      role="tabpanel"
      aria-labelledby="hiring-pipeline-tab"
    >
      <HiringTab :id="id" />
    </div>
    <div
      class="hidden px-5 py-2"
      :id="`styled-interviews-${id}`"
      role="tabpanel"
      aria-labelledby="contacts-tab"
    >
      <InterviewTab />
    </div>
  </div>
</template>
