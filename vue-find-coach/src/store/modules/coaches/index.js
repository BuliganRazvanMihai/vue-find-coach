import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Razvan',
          lastName: 'Buligan',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I know to beau intruna si sa petrec",
          hourlyRate: 100
        },
        {
          id: 'c2',
          firstName: 'Puki',
          lastName: 'Cat',
          areas: ['frontend', 'career'],
          description:
            'My name is Puki and i am a chunky cat',
          hourlyRate: 15
        },
        {
          id: 'c3',
          firstName: 'Nomi',
          lastName: 'Cat',
          areas: ['backend'],
          description:
            'My name is Nomi and i like to to play with christmas globes',
          hourlyRate: 25
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
