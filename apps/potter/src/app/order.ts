export const basic_price = 8;
export const discount = [1, 1, 0.95, 0.9, 0.8, 0.75];

export class Order {
	private _books: number[] = [];
	buy(book: number) {
		this._books.push(book);
	}

	get price() {
		let len = this._books.length;
		let uniqe_books = this._books.filter(unique);
		return len * basic_price * discount[uniqe_books.length];
	}
}

function unique(value: any, index: number, self: Array<any>) {
	return self.indexOf(value) === index;
}
