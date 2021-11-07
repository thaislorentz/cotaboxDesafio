import { createStore } from "vuex";


const store = createStore({
    state: {
        person: [{
            firstName: 'Carlos',
            lastName: 'Moura',
            participation: 5
        },
        {
            firstName: 'Fernanda',
            lastName: 'Oliveira',
            participation: 15
        },
        {
            firstName: 'Hugo',
            lastName: 'Silva',
            participation: 20
        },
        {
            firstName: 'Eliza',
            lastName: 'Souza',
            participation: 20
        },
        {
            firstName: 'Anderson',
            lastName: 'Santos',
            participation: 40
        }]
    },
    getters: {
        person(state) {
            return state.person;
        },
    },
    mutations: {
        SAVE_PERSON(state, person) {
            state.person.push(person);
        },
        DELETE_PERSON(state, index) {
            console.log(index)
            state.person.splice(index , 1);
        }
    },
    actions: {
        savePerson({ commit }, person) {
            commit('SAVE_PERSON', person);
        },
        deletePerson({ commit }, index) {
            commit('DELETE_PERSON', index);
        }
    }
});

export default store;