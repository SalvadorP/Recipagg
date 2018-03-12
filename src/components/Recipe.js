import React, {Component} from 'react';
import { Col } from 'react-bootstrap';

class Recipe extends Component {
    render() {
        const { nid, title, field_link, field_recipe_type, field_recipe_tag, view_node } = this.props.recipe;
        console.log(this.props.recipe);
        return (
            <Col xs={6} sm={6} md={4}>
                <div className="card border-primary mb-3" >
                    <div className="card-header"><a href={'/recipe/' + nid}>{title}</a></div>
                    <div className="card-body">
                        <p className="card-text" dangerouslySetInnerHTML={{__html: field_link}}></p>
                        <div class="pull-left">
                            <span className="badge badge-light" dangerouslySetInnerHTML={{__html: field_recipe_type}} />
                            <span className="badge badge-dark" dangerouslySetInnerHTML={{__html: field_recipe_tag}} />
                        </div>
                        <div class="pull-right"><span className="badge badge-info badge-info-link" dangerouslySetInnerHTML={{__html: view_node}}></span></div>
                    </div>
                </div>              
            </Col>
        )
    }
}

export default Recipe
