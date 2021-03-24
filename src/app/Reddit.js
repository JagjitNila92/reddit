export const API = 'https://www.reddit.com';

const redditCall = {
    fetchHomePost() {
        //fetching the home post API 
        return fetch(`${API}/r/popular.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children;
            })
    },

    fetchNewPost() {
        return fetch(`${API}/new/.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children;
            })
    },

    fetchHotPost() {
        return fetch(`${API}/hot/.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children;
            })
    },

    fetchTopPost() {
        return fetch(`${API}/top/.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                return jsonResponse.data.children;
            })
    },
}

export default redditCall; 