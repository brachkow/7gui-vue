<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <nav v-if="$route.fullPath === '/'" class="text-center">
      <ul>
        <li v-for="(route, index) in $router.options.routes" :key="index">
          <router-link
            class="text-blue-600 hover:text-red-500 transition-colors"
            :to="{ name: route.name }"
            >{{ route.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this);
    },
  };
</script>
