import { User } from '../user.entity';

export const Api = (function () {
	const apiUrlBase = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`;

	async function getUser(id: number): Promise<User|null> {
		const data = {
			user_id: id,
		}
		return fetch( 
			apiUrlBase+'/user', {
				method: 'POST',
				body: JSON.stringify(data)
			}
		)
		.then(res=> res.ok ? res.json() : null)
		.catch((err)=>{
			console.error(err);
			return null
		})
	}

	async function getPayLink(userId: number, tariffId: number): Promise<string> {
		return fetch( 
			apiUrlBase+`/pay/${userId}/${tariffId}`, {method: 'GET'}
		)
		.then(res=> res.ok ? res.json() : '')
		.then(res=> res ? res.payment_link : '')
		.catch(()=>'')
	}

	return {
		getUser,
		getPayLink
	};
})();