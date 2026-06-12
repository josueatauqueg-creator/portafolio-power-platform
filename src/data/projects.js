export const projectCategories = [
  'Todos',
  'Power Apps',
  'Power Automate',
  'RPA',
  'SQL',
  'Copilot Studio',
  'Dataverse',
  'SharePoint'
];

export const projects = [
  {
    id: 1,
    title: 'Gestión Integral de Multas',
    client: 'Abastible Chile',
    category: 'Power Apps',
    description: 'Aplicación empresarial orientada a centralizar y optimizar la gestión integral de multas, permitiendo registrar, consultar y controlar la información operativa desde una interfaz moderna en Power Apps. La solución busca mejorar la experiencia del usuario, reducir tareas manuales y disminuir el tiempo dedicado al llenado de formatos y envío de correos.',

    solution: 'Se desarrolló una Canvas App en Power Apps utilizando PCF Controls, HTML y CSS para construir una interfaz más dinámica, ordenada y amigable para el usuario. La aplicación se conecta a SQL Server como base de datos principal y utiliza flujos de Power Automate para enviar notificaciones automáticas por Microsoft Teams y Outlook, además de generar reportes en PDF y Excel. Esta implementación permitió centralizar la data, mejorar el seguimiento de la información y lograr un ahorro aproximado de 48 horas mensuales en actividades operativas.',
    tools: [
      'Power Apps',
      'PCF Controls',
      'HTML',
      'CSS',
      'Power Automate'
    ],
    database: 'SQL Server',
    integrations: [
      'Microsoft Teams',
      'Outlook',
      'Generación de reportes PDF',
      'Exportación a Excel'
    ],
    benefits: [
      'Mejora en la experiencia de usuario',
      'Centralización de la data operativa',
      'Ahorro aproximado de 48 horas mensuales',
      'Reducción del llenado manual de formatos',
      'Automatización de correos y notificaciones',
      'Generación de reportes para seguimiento y control'
    ],
    license: 'Power Automate Per User',
    image: '/projects/gestion-integral-multas/gestion-integral-multas.png',
    gallery: [
      '/projects/gestion-integral-multas/gestion-integral-multas.png',
      '/projects/gestion-integral-multas/detalle-multa.png'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Plataforma de Compra de Cursos para Trabajadores',
    client: 'ADDC Perú',
    category: 'Power Apps',
    description: 'Aplicación empresarial desarrollada para gestionar y centralizar las solicitudes de compra de cursos para trabajadores de la compañía, permitiendo registrar información desde una interfaz moderna en Power Apps y reducir el uso de formatos manuales y correos operativos.',
    solution: 'Se desarrolló una Canvas App en Power Apps conectada a SharePoint Lists como base de datos principal. La solución permite registrar solicitudes de cursos, centralizar la información del trabajador y del curso solicitado, y automatizar comunicaciones mediante flujos de Power Automate. Además, se integraron notificaciones por Microsoft Teams y Outlook, junto con la generación de reportes en PDF para mejorar el seguimiento y control de las solicitudes internas.',
    tools: [
      'Power Apps',
      'Power Automate',
      'SharePoint',
      'Office 365'
    ],
    database: 'SharePoint Lists',
    integrations: [
      'Microsoft Teams',
      'Outlook',
      'Generación de reportes PDF'
    ],
    benefits: [
      'Mejora en la experiencia de usuario',
      'Centralización de solicitudes de cursos',
      'Ahorro de tiempo en llenado de formatos',
      'Reducción de correos manuales',
      'Automatización de notificaciones internas',
      'Mejor seguimiento de solicitudes para trabajadores'
    ],
    license: 'Office E3',
    image: '/projects/addc-peru/addc-cover.png',
    gallery: ['/projects/addc-peru/addc-cover.png'],
    featured: true
  },
  {
    id: 3,
    title: 'Prospectos en Zonas sin Internet',
    client: 'Banco Exterior Venezuela',
    category: 'Power Apps',
    description: 'Aplicación empresarial desarrollada para registrar prospectos en campo desde zonas sin conexión a internet, permitiendo capturar información comercial de manera offline y sincronizarla posteriormente cuando el dispositivo recupere conectividad.',
    solution: 'Se desarrolló una Canvas App en Power Apps con capacidad de trabajo sin conexión, orientada a la colocación y registro de prospectos en zonas sin internet. La solución permite capturar datos desde dispositivos móviles, almacenar la información de forma temporal durante la operación offline y sincronizarla posteriormente con Dataverse como base de datos principal. Además, se integraron flujos de Power Automate para el envío de notificaciones por Outlook y la generación de reportes en PDF, mejorando el seguimiento comercial y reduciendo tareas manuales.',
    tools: [
      'Power Apps',
      'Power Automate',
      'Dataverse',
      'Office 365'
    ],
    database: 'Dataverse',
    integrations: [
      'Outlook',
      'Generación de reportes PDF',
      'Sincronización offline'
    ],
    benefits: [
      'Captura de prospectos sin conexión a internet',
      'Mejora en la experiencia de usuario en campo',
      'Centralización de la data comercial',
      'Ahorro de tiempo en llenado de formatos',
      'Reducción de correos y procesos manuales',
      'Sincronización posterior de información registrada'
    ],
    license: 'Power Apps Premium',
    image: '/projects/banco-exterior/ban-cover.png',
    gallery: [
      '/projects/banco-exterior/ban-cover.png',
      '/projects/banco-exterior/ban-cont.png'
    ],
    featured: true
  },
  {
    id: 4,
    title: 'Gestión de Bajas de Cuentas de Clientes Fallecidos',
    client: 'Interbank',
    category: 'Power Apps',
    description: 'Aplicación empresarial desarrollada para gestionar el proceso de baja de cuentas de clientes fallecidos, centralizando la información operativa, documentación y seguimiento del caso desde una interfaz en Power Apps.',
    solution: 'Se desarrolló una Canvas App en Power Apps conectada a Azure SQL Database como base de datos principal, permitiendo registrar solicitudes de baja, consultar información del cliente, validar datos relevantes y mantener un control centralizado del proceso. La solución se integra con Power Automate para enviar notificaciones por Microsoft Teams y alimentar un Dashboard en Power BI, facilitando el monitoreo de casos, estados y tiempos de atención.',
    tools: [
      'Power Apps',
      'Power Automate',
      'Azure SQL Database',
      'Power BI'
    ],
    database: 'Azure SQL Database',
    integrations: [
      'Microsoft Teams',
      'Power BI',
      'Notificaciones automáticas',
      'Dashboard operativo'
    ],
    benefits: [
      'Centralización de la data del proceso',
      'Mejora en la experiencia de usuario',
      'Ahorro de tiempo en llenado de formatos',
      'Reducción de tareas manuales',
      'Mejor trazabilidad de solicitudes',
      'Reporterías para seguimiento operativo'
    ],
    license: 'Power Automate Premium',
    image: '/projects/interbank/int-login.png',
    gallery: [
      '/projects/interbank/int-login.png',
      '/projects/interbank/int-form.png'
    ],
    featured: true
  },
  {
    id: 5,
    title: 'Generación de Citas Online con Tutores',
    client: 'Universidad Privada del Norte - UPN',
    category: 'Power Apps',
    description: 'Aplicación empresarial desarrollada para gestionar la generación de citas online con tutores, permitiendo centralizar solicitudes, registrar información del usuario y coordinar reuniones de manera más ordenada desde una interfaz en Power Apps.',
    solution: 'Se desarrolló una Canvas App en Power Apps conectada a una base de datos SQL para registrar solicitudes de citas, validar información y centralizar el seguimiento de reuniones con tutores. La solución se integra con Power Automate y Microsoft Graph API para automatizar la generación de reuniones online, enviar notificaciones y reducir el uso de formatos manuales y correos operativos.',
    tools: [
      'Power Apps',
      'Power Automate',
      'SQL',
      'Microsoft Graph API'
    ],
    database: 'SQL',
    integrations: [
      'Power Automate',
      'Microsoft Graph API',
      'Outlook',
      'Generación de reuniones online',
      'Notificaciones automáticas'
    ],
    benefits: [
      'Mejora en la experiencia de usuario',
      'Centralización de solicitudes de citas',
      'Ahorro de tiempo en llenado de formatos',
      'Reducción de correos manuales',
      'Automatización de reuniones online',
      'Mejor coordinación entre usuarios y tutores'
    ],
    license: 'Automate Per User Plan',
    image: '/projects/upn/upn-cover.png',
    gallery: [
      '/projects/upn/upn-cover.png'
    ],
    featured: true
  },
  {
    id: 6,
    title: 'Robot para Llenado Automático de Formularios',
    client: 'Banco Pichincha',
    category: 'RPA',
    description: 'Automatización RPA desarrollada para reducir el tiempo operativo en el llenado manual de formularios, permitiendo procesar información de colaboradores de manera más rápida, ordenada y eficiente.',
    solution: 'Se implementó un robot con UiPath para automatizar el llenado de formularios, replicando las acciones manuales que realizaban los colaboradores y reduciendo significativamente el tiempo dedicado a esta actividad. La solución permite optimizar el proceso para más de 2500 colaboradores, generando un ahorro estimado de 2 horas por colaborador y disminuyendo errores asociados al registro manual de información.',
    tools: [
      'UiPath',
      'RPA',
      'Automatización de formularios'
    ],
    database: 'No requiere',
    integrations: [
      'Formulario web',
      'Proceso automatizado',
      'Ejecución asistida por robot'
    ],
    benefits: [
      'Ahorro de 2 horas por colaborador',
      'Optimización para más de 2500 colaboradores',
      'Reducción del llenado manual de formularios',
      'Disminución de errores operativos',
      'Mejora en la eficiencia del proceso',
      'Estandarización del registro de información'
    ],
    license: 'Power Automate Premium - 15 USD/mes por usuario',
    image: '/projects/pichincha/pi-cover.png',
    gallery: [
      '/projects/pichincha/pi-cover.png'
    ],
    featured: true
  },
  {
    id: 7,
    title: 'Robot RPA para Llenado Masivo de Formularios',
    client: 'Banco Santa Fe',
    category: 'RPA',
    description: 'Automatización RPA desarrollada para realizar el llenado masivo de formularios de manera rápida y estandarizada, reduciendo el tiempo operativo por colaborador y evitando tareas repetitivas manuales.',
    solution: 'Se implementó un robot con UiPath para automatizar el llenado de formularios, ejecutando el registro de información de forma asistida y repetitiva sin requerir una base de datos adicional. La solución permite optimizar el proceso para más de 2500 colaboradores, reduciendo el tiempo de llenado a aproximadamente 2 minutos por colaborador y mejorando la eficiencia operativa del proceso.',
    tools: [
      'UiPath',
      'RPA',
      'Automatización de formularios'
    ],
    database: 'No requiere',
    integrations: [
      'Formulario web',
      'Proceso automatizado',
      'Ejecución asistida por robot'
    ],
    benefits: [
      'Reducción del tiempo de llenado a 2 minutos por colaborador',
      'Automatización para más de 2500 colaboradores',
      'Ahorro de horas operativas',
      'Disminución de tareas repetitivas',
      'Estandarización del registro de información',
      'Mejora en la eficiencia del proceso'
    ],
    license: 'Power Automate Premium - 15 USD/mes por usuario',
    image: '/projects/santa-fe/san-cover.png',
    gallery: [
      '/projects/santa-fe/san-cover.png'
    ],
    featured: true
  },
  {
    id: 8,
    title: 'Trazabilidad de Solicitudes de Administración de Ventas',
    client: 'Sol Gas',
    category: 'Power Apps',
    description: 'Aplicación empresarial desarrollada para centralizar y dar trazabilidad a las solicitudes del área de Administración de Ventas, permitiendo registrar, consultar, actualizar y controlar información operativa desde una interfaz moderna en Power Apps.',
    solution: 'Se desarrolló una Canvas App en Power Apps utilizando PCF Controls, HTML, CSS y JavaScript para mejorar la experiencia de usuario y construir una interfaz más dinámica. La solución se conecta a Dataverse como base de datos principal y utiliza flujos de Power Automate instantáneos, automáticos y programados para gestionar procesos, conectarse a tablas maestras mediante operaciones CRUD, enviar notificaciones por Microsoft Teams y Outlook, y generar reportes en PDF para seguimiento y control operativo.',
    tools: [
      'Power Apps',
      'Power Automate',
      'PCF Controls',
      'HTML',
      'CSS',
      'JavaScript',
      'Dataverse'
    ],
    database: 'Dataverse',
    integrations: [
      'Microsoft Teams',
      'Outlook',
      'Reportes PDF',
      'Tablas maestras',
      'Flujos instantáneos',
      'Flujos automáticos',
      'Flujos programados',
      'Operaciones CRUD'
    ],
    benefits: [
      'Mejora en la experiencia de usuario',
      'Centralización de solicitudes de Administración de Ventas',
      'Trazabilidad del estado de cada solicitud',
      'Ahorro de tiempo en llenado de formatos',
      'Reducción de correos manuales',
      'Automatización de notificaciones',
      'Generación de reportes para seguimiento operativo'
    ],
    license: 'Power Apps Premium',
    image: '/projects/sol-gas/sol-form.png',
    gallery: [
      '/projects/sol-gas/sol-form.png',
      '/projects/sol-gas/sol-solic.png',
      '/projects/sol-gas/sol-load.png',
      '/projects/sol-gas/sol-list2.png',
      '/projects/sol-gas/sol-list.png',
      '/projects/sol-gas/sol-tic.png'
    ],
    featured: true
  },
  {
    id: 9,
    title: 'Sistema de Inventario Empresarial',
    client: 'XENDRA',
    category: 'Power Apps',
    description: 'Aplicación Canvas desarrollada en Power Apps y conectada a listas de SharePoint para administrar productos, entradas, salidas, stock actual, alertas y trazabilidad de movimientos de inventario.',
    solution: 'La solución está diseñada como una maqueta funcional con posibilidad de crecimiento futuro, priorizando una operación simple, visual y controlada. Permite registrar productos, controlar ingresos y salidas de almacén, visualizar el stock disponible, generar alertas por stock bajo y mantener un historial de movimientos para mejorar la trazabilidad operativa.',
    tools: [
      'Power Apps',
      'SharePoint',
      'Power Automate'
    ],
    database: 'SharePoint Lists',
    integrations: [
      'Power Automate',
      'Microsoft Teams',
      'Outlook',
      'Exportación a Excel',
      'Alertas de stock bajo'
    ],
    benefits: [
      'Control centralizado de productos',
      'Registro de entradas y salidas de almacén',
      'Visualización de stock actual',
      'Alertas automatizadas por stock bajo',
      'Trazabilidad de movimientos',
      'Reducción de errores manuales',
      'Mejor seguimiento operativo del inventario'
    ],
    license: 'Microsoft 365 / Office E3',
    image: '/projects/sis-inventario/si-cover.png',
    gallery: [
      '/projects/sis-inventario/si-cover.png',
      '/projects/sis-inventario/si-list.png'
    ],
    featured: false
  },
  {
    id: 10,
    title: 'Sistema Integral de Ventas y Facturación Electrónica Multirubro',
    client: 'XENDRA',
    category: 'Power Apps',
    description: 'Sistema empresarial diseñado para centralizar el registro de ventas o atenciones, clientes o pacientes, productos o servicios, pagos, numeración correlativa de comprobantes y emisión de documentos electrónicos. La solución está orientada a un modelo multirubro, permitiendo adaptarse a tiendas, empresas de servicios, clínicas, hospitales, laboratorios, farmacias u otras organizaciones que requieran emitir boletas, facturas y documentos relacionados.',
    solution: 'La solución se implementa sobre Power Apps como interfaz principal de usuario, SharePoint como repositorio de datos y Power Automate como motor de procesos, notificaciones e integración con API de facturación electrónica. El sistema permite registrar operaciones, administrar clientes o receptores, controlar productos y servicios, gestionar pagos, manejar series y correlativos, emitir comprobantes electrónicos y dar seguimiento al estado de envío, aceptación o rechazo de los documentos generados.',
    tools: [
      'Power Apps',
      'SharePoint',
      'Power Automate',
      'API',
      'Power BI'
    ],
    database: 'SharePoint',
    integrations: [
      'API de facturación electrónica',
      'Power Automate',
      'Outlook',
      'Microsoft Teams',
      'Generación de PDF',
      'Generación de XML',
      'Consulta de estado de comprobantes',
      'Power BI',
      'Exportación a Excel'
    ],
    benefits: [
      'Centralización del registro de ventas y atenciones',
      'Gestión de clientes, pacientes o receptores',
      'Control de productos y servicios',
      'Manejo de pagos y caja diaria',
      'Numeración automática de boletas y facturas',
      'Integración con facturación electrónica',
      'Seguimiento de comprobantes enviados, aceptados o rechazados',
      'Reducción de procesos manuales',
      'Adaptable a diferentes rubros empresariales'
    ],
    license: 'Microsoft 365 / Power Automate Premium según API de facturación',
    image: '/projects/facturacion/fa-dash.png',
    gallery: [
      '/projects/facturacion/fa-dash.png',
      '/projects/facturacion/fa-confi.png',
      '/projects/facturacion/fa-list.png'
    ],
    featured: true
  },
  {
    id: 11,
    title: 'Sistema de Tickets Help Desk',
    client: 'XENDRA',
    category: 'Power Apps',
    description: 'El Sistema de Tickets Help Desk con Power Apps es una solución orientada a registrar, clasificar, asignar, atender y cerrar incidentes o requerimientos internos dentro de un entorno corporativo. Su objetivo es ordenar la operación de soporte, reducir tiempos de respuesta y dejar trazabilidad completa de cada atención realizada.',
    solution: 'La solución se desarrolló como una Canvas App en Power Apps conectada a listas de SharePoint, permitiendo registrar tickets, clasificar solicitudes por área, categoría, prioridad y estado, asignar responsables, consultar bandejas operativas y mantener un historial de atención. La propuesta está orientada a escenarios de mesa de ayuda para áreas de TI, soporte funcional o servicios internos, donde se requiere visibilidad del proceso, control de SLA, seguimiento por estado y trazabilidad de cada atención.',
    tools: [
      'Power Apps',
      'SharePoint'
    ],
    database: 'SharePoint Lists',
    integrations: [
      'SharePoint Lists',
      'Catálogos SharePoint',
      'Adjuntos de SharePoint',
      'Historial de tickets',
      'Filtros y vistas operativas',
      'Control de estados y prioridades'
    ],
    benefits: [
      'Registro centralizado de incidentes y requerimientos',
      'Clasificación de tickets por área, categoría y prioridad',
      'Asignación de responsables de atención',
      'Seguimiento del estado de cada ticket',
      'Trazabilidad completa del proceso de soporte',
      'Mejor control de tiempos de respuesta',
      'Reducción de solicitudes gestionadas por correo o mensajes informales',
      'Visibilidad operativa para el equipo de soporte'
    ],
    license: 'Microsoft 365 / Office E3',
    image: '/projects/sis-tickets/sis-ti-dashboard.png',
    gallery: [
      '/projects/sis-tickets/sis-ti-dashboard.png',
      '/projects/sis-tickets/sis-ti-historial.png',
      '/projects/sis-tickets/sis-ti-bandeja.png',
      '/projects/sis-tickets/sis-ti-registro.png'
    ],
    featured: true
  },
  {
    id: 12,
    title: 'Sistema de Gestión Documental',
    client: 'XENDRA',
    category: 'Power Apps',
    description: 'Sistema de gestión documental diseñado para administrar documentos, su ciclo de vida, control de versiones, aprobaciones, firmas y el historial de acciones realizadas sobre cada documento.',
    solution: 'La solución se implementa mediante una Canvas App en Power Apps conectada a bibliotecas y listas de SharePoint, permitiendo registrar documentos, clasificar información por tipo, área, estado y responsable, controlar versiones, gestionar aprobaciones y mantener un historial de acciones realizadas sobre cada archivo. Power Automate se utiliza para automatizar flujos de revisión, aprobación, notificación y seguimiento, mientras que la integración con API puede aplicarse para procesos de firma electrónica, validación externa o generación de documentos según el alcance del proyecto.',
    tools: [
      'Power Apps',
      'SharePoint',
      'Power Automate'
    ],
    database: 'SharePoint Lists / Biblioteca de documentos',
    integrations: [
      'Biblioteca de documentos SharePoint',
      'SharePoint Lists',
      'Power Automate',
      'Aprobaciones automáticas',
      'Microsoft Teams',
      'Outlook',
      'Control de versiones',
      'Historial de acciones',
      'Generación de PDF'
    ],
    benefits: [
      'Centralización de documentos empresariales',
      'Control del ciclo de vida documental',
      'Seguimiento de versiones',
      'Gestión de aprobaciones',
      'Trazabilidad de acciones realizadas',
      'Reducción de documentos dispersos',
      'Mejora en el control y búsqueda de información',
      'Notificaciones automáticas a responsables',
      'Preparado para integración con firma electrónica'
    ],
    license: 'Microsoft 365 / Power Automate Premium según uso de API',
    image: '/projects/sis-documento/sis-doc-cover.png',
    gallery: [
      '/projects/sis-documento/sis-doc-cover.png'
    ],
    featured: true
  },
  {
    id: 13,
    title: 'Sistema de Reserva de Escritorios y Oficinas',
    client: 'XENDRA',
    category: 'Power Apps',
    description: 'Sistema de reserva de escritorios y oficinas desarrollado para administrar el uso de espacios físicos dentro de una empresa. Permite a los colaboradores consultar disponibilidad, reservar escritorios, salas u oficinas, registrar asistencia mediante check-in/check-out y mantener trazabilidad de la ocupación diaria, semanal o mensual en un entorno de trabajo híbrido.',
    solution: 'La solución Sistema de reserva y gestión de ocupación de escritorios y oficinas con Power Platform está diseñada para empresas que necesitan administrar sus espacios físicos en un contexto híbrido. Se implementa mediante una Canvas App en Power Apps conectada a SharePoint, permitiendo registrar oficinas, pisos, espacios, reservas, usuarios y reglas de uso. Power Automate puede utilizarse para enviar confirmaciones, recordatorios y alertas por Microsoft Teams u Outlook, además de apoyar procesos de check-in, check-out, no-show y seguimiento de ocupación.',
    tools: [
      'Power Apps',
      'SharePoint',
      'Power Automate',
      'API'
    ],
    database: 'SharePoint Lists',
    integrations: [
      'SharePoint',
      'Power Automate',
      'Microsoft Teams',
      'Outlook',
      'Calendario corporativo',
      'Check-in y check-out',
      'Validación por QR',
      'Notificaciones de reserva',
      'API de calendario',
      'Reportes de ocupación'
    ],
    benefits: [
      'Centralización de reservas de escritorios y oficinas',
      'Consulta de disponibilidad de espacios',
      'Mejor control de ocupación en oficinas híbridas',
      'Reducción de reservas manuales o duplicadas',
      'Registro de check-in y check-out',
      'Trazabilidad de uso de espacios',
      'Notificaciones automáticas a colaboradores',
      'Mejora en la planificación de espacios físicos',
      'Base preparada para reportes de ocupación'
    ],
    license: 'Microsoft 365 / Power Automate Premium según uso de API',
    image: '/projects/sis-escritorios/sis-desk.png',
    gallery: [
      '/projects/sis-escritorios/sis-desk.png'
    ],
    featured: true
  },
  {
    id: 14,
    title: 'Roster Personal',
    client: 'SGS',
    category: 'Power Apps',
    description: 'Aplicación desarrollada en Power Apps para facilitar la gestión y administración de la programación del personal dentro de la organización. Permite centralizar el registro de empleados, turnos, guardias, calendarios y disponibilidad operativa de manera visual y ordenada.',
    solution: 'La solución permite realizar de manera más ordenada y centralizada tareas relacionadas con el registro de empleados, asignación de turnos, consulta de calendarios, control de guardias y visualización de información de apoyo para la toma de decisiones. Se implementa mediante una Canvas App en Power Apps conectada a listas de SharePoint, con posibilidad de automatizar recordatorios, alertas y reportes mediante Power Automate.',
    tools: [
      'Power Apps',
      'SharePoint'
    ],
    database: 'SharePoint',
    integrations: [
      'SharePoint Lists',
      'Outlook',
      'Calendario de turnos',
      'notificaciones'
    ],
    benefits: [
      'Centralización de la programación del personal',
      'Registro ordenado de empleados y cargos',
      'Asignación visual de turnos y guardias',
      'Consulta rápida del calendario mensual',
      'Mejor control de disponibilidad operativa',
      'Reducción de archivos manuales o dispersos',
      'Apoyo a la toma de decisiones',
      'Base preparada para alertas y reportes automáticos'
    ],
    license: 'Microsoft 365 / Power Automate según automatizaciones',
    image: '/projects/SGS/sgs-login.png',
    gallery: [
      '/projects/SGS/sgs-login.png',
      '/projects/SGS/sgs-calen.png',
      '/projects/SGS/sgs-cua.png',
      '/projects/SGS/sgs-kpi.png'
    ],
    featured: true
  },
  {
    id: 15,
    title: 'Registro de Facturas con Tipo de Cambio SUNAT',
    client: 'BIOMONT',
    category: 'Power Apps',
    description: 'Biomont requería digitalizar y automatizar el registro de facturas de proveedores, proceso que anteriormente podía depender de hojas de cálculo, cálculos manuales del tipo de cambio y consolidaciones posteriores por parte del equipo de finanzas. La solución centraliza el registro de facturas, calcula el monto convertido a soles mediante el tipo de cambio SUNAT y permite analizar la información mediante un reporte en Power BI.',
    solution: 'Se diseñó e implementó una solución End to End usando Microsoft Power Platform para registrar facturas de proveedores, obtener automáticamente el tipo de cambio SUNAT según la fecha de contabilización, calcular el monto convertido a soles, almacenar la información en Dataverse, enviar notificaciones diarias y analizar los datos mediante Power BI. La solución integra Power Apps como interfaz de registro, Power Automate como motor de automatización, API SUNAT para consulta del tipo de cambio, Dataverse como base de datos central y Power BI para la visualización de indicadores financieros.',
    tools: [
      'Power Apps',
      'Power Automate',
      'Dataverse',
      'API SUNAT',
      'Power BI',
      'MCP'
    ],
    database: 'Dataverse',
    integrations: [
      'API SUNAT',
      'Power Automate',
      'Dataverse',
      'Power BI',
      'MCP',
      'Outlook',
      'Consulta automática de tipo de cambio',
      'Notificaciones diarias',
      'Reporte financiero',
      'Cálculo automático en soles'
    ],
    benefits: [
      'Digitalización del registro de facturas de proveedores',
      'Automatización del tipo de cambio SUNAT',
      'Cálculo automático del monto convertido a soles',
      'Centralización de información financiera en Dataverse',
      'Reducción de cálculos manuales',
      'Disminución de errores operativos',
      'Notificaciones diarias al equipo responsable',
      'Visualización de indicadores mediante Power BI',
      'Trazabilidad del proceso de registro financiero',
      'Solución End to End con Power Platform'
    ],
    license: 'Power Apps Premium / Power Automate Premium / Power BI según entorno',
    image: '/projects/sis-biomont/bio-login.png',
    gallery: [
      '/projects/sis-biomont/bio-load.png',
      '/projects/sis-biomont/bio-login.png',
      '/projects/sis-biomont/bio-form.png',
      '/projects/sis-biomont/bio-bandeja.png'

    ],
    featured: true
  },
  {
    id: 16,
    title: 'HR Benefits Agent',
    client: 'ASTRA',
    category: 'Agent',
    description: 'Agente conversacional desarrollado en Copilot Studio para centralizar el conocimiento relacionado con beneficios de recursos humanos. Permite a los empleados realizar consultas sobre salud, seguros, planes 401(k), reclamaciones, inscripción, contactos, elegibilidad y políticas de licencia médica, utilizando una experiencia guiada basada en lenguaje natural.',
    solution: 'La solución se diseñó como un agente conversacional autónomo en Copilot Studio, estructurado mediante temas funcionales organizados por dominios de conocimiento. El agente utiliza documentación oficial de RR. HH. como fuente de conocimiento, incluyendo Benefits Guide 2026, Employee Handbook, Summary of Benefits, SharePoint / HR Portal y directorios de proveedores. Además, incorpora componentes reutilizables como AskUnionStatus para validar y almacenar el estado sindical del empleado en Global.UnionStatus, permitiendo personalizar respuestas y reutilizar información durante la conversación sin duplicar lógica en otros temas.',
    tools: [
      'Copilot Studio',
      'PDF Knowledge Source',
      'SharePoint / HR Portal',
      'Generative Answers',
      'Variables globales',
      'Topic orchestration'
    ],
    database: 'PDF / Fuentes documentales de RR. HH.',
    integrations: [
      'Copilot Studio',
      'PDF como fuente de conocimiento',
      'Benefits Guide 2026',
      'Employee Handbook',
      'Summary of Benefits',
      'SharePoint / HR Portal',
      'Directorios de proveedores',
      'Temas conversacionales',
      'Variables globales',
      'Global.UnionStatus',
      'Fallback topic',
      'Topic-level knowledge sources'
    ],
    benefits: [
      'Centralización de información de beneficios de RR. HH.',
      'Atención conversacional para empleados',
      'Respuesta a preguntas frecuentes sobre beneficios',
      'Guía sobre procesos administrativos como claims, enrollment y leave policies',
      'Explicación de conceptos de salud, seguros y 401(k)',
      'Reducción de consultas repetitivas al equipo de RR. HH.',
      'Respuestas consistentes basadas en fuentes oficiales',
      'Organización del conocimiento por dominios funcionales',
      'Reutilización de datos mediante variables globales',
      'Base escalable para nuevos temas conversacionales'
    ],
    license: 'Copilot Studio',
    image: '/projects/hr-benefits-agent/hr-benefits-cover.png',
    gallery: [
      '/projects/hr-benefits-agent/hr-benefits-cover.png'
    ],
    featured: true
  },

  {
    id: 17,
    title: 'Automatización de Comité Gerencial y EEFF',
    client: 'BIGMOND',
    category: 'Power Automate',
    description: 'Automatización diseñada para preparar el comité gerencial mensual mediante la recopilación de reportes por área, consolidación de información financiera y generación de documentos ejecutivos a partir de datos almacenados en diferentes archivos. La solución busca reducir el trabajo manual previo al comité, ordenar la entrega de información y mejorar la preparación de decisiones gerenciales.',
    solution: 'La solución se implementó combinando Power Automate Cloud, Power Automate Desktop, AI Builder y Python. Power Automate Cloud orquesta el proceso mensual, gestiona la recepción de reportes, centraliza archivos en SharePoint y envía comunicaciones por Outlook. Power Automate Desktop apoya la interacción con archivos o plantillas locales cuando el proceso requiere automatización de escritorio. AI Builder permite analizar o extraer información relevante desde documentos, mientras que Python procesa los datos consolidados y genera un PDF ejecutivo utilizando una plantilla predefinida. El resultado permite preparar información clave para el comité, incluyendo resumen ejecutivo, datos financieros, reportes por área y decisiones pendientes.',
    tools: [
      'Power Automate Cloud',
      'Power Automate Desktop',
      'AI Builder',
      'Python',
      'SharePoint',
      'Outlook'
    ],
    database: 'SharePoint / Archivos estructurados',
    integrations: [
      'Power Automate Cloud',
      'Power Automate Desktop',
      'AI Builder',
      'Python',
      'SharePoint',
      'Outlook',
      'Plantilla PDF',
      'Procesamiento de archivos',
      'Consolidación de reportes',
      'Generación automática de documento ejecutivo'
    ],
    benefits: [
      'Automatización de la preparación del comité gerencial',
      'Centralización de reportes por área',
      'Consolidación de información desde diferentes archivos',
      'Procesamiento de Estados Financieros',
      'Reducción de trabajo manual previo al comité',
      'Generación automática de PDF ejecutivo',
      'Mejor organización de decisiones pendientes',
      'Envío automático de comunicaciones por Outlook',
      'Mayor trazabilidad del proceso mensual',
      'Base preparada para generación futura de PPT, actas y acuerdos'
    ],
    license: 'Power Automate Premium / AI Builder según capacidad requerida',
    image: '/projects/comite-gerencial-eeff/comite-cover.png',
    gallery: [
      '/projects/comite-gerencial-eeff/comite-cover.png'
    ],
    featured: true
  },
  {
    id: 18,
    title: 'TimeTrack - Control de Horas y Actividades',
    client: 'ASTRA',
    category: 'Power Apps',
    description: 'TimeTrack es una aplicación diseñada para el registro, control y validación centralizada del tiempo laboral de los colaboradores, permitiendo digitalizar y optimizar procesos que anteriormente se realizaban de forma manual o poco estructurada. La solución facilita el seguimiento de horas trabajadas y actividades realizadas en los diferentes proyectos de la organización.',
    solution: 'La implementación de TimeTrack surgió como respuesta a la necesidad de mejorar la gestión y control del tiempo laboral, debido a que el modelo anterior presentaba limitaciones en trazabilidad, disponibilidad de información, validación oportuna de horas y eficiencia operativa. Se desarrolló una Canvas App en Power Apps conectada a SharePoint Lists para registrar horas, actividades, proyectos y validaciones. Power Automate se utilizó para enviar notificaciones por Outlook, apoyar el seguimiento del proceso y mejorar la comunicación entre colaboradores y responsables.',
    tools: [
      'Power Apps',
      'Power Automate',
      'SharePoint',
      'Outlook'
    ],
    database: 'SharePoint Lists',
    integrations: [
      'SharePoint Lists',
      'Power Automate',
      'Outlook',
      'Notificaciones automáticas',
      'Registro de horas trabajadas',
      'Seguimiento de actividades',
      'Validación de tiempos',
      'Control por proyecto'
    ],
    benefits: [
      'Centralización del registro de horas trabajadas',
      'Seguimiento de actividades por proyecto',
      'Digitalización de procesos manuales',
      'Reducción de inconsistencias en registros de tiempo',
      'Mejor trazabilidad de horas y actividades',
      'Validación oportuna de información laboral',
      'Mejora en la eficiencia operativa',
      'Notificaciones automáticas por Outlook',
      'Mayor disponibilidad de información para responsables'
    ],
    license: 'Microsoft 365 / Power Automate según entorno',
    image: '/projects/timetrack/timetrack-cover.png',
    gallery: [
      '/projects/timetrack/timetrack-cover.png',
      '/projects/timetrack/time_load.png',
      '/projects/timetrack/time_cat.png',
      '/projects/timetrack/time_regis.png',
      '/projects/timetrack/time_result.png',
      '/projects/timetrack/time_asig.png'

    ],
    featured: true
  },

  {
    id: 19,
    title: 'VISIPLAN - Gestión de Visitas a Planta',
    client: 'ARCA Continental Lindley',
    category: 'Aplicación Web',
    description: 'VISIPLAN es una solución web diseñada para centralizar la solicitud, programación, administración y seguimiento de visitas a planta. El sistema permite gestionar solicitudes externas de visitantes, administrar calendarios de visita, controlar instituciones, plantas, usuarios, roles, permisos, auditoría y generar reportes operativos relacionados con visitas, visitantes, encuestas y objetivos.',
    solution: 'La solución contempla un portal público para que los usuarios externos puedan solicitar visitas a planta, cargar documentación institucional, seleccionar modalidad de visita, planta y fecha tentativa. La información registrada fluye hacia una bandeja interna dentro de VISIPLAN, donde los usuarios autorizados pueden revisar, aprobar, rechazar, programar, editar o cancelar visitas. Además, el sistema incorpora módulos de mantenimiento, seguridad, auditoría, reportes, calendario de visitas, gestión de imágenes de visitas y una sección pública para recordar visitas mediante galerías compartibles en redes sociales.',
    tools: [
      'Aplicación Web',
      'OutSystems',
      'Azure Active Directory',
      'HTTPS',
      'Correo electrónico',
      'Reportes PDF / Excel'
    ],
    database: 'Base de datos transaccional / Repositorio documental',
    integrations: [
      'Portal público de solicitud de visitas',
      'Autenticación con Azure Active Directory',
      'Carga de archivos PDF y DOCX',
      'Notificaciones por correo electrónico',
      'Bandeja interna de solicitudes',
      'Calendario de visitas',
      'Gestión de roles y permisos',
      'Auditoría de acciones del sistema',
      'Galería de imágenes de visitas',
      'Compartir en Facebook, LinkedIn y WhatsApp',
      'Exportación de reportes en PDF y Excel',
      'Catálogo de encuestas asociado a Microsoft Forms'
    ],
    benefits: [
      'Centralización de solicitudes de visitas a planta',
      'Digitalización del proceso de registro de visitantes',
      'Mejor control de instituciones, plantas y calendarios',
      'Validación de datos obligatorios y documentos adjuntos',
      'Trazabilidad del estado de cada solicitud',
      'Gestión de aprobaciones y rechazos de visitas',
      'Administración de usuarios, roles y permisos',
      'Auditoría de acciones realizadas en el sistema',
      'Generación de reportes operativos para seguimiento',
      'Mejora en la experiencia del visitante mediante portal público',
      'Disponibilidad de galería pública para recordar visitas',
      'Reducción del manejo manual de solicitudes y archivos'
    ],
    license: 'Licenciamiento según plataforma web / OutSystems / Azure',
    image: '/projects/visiplan/visiplan-cover.png',
    gallery: [
      '/projects/visiplan/visiplan-cover.png',
      '/projects/visiplan/visiplan-01.png',
      '/projects/visiplan/consulta.png',
      '/projects/visiplan/reporte_men.png',
      '/projects/visiplan/vi_3.png',
      '/projects/visiplan/vi_4.png',
      '/projects/visiplan/vi_5.png'
    ],
    featured: true
  }
];
