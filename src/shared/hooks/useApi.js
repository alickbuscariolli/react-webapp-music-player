const useApi = () => {

    const API_URL = 'https://itunes.apple.com/';

    const apiGet = async (url) => {
        try {
            const response = await _fetch(`${API_URL}${url}`, 'GET');

            const responseJson = await response.json();

            return responseJson;
        } catch(error) {
            throw new Error(error);
        }
    }

    const _fetch = async (url, method, options = {}) => {
        const { timeout = 15000 } = options;

        const controller = new AbortController();

        const id = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {method, ...options, signal: controller.signal,});

        clearTimeout(id);

        return response;
    }

    return [apiGet];
}

export default useApi;