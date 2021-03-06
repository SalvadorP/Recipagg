import React, { Component } from "react";
import { Col, Row, Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { getRecipe } from "../actions/Recipes";
import Recipe from "./Recipe";

class RecipeDetails extends Component {
  componentDidMount() {
    const { getRecipe } = this.props;
    const { nid } = this.props.match.params;
    getRecipe(nid);
  }

  render() {
      console.log(this.props.recipe);
      const recipe = this.props.recipe;
    // const { recipe } = this.props;
    // const recipe = this.props.recipe[0];
    // <Recipe recipe={recipe[0]} />
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <h1>Recipe Details</h1>
            
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state, recipeProps) {
  return { recipe: state.recipes[recipeProps.match.params.nid] };
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipe: id => dispatch(getRecipe(id))
    // recipeVoteUp: (id) => dispatch(recipeVoteUp(id)),
    // recipeVoteDown: (id) => dispatch(recipeVoteDown(id)),
    // deleteRecipe: (id) => dispatch(deleteRecipe(id)),
    // getRecipeComments: (id) => dispatch(getRecipeComments(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);

// export default RecipeDetails;
