import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			const data = {
				username: body.username,
				password: body.password,
				passwordConfirm: body.passwordConfirm,
			};

			await locals.pb.collection('users').create(data);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, "Something went wrong creating an account");
		}

		throw redirect(303, '/login');
	}
};