<template>
  <div class="relative overflow-x-auto rounded-md">
    <table class="w-full text-sm text-left text-white">
      <thead class="text-xs uppercase bg-[#404040]">
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Aprobado</th>
          <th scope="col" class="px-6 py-3">Creditos</th>
          <th scope="col" class="px-6 py-3">Tipo</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-[#363636] border-b border-gray-600">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Base de datos 2
          </th>
          <td class="px-6 py-4 text-center">✅</td>
          <td class="px-6 py-4 text-center">3</td>
          <td class="px-6 py-4">Disciplinar optativa</td>
        </tr>
        <tr class="bg-[#363636] border-b border-gray-600">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Ingenieria de requisitos
          </th>
          <td class="px-6 py-4 text-center"></td>
          <td class="px-6 py-4 text-center">3</td>
          <td class="px-6 py-4">Disciplinar obligatoria</td>
        </tr>
        <tr class="bg-[#363636]">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Calculo integral
          </th>
          <td class="px-6 py-4 text-center">✅</td>
          <td class="px-6 py-4 text-center">4</td>
          <td class="px-6 py-4">Fundamental obligatoria</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
