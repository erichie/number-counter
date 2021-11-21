import { getNumbers, upsertNumber } from '../controllers/number.controller';
import { prismaMock } from '../setupTests';

test('should add a number if it does not already exist', async () => {
	const numberMock = {
		number: 1,
		count: 1
	}

	prismaMock.number.upsert.mockResolvedValue(numberMock);

	await expect(upsertNumber(numberMock.number)).resolves.toEqual(numberMock);
});

test('should increment a number if it already exists in the db', async () => {
	const numberMock = {
		number: 1,
		count: 1
	};

	const number2Mock = {
		number: 1,
		count: 2
	};

	prismaMock.number.upsert.mockResolvedValue(numberMock);

	await expect(upsertNumber(numberMock.number)).resolves.toEqual({
		number: 1,
		count: 1
	});

	prismaMock.number.upsert.mockResolvedValue(number2Mock);

	await expect(upsertNumber(number2Mock.number)).resolves.toEqual({
		number: 1,
		count: 2
	});
});

test('should get all numbers that exist with their count', async () => {
	const numbersCollectionMock = [
		{
			number: 1,
			count: 2
		},
		{
			number: 4,
			count: 3
		},
		{
			number: 87,
			count: 1
		}
	];

	prismaMock.number.findMany.mockResolvedValue(numbersCollectionMock);

	await expect(getNumbers()).resolves.toEqual(numbersCollectionMock);
});

test('should return an empty array if no numbers have been added', async () => {
	prismaMock.number.findMany.mockResolvedValue([]);

	await expect(getNumbers()).resolves.toEqual([]);
});