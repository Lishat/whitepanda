import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg} from 'reactstrap';
class MenuItem extends Component
{
    render()
    {
        const menu = this.props.cards.map((details)=>{
            return (<div className="col-12 col-md-4">
                <Card className="container">
                    <CardBody className="row">
                        <div className="col-3 mx-auto">
                            <CardImg className="rounded-circle logo" src={details.Image} alt={details.Image}></CardImg>
                        </div>
                        <div className="col-9">
                            <CardTitle><span class="mainTitle">{details.Title}</span><br/>from &#8377;{details.Price}</CardTitle>
                        </div>
                        <CardText className="col-12"><small className="csColor">{details.Description}</small></CardText>
                        <button className="ml-3 col-5 cs-btn">Order</button>
                    </CardBody>
                </Card>
            </div>);
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        ); 
    }
}

export default MenuItem;