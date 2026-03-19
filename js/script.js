/* -------------------------------------------------------------------------- */
/* LÓGICA DE TRADUCCIÓN                             */
/* -------------------------------------------------------------------------- */
console.log("SCRIPT_LOADED");
const translations = {
  es: {
    "nav_map": "Mapa Interactivo",
    "nav_home": "Inicio",
    "nav_intro": "Introducción",
    "nav_problem": "Planteamiento del Problema",
    "nav_geo": "Mapa de Ubicación Geográfica",
    "nav_obj": "Objetivos",
    "nav_desc_stats": "Estadística Descriptiva",
    "nav_methodology": "Metodología",
    "nav_vars_table": "Tablas de Variables",
    "nav_vars": "Variables",
    "nav_inf_stats": "Estadística Inferencial",
    "nav_reg_models": "Modelos de Regresión",
    "nav_ml": "Machine Learning",
    "nav_more": "Más",
    "nav_tools": "Infraestructura",
    "nav_about": "Sobre Nosotros",
    "hero_title_centered": "ANÁLISIS ESTADÍSTICO DE PLANTAS SOLARES A NIVEL MUNDIAL",
    "hero_lead_centered": "Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio",
    "motivaciones_text": "Como estudiantes de la Universidad Central del Ecuador, desarrollamos este proyecto con el propósito de aplicar la estadística como una herramienta fundamental en el análisis de datos. Nuestro objetivo es no solo interpretar la información, sino también destacar la relevancia de la estadística en la toma de decisiones informadas dentro del ámbito profesional relacionado con nuestra carrera.",
    "footer_copy": "COPYRIGHT © 2026, GRUPO 1 - ESTADÍSTICA Y PROBABILIDAD.",
    "footer_rights": "TODOS LOS DERECHOS RESERVADOS.",
    "chat_title": "Asistente Solar 🤖",
    "chat_send": "Enviar",
    "important_title": "¡IMPORTANTE!",
    "important_text": "Este proyecto tiene un carácter exclusivamente académico y se encuentra en continuo desarrollo. Los datos y análisis presentados se utilizan únicamente con fines educativos.",
    "mision_vision_title": "MISIÓN - VISIÓN",
    "mision_title": "Misión",
    "mision_text": "Aplicar métodos estadísticos para identificar y cuantificar los factores que determinan la eficiencia real de las plantas solares a nivel mundial.",
    "vision_title": "Visión",
    "vision_text": "Convertirnos en un análisis estadístico clave que revele las verdaderas tendencias y el potencial global de la energía solar.",
    "motivaciones_title": "MOTIVACIONES DEL PROYECTO",
    "map_title": "MAPA INTERACTIVO",
    "about_intro_title": "INTRODUCCIÓN",
    "about_problem_title": "PLANTEAMIENTO DEL PROBLEMA",
    "about_problem_p1": "El análisis de las plantas solares a nivel mundial es importante porque permite medir su eficiencia real y entender qué factores afectan su producción de energía. Al estudiar estos datos, se pueden identificar las mejores condiciones para aprovechar el sol y reducir los fallos en la generación eléctrica.",
    "about_problem_p2": "El dataset utilizado para este proyecto se puede obtener desde el <a href='https://github.com/cimejia/solarPV/' target='_blank' class='bold-text'>repositorio del proyecto</a>. Este dataset es el resultado de la colaboración entre nuestro equipo de trabajo y el Departamento de Tecnología de Computación de la Universidad de Alicante, España, a partir de la información obtenida de las plataformas Kaggle, NASA Power Data, Global Solar Atlas, Global Wind Atlas y Copernicus cumpliendo con los criterios establecidos para el proyecto.",
    "about_map_title": "MAPA DE UBICACIÓN GEOGRÁFICA",
    "about_obj_title": "OBJETIVOS",
    "about_obj_gen_header": "Objetivo General:",
    "about_obj_gen_text": "Aplicar la estadística y Machine learning para examinar las plantas solares a nivel mundial, mediante el uso de herramientas computacionales.",
    "about_obj_spec_header": "Objetivos Específicos:",
    "about_obj_spec_1": "Conocer la situación actual de las plantas solares a nivel mundial a través de sus características más importantes y medidas estadísticas.",
    "about_obj_spec_2": "Emplear un modelo de probabilidad para establecer conclusiones sobre las plantas solares en el mundo a partir de los resultados de muestra.",
    "about_obj_spec_3": "Deducir relaciones entre variables de las plantas solares a nivel mundial con el fin de realizar estimaciones.",
    "met_title": "METODOLOGÍA",
    "pop_title": "POBLACIÓN",
    "textual": "Textual:",
    "pop_text": "Todas la plantas solares a nivel mundial.",
    "symbolic": "Simbólico:",
    "ind_title": "INDIVIDUO",
    "ind_text": "Cada planta solar a nivel mundial.",
    "samp_title": "MUESTRA",
    "samp_text": "Un subconjunto representativo de plantas solares a nivel mundial que abarca las plantas solares registradas en la base de datos de Global Energy Monitor.",
    "case_title": "CASO DE ESTUDIO",
    "case_text": "Cada planta solar registrada, independientemente de su estado operativo actual.",
    "qualitative_vars": "Variables Cualitativas",
    "nominals": "Nominales",
    "ordinals": "Ordinales",
    "cap_plant_name": "Nombre de la Planta",
    "cap_country": "País",
    "cap_curvature": "Tipo de Curvatura",
    "cap_op_status": "Estado Operacional",
    "cap_slope": "Tipo de Pendiente",
    "cap_aspect": "Tipo de Aspecto",
    "cap_aptitude": "Tipo de Aptitud Solar",
    "cap_size": "Tamaño",
    "cap_wind_dir": "Dirección del viento predominante",
    "quant_vars": "Variables Cuantitativas",
    "discretes": "Discretas",
    "continuous": "Continuas",
    "cap_aptitude_rounded": "Aptitud Solar Redondeada",
    "cap_lat": "Latitud",
    "cap_long": "Longitud",
    "cap_elev": "Elevación",
    "cap_area": "Área",
    "cap_slope": "Pendiente",
    "cap_curvature": "Curvatura",
    "cap_aspect": "Aspecto",
    "cap_ghi": "GHI",
    "cap_aptitude": "Aptitud Solar",
    "cap_humidity": "Humedad",
    "cap_wind_speed": "Velocidad del Viento",
    "cap_wind_dir": "Dirección del Viento",
    "cap_temp": "Temperatura Ambiente",
    "cap_tilt": "Inclinación Óptima",
    "cap_power": "Potencial Fotovoltaico",
    "cap_capacity": "Capacidad",
    "cap_dist_road": "Distancia a la Vía",
    "table_vars_title": "TABLA DE VARIABLES",
    "open_doc": "Abrir Documento Completo",
    "table_indicators_title": "TABLA DE INDICADORES",
    "vars_title": "VARIABLES",
    "ds_title": "ESTADÍSTICA DESCRIPTIVA",
    "is_qual_vars": "Variables Cualitativas",
    "is_title": "ESTADÍSTICA INFERENCIAL",
    "reg_models_title": "MODELOS DE REGRESIÓN",
    "simple_reg_title": "REGRESIÓN SIMPLE",
    "reg_linear": "Regresión Lineal",
    "reg_potential": "Regresión Potencial",
    "reg_exponential": "Regresión Exponencial",
    "reg_logarithmic": "Regresión Logarítmica",
    "reg_polynomial": "Regresión Polinómica",
    "multiple_reg_title": "REGRESIÓN MÚLTIPLE",
    "reg_multiple_3d": "Regresión Múltiple 3D",
    "ml_title": "MACHINE LEARNING",
    "ml_intro": "Uso de Machine Learning para la Predicción de Potencial Fotovoltaico (MWh/año) y Clasificación de Aptitud Solar Global",
    "ml_problem_title": "PLANTEAMIENTO DEL PROBLEMA",
    "ml_problem_text": "A nivel mundial, la expansión solar es clave para la transición energética; sin embargo, la variabilidad geográfica dificulta evaluar la viabilidad de nuevos proyectos. Ante este panorama, el análisis estadístico y el Machine Learning permiten procesar datos históricos geoespaciales para predecir variables críticas como la aptitud solar y el potencial fotovoltaico (MWh/año). El uso de estos modelos busca optimizar la planificación técnica, aplicando este análisis global en un caso de estudio local centrado en las facultades de FIGEMPA y Ciencias Químicas.",
    "ml_obj_title": "OBJETIVO",
    "ml_obj_text": "Desarrollar un modelo de Machine Learning basado en redes neuronales que permita clasificar el nivel de aptitud y predecir la generación energética a partir de datos climáticos y operativos, con el fin de proporcionar una herramienta de alta precisión para la toma de decisiones en proyectos renovables.",
    "ml_method_title": "METODOLOGÍA",
    "ml_model_title": "MODELO",
    "ml_colab_header": "Explora en Google Colab",
    "ml_colab_desc": "Haz clic en los siguientes botones para acceder a los cuadernos interactivos.",
    "ml_notebook_reg": "Notebook de Regresión",
    "ml_notebook_class": "Notebook de Clasificación",
    "ml_conclusion_title": "CONCLUSIÓN",
    "ml_conclusion_text": "Se ha logrado implementar un modelo de Machine Learning capaz de clasificar el nivel de aptitud y predecir el potencial fotovoltaico (MWh/año) a partir de variables geoespaciales y climáticas globales. Este enfoque no solo optimiza la precisión en la evaluación de recursos renovables para el caso de estudio de la FIGEMPA y la Facultad de Ciencias Químicas, sino que también posee una alta capacidad de escalabilidad para analizar la viabilidad energética en cualquier región del mundo mediante el ajuste del conjunto de datos de entrada.",
    "about_us_title": "Sobre Nosotros",
    "about_p1": "Somos estudiantes de segundo semestre de la Universidad Central del Ecuador, pertenecientes a la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA), en la carrera de Ingeniería en Petróleos. En el marco de la asignatura de Estadística, presentamos este proyecto con el objetivo de ofrecer información clara, pertinente y accesible para quienes se interesan en esta área del conocimiento.",
    "about_p2": "Como futuros profesionales, aspiramos a formarnos como ingenieros comprometidos, preparados y apasionados, capaces de contribuir al desarrollo de una industria que avanza de manera constante gracias a la innovación tecnológica y al estudio científico de las energías sostenibles.",
    "about_p3": "Confiamos en el valor del aprendizaje conjunto y en la importancia de compartir saberes. Por ello, este trabajo no solo constituye un componente de nuestra formación académica, sino también un aporte para fomentar una comprensión más sólida de un campo tan dinámico y relevante en el contexto actual.",
    "team_title": "Nuestro Equipo",
    "team_intro": "A continuación tienes disponible los curriculum vitae de cada uno de los integrantes que conforman este grupo de trabajo.",
    "uc_title": "En construcción",
    "tools_title": "RECURSOS E INFRAESTRUCTURA",
    "tools_sub": "Ecosistema operativo para el procesamiento de datos geoespaciales y modelado estadístico.",
    "tools_list_title": "HERRAMIENTAS UTILIZADAS",
    "bot_default": "No estoy seguro de cómo responder eso. Puedes escribirme: 'proyecto', 'variables', 'metodología', 'regresión', 'machine learning', 'herramientas' o 'contacto'.",
    "bot_welcome": "Hola! Soy el Asistente Solar 🤖. ¿Qué deseas consultar hoy?",
    "bot_resp_var": "Las variables incluyen <b>cualitativas</b> y <b>cuantitativas</b>. Puedes verlas en detalle aquí: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>Ver Tabla de Variables</b></a>",
    "bot_resp_met": "La metodología se basa en la <b>recolección de datos</b>. Detalles completos en la sección: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>Ver Metodología</b></a>",
    "bot_resp_reg": "Aplicamos regresiones <b>simples</b> y <b>múltiple 3D</b>. Accede a los resultados aquí: <a href='#' onclick='document.getElementById(\"regression-models-link\").click(); return false;'><b>Ver Modelos</b></a>",
    "bot_resp_team": "El equipo es: <b>Gualan, Miles, Neira, Ramírez y Sarmiento</b>. <a href='#' onclick='document.getElementById(\"about-us-link\").click(); return false;'><b>Sobre Nosotros</b></a>",
    "bot_resp_tools": "Usamos un ecosistema de <b>RStudio, Colab, LaTeX, QGIS, ArcGIS</b>. <a href='#' onclick='document.getElementById(\"tools-link\").click(); return false;'><b>Ver herramientas</b></a>",
    "bot_resp_ml": "Hacemos <b>predicción de potencial fotovoltaico</b> y <b>clasificación de aptitud solar</b>.<br><br><a href='#' onclick='document.getElementById(\"machine-learning-link\").click(); return false;'><b>Ir al apartado de Machine Learning</b></a><br><br>O visita nuestros Notebooks:<br><a href='https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing' target='_blank'><b>📓 Cuaderno de Regresión</b></a><br><a href='https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing' target='_blank'><b>📓 Cuaderno de Clasificación</b></a>",
    "bot_resp_map": "Puedes ver el mapa interactivo aquí: <a href='#' onclick='document.getElementById(\"interactive-map-link\").click(); return false;'><b>Ir al Mapa</b></a>",
    "bot_resp_intro": "Este proyecto analiza <b>plantas solares a nivel mundial</b>. <a href='#' onclick='document.getElementById(\"about-proyect-link\").click(); return false;'><b>Ver Introducción</b></a>",
    "bot_contact": "¡Claro! Puedes escribirnos directamente a nuestro WhatsApp: <a href='https://wa.me/593994537842' target='_blank'><b>💬 Hablar con el equipo</b></a>",
    "btn_intro": "Sobre el Proyecto",
    "btn_vars": "Variables",
    "btn_ml": "Machine Learning",
    "btn_contact": "Hablar con el equipo",
    "tools_description": "Para el desarrollo de nuestro proyecto, empleamos un ecosistema tecnológico avanzado que integra plataformas de análisis y desarrollo como Posit Cloud, RStudio, Google Colab, VS Code y LaTeX, junto con lenguajes clave como HTML5, CSS y JavaScript. Complementamos este flujo de trabajo accediendo a datos científicos de Kaggle, NASA, Copernicus, OpenTopography y el servicio de cambio climático de ECMWF, mientras que para el análisis geoespacial y la identificación de derrames utilizamos QGIS, ArcGIS y Google Earth. Finalmente, aseguramos la productividad y difusión de resultados mediante herramientas colaborativas como GitHub, Google Drive, RPubs, Microsoft Teams y la suite de Office, impulsando así un enfoque moderno, eficiente y de alta precisión.",
    "pop_symbolic": "U = { x | x ∈ Plantas Solares ∧ Ubicación(x) ∈ \"Mundo\" }",
    "ind_symbolic": "X<sub>i</sub> donde i = 1, 2, 3, 4, ..., +∞",
    "samp_symbolic": "M={ x | x ∈ Plantas solares ∧ Ubicación(x) ∈ \"Mundo\" ∧ Entidad(x) ∈ \"Global Energy Monitor\" }",
    "case_symbolic": "X<sub>i</sub> donde i = 1, 2, 3, 4, ..., 58978",
    "map_eyebrow": "Visualización Global",
    "map_sub": "Explora la distribución mundial de plantas solares fotovoltaicas, filtra por estado operativo e inspecciona datos individuales de cada instalación.",
    "map_stat_plants": "plantas registradas",
    "map_stat_coverage": "Cobertura <strong>mundial</strong>",
    "map_stat_filters": "Filtros por <strong>estado operativo</strong>",
    "map_source": "Datos obtenidos de Global Energy Monitor · Procesados con QGIS",
    "about_intro_sub": "Contexto del proyecto, planteamiento del problema, mapa geográfico y objetivos del análisis estadístico.",
    "ds_sub": "Metodología, tabla de variables, indicadores y distribución de cada variable cualitativa y cuantitativa del dataset.",
    "is_sub": "Pruebas de hipótesis y análisis inferencial aplicado a las variables cualitativas y cuantitativas de las plantas solares.",
    "reg_sub": "Regresiones simples (lineal, potencial, exponencial, logarítmica y polinómica) y regresión múltiple 3D entre variables del dataset.",
    "about_us_sub": "Estudiantes de Ingeniería en Petróleos de la FIGEMPA – Universidad Central del Ecuador.",
    "chip_reg": "Regresión",
    "highlights_title_1": "Resultados Globales de MLRS",
    "highlights_title_2": "Alcance e Impacto del Proyecto",
    "hl_stat_1_val": "58,978",
    "hl_stat_1_lab": "Registros de Concesiones",
    "hl_stat_2_val": "5",
    "hl_stat_2_lab": "Modelos de Regresión",
    "hl_stat_3_val": "ML",
    "hl_stat_3_lab": "Predicción Avanzada",
    "hl_stat_4_val": "R",
    "hl_stat_4_lab": "Computación Científica",
    "hl_stat_5_val": "2026",
    "hl_stat_5_lab": "Año del Proyecto",
    "hl_stat_6_val": "Global",
    "hl_stat_6_lab": "Integración MLRS",
    "hl_stat_7_val": "12+",
    "hl_stat_7_lab": "Herramientas Geoespaciales",
    "hl_stat_8_val": "100%",
    "hl_stat_8_lab": "Enfoque Académico",
    "vars_landing_eyebrow": "Categorización de Datos",
    "vars_landing_title": "Nuestros Tipos de Variables",
    "vars_landing_lead": "Explora la clasificación técnica del dataset de plantas solares, dividida en categorías cualitativas y cuantitativas para un análisis preciso.",
    "vars_qual_title": "Variables Cualitativas",
    "vars_quant_title": "Variables Cuantitativas",
    "view_more": "Ver Detalles"
  },

  en: {
    "nav_map": "Interactive Map",
    "nav_home": "Home",
    "nav_intro": "Introduction",
    "nav_problem": "Problem Statement",
    "nav_geo": "Geographical Location Map",
    "nav_obj": "Objectives",
    "nav_desc_stats": "Descriptive Statistics",
    "nav_methodology": "Methodology",
    "nav_vars_table": "Variable Tables",
    "nav_vars": "Variables",
    "nav_inf_stats": "Inferential Statistics",
    "nav_reg_models": "Regression Models",
    "nav_ml": "Machine Learning",
    "nav_more": "More",
    "nav_tools": "Infrastructure",
    "nav_about": "About Us",
    "hero_title_centered": "STATISTICAL ANALYSIS OF SOLAR PLANTS WORLDWIDE",
    "hero_lead_centered": "Statistical data analysis, applying descriptive and inferential methods using R language in RStudio",
    "motivaciones_text": "As students of the Central University of Ecuador, we developed this project to apply statistics as a fundamental tool in data analysis. Our goal is not only to interpret information but also to highlight the relevance of statistics in informed decision-making within the professional field related to our career.",
    "footer_copy": "COPYRIGHT © 2026, GROUP 1 - STATISTICS AND PROBABILITY.",
    "footer_rights": "ALL RIGHTS RESERVED.",
    "chat_title": "Solar Assistant 🤖",
    "chat_send": "Send",
    "important_title": "IMPORTANT!",
    "important_text": "This project is exclusively academic and is under continuous development. The data and analysis presented are used solely for educational purposes.",
    "mision_vision_title": "MISSION - VISION",
    "mision_title": "Mission",
    "mision_text": "Apply statistical methods to identify and quantify the factors that determine the real efficiency of solar plants worldwide.",
    "vision_title": "Vision",
    "vision_text": "To become a key statistical analysis revealing true trends and the global potential of solar energy.",
    "motivaciones_title": "PROJECT MOTIVATIONS",
    "map_title": "INTERACTIVE MAP",
    "about_intro_title": "INTRODUCTION",
    "about_problem_title": "PROBLEM STATEMENT",
    "about_problem_p1": "Analyzing solar power plants worldwide is important because it allows us to measure their actual efficiency and understand which factors affect their energy production. By studying this data, we can identify the best conditions for harnessing solar energy and reducing failures in electricity generation.",
    "about_problem_p2": "The dataset used for this project can be obtained from the <a href='https://github.com/cimejia/solarPV/' target='_blank' class='bold-text'>project repository</a>. This dataset is the result of collaboration between our team and the Department of Computer Technology at the University of Alicante, Spain, using information obtained from the Kaggle, NASA Power Data, Global Solar Atlas, Global Wind Atlas, and Copernicus platforms, meeting the established criteria for the project.",
    "about_map_title": "GEOGRAPHIC LOCATION MAP",
    "about_obj_title": "OBJECTIVES",
    "about_obj_gen_header": "General Objective:",
    "about_obj_gen_text": "To apply statistics and machine learning to examine solar power plants worldwide, using computational tools.",
    "about_obj_spec_header": "Specific Objectives:",
    "about_obj_spec_1": "To understand the current state of solar power plants worldwide through their most important characteristics and statistical measures.",
    "about_obj_spec_2": "To use a probability model to draw conclusions about solar power plants worldwide based on sample results.",
    "about_obj_spec_3": "To deduce relationships between variables of solar power plants worldwide in order to make estimations.",
    "met_title": "METHODOLOGY",
    "pop_title": "POPULATION",
    "textual": "Textual:",
    "pop_text": "All solar plants worldwide.",
    "symbolic": "Symbolic:",
    "ind_title": "INDIVIDUAL",
    "ind_text": "Each solar plant worldwide.",
    "samp_title": "SAMPLE",
    "samp_text": "A representative subset of solar plants worldwide that includes the solar plants registered in the Global Energy Monitor database.",
    "case_title": "CASE STUDY",
    "case_text": "Each registered solar plant, regardless of its current operational status.",
    "qualitative_vars": "Qualitative Variables",
    "nominals": "Nominals",
    "ordinals": "Ordinals",
    "cap_plant_name": "Plant Name",
    "cap_country": "Country",
    "cap_curvature": "Curvature Type",
    "cap_op_status": "Operational Status",
    "cap_slope": "Slope Type",
    "cap_aspect": "Aspect Type",
    "cap_aptitude": "Solar Aptitude Type",
    "cap_size": "Size",
    "cap_wind_dir": "Predominant Wind Direction",
    "quant_vars": "Quantitative Variables",
    "discretes": "Discrete",
    "continuous": "Continuous",
    "cap_aptitude_rounded": "Rounded Solar Aptitude",
    "cap_lat": "Latitude",
    "cap_long": "Longitude",
    "cap_elev": "Elevation",
    "cap_area": "Area",
    "cap_slope": "Slope",
    "cap_curvature": "Curvature",
    "cap_aspect": "Aspect",
    "cap_ghi": "GHI",
    "cap_aptitude": "Solar Aptitude",
    "cap_humidity": "Humidity",
    "cap_wind_speed": "Wind Speed",
    "cap_wind_dir": "Wind Direction",
    "cap_temp": "Ambient Temperature",
    "cap_tilt": "Optimal Tilt",
    "cap_power": "Photovoltaic Potential",
    "cap_capacity": "Capacity",
    "cap_dist_road": "Distance to Road",
    "table_vars_title": "VARIABLES TABLE",
    "open_doc": "Open Full Document",
    "table_indicators_title": "INDICATORS TABLE",
    "vars_title": "VARIABLES",
    "ds_title": "DESCRIPTIVE STATISTICS",
    "is_qual_vars": "Qualitative Variables",
    "is_title": "INFERENTIAL STATISTICS",
    "reg_models_title": "REGRESSION MODELS",
    "simple_reg_title": "SIMPLE REGRESSION",
    "reg_linear": "Linear Regression",
    "reg_potential": "Potential Regression",
    "reg_exponential": "Exponential Regression",
    "reg_logarithmic": "Logarithmic Regression",
    "reg_polynomial": "Polynomial Regression",
    "multiple_reg_title": "MULTIPLE REGRESSION",
    "reg_multiple_3d": "Multiple Regression 3D",
    "ml_title": "MACHINE LEARNING",
    "ml_intro": "Use of Machine Learning for Photovoltaic Potential (MWh/year) Prediction and Global Solar Aptitude Classification",
    "ml_problem_title": "PROBLEM STATEMENT",
    "ml_problem_text": "Globally, solar expansion is key to the energy transition; however, geographical variability makes it difficult to assess the viability of new projects. Against this backdrop, statistical analysis and Machine Learning allow processing historical geospatial data to predict critical variables such as solar aptitude and photovoltaic potential (MWh/year). The use of these models seeks to optimize technical planning, applying this global analysis in a local case study focused on the FIGEMPA and Chemical Sciences faculties.",
    "ml_obj_title": "OBJECTIVE",
    "ml_obj_text": "Develop a Machine Learning model based on neural networks that allows for classifying the level of aptitude and predicting energy generation based on climatic and operational data, in order to provide a high-precision tool for decision-making in renewable projects.",
    "ml_method_title": "METHODOLOGY",
    "ml_model_title": "MODEL",
    "ml_colab_header": "Explore in Google Colab",
    "ml_colab_desc": "Click the following buttons to access the interactive notebooks.",
    "ml_notebook_reg": "Regression Notebook",
    "ml_notebook_class": "Classification Notebook",
    "ml_conclusion_title": "CONCLUSION",
    "ml_conclusion_text": "A Machine Learning model capable of classifying the level of aptitude and predicting photovoltaic potential (MWh/year) from global geospatial and climatic variables has been successfully implemented. This approach not only optimizes the precision in evaluating renewable resources for the FIGEMPA and Chemical Sciences faculty case study, but also possesses high scalability to analyze energy viability in any region of the world by adjusting the input dataset.",
    "about_us_title": "About Us",
    "about_p1": "We are second-semester students at the Central University of Ecuador, belonging to the Faculty of Engineering in Geology, Mines, Petroleum, and Environmental (FIGEMPA), in the Petroleum Engineering program. Within the framework of the Statistics course, we present this project with the goal of offering clear, pertinent, and accessible information for those interested in this area of knowledge.",
    "about_p2": "As future professionals, we aspire to be trained as committed, prepared, and passionate engineers, capable of contributing to the development of an industry that advances constantly thanks to technological innovation and the scientific study of sustainable energies.",
    "about_p3": "We trust in the value of joint learning and the importance of sharing knowledge. Therefore, this work not only constitutes a component of our academic training but also a contribution to fostering a more solid understanding of a field as dynamic and relevant in the current context.",
    "team_title": "Our Team",
    "team_intro": "Below you have available the resumes of each of the members who make up this working group.",
    "uc_title": "Under Construction",
    "tools_title": "RESOURCES & TOOLS",
    "tools_sub": "Operational ecosystem for geospatial data processing and statistical modeling.",
    "tools_list_title": "TOOLS USED",
    "bot_default": "I'm not sure how to answer that. You can write: 'project', 'variables', 'methodology', 'regression', 'machine learning', 'tools', or 'contact'.",
    "bot_welcome": "Hello! I am the Solar Assistant 🤖. What would you like to consult today?",
    "bot_resp_var": "Variables include <b>qualitative</b> and <b>quantitative</b> types. You can see them in detail here: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>View Variable Table</b></a>",
    "bot_resp_met": "The methodology is based on <b>data collection</b>. Full details in the section: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>View Methodology</b></a>",
    "bot_resp_reg": "We apply <b>simple</b> and <b>multiple 3D</b> regressions. Access the results here: <a href='#' onclick='document.getElementById(\"regression-models-link\").click(); return false;'><b>View Models</b></a>",
    "bot_resp_team": "The team is: <b>Gualan, Miles, Neira, Ramírez, and Sarmiento</b>. <a href='#' onclick='document.getElementById(\"about-us-link\").click(); return false;'><b>About Us</b></a>",
    "bot_resp_tools": "We use an ecosystem of <b>RStudio, Colab, LaTeX, QGIS, ArcGIS</b>. <a href='#' onclick='document.getElementById(\"tools-link\").click(); return false;'><b>View tools</b></a>",
    "bot_resp_ml": "We perform <b>photovoltaic potential prediction</b> and <b>solar aptitude classification</b>.<br><br><a href='#' onclick='document.getElementById(\"machine-learning-link\").click(); return false;'><b>Go to Machine Learning section</b></a><br><br>Or visit our Notebooks:<br><a href='https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing' target='_blank'><b>📓 Regression Notebook</b></a><br><a href='https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing' target='_blank'><b>📓 Classification Notebook</b></a>",
    "bot_resp_map": "You can view the interactive map here: <a href='#' onclick='document.getElementById(\"interactive-map-link\").click(); return false;'><b>Go to Map</b></a>",
    "bot_resp_intro": "This project analyzes <b>solar plants worldwide</b>. <a href='#' onclick='document.getElementById(\"about-proyect-link\").click(); return false;'><b>View Introduction</b></a>",
    "bot_contact": "Sure! You can write to us directly on our WhatsApp: <a href='https://wa.me/593994537842' target='_blank'><b>💬 Talk to the team</b></a>",
    "btn_intro": "About the Project",
    "btn_vars": "Variables",
    "btn_ml": "Machine Learning",
    "btn_contact": "Talk to the team",
    "tools_description": "For the development of our project, we employed an advanced technological ecosystem that integrates analysis and development platforms such as Posit Cloud, RStudio, Google Colab, VS Code, and LaTeX, along with key languages ​​like HTML5, CSS, and JavaScript. We complemented this workflow by accessing scientific data from Kaggle, NASA, Copernicus, OpenTopography, and the ECMWF Climate Change Service, while for geospatial analysis and spill identification, we used QGIS, ArcGIS, and Google Earth. Finally, we ensured productivity and dissemination of results through collaborative tools such as GitHub, Google Drive, RPubs, Microsoft Teams, and the Office suite, thus fostering a modern, efficient, and highly accurate approach.",
    "pop_symbolic": "U = { x | x ∈ Solar Plants ∧ Location(x) ∈ \"World\" }",
    "ind_symbolic": "X<sub>i</sub> where i = 1, 2, 3, 4, ..., +∞",
    "samp_symbolic": "M={ x | x ∈ Solar plants ∧ Location(x) ∈ \"World\" ∧ Entity(x) ∈ \"Global Energy Monitor\" }",
    "case_symbolic": "X<sub>i</sub> where i = 1, 2, 3, 4, ..., 58978",
    "map_eyebrow": "Global Visualization",
    "map_sub": "Explore the worldwide distribution of solar photovoltaic plants, filter by operational status, and inspect individual data for each installation.",
    "map_stat_plants": "registered plants",
    "map_stat_coverage": "<strong>Worldwide</strong> coverage",
    "map_stat_filters": "Filters by <strong>operational status</strong>",
    "map_source": "Data from Global Energy Monitor · Processed with QGIS",
    "about_intro_sub": "Project context, problem statement, geographic map, and objectives of the statistical analysis.",
    "ds_sub": "Methodology, variable tables, indicators, and distribution of each qualitative and quantitative variable in the dataset.",
    "is_sub": "Hypothesis testing and inferential analysis applied to the qualitative and quantitative variables of solar plants.",
    "reg_sub": "Simple regressions (linear, potential, exponential, logarithmic, and polynomial) and 3D multiple regression between dataset variables.",
    "about_us_sub": "Petroleum Engineering students from FIGEMPA – Central University of Ecuador.",
    "chip_reg": "Regression",
    "highlights_title_1": "Global MLRS Results",
    "highlights_title_2": "Project Scope and Impact",
    "hl_stat_1_val": "58,978",
    "hl_stat_1_lab": "Lease Records",
    "hl_stat_2_val": "5",
    "hl_stat_2_lab": "Regression Models",
    "hl_stat_3_val": "ML",
    "hl_stat_3_lab": "Advanced Prediction",
    "hl_stat_4_val": "R",
    "hl_stat_4_lab": "Scientific Computing",
    "hl_stat_5_val": "2026",
    "hl_stat_5_lab": "Project Year",
    "hl_stat_6_val": "Global",
    "hl_stat_6_lab": "MLRS Integration",
    "hl_stat_7_val": "12+",
    "hl_stat_7_lab": "Geospatial Tools",
    "hl_stat_8_val": "100%",
    "hl_stat_8_lab": "Academic Focus",
    "vars_landing_eyebrow": "Data Categorization",
    "vars_landing_title": "Our Variable Types",
    "vars_landing_lead": "Explore the technical classification of the solar plant dataset, divided into technical categories for precise analysis.",
    "vars_qual_title": "Qualitative Variables",
    "vars_quant_title": "Quantitative Variables",
    "view_more": "View Details"
  },
};

