const state = {
    funds: 10000,
    stocks: []
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(e => {
            const record = getters.stocks.find(el => el.id == e.id);
            return {
                id: e.id,
                quantity: e.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};

const mutations = { // setter 
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(e => e.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({ id: stockId, quantity: quantity })
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(e => e.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order)
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};