import axios from 'axios';

export function apiGetCall(url: string) {
	return axios.get(url)
}

export function apiPostCall(url: string, params: Object) {
	return axios.post(url, params)
}

export function apiUploadImage(url: string, data: FormData) {
	return axios.post(url, data)
}

/*export function doLogin(strategy: string, args: Object) {
	return auth.loginWith(strategy, args)
}*/