let currentLang = 'es';
localStorage.setItem('lang', currentLang);

const htmlKeys = ['bot_resp_var', 'bot_resp_met', 'bot_resp_reg', 'bot_resp_team', 'bot_resp_tools', 'bot_resp_ml', 'bot_resp_map', 'bot_resp_intro', 'bot_contact', 'about_problem_p2', 'ind_symbolic', 'case_symbolic', 'map_stat_coverage', 'map_stat_filters']; // Agrega todas las que tengan enlaces o etiquetas

function translateUI() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[currentLang] && translations[currentLang][key];
    if (text) {
      if (htmlKeys.includes(key)) {
        el.innerHTML = text;
      } else {
        let textNodeFound = false;
        for (let i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === Node.TEXT_NODE && el.childNodes[i].nodeValue.trim() !== '') {
            el.childNodes[i].nodeValue = text;
            textNodeFound = true;
            break;
          }
        }
        if (!textNodeFound) {
          el.textContent = text;
        }
      }
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'langToggle') {
    currentLang = (currentLang === 'es') ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    translateUI();

    const chatbotModal = document.getElementById('chatbotModal');
    const chatbox = document.getElementById('chatbox');
    if (chatbotModal && chatbotModal.style.display === 'block' && chatbox) {
      chatbox.innerHTML = '';
      if (window.showOptions) {
        window.showOptions();
      }
    }
  }
});

