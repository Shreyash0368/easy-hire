<script setup>
import { Drawer } from "flowbite";
onMounted(() => {
  const $drawerBtn = document.getElementById("button-sidebar-left");
  const $sidebar = document.getElementById("left-sidebar");

  if ($sidebar) {
    const drawer = new Drawer($sidebar);

    $drawerBtn.addEventListener("click", () => drawer.toggle());
  }
});
</script>

<template>
  <button
    id="button-sidebar-left"
    data-drawer-target="left-sidebar"
    data-drawer-toggle="left-sidebar"
    aria-controls="left-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-10"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="left-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="left-sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
      <h1 class="text-3xl font-semibold text-white mb-2 ml-2">Easy Hire</h1>
      <ul class="space-y-2 font-medium pt-2">
        <SidebarList />
      </ul>
    </div>
  </aside>
</template>
