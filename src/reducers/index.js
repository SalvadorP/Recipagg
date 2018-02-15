import { combineReducers } from 'redux';
import RecipesReducer from './RecipesReducer';

const mainReducer = combineReducers({
    recipes: RecipesReducer,
    // categories: CategoriesReducer,
    // comments: CommentsReducer,
});

export default mainReducer;