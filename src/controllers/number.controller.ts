import prisma from '../prismaClient'
import { NumberModel } from '../types';

export async function getNumbers(): Promise<NumberModel[]> {
	const numbers = await prisma.number.findMany();
	return numbers;
}

export async function upsertNumber(number: number): Promise<NumberModel> {
	const updatedOrCreatedNumber = await prisma.number.upsert({
		where: {
			number
		},
		create: {
			number,
			count: 1
		},
		update: {
			count: {
				increment: 1
			}
		}
	});

	return updatedOrCreatedNumber;
}