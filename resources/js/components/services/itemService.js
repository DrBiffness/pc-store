import http from './httpService';
import Items from '../items';

export async function getProcessors() {
    return http.get('/api/processors');
}

export async function getType(typeName) {
    return http.get(`/api/types/${typeName}`);
}

export async function getMotherboards() {
    return http.get('/api/motherboards');
}