/* -------------------------------------------------------------------------- */
/* TU CÓDIGO ORIGINAL                                */
/* -------------------------------------------------------------------------- */
const body = document.querySelector("body");
const homeLink = document.querySelector("#home-link");
const interactiveMapLink = document.querySelector("#interactive-map-link");
const aboutProyectLink = document.querySelector("#about-proyect-link");
const descriptiveStatisticsLink = document.querySelector("#descriptive-statistics-link");
const inferentialStatisticsLink = document.querySelector("#inferential-statistics-link");
const regressionModelsLink = document.querySelector('#regression-models-link');
const machineLearningLink = document.querySelector('#machine-learning-link');
const toolsLink = document.querySelector('#tools-link');
const aboutUsLink = document.querySelector("#about-us-link");
const underConstructionLinks = document.querySelectorAll(".under-construction");
const mainElement = document.querySelector("main");
const header = document.querySelector(".header");
const menuBtn = document.querySelector("#menu-btn");
const topBar = document.querySelector("#top-bar");
const middleBar = document.querySelector("#middle-bar");
const bottomBar = document.querySelector("#bottom-bar");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navlink");
const navLinksDropDown = document.querySelectorAll(".navlink-deploy");
const navlProjectLinks = document.querySelectorAll(".navl-project");
const navlDSLinks = document.querySelectorAll(".navl-ds");
const heroVideoWrap = document.querySelector(".hero-video-wrap");

