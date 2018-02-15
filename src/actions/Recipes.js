import {
    GET_ALL_RECIPES,
    // RECIPE_VOTE_DOWN,
    // RECIPE_VOTE_UP,
    // GET_RECIPE,
    // DELETE_RECIPE,
    // EDIT_RECIPE,
    // NEW_RECIPE
} from './types';
import { actionError, actionSuccess } from './common';
import axios from 'axios';

// -----------------------------------------------------------------------------
//                                 RECIPEs ACTIONS
// -----------------------------------------------------------------------------

export function getAllRecipes() {
  return dispatch => {
      axios.get(process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_ALL_RECIPES_URI, {
        params: {},
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        }
      })
      .then(response => dispatch(actionSuccess(response.data, GET_ALL_RECIPES)))
      .catch(error => dispatch(actionError(GET_ALL_RECIPES)));
    //   .catch(function (error) {
    //     console.log(error);
    //     return actionError(GET_ALL_RECIPES)
    //   });
  };
}

// export function getPost(id) {
//     return dispatch => {
//         superagent.get(SERVER_URL + '/api/v1/recipes/' + id)
//             .auth(USERNAME, PASSWORD)
//             .on('error', actionError(GET_RECIPE))
//             .use(nocache)
//             .then(response => dispatch(actionSuccess(response.body, GET_RECIPE)));
//     };
// }

// export function postVoteUp(id) {
//     return dispatch => {
//         superagent.post(SERVER_URL + '/api/v1/recipes/' + id)
//             .auth(USERNAME, PASSWORD)
//             .send({option: 'upVote'})            
//             .on('error', actionError(RECIPE_VOTE_UP))
//             // .use(nocache)
//             .then(response => dispatch(actionSuccess(response.body, RECIPE_VOTE_UP)));        
//     }
// }

// export function postVoteDown(id) {
//     return dispatch => {
//         superagent.post(SERVER_URL + '/api/v1/recipes/' + id)
//             .send({option: 'downVote'})
//             .auth(USERNAME, PASSWORD)
//             .on('error', actionError(RECIPE_VOTE_DOWN))
//             // .use(nocache)
//             .then(response => dispatch(actionSuccess(response.body, RECIPE_VOTE_DOWN)));
//     }
// }

// export function editPost(formValues) {
//     const id = formValues.id;
//     return dispatch => {
//         superagent.put(SERVER_URL + '/api/v1/recipes/' + id)
//             .auth(USERNAME, PASSWORD)
//             .send(formValues)            
//             .on('error', actionError(EDIT_RECIPE))
//             // .use(nocache)
//             .then(response => {dispatch(actionSuccess(response.body, EDIT_RECIPE))});        
//     }
// }

// export function newPost(formValues) {
//     return dispatch => {
//         superagent.post(SERVER_URL + '/api/v1/recipes')
//             .auth(USERNAME, PASSWORD)
//             .send(formValues)            
//             .on('error', actionError(NEW_RECIPE))
//             // .use(nocache)
//             .then(response => {dispatch(actionSuccess(response.body, NEW_RECIPE))});        
//     }
// }

// export function deletePost(id) {
//     return dispatch => {
//         superagent.del(SERVER_URL + '/api/v1/recipes/' + id)
//             .send({id: id})
//             .auth(USERNAME, PASSWORD)        
//             .on('error', actionError(DELETE_RECIPE))
//             // .use(nocache)
//             .then(response => dispatch(actionSuccess(id, DELETE_RECIPE)));        
//     }
// }
