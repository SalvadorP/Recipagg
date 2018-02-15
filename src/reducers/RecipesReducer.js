import _ from 'lodash';
import {
    GET_ALL_RECIPES, RECIPE_VOTE_UP, RECIPE_VOTE_DOWN, GET_RECIPE, DELETE_RECIPE, EDIT_RECIPE, NEW_RECIPE
} from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return _.mapKeys(action.data, 'nid');
        case GET_RECIPE:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case RECIPE_VOTE_UP:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case RECIPE_VOTE_DOWN:
            return {
                ...state,
                [action.data.id]: action.data
            }
        case DELETE_RECIPE:
            // Just return the state without the deleted post.            
            return _.omit(state, action.data);
        case EDIT_RECIPE:
            return state;
        case NEW_RECIPE:
            return state;

        default:
            return state;
    }
}