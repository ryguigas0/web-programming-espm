"use strict";
class IndexRoute {
    async index(req, res) {
        let options = {
            username: "Guilherme",
            loops: 5,
        };
        res.render("index/index", options);
    }
    async teste(req, res) {
        res.render("index/teste");
    }
    async produtos(req, res) {
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
        ];
        res.render("index/produtos", { products: products });
    }
}
module.exports = IndexRoute;
//# sourceMappingURL=index.js.map