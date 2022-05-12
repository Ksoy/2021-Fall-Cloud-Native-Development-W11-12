export const basic_price = 8;
export const discount = [0, 1, 0.95, 0.9, 0.8, 0.75];

export class Order {
	private _books = [0, 0, 0, 0, 0];
	buy(book: number) {
		this._books[book] += 1;
	}

	get price() {
		let cz, total = 0;

		// use greedy discount to get price
		while((cz = countZero(this._books)) != 5) {
			total += basic_price * (5 - cz) * discount[5 - cz];
			reduce(this._books);
		}
		return total;
	}
}

function countZero(books: Array<number>) {
	return books.filter((book) => {
		return book === 0;
	}).length;
}

function reduce(books: Array<number>) {
	for(let i = 0; i < books.length; i++) {
		books[i] = Math.max(0, books[i] - 1)
	}
}
