use cobranzas
create table Alumno(
	id_alumno int identity primary key not null,
	matricula numeric(10) not null,
	contraseña varchar(30) not null,
	correo varchar(250) not null,
	nombre varchar(250) not null,
	fechaPagoInscripcion datetime not null,
	info text,
	contacto numeric(10) not null,
	balance money,
	cartera money,
);
insert into Alumno(matricula, contraseña,correo,nombre,fechaPagoInscripcion,info,contacto,balance,cartera)
			values(123456, 'ale123', 'ale@gmail.com', 'alejandro', '2020-08-20 00:00:00', ' desc del pago', 5540618966, 50000,10000);

insert into Alumno(matricula, contraseña,correo,nombre,fechaPagoInscripcion,info,contacto,balance,cartera)
			values(654321, 'ale123', 'ale2@gmail.com', 'alex', '2020-08-20 00:00:00', ' desc del pago', 5540618999, 50000,10000),
			(456789, 'ale123', 'ale3@gmail.com', 'alexander', '2020-08-20 00:00:00', ' desc del pago', 5540618911, 50000,10000)
select * from Alumno

create table Banco(
	id_banco int identity primary key not null,
	nombreBanco varchar(250) not null,
	direccion text,
	detalles text,
	referencias numeric(30) not null,
	fechaPagoValidaDeste datetime not null,
	fechaPagoValidahasta datetime not null,
);
insert into Banco(nombreBanco, direccion, detalles, referencias, fechaPagoValidaDeste, fechaPagoValidahasta)
values('HSBC', 'Vallejo 05', 'Banco con mas de 50 años en servicio', 123456789, '2020-08-20 00:00:00', '2020-09-20 00:00:00'),
	('BBVA', 'Buga 05', 'Banco con mas de 30 años en servicio', 987654321, '2020-08-20 00:00:00', '2020-09-20 00:00:00'),
	('Santander', 'Norte 05', 'Banco con mas de 20 años en servicio', 123456799, '2020-08-20 00:00:00', '2020-09-20 00:00:00')

select * from Banco

create table TransaccionPago(
	id_transaccion int identity primary key not null,
	pago money,
	fechaSolocitud datetime not null,
	idAlumno int not null,
	idBanco int not null,
	CONSTRAINT fk_alumno FOREIGN KEY (idAlumno) REFERENCES Alumno(id_alumno),
	CONSTRAINT fk_banco FOREIGN KEY (idBanco) REFERENCES Banco(id_banco),
);
select * from Alumno
select * from Banco
insert into TransaccionPago(pago, fechaSolocitud, idAlumno, idBanco)
values(5000, '2020-08-20 00:00:00',1, 1),(5000, '2020-08-20 00:00:00',3, 3),(5000, '2020-08-20 00:00:00',2, 2)
select * from TransaccionPago

select * from dbo.TransaccionPago
*DELETE FROM Banco 
    WHERE id_banco = '4' 
*insert into Banco(nombreBanco, direccion, detalles, referencias, fechaPagoValidaDeste, fechaPagoValidahasta)
values('prueba', 'Valle', 'Banco con mas de 50 años en servicio', 123456789, '2020-08-20 00:00:00', '2020-09-20 00:00:00')
*insert into TransaccionPago(pago, fechaSolocitud, idAlumno, idBanco)
values(5000, '2020-08-20 00:00:00',1, 4)
*DELETE FROM TransaccionPago 
    WHERE id_transaccion = '4' 