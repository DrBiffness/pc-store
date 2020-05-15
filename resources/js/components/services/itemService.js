import http from './httpService';

export async function getProcessors() {
    return http.get('/api/processors');
}

export async function getType(typeName) {
    return http.get(`/api/types/${typeName}`);
}
