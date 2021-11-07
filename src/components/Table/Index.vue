<template>
  <table v-if="persons.length > 0">
    <tr>
      <th></th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Participation</th>
      <th></th>
    </tr>
    <tr v-for="(person, index) in persons" :key="index">
      <td>{{ index + 1 }}</td>
      <td class="name">{{ person.firstName }}</td>
      <td class="name">{{ person.lastName }}</td>
      <td>{{ person.participation }}%</td>
      <td class="delete" @click="deletePerson(index)"><fa icon="trash" /></td>
    </tr>
  </table>
  <div v-else>No data table</div>
</template>

<script src="./Index.js">
</script>

<style>
table,
td,
th {
  border: 1px solid #707070;
  color: #9b9b9b;
  height: 100%;
  padding: 10px;
}
.name {
  text-transform: capitalize;
}
.delete {
  cursor: pointer;
}
table {
  width: 100%;
  border-collapse: collapse;
}
@media screen and (max-width: 500px) {
td,
th {
  font-size: 12px;
}
}
</style>
