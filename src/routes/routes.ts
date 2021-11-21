import { Application, Request, Response } from 'express';
import { getNumbers, upsertNumber } from '../controllers/number.controller';
import { NumberModel } from '../types';

type RouteParams = {
	app: Application;
}

export function setupRoutes({app}: RouteParams) {
	app.get('/numbers', async (req: Request, res: Response) => {
		const numbers = await getNumbers();
		res.json({numbers});
	});
	
	app.post('/numbers/increment', async (req: Request, res: Response) => {
		const { number } = req.body;
		let responseStatusCode = 400;
		let jsonResponse: NumberModel | Record<string, any> = {
			error: 'number is required in POST body'
		};

		if (number) {
			const updatedOrCreatedNumber = await upsertNumber(number);		
			jsonResponse = updatedOrCreatedNumber;
			responseStatusCode = 200;
		}

		res.status(responseStatusCode).json(jsonResponse);
	});
}