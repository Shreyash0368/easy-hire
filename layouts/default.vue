<script setup>
useHead({
  title: "Easy Hire",
  meta: [
    {
      name: "description",
      content:
        "Effortlessly manage your hiring process and focus on finding the right candidate. We’ll handle the rest.",
    },
  ],
});
</script>

<template>
  <div>
    <LeftSidebar />

    <div class="sm:ml-64">
      <Navbar />
      <div class="relative">
        <div class="h-full w-full sm:w-[calc(100%-5rem)]"><slot /></div>
        <RightSidebar />
      </div>
    </div>
  </div>
</template>
