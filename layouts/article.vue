<template>
  <div class="w-screen min-h-full flex justify-center text-gray-900 bg-gray-50">
    <div
      class="
        w-full
        min-h-full
        max-w-2xl
        bg-gray-900
        shadow-gray-900 shadow-md
        relative
      "
    >
      <AppHeader />
      <div class="bg-gray-50 m-5 p-5">
        <slot />
      </div>
      <AppFooter class="absolute bottom-0" />
    </div>
  </div>
</template>
