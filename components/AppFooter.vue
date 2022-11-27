<template>
  <footer
    style="background-image: url('/img/footer-mountain.png')"
    class="text-gray-50 bg-origin-border bg-contain bg-no-repeat bg-bottom h-60 relative"
  >
    <section class="w-full max-h-5 grid grid-cols-1 justify-items-center absolute bottom-8">
      <div class="grid grid-cols-3 justify-items-center w-full">
        <nuxt-link to="/about">about</nuxt-link>
        <nuxt-link to="/privacy">privacy</nuxt-link>
        <nuxt-link to="/contact">contact</nuxt-link>
      </div>
      <div>2022 // Hannes Kuhl</div>
    </section>
  </footer>
</template>
