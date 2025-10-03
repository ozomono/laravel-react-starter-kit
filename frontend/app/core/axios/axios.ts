import axios from 'axios'

const apiBaseURL = import.meta.env.VITE_API_BASE_URL

export const api = axios.create({
    baseURL: apiBaseURL,
    withCredentials: true,
    withXSRFToken: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    timeout: 10000, // 10 second timeout
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    validateStatus: function (status) {
        return status <= 210
    },
})

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response?.status === 401) {
            // Redirect to login on unauthorized access
       
        }
        if (err.response?.status === 403) {
            window.location.href = '/403'
        }
        if (err.response?.status === 500) {
            window.location.href = '/500'
        }
        return Promise.reject(err)
    }
)
