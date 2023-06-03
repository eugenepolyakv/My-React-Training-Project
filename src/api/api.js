import axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
    getAuthStatus() {
        return instance.get('auth/me').then((response) => response.data);
    },
    getUserProfile(userID) {
        return instance.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userID}`
        );
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
