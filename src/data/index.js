import qs from 'qs'
export async function GetData({ url, method, params }) {
    const query = qs.stringify(params);
    await fetch(`${url, query}`, {
        method: method,
        body: params,
    })
}