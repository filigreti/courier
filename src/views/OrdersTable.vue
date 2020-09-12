<template>
  <main>
    <div class="w-full mt-5 shadow p-4">
      <h1 class="text-xl tracking-wide text-gray-800 font-semibold pt-2 pb-4">
        Orders
      </h1>

      <div class="border overflow-x-scroll scrollbar" id="style-4">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th
                class="bg-black pl-4 py-4 text-xs leading-6 text-white font-light"
              >
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Customers Name
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Delivery Address
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Customers Number
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Customers Email
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Suppliers Name
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Suppliers Address
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Suppliers Email
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Product Name
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Order Number
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Price
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Date & Time
                </div>
              </th>
              <th class="bg-black py-4 text-xs leading-6 text-white font-light">
                <div
                  class="inline-flex w-56 text-center items-center justify-center"
                >
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="
                $router.push({
                  name: 'OrderStatus',
                  params: {
                    id: i,
                  },
                })
              "
              v-for="i in 6"
              class="hover:bg-gray-100 cursor-pointer"
              :key="i"
            >
              <td class="py-4 text-xs pl-3 border-b border-r">Intro to CSS</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">Adam</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">858</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">
                Intro to CSS
              </td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">Adam</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">858</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">
                Intro to CSS
              </td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">Adam</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">858</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">858</td>
              <td class="py-4 text-xs pl-3 border-b border-l border-r">858</td>
              <td class="py-4 text-xs pl-3 border-b border-l">858</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
#style-4::-webkit-scrollbar-track {
  -webkit-box-shadow: none;

  width: 3px !important;
  background: transparent;
  opacity: 0;
}

#style-4::-webkit-scrollbar {
  background: transparent;
  opacity: 0;
}

#style-4::-webkit-scrollbar-thumb {
  background-color: #000000;
}
</style>