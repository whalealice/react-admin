import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';


const createInitState = () => {
    return Immutable.fromJS({
        navMenu: [
            {
                path: '/Table1',
                name: 'Table1',
                component: 'Table1',
            },
            {
                path: '/Table2',
                name: 'Table2',
                component: 'Table2',
            },
        ],
    })
}
const $$initialState = createInitState()
export const INCEREMENT_COUNT = 'increment count'
export const DECREMENT_COUNT = 'decrement count'
const handlers = {
    [INCEREMENT_COUNT]: ($$state, action) => {
        const _num = action.payload + 1
        return $$state.set('count', _num)
    },
    [DECREMENT_COUNT]: ($$state, action) => {
        const _num = action.payload - 1
        return $$state.set('count', _num)
    },
}
export const onIncrement = createAction(INCEREMENT_COUNT, opts => opts)
export const onDecrement = createAction(DECREMENT_COUNT, opts => opts)

const user = handleActions(handlers, $$initialState);
export default user;
