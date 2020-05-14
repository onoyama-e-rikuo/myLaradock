<template>
  <div>
    <main>
      <Welcome />
      <RouterView />
    </main>
  </div>
</template>

<script>
  import Welcome from "./components/Welcome.vue";

  export default {
    components: {
      Welcome,
    }
};
</script>