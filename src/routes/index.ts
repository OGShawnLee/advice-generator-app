import type { RequestHandler } from '@sveltejs/kit';

async function fetchAdvice() {
	const res = await fetch('https://api.adviceslip.com/advice');
	const { slip } = (await res.json()) as Advice;
	return {
		status: 200,
		body: {
			id: slip.id,
			advice: slip.advice
		}
	};
}

export const get: RequestHandler = async () => {
	try {
		return await fetchAdvice();
	} catch (error) {
		return {
			status: 502
		};
	}
};
