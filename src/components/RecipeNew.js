import React, {Component} from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import RecipeForm from './RecipeForm';

class RecipeNew extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <h1>New Recipe</h1>
                    </Col>
                </Row>    
                <RecipeForm />
            </Grid>
        )
    }
}

export default RecipeNew
