<script setup lang="ts">
import DashLayout from '../layouts/DashLayout.vue'
import DashTable from '../components/DashTable.vue'
import IconSearch from '../components/icons/IconSearch.vue'
import IconFilter from '../components/icons/IconFilter.vue'
</script>

<template>
  <DashLayout text="Historia academica">
    <div class="bg-gray-300 rounded-lg flex gap-5 p-2">
      <IconSearch />
      <input type="text" placeholder="search" class="bg-transparent outline-none" />
      <IconFilter />
    </div>
    <DashTable />
  </DashLayout>
</template>
