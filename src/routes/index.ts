import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const res = await fetch('https://api.adviceslip.com/advice');
	const { slip } = (await res.json()) as Advice;
	return {
		status: 200,
		body: {
			id: slip.id,
			advice: slip.advice
		}
	};
};
