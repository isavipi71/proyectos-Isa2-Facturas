-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema AppFacturas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `AppFacturas` ;

-- -----------------------------------------------------
-- Schema AppFacturas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `AppFacturas` DEFAULT CHARACTER SET utf8 ;
USE `AppFacturas` ;

-- -----------------------------------------------------
-- Table `AppFacturas`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(150) NOT NULL,
  `nif` VARCHAR(10) NOT NULL,
  `Calle` VARCHAR(100) NOT NULL,
  `Provincia` VARCHAR(45) NOT NULL,
  `Ciudad` VARCHAR(45) NOT NULL,
  `CodigoPostal` INT NOT NULL,
  `Pais` VARCHAR(45) NOT NULL,
  `Telefono` VARCHAR(12) NOT NULL,
  `Movil` VARCHAR(12) NOT NULL,
  `CorreoElectronico` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`Servicios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Servicio` VARCHAR(150) NULL,
  `Precio` DECIMAL(6,2) NULL,
  `Descripción` VARCHAR(250) NULL,
  `Información_Adicional` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`facturas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id-cliente` INT NOT NULL,
  `id-servicio` INT NOT NULL,
  `Fecha_factura` DATE NOT NULL,
  `Referencia_pago` VARCHAR(45) NULL,
  `Fecha_vencimiento` DATE NULL,
  `Servicio` VARCHAR(45) NOT NULL,
  `Cantidad` INT NOT NULL,
  `Precio` DECIMAL(6,2) NOT NULL,
  `Impuesto` VARCHAR(5) NULL,
  `Total` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_facturas_clientes1`
    FOREIGN KEY (`id.cliente`)
    REFERENCES `AppFacturas`.`clientes` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_facturas_Servicios1`
    FOREIGN KEY (`id.servicio`)
    REFERENCES `AppFacturas`.`Servicios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`Asignacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`Asignacion` (
  `id-cliente` INT NOT NULL,
  `id-servicio` INT NOT NULL,
  PRIMARY KEY (`id-cliente`, `id-servicio`),
  CONSTRAINT `fk_clientes_has_Servicios1_clientes1`
    FOREIGN KEY (`id-cliente`)
    REFERENCES `AppFacturas`.`clientes` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_clientes_has_Servicios1_Servicios1`
    FOREIGN KEY (`id-servicio`)
    REFERENCES `AppFacturas`.`Servicios` (`id`)
    )
ENGINE = InnoDB;


USE `AppFacturas` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `AppFacturas`.`clientes`
-- -----------------------------------------------------
START TRANSACTION;
USE `AppFacturas`;
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (1, 'Juan Pérez', '12345678A', 'Calle Mayor 1', 'Barcelona', 'Barcelona', 28001, 'España', '912345678', '612345678', 'juan@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (2, 'María García', '87654321B', 'Avenida Libertad 20', 'Barcelona', 'Barcelona', 08002, 'España', '935264152', '656123489', 'maria@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (3, 'José Rodríguez', '56789012C', 'Calle Sol 15', 'Barcelona', 'Barcelona', 41001, 'España', '932154789', '645321546', 'jose@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (4, 'Ana Martínez', '34567890D', 'Plaza España 5,', 'Barcelona', 'Barcelona', 46002, 'España', '936254712', '674895258', 'ana@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (5, 'Carlos Sánchez', '23456789E', 'Carrer Major 10,', 'Barcelona', 'Barcelona', 08024, 'España', '942589654', '615423879', 'carlos@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (6, 'Laura López', '45678901F', 'Calle Luna 25,', 'Barcelona', 'Barcelona', 08025, 'España', '901625489', '634589451', 'laura@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (7, 'Miguel Ruiz', '67890123G', 'Rua Nova 3,', 'Barcelona', 'Barcelona', 08019, 'España', '932153465', '632589142', 'miguel@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (8, 'Marta García', '78901234H', 'Avda. del Parque 12', 'Barcelona', 'Barcelona', 08031, 'España', '932654891', '674895258', 'marta@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (9, 'Pablo Hernández', '89012345I', 'Carrer del Mar 8, ', 'Barcelona', 'Barcelona', 08056, 'España', '962356159', '612345678', 'pablo@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (10, 'Sandra Díaz', '90123456J', 'Paseo de la Castellana 100;', 'Barcelona', 'Barcelona', 08060, 'España', '934258761', '635897457', 'sandra@example.com');


COMMIT;


-- -----------------------------------------------------
-- Data for table `AppFacturas`.`Servicios`
-- -----------------------------------------------------
START TRANSACTION;
USE `AppFacturas`;
INSERT INTO `AppFacturas`.`Servicios` (`id`, `Nombre_Servicio`, `Precio`, `Descripción`, `Información_Adicional`) VALUES (1, 'Limpieza general', 250, 'Limpieza 3 veces por semana', 'Barrido, fregado, desempolvar, sacar la basura');
INSERT INTO `AppFacturas`.`Servicios` (`id`, `Nombre_Servicio`, `Precio`, `Descripción`, `Información_Adicional`) VALUES (2, 'Limpieza a fondo', 400, 'Limpieza 2 veces al año', 'Limpieza de paredes, ascensores, vestibulos, lamparas');

COMMIT;


-- -----------------------------------------------------
-- Data for table `AppFacturas`.`facturas`
-- -----------------------------------------------------
START TRANSACTION;
USE `AppFacturas`;
INSERT INTO `AppFacturas`.`facturas` (`id`, `id.cliente`, `id.servicio`, `Fecha_factura`, `Referencia_pago`, `Fecha_vencimiento`, `Servicio`, `Cantidad`, `Precio`, `Impuesto`, `Total`) VALUES (1, 1, 1, '2024-03-30', '1234M', '2024-04-30', 'Limpieza General', 1, 250.00, '21', 302.50);

COMMIT;

select * from clientes;
select * from servicios;
select * from facturas;


