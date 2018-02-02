 var ViewServicios = function () {
 	
 	var self = this;

 	//array
 	self.productos = ko.observableArray([]);

 	//formulario



 	/* se agrega el modelo del producto
 	---------------------------------------------------------------------*/
 	self.producto = ko.observableArray(["MacBook", "Lenovo Yoga 510", "Lenovo Ideapad 310", "Lenovo Thinkpad E560", "Asus ZenBook", "Asus K541UJ", "Asus ZenBook Flip", "Sony Z1"]);
 	self.selectProducto = ko.observable();

 	self.precio = ko.observableArray(["3.567", "4,567", "2,123", "45.567", "6,765", "4.567", "1.239", "234", "12.345"]);
 	self.selectPrecio = ko.observable("");

 	self.cantidad = ko.observable("");

 	self.startDate = ko.observable(new Date());

 	self.pais = ko.observableArray(["Afaganistán", "Albania", "Alemania", "Andorra", "Angola", "Arabia Saudita", "Argelia", "Argentina",
 		"Armenia", "Austria", "Australia", "Barbados", "Belgica", "Belice", "Beni", "Bolivia", "Chile", "China", "Colombia", "Corea del Norte",
 		"Corea del sur", "Costa Rica", "Cuba", "España", "Estados Unidos", "Siria"]);
 	self.selectPais = ko.observable("");

 	self.cliente = ko.observable("");

 	self.credito = ko.observableArray(["Tarjeta Visa Oro de Obsidiana", "Cybertarjeta La Caixa", " Tarjeta e-cash Banco Santander", "Tarjeta Contactless Oficina Directa", "Tarjeta Virtual BBVA Wallet", "American Card",
 		"Master Card", "Visa", "Other"]);
 	self.selectCredito = ko.observable("");

 	self.targeta = ko.observable("");
 	self.codigo = ko.observable("");

 	/* Comentario final de la secio de productos
 	----------------------------------------------------------------------*/

 	

 	/* Inicio de listado de productos
 	-----------------------------------------------------------------------*/
 	self.listarProducto = function() {

 		var pro = $('#producto').val();
 		var pre = $('#precio').val();
 		var cant = $('#cantidad').val();
 		var f = $('#fecha').val();
 		var p = $('#pais').val();
 		var cli = $('#cliente').val();
 		var credit = $('#credito').val();
 		var targ = $('#targeta').val();
 		var c = $('#codigo').val();

 		self.productos.push({producto: pro, precio: pre, cantidad: cant, fecha: f, pais: p, cliente: cli, credito: credit, targeta: targ, codigo: c}); 

 		alert("Registro Exitoso");
 	};

 	self.eliminarElemento = function(elemento) {
 		self.productos.remove(elemento);
 	};

 };

 ko.applyBindings(new ViewServicios());