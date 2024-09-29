<script setup>
const { id } = defineProps(["candidate", "id"]);
const { getCandidateById } = useCandidates();
const candidate = getCandidateById(id);
const stageNo = candidate.pipelineStageNo;

const getStageColor = (n) => {
  if (n <= stageNo) {
    switch (stageNo) {
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
</script>

<template>
  <div
    :id="`candidate-drawer-right-${id}`"
    class="fixed top-0 right-0 w-1/2 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabindex="-1"
    aria-labelledby="drawer-right-label"
  >
    <div class="h-20 w-full py-2 px-4 bg-slate-200 flex justify-between">
      <div class="flex">
        <!-- img with rating -->
        <div class="w-16 relative flex flex-col items-center justify-center">
          <img
            class="h-10 w-10 rounded-full -mb-2"
            src="https://picsum.photos/400/400"
            alt="Jese image"
          />
          <!-- rating -->
          <div class="flex">
            <div
              class="px-1 flex items-center gap-1 bg-white border rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="none"
                class="size-3"
                :class="{ 'fill-yellow-300': candidate.rating > 0 }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span class="text-xs font-semibold text-black">{{
                candidate.rating
              }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                class="size-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- candidate basic details -->
        <div>
          <p class="font-semibold">{{ candidate.name }}</p>
          <p class="text-gray-400 text-xs">
            {{ candidate.team }} - {{ candidate.role }}
          </p>
          <div class="flex gap-1 py-1">
            <div
              v-for="n in 6"
              :key="n"
              :class="getStageColor(n)"
              class="h-4 w-5 rounded-sm flex justify-center items-center text-white"
            >
              <span class="hidden text-xs sm:block">{{
                n <= stageNo ? n : ""
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex h-6 gap-2">
        <!-- chevron left -->
        <div class="bg-white shadow-sm rounded-sm flex items-center px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="size-4 stroke-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <!-- chevron right -->
        <div class="bg-white shadow-sm rounded-sm flex items-center px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="size-4 stroke-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <!-- send message -->
        <div
          class="bg-white shadow-sm rounded-sm flex items-center ml-3 mr-1 gap-1 px-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="size-4 stroke-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <span class="text-gray-500 text-xs capitalize font-semibold"
            >send message</span
          >
        </div>
        <div class="bg-white shadow-sm rounded-sm flex items-center gap-1 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="size-4 stroke-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <span class="text-gray-500 text-xs capitalize font-semibold"
            >send email</span
          >
        </div>
      </div>
    </div>

    <CandidateDrawerTabs :id="id" />
  </div>
</template>
