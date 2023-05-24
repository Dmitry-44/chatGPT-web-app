import { User } from '../user.entity';

export const Api = (function () {
	const apiUrlBase = "http://localhost:8000";
	// const apiUrlBase = "https://53e6-212-38-166-41.eu.ngrok.io";

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
		.catch(()=>null)
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