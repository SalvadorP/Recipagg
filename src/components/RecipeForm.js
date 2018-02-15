import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Button, Row, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class RecipeForm extends Component {

    handleNewSubmit = (e) => {
        e.preventDefault();
        console.log('SUBMIT!');
        // const { newRecipe } = this.props;
        // const data = new serializeForm(e.target, {hash: true});
        // data.id = uniqid();     
        // e.preventDefault();     
        // newRecipe(data);
        // IDEA: once saved return to the list.
    }

    render() {
        const types = [];
        const tags = [];
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

export default RecipeForm
