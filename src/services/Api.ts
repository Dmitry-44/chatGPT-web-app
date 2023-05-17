import { User } from '../user.entity';


export const Api = (function () {

	const apiUrlBase = "private";

	// публичное поле
	// const publicField = "public";

	// публичный метод
	function getUser(id: number): Promise<User|null> {
		return fetch(
			apiUrlBase,
			{
				method: "POST",
				body: JSON.stringify({user_id: id})
			}
		)
		.then(res=>res.ok ? res.json() : null)
		.catch(err=>{
			console.log(err)
			return null
		})
	}

	return {
		getUser
	};
})();