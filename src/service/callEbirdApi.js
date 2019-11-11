import baseService from './base';

export function getEbirdApiData(psssLatLng) {
    let {lat,lng} = psssLatLng;
    return baseService.get(`/callforEbirdData/${lat}/${lng}`);
}