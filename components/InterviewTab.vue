<template>
  <div class="w-full">
    <div class="flex justify-between">
      <p class="font-semibold">Interview List</p>
      <p class="flex gap-1 items-center text-xs font-medium text-green-500">
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
        Add Schedule
      </p>
    </div>
    <div class="my-4 flex justify-between">
      <p class="font-semibold text-gray-500 text-xs">
        May 28th, 2024(Thursday)
      </p>
      <p class="flex gap-1 items-center text-xs font-medium text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="gray"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="gray"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </p>
    </div>
    <div
      class="w-full border border-l-4 border-l-blue-500 rounded grid grid-cols-4 gap-1 text-xs font-medium"
    >
      <!-- name & test -->
      <div class="flex pl-2 py-3 gap-1 items-center">
        <img
          class="size-8 rounded-full"
          src="https://picsum.photos/200/300"
          alt="Jese image"
        />
        <div class="ps-1">
          <p>Jane Doe</p>
          <p class="text-gray-500">Written Test - Online</p>
        </div>
      </div>
      <!-- time -->
      <div class="text-center my-auto">
        <p>3:00-4:30PM</p>
        <p class="text-gray-500">1hr Interview</p>
      </div>
      <!-- location -->
      <div class="text-center my-auto">
        <p>Townhall Room 12</p>
        <p class="text-gray-500">
          Schedule By - <span class="text-black">Qualyval</span>
        </p>
      </div>
      <!-- feedback button -->
      <div class="flex justify-center font-bold items-center">
        <button
          class="border-2 border-green-500 text-green-500 rounded-md px-4 py-2"
          type="button"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  </div>
</template>
