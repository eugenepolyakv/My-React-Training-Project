import axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6cf61280-ebb6-478f-9318-8a0ac2820107',
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    followPerson(userID) {
        return instance
            .post(`follow/${userID}`, {})
            .then((response) => response.data);
    },
    unfollowPerson(userID) {
        return instance
            .delete(`follow/${userID}`)
            .then((response) => response.data);
    },
    getUserProfile(userID) {
        console.warn(
            'Obselete method. Please use profileAPI.getUserProfile instead'
        );
        return profileAPI.getUserProfile(userID);
    },
};

export const profileAPI = {
    getUserProfile(userID) {
        return instance.get(`profile/${userID}`);
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`);
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status });
    },
};

export const authAPI = {
    getAuthStatus() {
        return instance.get('auth/me').then((response) => response.data);
    },
    getLoggedIn(properties) {
        return instance
            .post('auth/login', properties)
            .then((response) => response.data);
    },
    logout() {
        return instance.delete('auth/login').then((response) => response.data);
    },
};

// export const getUsers = (currentPage, pageSize) => {
//     return instance
//         .get(`users?page=${currentPage}&count=${pageSize}`, {
//             withCredentials: true,
//         })
//         .then((response) => {
//             return response.data;
//         });
// }
