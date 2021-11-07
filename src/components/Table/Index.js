import { useStore } from "vuex";
export default {
  name: 'Table',
  props: {
    persons: Array,
  },
  setup() {
    const store = useStore();
    function deletePerson(index) {

      store.dispatch("deletePerson", index);

    }
    return {
      deletePerson
    };
  },
}