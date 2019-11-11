import React,{Component} from 'react';
import { Table } from 'reactstrap';

class ResponseTable extends Component{

    mapData = () => {
        let dataBundle = this.props.apiData;
        let mappedData = dataBundle.map((data,index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{data.countryCode}</td>
                    <td>{data.subnational2Code}</td>
                    <td>{data.lat}</td>
                    <td>{data.lng}</td>
                    <td>{data.locName}</td>
                </tr>
            )
        })
        return mappedData
    }

    render() {
        return (
            <>
                <h2 className="App">Get Data For Nearby Hotspots for up to 50 Kilometers</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Country Code</th>
                        <th>National Code</th>
                        <th>Lat</th>
                        <th>Lng</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.mapData()}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default ResponseTable;