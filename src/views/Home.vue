<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="login" class="max-w-sm w-full">
      <h1
        class="text-3xl text-center tracking-wide text-cliniBlue font-semibold"
      >
        Login
      </h1>
      <p class="font-thin text-center text-xs text-gray-800 pt-1 tracking-wide">
        Create an account as a Patient.
      </p>
      <p class="font-thin text-center text-xs text-gray-800 tracking-wide">
        Get health services at a finger snap!
      </p>
      <div class="mt-6">
        <div class="text-xs text-indigo-900 text-opacity-75 font-medium">
          Email Address
        </div>
        <input
          type="text"
          class="bg-gray-300 focus:outline-none focus:border-blue-300 pl-5 text-xs leading-6 w-full mt-2 rounded-sm py-3"
          required
          v-model="email"
        />
      </div>
      <div class="mt-6">
        <div class="text-xs text-indigo-900 text-opacity-75 font-medium">
          Password
        </div>
        <input
          type="password"
          class="bg-gray-300 focus:outline-none focus:border-blue-300 pl-5 text-xs leading-6 w-full mt-2 rounded-sm py-3"
          required
          v-model="password"
        />
      </div>
      <div class="py-6 text-center">
        <p class="font-thin text-center text-xs text-gray-800">
          Forgot password ?
          <router-link
            tag="span"
            class="text-blue-500 font-normal cursor-pointer"
            to="/forgot-password"
            >Reset</router-link
          >
        </p>
      </div>
      <button
        class="bg-cliniBlue w-full py-3 text-white mt-1 rounded-sm text-sm leading-6"
      >
        SIGN UP
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("giveEmail", this.email);
      this.$router.push({ name: "OrdersMain" });
    },
  },
};
</script>
