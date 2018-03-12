import {
  GET_ALL_RECIPES,
  NEW_RECIPE,
  GET_RECIPE,
  // RECIPE_VOTE_DOWN,
  // RECIPE_VOTE_UP,  
  // DELETE_RECIPE,
  // EDIT_RECIPE,
  // NEW_RECIPE
} from "./types";
import { actionError, actionSuccess } from "./common";
// import axios from "axios";
import superagent from "superagent";
// import nocache from "superagent-no-cache";

// -----------------------------------------------------------------------------
//                                 RECIPEs ACTIONS
// -----------------------------------------------------------------------------

export function getAllRecipes() {
  return dispatch => {
    // axios
    //   .get(
    //     process.env.REACT_APP_SERVER_URL +
    //       process.env.REACT_APP_ALL_RECIPES_URI,
    //     {
    //       params: {},
    //       auth: {
    //         username: process.env.REACT_APP_USERNAME,
    //         password: process.env.REACT_APP_PASSWORD
    //       }
    //     }
    //   )
    //   .then(response => dispatch(actionSuccess(response.data, GET_ALL_RECIPES)))
    //   .catch(error => dispatch(actionError(error)));
    superagent
      .get(
        process.env.REACT_APP_SERVER_URL +
          process.env.REACT_APP_ALL_RECIPES_URI +
          "?_format=json"
      )
      .auth(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD)
      .set("X-CSRF-Token", process.env.REACT_APP_TOKEN)
      .set("Content-type", process.env.REACT_APP_CONTENT_TYPE)
      .set("Accept", process.env.REACT_APP_ACCEPT)
      .then(response => {
        dispatch(actionSuccess(response.body, GET_ALL_RECIPES));
      })
      .catch(error => dispatch(actionError(error)));
  };
}

export function newRecipePost(formValues) {
  return dispatch => {
    var d = {
      _links: {
        type: {
          href: process.env.REACT_APP_SERVER_URL + "rest/type/node/recipes"
        }
      },
      type: [{ target_id: "recipes" }],
      title: [{ value: formValues.title }],
      body: [{ value: formValues.body }]
      // field_link: [{uri: {value: formValues.field_link}}],
    };
    console.log(d);
    superagent
      .post(process.env.REACT_APP_SERVER_URL + "node?_format=hal_json")
      .auth(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD)
      .set("X-CSRF-Token", process.env.REACT_APP_TOKEN)
      .set("Content-type", process.env.REACT_APP_CONTENT_TYPE)
      .set("Accept", process.env.REACT_APP_ACCEPT)
      .send(d)
      // .use(nocache)
      .then(response => {
        dispatch(actionSuccess(response.body, NEW_RECIPE));
      })
      .catch(error => dispatch(actionError(error)));
  };
}

export function getRecipe(id) {
  return dispatch => {
    superagent
      .get(
        process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_RECIPE_URI
          + "/" + id + "?_format=json"
      )
      .auth(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD)
      .set("X-CSRF-Token", process.env.REACT_APP_TOKEN)
      .set("Content-type", process.env.REACT_APP_CONTENT_TYPE)
      .set("Accept", process.env.REACT_APP_ACCEPT)
      .then(response => {
        dispatch(actionSuccess(response.body, GET_RECIPE));
      })
      .catch(error => dispatch(actionError(error)));
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
