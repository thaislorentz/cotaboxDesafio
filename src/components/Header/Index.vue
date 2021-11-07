<template>
  <div class="header">
    <div class="form">
      <InputComponent placeholder="First name" v-model="firstName" />
      <InputComponent placeholder="Last name" v-model="lastName" />
      <InputComponent
        type="number"
        placeholder="Paticipation"
        v-model="participation"
      />
      <button @click="save">SEND</button>
    </div>
  </div>
</template>

<script src="./Index.js">
</script>

<style>
.header {
  background: #00b8e2;
  display: flex;
  align-items: center;
  height: 110px;
}
.form {
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin: 0 250px;
}
button {
  border: solid 1px #ffffff;
  padding: 0 30px;
  background: none;
  color: #ffffff;
  cursor: pointer;
  margin: 5px 0;
}
button:hover {
  border: solid 1px #fff;
  padding: 0 30px;
  background: #055e72;
}

@media screen and (max-width: 1200px) {
  .form {
    margin: 0 100px;
  }
}
@media screen and (max-width: 800px) {
  .header {
    height: 250px;
  }
  .form {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 100px;
  }

  button {
    padding: 10px 0;
    width: 100px;
  }
}
@media screen and (max-width: 500px) {
  .form {
    margin: 0;
    width: 92%;
    margin-left: 15px;
  }
}
</style>
