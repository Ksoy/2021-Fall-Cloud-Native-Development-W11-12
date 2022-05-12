export const basic_price = 8;

export class Order {
	private _books: number[] = [];
	buy(book: number) {
		this._books.push(book);
	}

	get price() {
		return this._books.length * basic_price;
	}
}
