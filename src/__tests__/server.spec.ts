import request from 'supertest';
import server from '../server';

beforeEach(() => {
	
});

test('get /numbers endpoint should return a 200', async () => {
	const response = await request(server).get('/numbers').send();
	
	expect(response.statusCode).toEqual(200);
});

test('post /numbers/increment with a number should return a 200', async () => {
	const response = await request(server).post('/numbers/increment').send({number: 33});
	
	expect(response.statusCode).toEqual(200);
});

test('post /numbers/increment without a number should return a 400 and an error message', async () => {
	const response = await request(server).post('/numbers/increment').send();
	
	expect(response.statusCode).toEqual(400);
	expect(response.body.error).toEqual('number is required in POST body');
});