import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		let options = {
			username: "Guilherme",
			loops: 5,
		}

		res.render("index/index", options);
	}

	public async teste(req: app.Request, res: app.Response) {
		res.render("index/teste");
	}

	public async produtos(req: app.Request, res: app.Response) {
		let products = [
			{
				id: 1,
				name: "Produto A",
				description: "Esse produto é bem top 🍰"
			},
			{
				id: 2,
				name: "Produto B",
				description: "Esse produto é bem top 🎉"
			},
			{
				id: 3,
				name: "Produto C",
				description: "Esse produto é bem top 🚀"
			}
		]


		res.render("index/produtos", {products: products});
	}
}

export = IndexRoute;
