import _ from 'lodash';
import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Recipe from './Recipe';
import { getAllRecipes } from '../actions/Recipes';
import { connect } from 'react-redux';
// import ReactPaginate from 'react-paginate';

class RecipeList extends Component {

    componentDidMount() {
        const { getAllRecipes } = this.props;
        getAllRecipes();
    }   

    render() {
        const { recipes = [] } = this.props;       
        return (
            <Grid>            
                <Row className="RecipeListTitle">
                    <Col xs={12}>
                        <h2>RecipeList</h2>           
                    </Col>
                </Row>
                <Row className="RecipeList">            
                { _.map(recipes, recipe => <Recipe key={recipe.nid} recipe={recipe} />) }   
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    if (state !== undefined) {
        const recipes = state.recipes;
        return {recipes};
    }
    return {};
}

export default connect(mapStateToProps, {
    getAllRecipes,
})(RecipeList);
