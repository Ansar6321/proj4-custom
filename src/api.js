import config from './config.json';

const searchMovies = async (searchString) => {
    const url = new URL(config.apiBaseUrl);
    url.searchParams.set('s', searchString);
    url.searchParams.set('apiKey', config.apiKey);

    const response = await fetch(url).then(r => r.json());

    if (response.Error) {
        throw new Error(response.Error);
    }

    return response;
}

export default { searchMovies };