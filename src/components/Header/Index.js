import InputComponent from "../InputComponent/Index.vue";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
    components: {
        InputComponent,
    },
    setup() {
        const store = useStore();
        const firstName = ref("");
        const lastName = ref("");
        const participation = ref("");
        function save() {
            if (firstName.value !== '' && lastName.value !== '' && participation.value !== '') {
                const model = { firstName: firstName.value, lastName: lastName.value, participation: participation.value };
                store.dispatch("savePerson", model);
                firstName.value = "";
                lastName.value = "";
                participation.value = "";

            } else {
                window.alert('Preencha todos os campos')
            }
        }
        return {
            firstName,
            lastName,
            participation,
            save,
        };
    },
};