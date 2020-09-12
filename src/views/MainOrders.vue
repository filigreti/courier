<template>
  <main>
    <h1 class="text-xl tracking-wide text-gray-800 font-semibold">Orders</h1>
    <div class="flex mt-8">
      <div
        @click="
          $router.push({
            name: 'OrdersTables',
            params: {
              status: 'awaiting',
            },
          })
        "
        class="w-48 flex flex-col cursor-pointer"
      >
        <div
          class="border-white border shadow-md w-full rounded inline-block hover:bg-gray-100 h-48 p-4"
        >
          <div
            class="w-full flex items-center justify-center h-full border-white border shadow-md rounded"
          >
            <svg
              class="w-20 h-20"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="256.5957"
                y1="513.2285"
                x2="256.5957"
                y2="1.2285"
                gradientTransform="matrix(0.9981 0 0 -0.9981 -0.0955 512.7271)"
              >
                <stop offset="0" style="stop-color: #2af598" />
                <stop offset="1" style="stop-color: #009efd" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_1_)"
                d="M236.538,76.351h39.922v199.61H124.756v-39.922h111.782V76.351z M472.078,46.409v73.931  c-18.771-29.96-43.63-55.786-73.296-75.913C356.423,15.689,306.878,0.499,255.501,0.499c-68.247,0-132.408,26.577-180.667,74.834  C26.577,123.592,0,187.753,0,256s26.577,132.408,74.834,180.667c48.259,48.257,112.42,74.834,180.667,74.834  c11.111,0,22.295-0.722,33.241-2.145l-5.146-39.589c-9.246,1.202-18.697,1.811-28.094,1.811  c-118.871,0-215.579-96.708-215.579-215.579S136.631,40.421,255.502,40.421c77.157,0,147.175,40.697,185.603,105.793h-68.833v39.922  H512V46.409H472.078z M319.227,462.011l11.784,38.143c13.747-4.247,27.234-9.71,40.083-16.239l-18.084-35.591  C342.178,453.827,330.812,458.432,319.227,462.011z M384.018,429.101l23.824,32.034c11.541-8.584,22.439-18.215,32.39-28.626  l-28.86-27.584C402.968,413.718,393.764,421.853,384.018,429.101z M434.284,376.505l33.081,22.346  c8.072-11.95,15.167-24.657,21.091-37.768l-36.382-16.435C447.079,355.704,441.093,366.422,434.284,376.505z M470.321,273.965  c-0.178,2.129-0.39,4.248-0.627,6.36l0.019,0.001c-1.136,10.102-2.976,20.143-5.511,29.925l38.646,10.013  c3.605-13.911,6.045-28.256,7.251-42.634l-0.029-0.002c0.106-1.22,0.212-2.439,0.297-3.663L470.321,273.965L470.321,273.965z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        </div>
        <div class="text-center pt-5">Awaiting Delivery</div>
      </div>
      <div
        @click="
          $router.push({
            name: 'OrdersTables',
            params: {
              status: 'completed',
            },
          })
        "
        class="ml-16 w-48 flex flex-col cursor-pointer"
      >
        <div
          class="border-white border shadow-md rounded inline-block hover:bg-gray-100 w-full h-48 p-4"
        >
          <div
            class="w-full flex items-center justify-center h-full border-white border shadow-md rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              version="1.1"
              class="w-20 h-20"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <circle
                    style=""
                    cx="256"
                    cy="256"
                    r="236.17"
                    fill="#4cd137"
                    data-original="#1138f7"
                    class=""
                  />
                  <path
                    style=""
                    d="M256,512C114.853,512,0,397.167,0,256C0,114.853,114.853,0,256,0c141.167,0,256,114.853,256,256   C512,397.167,397.167,512,256,512z M256,39.659C136.705,39.659,39.659,136.705,39.659,256S136.705,472.341,256,472.341   S472.341,375.275,472.341,256C472.341,136.705,375.295,39.659,256,39.659z"
                    fill="#4cd137"
                    data-original="#1138f7"
                    class=""
                  />
                </g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  style=""
                  d="M225.066,350.191c-5.314,0-10.391-2.122-14.139-5.929l-73.171-74.361  c-7.674-7.813-7.575-20.345,0.238-28.039c7.813-7.654,20.365-7.575,28.039,0.238l58.458,59.409l120.941-133.195  c7.396-8.11,19.929-8.685,27.999-1.348c8.11,7.357,8.705,19.889,1.348,28.019L239.74,343.706c-3.668,4.045-8.824,6.385-14.277,6.504  C225.324,350.191,225.205,350.191,225.066,350.191z"
                  fill="#ffffff"
                  data-original="#ffffff"
                  class=""
                />
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
                <g xmlns="http://www.w3.org/2000/svg"></g>
              </g>
            </svg>
          </div>
        </div>
        <div class="text-center pt-5">Completed Delivery</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>