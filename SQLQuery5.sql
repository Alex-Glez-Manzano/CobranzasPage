select * from dbo.TransaccionPago
select * from Banco
DELETE FROM Banco 
    WHERE id_banco = '4' 
insert into Banco(nombreBanco, direccion, detalles, referencias, fechaPagoValidaDeste, fechaPagoValidahasta)
values('prueba', 'Valle', 'Banco con mas de 50 años en servicio', 123456789, '2020-08-20 00:00:00', '2020-09-20 00:00:00')
insert into TransaccionPago(pago, fechaSolocitud, idAlumno, idBanco)
values(5000, '2020-08-20 00:00:00',1, 4)
DELETE FROM TransaccionPago 
    WHERE id_transaccion = '4' 