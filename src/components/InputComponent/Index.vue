<template>
<input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script src="./Index.js">
</script>

<style>
input {
  padding: 15px;
  border: none;
  width: 100%;
  margin: 5px 15px;
}
</style>
