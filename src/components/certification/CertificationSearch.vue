<template>
  <div class="relative group">
    <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    </div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      placeholder="部門名や年度で査証を照会..."
      class="w-full bg-slate-100 border-none py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-slate-800 transition-all font-mono placeholder:text-slate-400"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>();
defineEmits(['update:modelValue']);
</script>