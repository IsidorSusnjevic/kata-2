<template>
  <div class="labela">
      <label>{{ $store.getters.inputValue() }}</label>
      <input v-model="temporaryValue" @keyup="(event) => $store.dispatch('changeInputValue', { inputValue: temporaryValue })" type="text" />
  </div>
</template>

<script>
export default {
    name: "kform",
    data () {
        return {
            temporaryValue: "" 
        };
    }
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