const windowWidth = window.innerWidth;


// Hamburguer menu code
const toggleHamburguerMenuClases = () => {
  topBar.classList.toggle("convert-x-1");
  topBar.classList.toggle("convert-bars");
  middleBar.classList.toggle("hidden");
  middleBar.classList.toggle("visible");
  bottomBar.classList.toggle("convert-x-2");
  bottomBar.classList.toggle("convert-bars");
  navbar.classList.toggle("show-menu");
};

const resetDropDownMenu = () => {
  navLinksDropDown.forEach(link => {
    const paintedElement = link;
    const nestedList = link.nextElementSibling;
    const arrowImg = link.firstElementChild;

    paintedElement.classList.remove("selected-menu-option");
    nestedList.classList.remove("show-nested-menu");
    arrowImg.classList.remove("rotate-arrow");
  });
}

menuBtn.addEventListener("click", () => {
  resetDropDownMenu();
  toggleHamburguerMenuClases();
});

navLinks.forEach(link => (
  link.addEventListener("click", (e) => {

    if (windowWidth < 1024) {
      const idLink = e.target.id;
      const classElements = [...e.target.classList];
      if (idLink === "descriptive-statistics-link"
        || idLink === "about-proyect-link"
        || idLink === "more-link"
        || classElements.includes('navitem-arrow')) {
        return
      }
    }

    const targetLink = [...e.target.classList];
    if (targetLink.includes('navlink-inside')) {
      resetDropDownMenu();
    }

    resetDropDownMenu();
    toggleHamburguerMenuClases();
  })
));

navLinksDropDown.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (windowWidth < 1024) {
      const classElements = [...e.target.classList];
      let linkElement = null;
      let nestedList = null;
      let arrowImg = null;
      if (classElements.includes('navitem-arrow')) {
        linkElement = e.target.parentElement;
        nestedList = linkElement.nextElementSibling;
        arrowImg = linkElement.firstElementChild;
      } else {
        linkElement = e.target;
        nestedList = e.target.nextElementSibling;
        arrowImg = e.target.firstElementChild;
      }
      linkElement.classList.toggle("selected-menu-option");
      nestedList.classList.toggle("show-nested-menu");
      arrowImg.classList.toggle("rotate-arrow");
      return;
    }
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";

    const pcLinkElement = e.target.closest('.navlink-deploy');
    if (pcLinkElement) {
      if (pcLinkElement.id === "about-proyect-link") {
        mainElement.innerHTML = aboutProyectCode;
      } else if (pcLinkElement.id === "descriptive-statistics-link") {
        mainElement.innerHTML = descriptiveStatisticsCode;
      } else if (pcLinkElement.id === "more-link") {
        mainElement.innerHTML = toolsCode + aboutUsHTML;
      }
    }
    translateUI();
  });
});




