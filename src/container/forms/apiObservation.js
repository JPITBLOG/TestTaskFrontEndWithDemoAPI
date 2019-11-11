import React,{Component} from 'react';
import InputForm from './inputForm';
import {callEbirdApiAction} from '../../action/callEbirdApi';
import ResponseTable from '../table/responseTable';

class Observation extends Component{
    constructor(props){
        super(props);
        this.state = {
            longitude : '',
            latitude : '',
            errors : {},
            responseData:[]
        }
    }

    handleChange = (e,stateKey) => {
        this.setState({[stateKey]:e.target.value})
    }

    latlngValidation = (latlngValue) => {
        let reg = /^[-+]?[0-9]+\.[0-9]+$/;
        if(latlngValue !== null && latlngValue !== '') {
            if (!reg.exec(latlngValue)) {
                return('enter proper value')
            }
        }
        else return("Cannot be empty");
        return true;
    }

    handleValidation = () => {
        let resp;
        let errors = {};
        let formIsValidate = true;
        const {longitude,latitude} = this.state;
        resp = this.latlngValidation(latitude);
        if(resp !== true){
            errors['latitude'] = resp;
            formIsValidate = false;
        }
        resp = this.latlngValidation(longitude);
        if(resp !== true){
            errors['longitude'] = resp;
            formIsValidate = false;
        }
        this.setState({errors:errors});
        return formIsValidate;
    }

    onSubmit = async () => {
        if(this.handleValidation()){
            const {latitude,longitude} = this.state;
            let psssLatLng = {lat:latitude,lng:longitude}
            let resp = await callEbirdApiAction(psssLatLng);
            if(resp) this.setState({responseData:resp.data})
        }
    }
    render() {
        const {errors,responseData} = this.state;
        return(
            <div>
                <h1>Hotspots Observation</h1>
                <InputForm handleChange = {(event,name) => this.handleChange(event,name)} onSubmit={this.onSubmit}
                 errors = {errors}/>
                {responseData.length > 0 ?(<ResponseTable apiData = {responseData}/>) : null}
            </div>
        );
    }
}

export default Observation;