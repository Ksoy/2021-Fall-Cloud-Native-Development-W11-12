// price per book
export const basic_price = 8;
// purchase discount, index represents the number of series purchases
export const discount = [0, 1, 0.95, 0.9, 0.8, 0.75];

export class Order {
	// Store the number of series purchased
	private _books = [0, 0, 0, 0, 0];
	buy(book: number) {
		this._books[book] += 1;
	}

	// Calculate the final price after discount.
	get price() {
		let cz, total = 0;

		// use greedy discount to get price
		while((cz = countZero(this._books)) != 5) {
			if (isEdgeCase(this._books)) { // check edge case
				total += 2 * basic_price * 4 * discount[4];
				reduce(this._books, 2);
			} else {
				total += basic_price * (5 - cz) * discount[5 - cz];
				reduce(this._books);
			}
		}
		return total;
	}
}

function countZero(books: Array<number>) {
	return books.filter((num) => {
		return num === 0;
	}).length;
}

function isEdgeCase(books: Array<number>) {
	/*
		pattern: [0, 0, 1, 1, 2, 2, 3, 4]
		shold be decompose to [0, 1, 2, 3] and [0, 1, 2, 4]
		not [0, 1, 2, 3, 4] and [0, 1, 2]
	*/
	let c_one = 0, c_other = 0;
	books.forEach((num) => {
		if (num === 1) {
			c_one++;
		} else if (num > 1) {
			c_other++;
		}
	})
	return (c_one === 2 && c_other === 3);
}

function reduce(books: Array<number>, diff = 1) {
	for (let i = 0; i < books.length; i++) {
		books[i] = Math.max(0, books[i] - diff)
	}
}