/* ----------------------------
   HOME
---------------------------- */
// Adding new text to main content dynamicaly
const homeCode = `
  <section id="inicio" class="hero-video-wrap section-anchor" role="region" aria-label="Portada con video">
    <video autoplay muted loop id="heroVideo" class="hero-video">
      <source src="assets/videos/uce.mp4" type="video/mp4">
      Tu navegador no soporta el tag de video.
    </video>
    <div class="video-overlay"></div>
    <div class="hero-inner-centered">
      <style>
        .hero-title-main {
          font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 800;
          line-height: 1.06; letter-spacing: -.03em; color: #fff;
          margin: 0 0 20px; animation: heroFadeUp .7s ease .1s both;
          font-family: 'IBM Plex Sans','Inter',sans-serif; max-width: 680px;
          position: relative; z-index: 2;
        }
        .hero-accent-line {
          width: 56px; height: 4px; background: #1a4fdb;
          border-radius: 2px; margin: 0 0 22px;
          animation: heroFadeUp .7s ease .16s both;
          position: relative; z-index: 2;
        }
        .hero-lead-main {
          font-size: clamp(.95rem,2vw,1.12rem); color: rgba(255,255,255,.7);
          max-width: 540px; margin: 0 0 34px; line-height: 1.74;
          font-weight: 400; animation: heroFadeUp .7s ease .24s both;
          position: relative; z-index: 2;
        }
        .hero-ctas { display:flex; flex-wrap:wrap; gap:12px; animation: heroFadeUp .7s ease .32s both; position: relative; z-index: 2; }
        .hero-cta-primary {
          display:inline-flex; align-items:center; gap:8px;
          padding:.82rem 1.9rem; background:#1a4fdb; color:#fff;
          border:none; border-radius:6px; font-weight:700; font-size:.88rem;
          cursor:pointer; text-decoration:none; letter-spacing:.01em;
          transition:background .2s,transform .2s;
        }
        .hero-cta-primary:hover { background:#1440b8; transform:translateY(-1px); }
        .hero-cta-secondary {
          display:inline-flex; align-items:center; gap:8px;
          padding:.82rem 1.9rem; background:transparent; color:#fff;
          border:2px solid rgba(255,255,255,.4); border-radius:6px;
          font-weight:600; font-size:.88rem; cursor:pointer; text-decoration:none;
          transition:border-color .2s,background .2s;
        }
        .hero-cta-secondary:hover { border-color:rgba(255,255,255,.8); background:rgba(255,255,255,.07); }
        .hero-stats-bar {
          position:absolute; bottom:0; left:0; right:0;
          background:rgba(0,27,65,.88); backdrop-filter:blur(10px);
          border-top:1px solid rgba(255,255,255,.08);
          display:flex; justify-content:center; z-index:3;
        }
        .hero-stat-item {
          padding:1.1rem 2.8rem; text-align:center;
          border-right:1px solid rgba(255,255,255,.1);
        }
        .hero-stat-item:last-child { border-right:none; }
        .hero-stat-num { font-size:1.4rem; font-weight:800; color:#fff; display:block; letter-spacing:-.02em; }
        .hero-stat-label { font-size:.68rem; color:rgba(255,255,255,.45); text-transform:uppercase; letter-spacing:.1em; font-weight:600; }
        @keyframes heroFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      </style>
      <!-- Section Label Removed -->
      <h1 class="hero-title-main" data-i18n="hero_title_centered">ANÁLISIS ESTADÍSTICO DE PLANTAS SOLARES A NIVEL MUNDIAL</h1>
      <div class="hero-accent-line"></div>
      <p class="hero-lead-main" data-i18n="hero_lead_centered">Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio</p>
      <div class="hero-ctas">
        <a href="#" class="hero-cta-primary" onclick="document.getElementById('about-proyect-link').click();return false;">
          <i class="fas fa-chevron-right"></i> Explorar Proyecto
        </a>
        <a href="#" class="hero-cta-secondary" onclick="document.getElementById('interactive-map-link').click();return false;">
          <i class="fas fa-map-marked-alt"></i> Ver Mapa
        </a>
      </div>
    </div>
    </div>

  </section>

  <section class="important section-box" style="border-left:4px solid #f59e0b;background:#fffbf0;">
    <div style="display:flex;align-items:flex-start;gap:1rem;">
      <i class="fas fa-exclamation-triangle" style="color:#d97706;font-size:1.2rem;margin-top:3px;flex-shrink:0;"></i>
      <div>
        <h2 class="title-2" style="text-align:left;margin:0 0 .4rem;font-size:1.1rem;" data-i18n="important_title">¡IMPORTANTE!</h2>
        <p style="margin:0;color:#374151;font-size:.95rem;line-height:1.65;" data-i18n="important_text">Este proyecto tiene un carácter exclusivamente académico y se encuentra en continuo desarrollo. Los datos y análisis presentados se utilizan únicamente con fines educativos.</p>
      </div>
    </div>
  </section>

  <section class="mision-vision section-box">
    <h2 class="title-2" data-i18n="mision_vision_title">MISIÓN - VISIÓN</h2>
    <div class="section-divider"></div>
    <div class="mision-vision-container">
      <div class="mision">
        <h3 class="title-3" data-i18n="mision_title">Misión</h3>
        <p style="color:#374151;line-height:1.75;margin-top:.5rem;" data-i18n="mision_text">Aplicar métodos estadísticos para identificar y cuantificar los factores que determinan la eficiencia real de las plantas solares a nivel mundial.</p>
      </div>
      <div class="vision">
        <h3 class="title-3" data-i18n="vision_title">Visión</h3>
        <p style="color:#374151;line-height:1.75;margin-top:.5rem;" data-i18n="vision_text">Convertirnos en un análisis estadístico clave que revele las verdaderas tendencias y el potencial global de la energía solar.</p>
      </div>
    </div>
  </section>

  <section id="motivation" class="motivation section-box">
    <div class="card-box">
      <div class="motivation-text-container">
        <p style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#1a4fdb;margin:0 0 8px;">Sobre Nosotros</p>
        <h2 class="title-2" style="text-align:left;" data-i18n="motivaciones_title">MOTIVACIONES DEL PROYECTO</h2>
        <div class="section-divider" style="margin:0 0 1.5rem;"></div>
        <p style="color:#374151;line-height:1.78;" data-i18n="motivaciones_text">Como estudiantes de la Universidad Central del Ecuador, desarrollamos este proyecto con el propósito de aplicar la estadística como una herramienta fundamental en el análisis de datos.</p>
        <a href="https://www.uce.edu.ec/web/figempa" target="_blank" class="uce-figempa-link">UNIVERSIDAD CENTRAL DEL ECUADOR &nbsp;→</a>
      </div>
      <img src="assets/images/facultad.jpg" alt="FIGEMPA" class="motivation-img"/>
    </div>
  </section>

  <section class="highlights-section">
    <div class="highlights-container">
      <div class="highlights-row">
        <span class="highlights-row-title" data-i18n="highlights_title_1">Resultados Globales de MLRS</span>
        <div class="highlights-grid">
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_1_val">58,978</span>
            <span class="highlight-label" data-i18n="hl_stat_1_lab">Registros de Concesiones</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_2_val">5</span>
            <span class="highlight-label" data-i18n="hl_stat_2_lab">Modelos de Regresión</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_3_val">ML</span>
            <span class="highlight-label" data-i18n="hl_stat_3_lab">Predicción Avanzada</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_4_val">R</span>
            <span class="highlight-label" data-i18n="hl_stat_4_lab">Computación Científica</span>
          </div>
        </div>
      </div>

      <div class="highlights-row">
        <span class="highlights-row-title" data-i18n="highlights_title_2">Alcance e Impacto del Proyecto</span>
        <div class="highlights-grid">
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_5_val">2026</span>
            <span class="highlight-label" data-i18n="hl_stat_5_lab">Año del Proyecto</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_6_val">Global</span>
            <span class="highlight-label" data-i18n="hl_stat_6_lab">Integración MLRS</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_7_val">12+</span>
            <span class="highlight-label" data-i18n="hl_stat_7_lab">Herramientas Geoespaciales</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_8_val">100%</span>
            <span class="highlight-label" data-i18n="hl_stat_8_lab">Enfoque Académico</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;


homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.innerHTML = "";
  mainElement.innerHTML = homeCode;

  const videoWrapper = document.querySelector(".hero-video-wrap");
  if (videoWrapper) {
    videoWrapper.setAttribute("style", `margin-top:${header.offsetHeight}px`);
  }

  translateUI();
});




/* ----------------------------
    INTERACTIVE MAP
---------------------------- */
const interactiveMapCode = `
      <style>
        .map-section-wrap {
          width: 100%;
          background: #f8fafc;
          padding-bottom: 60px;
          margin-top: ${header.offsetHeight}px;
        }
        .map-frame-bar-corp {
          background: #f1f5f9; padding: 12px 20px; border-bottom: 1px solid #e2e8f0;
          display: flex; align-items: center; gap: 12px;
        }
        .map-frame-dot { width: 10px; height: 10px; border-radius: 50%; background: #cbd5e1; }
        .map-frame-url { font-size: .75rem; color: #64748b; font-family: monospace; }
        .map-frame-outer-corp iframe {
          width: 100%; height: 750px; border: none; display: block;
        }
        .map-footer-corp {
          text-align: center; margin-top: 30px; font-size: .85rem; color: #64748b;
        }
      </style>

  <div class="map-section-wrap">
    <div class="map-hero-corp">
      <!-- Section Label Removed -->
      <h1 data-i18n="map_title">MAPA INTERACTIVO DE CONCESIONES</h1>
      <p data-i18n="map_sub">Seguimiento geoespacial de plantas solares a nivel global con indicadores técnicos y estados operativos.</p>
    </div>

    <div class="map-frame-outer-corp">
      <div class="map-frame-bar-corp">
        <span class="map-frame-dot"></span><span class="map-frame-dot"></span><span class="map-frame-dot"></span>
        <span class="map-frame-url">https://blm-mlrs.gov/interactive-map-v2</span>
      </div>
      <iframe src="map/map.html" title="Mapa Interactivo" allowfullscreen></iframe>
    </div>

    <div class="map-footer-corp" data-i18n="map_source">
      Infraestructura de datos: FIGEMPA · Procesamiento: RStudio & QGIS
    </div>
  </div>
`;

interactiveMapLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.innerHTML = interactiveMapCode;
  translateUI();
});



/* ----------------------------
   ABOUT PROJECT
---------------------------- */
// About project
const aboutProyectCode = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="about_intro_title">INTRODUCCIÓN AL PROYECTO</h1>
    <p data-i18n="about_intro_sub">Análisis exhaustivo de la infraestructura solar global, planteamiento de desafíos energéticos y objetivos estratégicos.</p>
  </div>

  <section class="problem section-box" id="problem">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="about_problem_title">PLANTEAMIENTO DEL PROBLEMA</h2>
      <div class="section-divider"></div>
    </div>
    <div style="max-width:900px; margin:0 auto;">
      <p class="problem-desc" style="font-size:1.1rem; line-height:1.8; color:#374151" data-i18n="about_problem_p1">El análisis de las plantas solares a nivel mundial es fundamental para optimizar la transición hacia energías renovables, comprendiendo los factores de eficiencia y distribución geográfica.</p>
      <p class="problem-desc" style="font-size:1.1rem; line-height:1.8; color:#374151; margin-top:20px;">
        El dataset utilizado para este proyecto se puede obtener desde el repositorio del proyecto. Este dataset es el resultado de la colaboración entre nuestro equipo de trabajo y el Departamento de Tecnología de Computación de la Universidad de Alicante, España, a partir de la información obtenida de las plataformas Kaggle, NASA Power Data, Global Solar Atlas, Global Wind Atlas y Copernicus cumpliendo con los criterios establecidos para el proyecto.
      </p>
    </div>
  </section>

  <section class="map-container section-box" id="map">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="about_map_title">UBICACIÓN GEOGRÁFICA</h2>
      <div class="section-divider"></div>
    </div>
    <div class="map-frame-outer-corp" style="margin-top:20px;">
      <iframe src="https://drive.google.com/file/d/1GBVQRhBoctEpF-59a6TJw813tEui_zHr/preview" class="map-iframe" style="height:600px; border:none; width:100%"></iframe>
    </div>
  </section>

  <section class="objectives section-box" id="objectives">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="about_obj_title">OBJETIVOS DEL ANÁLISIS</h2>
      <div class="section-divider"></div>
    </div>
    <div class="objectives-modern-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:30px; margin-top:40px;">
      <div class="objective-card" style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.04); border:1px solid #f1f5f9; transition: transform 0.3s ease;">
        <div style="width:60px; height:60px; background:rgba(26,79,219,0.1); border-radius:15px; display:flex; align-items:center; justify-content:center; margin-bottom:25px;">
           <i class="fas fa-bullseye" style="font-size:1.5rem; color:#1a4fdb"></i>
        </div>
        <h3 class="title-3" style="color:#001b41; margin-bottom:15px; font-size:1.3rem;" data-i18n="about_obj_gen_header">Objetivo General</h3>
        <p style="line-height:1.7; color:#475569" data-i18n="about_obj_gen_text">Aplicar estadística avanzada y Machine Learning para caracterizar el ecosistema solar global.</p>
      </div>
      
      <div class="objective-card" style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.04); border:1px solid #f1f5f9; transition: transform 0.3s ease;">
        <div style="width:60px; height:60px; background:rgba(14,165,233,0.1); border-radius:15px; display:flex; align-items:center; justify-content:center; margin-bottom:25px;">
           <i class="fas fa-list-check" style="font-size:1.5rem; color:#0ea5e9"></i>
        </div>
        <h3 class="title-3" style="color:#001b41; margin-bottom:15px; font-size:1.3rem;" data-i18n="about_obj_spec_header">Objetivos Específicos</h3>
        <ul style="list-style:none; padding:0; margin:0;">
          <li style="margin-bottom:12px; display:flex; align-items:start; gap:10px;">
            <i class="fas fa-check-circle" style="color:#0ea5e9; margin-top:5px; font-size:0.9rem;"></i>
            <span style="color:#475569; line-height:1.5" data-i18n="about_obj_spec_1">Caracterización estadística de activos solares.</span>
          </li>
          <li style="margin-bottom:12px; display:flex; align-items:start; gap:10px;">
            <i class="fas fa-check-circle" style="color:#0ea5e9; margin-top:5px; font-size:0.9rem;"></i>
            <span style="color:#475569; line-height:1.5" data-i18n="about_obj_spec_2">Modelado probabilístico de rendimientos.</span>
          </li>
          <li style="display:flex; align-items:start; gap:10px;">
            <i class="fas fa-check-circle" style="color:#0ea5e9; margin-top:5px; font-size:0.9rem;"></i>
            <span style="color:#475569; line-height:1.5" data-i18n="about_obj_spec_3">Estimación de tendencias por variables críticas.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
`;

navlProjectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = aboutProyectCode;
    translateUI();
  })
});




