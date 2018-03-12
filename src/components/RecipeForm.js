import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Button, Row, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import serializeForm from 'form-serialize';
import uniqid from 'uniqid';
import { newRecipePost } from '../actions/Recipes';

class RecipeForm extends Component {

    handleNewSubmit = (e) => {
        e.preventDefault();
        // console.log('SUBMIT!');
        // console.log(this.props);
        // console.log('*********');
        const { newRecipePost } = this.props;
        console.log(e.target);
        const data = new serializeForm(e.target, {hash: true});
        console.log(data);
        data.id = uniqid();     
        e.preventDefault();
        newRecipePost(data);
        // newRecipe(data);
        // IDEA: once saved return to the list.
    }

    render() {
        const types = [{path: '#1', name: 'Type1'},{path: '#2', name: 'Type2'}];
        const tags = [{path: '#1', name: 'Tag1'},{path: '#2', name: 'Tag2'}];
        return (
            <div>
                <form className="form-horizontal" id="RecipeNewForm" onSubmit={this.handleNewSubmit.bind(this)}>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="">
                            <div className="RecipeCardPage">
                                <div className="card">
                                    <div className="card-body">
                                        <FormGroup controlId="formHorizontalTitle">
                                            <Row>
                                                <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                                                    Title
                                                </Col>
                                                <Col xs={10} sm={10} md={10}>   
                                                    <FormControl type="hidden" name="target_id" defaultValue="recipes" />
                                                    <FormControl type="hidden" name="timestamp" defaultValue={Date.now()} />
                                                    <FormControl type="text" placeholder="Title" name="title" defaultValue="" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalLink">
                                            <Row>
                                                <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                                                    Link
                                                </Col>
                                                <Col xs={10} sm={10} md={10}>                                            
                                                    <FormControl type="text" placeholder="Link" name="field_link" defaultValue="" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalBody">
                                            <Row>
                                                <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                                                    Body
                                                </Col>
                                                <Col xs={10} sm={10} md={10}>
                                                    <FormControl type="text" placeholder="Body" name="body" defaultValue="" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalType">
                                            <Row>
                                                <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                                                    Type
                                                </Col>
                                                <Col xs={10} sm={10} md={10}>
                                                    <FormControl name="field_recipe_type" componentClass="select" placeholder="select">
                                                        { _.map(types, type => (
                                                            <option key={type.path} value={type.path}>{type.name}</option>                      
                                                        )) }   
                                                    </FormControl>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalTag">
                                            <Row>
                                                <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                                                    Tag
                                                </Col>
                                                <Col xs={10} sm={10} md={10}>
                                                    <FormControl name="field_recipe_tag" componentClass="select" placeholder="select">
                                                        { _.map(tags, tag => (
                                                            <option key={tag.path} value={tag.path}>{tag.name}</option>                      
                                                        )) }   
                                                    </FormControl>
                                                </Col>
                                            </Row>
                                        </FormGroup>                                          
                                        <br />
                                        <Row>
                                            <Col xs={6} sm={6} md={6}>
                                                <Button type="submit" className="btn-block btn-success">
                                                    <FontAwesome name="save" />
                                                </Button>
                                            </Col>                                           
                                            <Col xs={6} sm={6} md={6}>
                                                <Link className="btn btn-primary btn-block" to={'/'}>
                                                    <FontAwesome name="remove" /> Go Back
                                                </Link>
                                            </Col>                                     
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, recipeProps) {
    return { recipe: [] };
}

function mapDispatchToProps (dispatch) {
    return {
        newRecipePost: (data) => dispatch(newRecipePost(data)),        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);

