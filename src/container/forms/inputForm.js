import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class InputForm extends Component {
    render() {
        return(
            <div className="inputFrm">
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Latitude" className="mr-sm-2">Latitude</Label>
                        <Input type="text" name="lat" id="lat" placeholder="latitude" onChange = {event => this.props.handleChange(event,"latitude")} />
                        <span style={{color: "red"}}>{this.props.errors["latitude"]}</span>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Longitude" className="mr-sm-2">Longitude</Label>
                        <Input type="text" name="lng" id="lng" placeholder="longitude" onChange = {event => this.props.handleChange(event,"longitude")}/>
                        <span style={{color: "red"}}>{this.props.errors["longitude"]}</span>
                    </FormGroup>
                    <Button onClick={this.props.onSubmit}>Get Data</Button>
                </Form>
            </div>
        );
    }
}

export default InputForm;