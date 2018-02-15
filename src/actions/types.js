// Action constants

// Post Actions
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const NEW_RECIPE = 'NEW_RECIPE';
export const GET_RECIPE = 'GET_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

// Category Actions
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

// Vote Actions
export const RECIPE_VOTE_UP = 'RECIPE_VOTE_UP';
export const RECIPE_VOTE_DOWN = 'RECIPE_VOTE_DOWN';

// Sorting Actions
export const GET_RECIPES_BY_CATEGORY = 'GET_RECIPES_BY_CATEGORY';
export const GET_RECIPES_BY_UPVOTE = 'GET_RECIPES_BY_UPVOTE';
export const GET_RECIPES_BY_DOWNVOTE = 'GET_RECIPES_BY_DOWNVOTE';


// Contant for the url
// CHECK: Is it a good idea to put it here? or better a constant.js file?
export const AUTH_HEADERS = { 'Accept': 'application/json'};
