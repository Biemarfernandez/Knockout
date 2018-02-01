function Producto () {

	var self = this;

	//Arrays

	self.Productos = ko.observableArray([
	{id: 1, modelo: "MacBook", caracteristica: " -12 pulgadas   -Intel Core i3 a 1, 1Ghz   -8GB RAM DDR3   -256GB   -0,9 KG" , precio: "3.567"},
	{id: 2, modelo: "MacBook Air", caracteristica: " -13 o 15 pulgadas -Intel core i5 a 2,3Ghz -8GB RAM DDR3 -128GB SSD -1,35 KG", precio: "4,567"},
	{id: 3, modelo: "MacBook Pro", caracteristica: " -13 o 15 pulgadas -Intel core i5 a 2,3Ghz -8GB RAM DDR3 -128GB SSD -1,37 KG", precio: "2,123"},
	{id: 4, modelo: "Lenovo Yoga 510", caracteristica: " -14 pulgadas el core i7-7500U a 2,7Ghz -8GB RAM DDR4 -256GB SSD -1,81 KG", precio: "45.567"},
	{id: 5, modelo: "Lenovo Ideapad 310", caracteristica: " -15,6 pulgadas -Intel core i7-7500u a 2,7Ghz -12GB RAM DDR4 -1TB HDD -2,2 KG", precio: "6,765"},
	{id: 6, modelo: "Lenovo Thinkpad E560", caracteristica: " -15,6 pulgadas el core i7-6500U a 2,5Ghz -8GB RAM -1TB HDD -2,3 KG", precio: "4.567"},
	{id: 7, modelo: "Asus ZenBook", caracteristica: " -13,3 pulgadas -Intel core i5-7200Ua 2,5Ghz -8GB RAM DDR3 -256GB SSD -1,2 KG", precio: "1.239"},
	{id: 8, modelo: "Asus K541UJ", caracteristica: " -15,6 pulgadas el core i5-7200Ua 2,5Ghz -12GB RAM DDR4 -1TB HDD -2 KG", precio: "234"},
	{id: 9, modelo: "Asus ZenBook Flip", caracteristica: " -13,3 pulgadas -Intel core i5-7200Ua 2,5Ghz -8GB RAM DDR3 -512GB SSD -1,2 KG", precio: "12.345"},
	{id: 10, modelo: "Sony Z1", caracteristica: "32 GB -Antiagua", precio: "1,234"}

		]);
};

ko.applyBindings(new Producto());