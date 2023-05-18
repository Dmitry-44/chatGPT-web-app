import { User } from '../user.entity';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const Api = (function () {

	const apiUrlBase = "http://localhost:8000";

	// публичное поле
	// const publicField = "public";

	// публичный метод
	async function getUser(id: number): Promise<User|null> {
		const data = {
			user_id: id,
		}

		return axios.post( 
			apiUrlBase+'/user',data
		)
		.then(res=> {
			console.log('res', res);
			return null
			// return res.ok ? res.json() : null
		})
		.catch(err=>{
			console.log('catch err', err);
			console.log(err)
			return null
		})
	}

	return {
		getUser
	};
})();