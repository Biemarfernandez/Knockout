
/* Inicio inicio de la seccion de registro
-----------------------------------------------------------------------*/

function ModeloContactoUsuario() {

	var self = this;

	self. Registro_contacto = ko.observableArray([{}]);

	self.usuario = ko.observable("");
	self.telefono = ko.observable("");
	self.gmail = ko.observable("");
	self.comentario = ko.observable("");

	self.agregar = function() {

		var usu = $('#usuarioR').val();
		var tel = $('#telefonoR').val();
		var g = $('#gmail').val();
		var sms = $('#comentarioR').val();

		self.Registro_contacto.push({usuario: usu, telefono: tel, gmail: g, descp: sms});

		alert("Registrada en el sistema!");
	};
};

ko.applyBindings(new ModeloContactoUsuario());