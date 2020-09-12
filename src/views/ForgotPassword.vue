<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-sm w-full">
      <h1
        class="text-3xl text-center tracking-wide text-cliniBlue font-semibold"
      >
        Recover Password
      </h1>
      <p class="font-thin text-center text-xs text-gray-800 pt-1 tracking-wide">
        Enter your registered email address
      </p>
      <p class="font-thin text-center text-xs text-gray-800 tracking-wide">
        and we will send you a link to reset your password
      </p>
      <div class="mt-6 pb-8 border-b">
        <div class="text-xs text-indigo-900 text-opacity-75 font-medium">
          Email Address
        </div>
        <input
          type="text"
          class="bg-gray-300 focus:outline-none focus:border-blue-300 pl-5 text-xs leading-6 w-full mt-2 rounded-sm py-3"
          placeholder="abc@gmail.com"
        />
      </div>

      <button
        class="bg-cliniBlue w-full py-3 text-white rounded-sm text-sm leading-6 mt-6"
      >
        SIGN UP
      </button>
      <div class="pt-6 text-center">
        <p class="font-thin text-center text-xs text-gray-800">
          Did not receive a reset link ?
          <router-link
            tag="span"
            class="text-blue-500 font-normal cursor-pointer"
            to="/forgot-password"
            >Resend Link</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