/* ----------------------------
DESCRIPTIVE STATISTICS
---------------------------- */
// Descriptive Statistics parts
const dSMethodology = `
  <section class="section-box ds-methodology-section" id="ds-methodology">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="met_title">METODOLOGÍA ESTADÍSTICA</h2>
      <div class="section-divider"></div>
    </div>
    <div class="met-dashboard-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:25px; margin-top:40px;">
      <!-- Population Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #1a4fdb; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#1a4fdb; text-transform:uppercase; letter-spacing:1px;" data-i18n="pop_title">POBLACIÓN</span>
           <i class="fas fa-users-viewfinder" style="color:#1a4fdb; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;" data-i18n="pop_text">Plantas Solares a nivel mundial.</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">SIMBÓLICO</span>
          <div style="padding:15px; background:#f4f7fe; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#1a4fdb; border: 1px solid rgba(26,79,219,0.1);">
            <span style="opacity:0.6">U = { x | x ∈ PS ∧ </span><br>
            <span style="margin-left:10px">Loc(x) ∈ "Mundo" }</span>
          </div>
        </div>
      </article>

      <!-- Individual Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #0ea5e9; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#0ea5e9; text-transform:uppercase; letter-spacing:1px;" data-i18n="ind_title">INDIVIDUO</span>
           <i class="fas fa-layer-group" style="color:#0ea5e9; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;" data-i18n="ind_text">Cada planta solar individual.</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">SIMBÓLICO</span>
          <div style="padding:15px; background:#eef9ff; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#0ea5e9; border: 1px solid rgba(14,165,233,0.1);">
            X<sub>i</sub> where <br>
            i ∈ {1, 2, ..., N}
          </div>
        </div>
      </article>

      <!-- Sample Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #1a4fdb; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#1a4fdb; text-transform:uppercase; letter-spacing:1px;" data-i18n="samp_title">MUESTRA</span>
           <i class="fas fa-database" style="color:#1a4fdb; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;" data-i18n="samp_text">Subconjunto representativo obtenido de Global Energy Monitor.</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">SIMBÓLICO</span>
          <div style="padding:15px; background:#f4f7fe; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#1a4fdb; border: 1px solid rgba(26,79,219,0.1);">
            M ⊂ U | <br>
            <span style="margin-left:10px">Entidad = "GEM"</span>
          </div>
        </div>
      </article>

      <!-- Case Study Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #0ea5e9; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#0ea5e9; text-transform:uppercase; letter-spacing:1px;">CASO DE ESTUDIO</span>
           <i class="fas fa-microscope" style="color:#0ea5e9; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;">Análisis de Arrendamientos Petroleros</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">SIMBÓLICO</span>
          <div style="padding:15px; background:#eef9ff; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#0ea5e9; border: 1px solid rgba(14,165,233,0.1);">
            Analysis_ID: <br>
            <span style="margin-left:10px">BLM-OIL-GAS-2026</span>
          </div>
        </div>
      </article>
    </div>
  </section>
`;

const dSVariablesCualitatives = `
  <div class="solutions-header" id="ds-variables">
    <span class="solutions-eyebrow" data-i18n="vars_landing_eyebrow">Categorización de Datos</span>
    <h1 class="solutions-title" data-i18n="vars_qual_title">Variables Cualitativas</h1>
    <p class="solutions-lead">Clasificación de atributos no numéricos que definen la procedencia técnica y operativa.</p>
  </div>

  <h4 class="var-category-heading var-cat-nominal">
    <span class="cat-icon"><i class="fas fa-tag"></i></span>
    <span class="cat-label">Nominales</span>
    <span class="cat-desc">Sin orden jerárquico</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <!-- País -->
    <a href="https://rpubs.com/mssarmiento/1400052" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="País" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_country">País</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Tipo de Curvatura -->
    <a href="https://rpubs.com/mssarmiento/1400054" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Curvatura" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_curvature">Tipo de Curvatura</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-ordinal" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-sort-amount-up"></i></span>
    <span class="cat-label">Ordinales</span>
    <span class="cat-desc">Con orden jerárquico definido</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Estado Operacional -->
    <a href="https://rpubs.com/mssarmiento/1400058" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Estado" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_op_status">Estado Operacional</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Tipo de Pendiente -->
    <a href="https://rpubs.com/mssarmiento/1400060" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Pendiente" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_slope">Tipo de Pendiente</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Tipo de Aptitud Solar -->
    <a href="https://rpubs.com/mssarmiento/1400062" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Aptitud" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_aptitude">Tipo de Aptitud Solar</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

const dSVariablesCuantitatives = `
  <div class="solutions-header" style="margin-top:4rem;">
    <h1 class="solutions-title" data-i18n="vars_quant_title">Variables Cuantitativas</h1>
    <p class="solutions-lead">Mediciones numéricas y parámetros operativos extraídos de sensores y modelos climáticos.</p>
  </div>

  <h4 class="var-category-heading var-cat-discrete">
    <span class="cat-icon"><i class="fas fa-hashtag"></i></span>
    <span class="cat-label">Discretas</span>
    <span class="cat-desc">Valores enteros contables</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <!-- Año de Operación -->
    <a href="https://rpubs.com/mssarmiento/1400052" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Año" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_year">Año de Operación</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    
    <!-- Cantidad de Unidades -->
    <a href="https://rpubs.com/mssarmiento/1400052" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Unidades" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_units">Cantidad de Unidades</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-continuous" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-wave-square"></i></span>
    <span class="cat-label">Continuas</span>
    <span class="cat-desc">Valores numéricos en rango real</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Pendiente -->
    <a href="https://rpubs.com/mssarmiento/1400963" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Pendiente" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_slope">Pendiente</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Curvatura -->
    <a href="https://rpubs.com/mssarmiento/1400966" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Curvatura" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_curvature">Curvatura</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Aspecto -->
    <a href="https://rpubs.com/mssarmiento/1400092" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Aspecto" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_aspect">Aspecto</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- GHI -->
    <a href="https://rpubs.com/mssarmiento/1400090" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="GHI" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_ghi">GHI</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Aptitud Solar -->
    <a href="https://rpubs.com/mssarmiento/1400105" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Aptitud Solar" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_aptitude">Aptitud Solar</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Humedad -->
    <a href="https://rpubs.com/mssarmiento/1400107" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Humedad" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_humidity">Humedad</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Velocidad del Viento -->
    <a href="https://rpubs.com/mssarmiento/1400109" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Velocidad del Viento" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_wind_speed">Velocidad del Viento</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Dirección del Viento -->
    <a href="https://rpubs.com/mssarmiento/1400110" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Dirección del Viento" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_wind_dir">Dirección del Viento</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Temperatura Ambiente -->
    <a href="https://rpubs.com/mssarmiento/1400112" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Temperatura Ambiente" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_temp">Temperatura Ambiente</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Inclinación Óptima -->
    <a href="https://rpubs.com/mssarmiento/1400114" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Inclinación Óptima" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_tilt">Inclinación Óptima</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Potencial Fotovoltaico -->
    <a href="https://rpubs.com/mssarmiento/1400119" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Potencial Fotovoltaico" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_power">Potencial Fotovoltaico</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Capacidad -->
    <a href="https://rpubs.com/mssarmiento/1401015" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Capacidad" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_capacity">Capacidad</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Distancia a la Vía -->
    <a href="https://rpubs.com/mssarmiento/1401019" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/dist-to-road.webp" alt="Distancia a la Vía" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_dist_road">Distancia a la Vía</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

