import React, {Component} from 'react';
import { Col } from 'react-bootstrap';

class Recipe extends Component {
    render() {
        const { nid, title, field_link, field_recipe_type, field_recipe_tag } = this.props.recipe;
        return (
            <Col xs={6} sm={6} md={4}>
                <div className="card border-primary mb-3" >
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                        <p className="card-text" dangerouslySetInnerHTML={{__html: field_link}}></p>
                        <span className="badge badge-light" dangerouslySetInnerHTML={{__html: field_recipe_type}} />
                        <span className="badge badge-dark" dangerouslySetInnerHTML={{__html: field_recipe_tag}} />
                    </div>
                </div>              
            </Col>
        )
    }
}

export default Recipe
