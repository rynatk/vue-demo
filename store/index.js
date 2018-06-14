import axios from '~/plugins/axios';

export const state = () => ({
  users: [{
    id: 0,
    login: 'John',
  }],
  ids: [],
  items: [],
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },

  setIds(state, ids) {
    state.ids = ids;
  },

  setItems(state, items) {
    state.items = items;
  },
};

export const actions = {
  //async nuxtServerInit({ commit }) {
  async LOAD_ITEMS({ commit }, dataUrl) { // (context, payload)
    const response = await axios.get(dataUrl);
    const ids = response.data;
    const tenIds = ids.slice(0, 10);

    const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`));
    const itemsResponses = await Promise.all(itemsPromises);
    const items = itemsResponses.map(res => res.data);

    commit('setItems', items);
  }
};