const dSVariables = `
<div class="dS-content-container" style="background:#f1f5f9; padding: 4rem 0;">
  <div class="container-corp">
    <!-- Section: Tabla de Variables -->
    <section class="section-box ds-variable-tables" id="ds-variables-tables" style="background:#fff; margin-bottom:40px; padding:3rem 3.5rem;">
      <div class="section-title-wrap">
        <h2 class="title-2" data-i18n="table_vars_title">TABLA DE VARIABLES</h2>
        <div class="section-divider"></div>
      </div>

      <!-- Professional Table Panel: Variables -->
      <div class="table-panel" style="margin-top:2rem;">
        <div class="table-panel-header">
          <div class="table-panel-header-left">
            <div class="table-panel-icon"><i class="fas fa-table"></i></div>
            <div>
              <p class="table-panel-title">Tabla de Variables</p>
              <p class="table-panel-subtitle">Dataset &middot; BLM Oil &amp; Gas Leases (MLRS)</p>
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span class="table-panel-badge"><i class="fas fa-columns"></i> 19 Variables</span>
            <span class="table-panel-badge"><i class="fas fa-database"></i> MLRS</span>
          </div>
        </div>
        <div class="table-panel-body">
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPdYlLX7_NKZ1VafXC-7KRWtlHjp6stlj6ywUzQzt_25XI3jXD4hpEY8u2JejFng/pubhtml?gid=436771283&&single=true&chrome=false&widget=false&headers=true"></iframe>
        </div>
        <div class="table-panel-footer">
          <span class="table-panel-source">
            <i class="fas fa-info-circle"></i>
            Fuente: Global Energy Monitor &middot; Procesado con RStudio
          </span>
          <a href="https://docs.google.com/spreadsheets/d/1OxlxfP1gWkoZjoOgeI-uo8XXsAFGeRp0/edit?gid=436771283#gid=436771283"
            target="_blank" class="table-panel-open-btn" data-i18n="open_doc">
            <i class="fas fa-external-link-alt"></i>
            Abrir Documento Completo
          </a>
        </div>
      </div>
    </section>

    <!-- Section: Tabla de Indicadores -->
    <section class="section-box ds-indicator-tables" id="ds-indicators-tables" style="background:#fff; padding:3rem 3.5rem;">
      <div class="section-title-wrap">
        <h2 class="title-2" data-i18n="table_indicators_title">TABLA DE INDICADORES</h2>
        <div class="section-divider"></div>
      </div>

      <!-- Professional Table Panel: Indicators -->
      <div class="table-panel" style="margin-top:2rem;">
        <div class="table-panel-header">
          <div class="table-panel-header-left">
            <div class="table-panel-icon"><i class="fas fa-chart-bar"></i></div>
            <div>
              <p class="table-panel-title">Tabla de Indicadores</p>
              <p class="table-panel-subtitle">Indicadores estad&iacute;sticos &middot; An&aacute;lisis descriptivo</p>
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span class="table-panel-badge"><i class="fas fa-chart-line"></i> Estadísticos</span>
            <span class="table-panel-badge"><i class="fas fa-calculator"></i> Descriptivos</span>
          </div>
        </div>
        <div class="table-panel-body">
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSfSg1xyD8fXx6zGWAkHF_6MhmX-V1F1CcKGPEYPm2SEagGscrKvoFu7IeLm8onaw/pubhtml?gid=2064573701&amp;single=true&amp;chrome=false&amp;widget=false&amp;headers=true"></iframe>
        </div>
        <div class="table-panel-footer">
          <span class="table-panel-source">
            <i class="fas fa-info-circle"></i>
            Fuente: An&aacute;lisis estad&iacute;stico del equipo FIGEMPA &middot; UCE 2026
          </span>
          <a href="https://docs.google.com/spreadsheets/d/1J1y-nt62qz_h4md9Z-qXavRisDjFXZPO/edit?gid=2064573701#gid=2064573701"
            target="_blank" class="table-panel-open-btn" data-i18n="open_doc">
            <i class="fas fa-external-link-alt"></i>
            Abrir Documento Completo
          </a>
        </div>
      </div>
    </section>
  </div>
</div>

<section class="section-box is-vars-section" id="ds-vars-cards" style="background:#f1f5f9; padding: 4rem 0;">
  <div class="container-corp" style="padding-left:2.5rem; padding-right:2.5rem;">
    ${dSVariablesCualitatives}
    <div style="height:80px;"></div>
    ${dSVariablesCuantitatives}
  </div>
</section>
`;

// Descriptive Statistics (DS) section
const descriptiveStatisticsCode = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="ds_title">ESTADÍSTICA DESCRIPTIVA</h1>
    <p data-i18n="ds_sub">Análisis de variables, indicadores de rendimiento y métricas operativas del sector solar.</p>
  </div>

  ${dSMethodology}
  ${dSVariables}
`;

navlDSLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = descriptiveStatisticsCode;
    translateUI();
  })
});




/* ----------------------------
   INFERENTIAL STATISTICS
---------------------------- */
// Inferential Statistics parts
const iSCualitativesVariables = `
  <div class="solutions-header" id="is-variables">
    <span class="solutions-eyebrow" data-i18n="vars_landing_eyebrow">Categorización de Datos</span>
    <h1 class="solutions-title" data-i18n="vars_qual_title">Variables Cualitativas</h1>
    <p class="solutions-lead">Clasificación de atributos no numéricos que definen la procedencia técnica y operativa.</p>
  </div>

  <h4 class="var-category-heading var-cat-nominal">
    <span class="cat-icon"><i class="fas fa-tag"></i></span>
    <span class="cat-label">Nominales</span>
    <span class="cat-desc">Sin orden jerárquico</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <!-- País -->
    <a href="https://rpubs.com/mssarmiento/1400052" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="País" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_country">País</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Tipo de Curvatura -->
    <a href="https://rpubs.com/mssarmiento/1400054" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Curvatura" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_curvature">Tipo de Curvatura</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-ordinal" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-sort-amount-up"></i></span>
    <span class="cat-label">Ordinales</span>
    <span class="cat-desc">Con orden jerárquico definido</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Estado Operacional -->
    <a href="https://rpubs.com/mssarmiento/1400058" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Estado" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_op_status">Estado Operacional</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Tipo de Pendiente -->
    <a href="https://rpubs.com/mssarmiento/1400060" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Pendiente" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_slope">Tipo de Pendiente</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Tipo de Aptitud Solar -->
    <a href="https://rpubs.com/mssarmiento/1400062" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Aptitud" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_aptitude">Tipo de Aptitud Solar</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

const iSCuantitativesVariables = `
  <div class="solutions-header" style="margin-top:4rem;">
    <h1 class="solutions-title" data-i18n="vars_quant_title">Variables Cuantitativas</h1>
    <p class="solutions-lead">Mediciones numéricas y parámetros operativos extraídos de sensores y modelos climáticos.</p>
  </div>

  <h4 class="var-category-heading var-cat-discrete">
    <span class="cat-icon"><i class="fas fa-hashtag"></i></span>
    <span class="cat-label">Discretas</span>
    <span class="cat-desc">Valores enteros contables</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <!-- Año de Operación -->
    <a href="https://rpubs.com/mssarmiento/1400052" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Año" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_year">Año de Operación</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    
    <!-- Cantidad de Unidades -->
    <a href="https://rpubs.com/mssarmiento/1400052" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Unidades" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_units">Cantidad de Unidades</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-continuous" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-wave-square"></i></span>
    <span class="cat-label">Continuas</span>
    <span class="cat-desc">Valores numéricos en rango real</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Pendiente -->
    <a href="https://rpubs.com/mssarmiento/1400963" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Pendiente" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_slope">Pendiente</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Curvatura -->
    <a href="https://rpubs.com/mssarmiento/1400966" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Curvatura" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_curvature">Curvatura</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Aspecto -->
    <a href="https://rpubs.com/mssarmiento/1400092" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Aspecto" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_aspect">Aspecto</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- GHI -->
    <a href="https://rpubs.com/mssarmiento/1400090" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="GHI" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_ghi">GHI</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Aptitud Solar -->
    <a href="https://rpubs.com/mssarmiento/1400105" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Aptitud Solar" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_aptitude">Aptitud Solar</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Humedad -->
    <a href="https://rpubs.com/mssarmiento/1400107" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Humedad" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_humidity">Humedad</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Velocidad del Viento -->
    <a href="https://rpubs.com/mssarmiento/1400109" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Velocidad del Viento" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_wind_speed">Velocidad del Viento</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Dirección del Viento -->
    <a href="https://rpubs.com/mssarmiento/1400110" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Dirección del Viento" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_wind_dir">Dirección del Viento</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Temperatura Ambiente -->
    <a href="https://rpubs.com/mssarmiento/1400112" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Temperatura Ambiente" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_temp">Temperatura Ambiente</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Inclinación Óptima -->
    <a href="https://rpubs.com/mssarmiento/1400114" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Inclinación Óptima" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_tilt">Inclinación Óptima</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Potencial Fotovoltaico -->
    <a href="https://rpubs.com/mssarmiento/1400119" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Potencial Fotovoltaico" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_power">Potencial Fotovoltaico</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Capacidad -->
    <a href="https://rpubs.com/mssarmiento/1401015" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Capacidad" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_capacity">Capacidad</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Distancia a la Vía -->
    <a href="https://rpubs.com/mssarmiento/1401019" target="_blank" class="solution-card">
      <div class="solution-image-container">
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/dist-to-road.webp" alt="Distancia a la Vía" class="solution-image"/>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_dist_road">Distancia a la Vía</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

// Inferencial Statistics (IS) section
const inferencialStatisticsCode = `
  <div class="section-hero">
    <!-- Section Label Removed -->
    <h1 data-i18n="is_title">ESTADÍSTICA INFERENCIAL</h1>
    <p class="section-hero-sub" data-i18n="is_sub">Pruebas de hipótesis y análisis inferencial aplicado a las variables cualitativas y cuantitativas de las plantas solares.</p>
  </div>

  <section class="section-box is-vars-section" id="is-vars" style="background:#f1f5f9; padding: 4rem 0;">
    <div class="container-corp">
       ${iSCualitativesVariables}
       <div style="height:80px;"></div>
       ${iSCuantitativesVariables}
    </div>
  </section>
