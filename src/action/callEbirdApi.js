import {getEbirdApiData} from '../service/callEbirdApi';
export const callEbirdApiAction = (psssLatLng) => {
    return getEbirdApiData(psssLatLng)
        .then((response) => {
            return response;
        }).catch((error)=> {
            return false;
        });
}