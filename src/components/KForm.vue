<template>
  <div class="labela">
      <label>{{ $store.getters.inputValue() }}</label>
      <input @change="(event) => $store.dispatch('changeInputValue', { inputValue: event.target.value })" type="text" />
  </div>
</template>

<script>
export default {
    name: "kform",
}
</script>

<style lang="scss">
    .labela {
        display: flex;
        flex-direction: column;
            input {
                width: 200px;
            }
    }
</style>