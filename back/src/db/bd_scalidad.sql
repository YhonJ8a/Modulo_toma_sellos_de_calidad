-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-03-2023 a las 21:36:13
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_scalidad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contratista`
--

CREATE TABLE `contratista` (
  `id` int(11) NOT NULL,
  `descContratista` varchar(255) DEFAULT NULL,
  `an8` varchar(255) DEFAULT NULL,
  `nit` varchar(255) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contratista`
--

INSERT INTO `contratista` (`id`, `descContratista`, `an8`, `nit`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'MARVAL PILOTAJE', '005', '555323232', 1, '2023-03-29 22:31:35', '2023-03-29 22:31:35'),
(2, 'MARVAL', '005', '555323232', 1, '2023-03-29 22:31:35', '2023-03-29 22:31:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etapaproyectos`
--

CREATE TABLE `etapaproyectos` (
  `id` int(11) NOT NULL,
  `descEtapaProyecto` varchar(255) DEFAULT NULL,
  `hc` varchar(255) DEFAULT NULL,
  `hcFace` varchar(255) DEFAULT NULL,
  `noInmuebles` int(11) DEFAULT NULL,
  `noAscensores` int(11) DEFAULT NULL,
  `noSotanos` int(11) DEFAULT NULL,
  `noSemisotanos` int(11) DEFAULT NULL,
  `noIntermedios` int(11) DEFAULT NULL,
  `primeNivelVivienda` int(11) DEFAULT NULL,
  `ultimoNivelVivienda` int(11) DEFAULT NULL,
  `nivelesSuperiores` int(11) DEFAULT NULL,
  `areaPromedio` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `etapaproyectos`
--

INSERT INTO `etapaproyectos` (`id`, `descEtapaProyecto`, `hc`, `hcFace`, `noInmuebles`, `noAscensores`, `noSotanos`, `noSemisotanos`, `noIntermedios`, `primeNivelVivienda`, `ultimoNivelVivienda`, `nivelesSuperiores`, `areaPromedio`, `activo`, `createdAt`, `updatedAt`) VALUES
(1, 'torre 01', '01-A', 'A1', 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, '2023-03-29 22:27:13', '2023-03-29 22:27:13'),
(3, 'torre 02', '01-A', 'A1', 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, '2023-03-29 22:27:13', '2023-03-29 22:27:13'),
(4, 'torre 03', '01-A', 'A1', 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, '2023-03-29 22:27:13', '2023-03-29 22:27:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pisos`
--

CREATE TABLE `pisos` (
  `id` int(11) NOT NULL,
  `NoPiso` varchar(255) DEFAULT NULL,
  `selecto` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pisos`
--

INSERT INTO `pisos` (`id`, `NoPiso`, `selecto`, `createdAt`, `updatedAt`) VALUES
(1, '1', 0, '2023-03-29 22:11:28', '2023-03-30 16:13:19'),
(2, '2', 0, '2023-03-29 22:11:28', '2023-03-30 16:13:20'),
(3, '3', 0, '2023-03-29 22:11:28', '2023-03-30 15:39:57'),
(4, '4', 0, '2023-03-29 22:11:28', '2023-03-30 15:39:54'),
(5, '5', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(6, '6', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(7, '7', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(8, '8', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(9, '9', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(10, '10', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(11, '11', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(12, '12', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(13, '13', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(14, '14', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(15, '15', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(16, '16', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(17, '17', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(18, '18', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(19, '19', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(20, '20', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(21, '21', 0, '2023-03-29 22:11:28', '2023-03-29 22:11:28'),
(22, '22', 0, '2023-03-29 22:11:28', '2023-03-30 15:36:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `descProyecto` varchar(255) DEFAULT NULL,
  `proyectoActivo` varchar(255) DEFAULT NULL,
  `fases` varchar(255) DEFAULT NULL,
  `especial` varchar(255) DEFAULT NULL,
  `lasPlaner` varchar(255) DEFAULT NULL,
  `sello` varchar(255) DEFAULT NULL,
  `idSurcursal` int(11) DEFAULT NULL,
  `estrato` int(11) DEFAULT NULL,
  `lasPlanerInte` varchar(255) DEFAULT NULL,
  `lasPlanerSem` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `descProyecto`, `proyectoActivo`, `fases`, `especial`, `lasPlaner`, `sello`, `idSurcursal`, `estrato`, `lasPlanerInte`, `lasPlanerSem`, `createdAt`, `updatedAt`) VALUES
(1, 'CITY MASTER', 'true', '5-i', 'aaa', 'AAA', 'sec01', 1, 6, 'añññ', 'dddd', '2023-03-29 22:16:12', '2023-03-29 22:16:12'),
(2, 'CITY PRO', 'true', '5-i', 'aaa', 'AAA', 'sec01', 1, 6, 'añññ', 'dddd', '2023-03-29 22:16:12', '2023-03-29 22:16:12'),
(3, 'CITY CENTRO', 'true', '5-i', 'aaa', 'AAA', 'sec01', 1, 6, 'añññ', 'dddd', '2023-03-29 22:16:12', '2023-03-29 22:16:12'),
(4, 'CITYS', 'true', '5-i', 'aaa', 'AAA', 'sec01', 1, 6, 'añññ', 'dddd', '2023-03-29 22:16:12', '2023-03-29 22:16:12'),
(5, 'CITY-SAS', 'true', '5-i', 'aaa', 'AAA', 'sec01', 1, 6, 'añññ', 'dddd', '2023-03-29 22:16:12', '2023-03-29 22:16:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `selloscalidads`
--

CREATE TABLE `selloscalidads` (
  `id` int(11) NOT NULL,
  `descSello` varchar(255) DEFAULT NULL,
  `idtipoSellocalidad` int(11) DEFAULT NULL,
  `reponsable` int(11) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `selloscalidads`
--

INSERT INTO `selloscalidads` (`id`, `descSello`, `idtipoSellocalidad`, `reponsable`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'Estructura/Foso ascensor', 2, 1, 'exelente', '2023-03-29 22:29:14', '2023-03-29 22:29:14'),
(3, 'Estructura/parqueadero', 2, 1, 'exelente', '2023-03-29 22:29:14', '2023-03-29 22:29:14'),
(4, 'Estructura/sotano', 2, 1, 'exelente', '2023-03-29 22:29:14', '2023-03-29 22:29:14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contratista`
--
ALTER TABLE `contratista`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `etapaproyectos`
--
ALTER TABLE `etapaproyectos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pisos`
--
ALTER TABLE `pisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `selloscalidads`
--
ALTER TABLE `selloscalidads`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contratista`
--
ALTER TABLE `contratista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `etapaproyectos`
--
ALTER TABLE `etapaproyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pisos`
--
ALTER TABLE `pisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `selloscalidads`
--
ALTER TABLE `selloscalidads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