`;

inferentialStatisticsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = inferencialStatisticsCode;
  translateUI();
});




/* ----------------------------
   REGRESSION MODELS
---------------------------- */
const regressionModelsCode = `
  <div class="section-hero">
    <!-- Section Label Removed -->
    <h1 data-i18n="reg_models_title">MODELOS DE REGRESIÓN</h1>
    <p class="section-hero-sub" data-i18n="reg_sub">Regresiones simples (lineal, potencial, exponencial, logarítmica y polinómica) y regresión múltiple 3D entre variables del dataset.</p>
  </div>

  <section class="section-box">
    <h2 class="title-2" data-i18n="simple_reg_title">REGRESIÓN SIMPLE</h2>

    <div class="regression-rs-links-container">
      <a href="https://rpubs.com/mssarmiento/1400243" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_linear">Regresión Lineal</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400304" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_potential">Regresión Potencial</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400516" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_exponential">Regresión Exponencial</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400389" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_logarithmic">Regresión Logarítmica</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400511" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_polynomial">Regresión Polinómica</span>
      </a>
    </div>
  </section>
  
  <section class="section-box">
    <h2 class="title-2" data-i18n="multiple_reg_title">REGRESIÓN MÚLTIPLE</h2>
    <div class="regression-rs-links-container">
      <a href="https://rpubs.com/mssarmiento/1400942" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_multiple_3d">Regresión Múltiple 3D</span>
      </a>
    </div>
  </section>
`;

regressionModelsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = regressionModelsCode;
  translateUI();
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const machineLearningCode = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="ml_title">MACHINE LEARNING</h1>
    <p data-i18n="ml_sub">Modelado predictivo y clasificación de aptitud solar mediante redes neuronales y regresión avanzada.</p>
  </div>

  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="ml_obj_title">OBJETIVO ESTRATÉGICO</h2>
      <div class="section-divider"></div>
    </div>
    <p style="font-size:1.1rem; line-height:1.7; color:#374151" data-i18n="ml_obj_text">
      Desarrollar modelos de alta precisión para la toma de decisiones informadas en proyectos de energía renovable.
    </p>
  </section>
  
  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="ml_method_title">METODOLOGÍA DE APRENDIZAJE</h2>
      <div class="section-divider"></div>
    </div>
    <div class="card-box" style="padding:10px; overflow:hidden; margin-top:20px;">
      <img src="https://mssarmientoo.github.io/figempa/assets/images/ml-methodology.jpeg" alt="Metodología ML" class="ml-methodology-img" style="width:100%; border-radius:8px;" />
    </div>
  </section>
  
  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="ml_model_title">DESPLIEGUE DE MODELOS</h2>
      <div class="section-divider"></div>
    </div>
    <div class="ml-models-links-container" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:30px;">
      <a href="https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing" target="_blank" class="btn" style="text-align:center; text-decoration:none;">
        <span data-i18n="ml_notebook_reg">Notebook de Regresión</span>
      </a>
      <a href="https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing" target="_blank" class="btn" style="text-align:center; text-decoration:none; background:#001b41;">
        <span data-i18n="ml_notebook_class">Notebook de Clasificación</span>
      </a>
    </div>
  </section>
`;

machineLearningLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = machineLearningCode;
  translateUI();
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const toolsCode = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="tools_title">RECURSOS Y HERRAMIENTAS</h1>
    <p data-i18n="tools_sub">Ecosistema operativo para el procesamiento de datos geoespaciales y modelado estadístico.</p>
  </div>
  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="tools_list_title">HERRAMIENTAS UTILIZADAS</h2>
      <div class="section-divider"></div>
    </div>
    <p class="tools-description" style="max-width:900px; margin:20px auto; line-height:1.8; color:#475569; font-size:1.05rem;" data-i18n="tools_description">
      Para el desarrollo de nuestro proyecto, empleamos un ecosistema tecnológico avanzado que integra plataformas de análisis como Posit Cloud, RStudio y Google Colab, garantizando procesos de alta precisión.
    </p>
  </section>
`;

toolsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = toolsCode;
  translateUI();
})




/* ----------------------------
   ABOUT US
---------------------------- */
// About Us section
const aboutUsHTML = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="about_us_title">SOBRE NOSOTROS</h1>
    <p data-i18n="about_us_sub">Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental · UCE.</p>
  </div>
  <section class="section-box" style="background:#fff; border-radius:20px; padding:60px 5%; margin-top:40px; box-shadow: 0 10px 40px rgba(0,0,0,0.03);">
    <div style="max-width:800px; margin:0 auto; text-align:center;">
       <p style="font-size:1.15rem; line-height:1.9; color:#374151" data-i18n="about_p1">Somos estudiantes de Ingeniería en Petróleos de la Universidad Central del Ecuador, comprometidos con la innovación tecnológica y el análisis científico del sector energético global.</p>
       <div style="height:2px; background:linear-gradient(90deg, transparent, #1a4fdb, transparent); width:150px; margin:30px auto;"></div>
       <p style="font-size:0.95rem; color:#64748b" data-i18n="team_intro">A continuación, presentamos los CV interactivos de nuestro equipo de investigación.</p>
    </div>
    <div class="cvs-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:40px;">
      <a href="https://drive.google.com/file/d/1R3lUrsZgvpMBEEy31lrqK0p4FxZZNQTE/view" class="btn" target="_blank" style="font-size:0.85rem">Gualan Shelby</a>
      <a href="https://drive.google.com/file/d/1zgpJ5q-Zihij5XHkioqKrdmJH0a-KWYK/view" class="btn" target="_blank" style="font-size:0.85rem">Juleydi Miles</a>
      <a href="https://drive.google.com/file/d/1jwGEu2l3I8LQNb7KCrAycLZLvr2zNent/view" class="btn" target="_blank" style="font-size:0.85rem">Fernando Neira</a>
      <a href="https://drive.google.com/file/d/10gKZVoes30IPzWsDmMNpamIt_0wHh6xv/view" class="btn" target="_blank" style="font-size:0.85rem">Carlos Ramírez</a>
      <a href="https://drive.google.com/file/d/1n2qUJGUfGpwbh1u6eyi27vV_v3Af84yh/view" class="btn" target="_blank" style="font-size:0.85rem">Martín Sarmiento</a>
    </div>
  </section>
`;

aboutUsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = aboutUsHTML;
  translateUI();
});




/* ----------------------------
   UNDER CONSTRUCTION
---------------------------- */
// Under Construction image to show for building pages
const underConstructionCode = `
  <h1 class="title-1" data-i18n="uc_title">En construcción</h1>
  <img src="assets/images/under-construction.png" alt="Escena de construcción" class="under-construction-img">
`;

underConstructionLinks.forEach(link => (
  link.addEventListener("click", (e) => {
    e.preventDefault();
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = underConstructionCode;
    translateUI();
  })
));






/* --------------------------------
   LÓGICA DEL CHATBOT
-------------------------------- */
(function () {
  const chatbotBtn = document.getElementById('chatbotBtn');
  const chatbotModal = document.getElementById('chatbotModal');
  const closeChatbotBtn = document.getElementById('closeChatbot');
  const chatbox = document.getElementById('chatbox');

  chatbotBtn.addEventListener('click', function () {
    chatbotModal.style.display = (chatbotModal.style.display === 'none' || chatbotModal.style.display === '') ? 'block' : 'none';
    if (chatbotModal.style.display === 'block' && chatbox.children.length === 0) {
      showOptions();
    }
  });

  closeChatbotBtn.addEventListener('click', function () {
    chatbotModal.style.display = 'none';
  });

  chatbox.addEventListener('click', function (e) {
    const btn = e.target.closest('.chat-option-btn');
    if (btn) {
      const respKey = btn.getAttribute('data-cmd');
      const userText = btn.textContent.trim();
      if (respKey) {
        handleBotOption(respKey, userText);
      }
    }
  });

  function handleBotOption(respKey, userText) {
    const youLabel = (currentLang === 'es') ? 'Tú: ' : 'You: ';
    const botLabel = (currentLang === 'es') ? 'Asistente Solar: ' : 'Solar Assistant: ';

    const oldOptions = chatbox.querySelectorAll('.bot-options');
    oldOptions.forEach(opt => opt.remove());

    chatbox.innerHTML += `<p class="user-message">${youLabel}${userText}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
      const botResponse = translations[currentLang][respKey] || translations[currentLang]["bot_default"];
      chatbox.innerHTML += `<p class="bot-message">${botLabel}${botResponse}</p>`;

      setTimeout(() => {
        showOptions(false);
      }, 800);

    }, 500);
  }

  function showOptions(showWelcome = true) {
    const options = [
      { text: translations[currentLang]["btn_intro"], cmd: "bot_resp_intro" },
      { text: translations[currentLang]["btn_vars"], cmd: "bot_resp_var" },
      { text: translations[currentLang]["nav_map"], cmd: "bot_resp_map" },
      { text: translations[currentLang]["btn_ml"], cmd: "bot_resp_ml" },
      { text: translations[currentLang]["btn_contact"], cmd: "bot_contact" }
    ];

    let buttonsHTML = '<div class="chat-options-container" style="display:flex; flex-direction:column; gap:8px; margin-top:15px;">';
    options.forEach(opt => {
      buttonsHTML += `<button class="chat-option-btn btn" data-cmd="${opt.cmd}" style="padding: 12px; font-size: 0.85rem; border-radius: 8px; justify-content: start; text-align: left; background: #f1f5f9; color: #001b41; border: 1px solid #e2e8f0; font-weight: 500;">
                        ${opt.text}
                      </button>`;
    });
    buttonsHTML += '</div>';

    if (showWelcome) {
      chatbox.innerHTML += `<div class="bot-msg-wrap"><p class="bot-message" style="background:#001b41; color:#fff; border-radius:15px 15px 15px 0; padding:12px 16px; margin-bottom:15px;">${translations[currentLang].bot_welcome}</p></div>`;
    }
    chatbox.innerHTML += buttonsHTML;
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  window.showOptions = showOptions;
})();

document.addEventListener("DOMContentLoaded", () => {
  translateUI();
  if (homeLink) {
    homeLink.click();
  }
});
