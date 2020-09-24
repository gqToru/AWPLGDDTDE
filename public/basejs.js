var trabajo = document.getElementById("trabajo");
var estudio = document.getElementById("estudio");
var libre = document.getElementById("libre");
var limpiar = document.getElementById("limpiar");
var casilla = document.getElementsByTagName('td');
var valor = 0;
var arrayMateriasSelected = [];
var fila = 26;
var respond = 0;


//Declaración del array de 9 posiciones
var nuevoArray = new Array(fila);
//Bucle para meter en cada posición otros array de 7
for(var i=0; i<fila; i++) {
    nuevoArray[i] = new Array(7);
}

for(var i=0; i<fila; i++){
    for(var j=0; j<7; j++){
        nuevoArray[i][j]= '';
    }
}

// ============= AQUI EMPIEZAN LOS CAMBIOS DE LA VAINA DE LA SELECCIÖN MÜLTIPLE =================

/*
var testo = document.documentElement;
testo.addEventListener('mousedown', function(){
    respond = 1;
});
testo.addEventListener('mouseup', function(){
    respond = 0;
});*/

var mouseState = {'mousedown': false, 'mouseup': false};


// ========== CAMBIOS PARA SOLUCIONAR EL (BUG) FEATURE
for (var i = 0; i < casilla.length; i++){
    if (i % 8 != 0){
    	['mouseover', 'mousedown', 'mouseup'].forEach(event => casilla[i].addEventListener(event, table
    	));
    } 
}


function table(e){
	mouseState[e.type] = e.type == 'mousedown' || e.type == 'mouseup';
	if(mouseState.mousedown == true && mouseState.mouseup == false){
		let field = e.target;
		field.behaviour = valor;
		nuevoArray[parseInt(field.className)][field.cellIndex-1] = field.behaviour;
		if (valor == ''){
            field.style.backgroundColor = 'white';
        }
        else if (valor == 1){
            field.style.backgroundColor = '#228be6';
        }
        else{
            field.style.backgroundColor = '#fa5252';
        };
	}
	else{
		mouseState = {'mousedown': false, 'mouseup': false};
	}

}
		/*
		console.log(e);
        if(respond == 1){
        var field = e.target;
        field.behaviour = valor;
        //console.log(field.cellIndex-1);
        //console.log(parseInt(field.className));
        nuevoArray[parseInt(field.className)][field.cellIndex-1] = field.behaviour;
    if (valor == 0){
            field.style.backgroundColor = 'white';
        }else if (valor == 1){
            field.style.backgroundColor = '#228be6';
        }else{
            field.style.backgroundColor = '#fa5252';
        };
        }
        */

// ================= AQUI TERMINAN ==================

function activate (accion){
        if (accion == 'red'){
            if (valor == '' || valor == 1){
                valor = 2;            
            }else{
                valor = '';
                           
           }
        }else if (accion == 'blue'){
            if (valor == 2 || valor == ''){
                valor = 1;            
            }else{
                valor = '';       
           }
        }else if (accion == 'white'){
            if (valor == 1 || valor == 2){
                valor = '';
                
            }else{
                valor = '';
                
            }
           }else if (accion == 'clear'){
               for (var i = 0; i < casilla.length; i++){
                   if(i % 8 != 0 && i > 8 && i !=217 && i !=218 && i !=219 && i !=220 && i !=221 && i !=222 && i !=223){                       
                   casilla[i].style.backgroundColor = 'white';
                }
               }

                   for(var i=0; i<fila; i++){
                    for(var j=0; j<7; j++){
                        nuevoArray[i][j]= '';
                    }
                }
                   
               
           }
           if (valor == 1){
            trabajo.style.color = 'black';
            estudio.style.color = '#228be6';
            libre.style.color = 'black';
           }else if (valor == 2){
            trabajo.style.color = '#fa5252';
            estudio.style.color = 'black';
            libre.style.color = 'black';
           }else{
            trabajo.style.color = 'black';
            estudio.style.color = 'black';
            libre.style.color = '#51cf66';
           }
           //console.log('activado:' + valor);
    }

    //prueba ***********




var two = document.getElementById('second')
var one = document.getElementById('first')
var three = document.getElementById('third')
var b = document.getElementById('click');
var datos = [
    {nombre:'Extracadémica' ,codigo:'0021111' , creditos: 1, evaluacion:1},
    {nombre:'Comprensión y expresión Lingüística I' ,codigo:'0061013' , creditos: 3, evaluacion:1, libros: ["ARANGUREN, José (1975). La comunicación humana. Madrid: Guadarrama." ,  "AGÜERO, Luis (1983). Lengua y Comunicación Manual del Estudiante. Caracas: Instituto Universitario de Mejoramiento Profesional del Magisterio." ,  "BASULTO, Hilda. Curso de Redacción Dinámica. México: Trillas."]},
    {nombre:'Inglés Instrumental' ,codigo:'0071823' , creditos: 3, evaluacion:1, libros: ["Boeekner and Brown. English for computing. New York. University Press, 1994.", "Glendinning, Eric and McEwan, John. English for electronics. New York, Oxford University Press, 1994.", "Glendinning, Eric and Glendinning, Norman. English for electronics and mechanical engineering. Oxford University Press, New York, 1995."]},
    {nombre:'Matemáticas I' ,codigo:'0081814' , creditos: 4, evaluacion:2, libros: []},
    {nombre:'Desarrollo de Destrezas para el Aprendizaje' ,codigo:'0091012' , creditos: 2, evaluacion:1, libros: [" Aduma, A. (1993). Curso de hábitos de estudio y autocontrol. México: Editorial Trillas.","De Bono, E. (1988). Seis sombreros para pensar. Ediciones Juan Granica S.A. Barcelona, España","Ríos, P. (1999). La aventura de aprender. Caracas: Editorial Texto. Caracas, Venezuela."]},
    {nombre:'Química General' ,codigo:'0101214' , creditos: 4, evaluacion:2, libros: []},
    {nombre:'Extracadémica (Deportiva)' ,codigo:'0151111' , creditos: 1, evaluacion:1},
    {nombre:'Comprensión y Expresión Lingüística II' ,codigo:'0061023' , creditos: 3, evaluacion:1, libros: ["BASULTO, Hilda. Curso de Redacción Dinámica. México: Trillas.","BROWN, Fortunato (1990). Principios de redacción. Caracas: ABCD","GÓMEZ, Prudencia. (1974). Técnica de Expresión I.Barcelona: Oikos-Tous."]},
    {nombre:'Inglés Técnico I' ,codigo:'0071121' , creditos: 1, evaluacion:1, libros: ["Glending, E & Mc. Ewan, Oxford. English for Electronis. Oxford: Oxford University Press. 1994", "Robb, L. Diccionario para Ingenieros. Español- Inglés. México Compañía Editorial Continental S.A. 1992."]},
    {nombre:'Matemáticas II' ,codigo:'0081824' , creditos: 4, evaluacion:2, libros: []},
    {nombre:'Intr. a la Lógica Formal y Algoritmos' ,codigo:'0721162' , creditos: 2, evaluacion:2, libros: ["Fatone, Vicente. “Lógica y Teoría del Conocimiento”. Kapeluz. Buenos Aires.","Figerman G. 1998. Lógica y Teoría del Conocimiento. Editorial Librería Ateneo.","Miró Quesada, Francisco. “Lógica”. Lima."]},
    {nombre:'Electivas Socio humanísticas (1)' ,codigo:'0000003' , creditos: 3, evaluacion:1, libros: []},
    {nombre:'Laboratorio de Física I' ,codigo:'0052131' , creditos: 1, evaluacion:2, libros: []},
    {nombre:'Física II' ,codigo:'0052134' , creditos: 4, evaluacion:2, libros: []},
    {nombre:'Matemáticas III' ,codigo:'0082814' , creditos: 4, evaluacion:2, libros: []},
    {nombre:'Introducción a la Ingeniería de Sistemas'  ,codigo:'0712642' , creditos: 2, evaluacion:1, libros: ["Brian, W. 1993. Sistemas: Conceptos, Metodología y Aplicaciones. Grupo Noriega Editores. Mexico","Genova, M. – Guzmán, J. Introducción a la Ingeniería de Sistemas. Universidad Nacional Abierta. Venezuela","Checkland, Peter. 1993. Pensamiento de Sistemas: Prácticas de Sistemas. Editorial Limusa. Mexico"]},
    {nombre:'Programación Orientada a Objetos (POO)' ,codigo:'0722103' , creditos: 3, evaluacion:1, libros: ["Budd, T. 2001. Introduction to Object Oriented Programming. 3rd Edition. Addison Wesley","Gamma E. - Helm, R, Johnson, R. – Vlissides, J. 1995. Design Patterns, Addison Wesley","Stroustrup, B. El Lenguaje de Programación C++. 2da Edición. Addison Wesley."]},
    {nombre:'Taller de Programación Orientada a Objetos (POO)' ,codigo:'0722111' , creditos: 1, evaluacion:2, libros: ["Budd, T. 2001. Introduction to Object Oriented Programming. 3rd Edition. Addison Wesley","Gamma E. - Helm, R, Johnson, R. – Vlissides, J. 1995. Design Patterns, Addison Wesley","Stroustrup, B. El Lenguaje de Programación C++. 2da Edición. Addison Wesley."]},
    {nombre:'Electivas Socio humanísticas (2)' ,codigo:'0000003' , creditos: 3, evaluacion:1},
    {nombre:'Metodología de la Investigación' ,codigo:'0073023' , creditos: 3, evaluacion:1, libros: ["Sierra Bravo, R. Tesis Doctorales y Trabajos de Investigación Científica. Tercera edición. Paraninfo. Madrid. 1995.","Valladares de Salcedo, L. Tesis de Grado. Bases Teóricas y Apoyos Metodológicos. Caracas: Academia Nacional de Ciencias Económicas. 1993"]},
    {nombre:'Matemáticas IV' ,codigo:'0082824' , creditos:4, evaluacion:2, libros: []},
    {nombre:'Estadística I' ,codigo:'0623313' , creditos:3, evaluacion:2, libros: ["Canavos, George C. Probabilidad y Estadística. Aplicaciones y Métodos. Segunda edición. México:McGraw Hill. 1995.","Meyer, Paul Probabilidad y Aplicaciones Estadísticas. Segunda Edición. México: Addison Wesley Longman de México S.A. 1998.","Mendenhall, William y Sincich, Ferry. Probabilidad y Estadística para Ingeniería y Ciencias. Cuarta Edición. México: Prentice-Hall Hispanoamericana, S.A. 1997."]},
    {nombre:'Introducción a la Economía' ,codigo:'0712142' , creditos:2, evaluacion:1, libros: ["Samuelson, Paul - Nordahaus, William. 1996. Economía. Editorial Mc Graw Hill. España","Polimeni, Ralph - Fabozzi, Frank. 1994. Contabilidad de Costos. Editorial Mc Graw Hill.","Maza, Zabala – González, Antonio. 1992. Teoría Económica. Editorial Quisqueya. Tercera Edición República Dominicana"]},
    {nombre:'Objetos y Abstracción de Datos' ,codigo:'0722123' , creditos:3, evaluacion:1, libros: ["Carrano, F. – Prichard, J. 2001. Data Abstraction and Problem Solving with C++: Walls and Mirrors. 3rd Edition. Addison Wesley.","Sedgewick, R. 2001. Algorithms in C++. Addison Wesley","Meyer, B. 1998. Construcción de Software Orientado a Objetos. 2da Edición. Prentice may"]},
    {nombre:'Taller de Objeto y Abstracción de Datos' ,codigo:'0722131' , creditos:1, evaluacion:2, libros: [" Carrano, F. - Prichard, J. 2001. Data Abstraction and Problem Solving with C++: Walls and Mirrors. 3rd Edition. Addison Wesley.","Main, M. – Saviktch, W. 2000.Data Structures and Other Objects Using C++. 2nd Edition. Addison Wesley","Meyer, B. 1998. Construcción de Software Orientado a Objetos. 2da Edición. Prentice may."]},
    {nombre:'Estadística II' ,codigo:'0624622' , creditos:2, evaluacion:2, libros: ["Canavos, George C. Probabilidad y Estadística. Aplicaciones y Métodos. Segunda edición. México:McGraw Hill. 1995.","Meyer, Paul Probabilidad y Aplicaciones Estadísticas. Segunda Edición. México: Addison Wesley Longman de México S.A. 1998.","Mendenhall, William y Sincich, Ferry. Probabilidad y Estadística para Ingeniería y Ciencias. Cuarta Edición. México: Prentice-Hall Hispanoamericana, S.A. 1997."]},
    {nombre:'Inferencia y Diseño de Experimentos' ,codigo:'0713122' , creditos:2, evaluacion:2, libros: ["Murray, Spiegel. 1991. Probabilidades y Estadística. Editorial Mc Graw Hill. México","Walpole – Myers – Myers. 1998. Probabilidad y Estadística para Ingenieros. Sexta Edición. Editorial Prentice Hall.","Meyer, Paul. 1998. Probabilidad y Aplicaciones Estadísticas. Editorial Addison-Wesley Longman. México."]},
    {nombre:'Sistemas de Costo' ,codigo:'0713172' , creditos:2, evaluacion:1, libros: ["Fabrycky W., Thuesen G. 1981. Decisiones Económicas. Análisis y Proyectos. Editorial Prentice Hall Internacional.","Finney, Miller. 2000. Curso de Contabilidad. Tomo I, II, III, IV. Editorial Vetha. México.","Polimeni, Ralph – Fabozzi, Frank. 1994. Contabilidad de Costos. Editorial Mc Graw Hill."]},
    {nombre:'Circuitos y Sistemas' ,codigo:'0713463' , creditos:3, evaluacion:2, libros: ["Ryder J. D. 1973. Introduction to Circuit Análisis. Editorial Prentice-Hall, Inc. Englewood Cliffs, Nueva Jersey","Valkenburg, Van. 1990. Análisis de Redes. Tercera Edición. Editorial Limusa, S.A. México.","Bobrow, L. 1984. Análisis de Circuitos Eléctricos. Editorial Interamericana S. A. de C. V. México"]},
    {nombre:'Teoría de Sistemas' ,codigo:'0713632' , creditos:2, evaluacion:1, libros: ["Brian, W. 1993. Sistemas: Conceptos, Metodología y Aplicaciones. Grupo Noriega Editores. Mexico","Johansen, O. 2000. Introducción a la Teoría General de Sistemas. Editorial Limusa. México.","Van Gigch, John. 2000. Teoría General de Sistemas. Editorial Trillas. México."]},
    {nombre:'Sistemas de Operación' ,codigo:'0713643' , creditos:3, evaluacion:2, libros: ["Gardner, James. 1995. Aprendiendo UNIX. Segunda Edición. Editorial Prentice Hall. México","Silberschatz, Peterson – Calvin, J. 1994. Sistemas Operativos. Editorial Addison Wesley. Wilmington, E.U.A.","Tanenbaum, Andrews. 1993. Sistemas Operativos Modernos. Editorial Prentice Hall. México."]},
    {nombre:'Métodos Numéricos' ,codigo:'0723913' , creditos:3, evaluacion:2, libros: ["Ledanois, J. – López, A. – Pimentel, J. 2000. Métodos Numéricos Aplicados en Ingeniería. Editorial Mc Graw Hill.","Smith, Allen. 1993. Análisis Numéricos. Editorial Prentice Hall Hispanoamericana. México.","Nakamura, Schoichiro. 1994. Métodos Numéricos Aplicados con Software. Editorial Prentice Hall Hispanoamericana. México"]},
    {nombre:'Economía de Empresas' ,codigo:'0713113' , creditos:3, evaluacion:1, libros: ["Baca Urbina, Gabriel. 1994. Ingeniería Económica. Primera Edición. Editorial Mc Graw Hill. Mexico","Baca Urbina, Gabriel. 1994. Ingeniería Económica. Primera Edición. Editorial Mc Graw Hill."]},
    {nombre:'Admón. de Sistemas De Base de Datos' ,codigo:'0713622' , creditos:2, evaluacion:1, libros: ["Date, C. 2001. Introducción a los Sistemas de Bases de Datos. Septima Edición. Editorial Addison-Wesley.","Rodríguez, M. 1992. Bases de Datos. Primera Edición. Editorial Mc Graw Hill.","Groff, J. 1991. Aplique SQL. Primera Edición. Editorial Osborne / Mc Graw Hill."]},
    {nombre:'Enfoque Sistémico' ,codigo:'0713633' , creditos:3, evaluacion:1, libros: ["Aracil, J. – Gordillo, Francisco. 1997. Dinámica de Sistemas. Editorial Alianza. Madrid.","Checkland, Peter. 1993. Pensamiento de Sistemas: Prácticas de Sistemas. Editorial Limusa. México.","Lopez Garay, Hernan. 1994. Modelado Sistémico o Diseño de Medios de Revelado. ULA. Venezuela"]},
    {nombre:'Análisis de Decisiones' ,codigo:'0713653' , creditos:3, evaluacion:2, libros: ["Bonini – Hausman - Bierman. 2000 Análisis Cuantitativo para los Negocios. Novena Edición. Editorial Mc Graw Hill - Irwin. Colombia.","Handy, Taha. 1998. Investigación de Operaciones. Una introducción PH. México.","Anderson, D. – Sweeney, D. – Williams, T. 1993. Introducción a los Modelos Cuantitativos para la Administración. Grupo Editorial Iberoamericana. Mexico"]},
    {nombre:'Optimización de Operaciones' ,codigo:'0713663' , creditos:3, evaluacion:2, libros: ["Bonini – Hausman - Bierman. 2000. Análisis Cuantitativo para los Negocios. Novena Edición. Editorial Mc Graw Hill - Irwin. Colombia.","Handy, Taha. 1998. Investigación de Operaciones. Una introducción PH. México.","Gould – Eppen - Schmidt. 1992. Investigación de Operaciones en la Ciencia Administrativa. Editorial Prentice Hall. México."]},
    {nombre:'Electrónica' ,codigo:'0723533' , creditos:3, evaluacion:2, libros: ["Malvino, Albert. 1999. Principios de Electrónica. Sexta Edición. Editorial Mc Graw Hill. Madrid.","Neamen, Donald. 1999. Análisis y Diseño de Circuitos Electrónicos. Editorial Mc Graw Hill. México.","Coughlin, R. – Driscoll, F. 1996. Análisis y Diseño de Circuitos Integrados Lineales. Cuarta Edición. Editorial Prentice Hall."]},
    {nombre:'Preparación  Evaluación y Control de Proyectos (PECP)' ,codigo:'0714153' , creditos:3, evaluacion:1, libros: ["Urbina, Baca G. 1995. Evaluación de Proyectos. Tercera. Edición. Editorial Mc Graw Hill. México","Largo, Gualberto – Rueda, Luis. 1995 Gerencia de Proyectos y Obras de Ingeniería. Un compendio práctico. Universidad de Carabobo.","Nassir – Sapag, Chain. Fundamentos de Preparación y Evaluación de Proyectos."]},
    {nombre:'Análisis y Diseño de Sistemas de Información (ADSI)' ,codigo:'0714323' , creditos:3, evaluacion:1, libros: ["Kendall – Kendall. 1995. Análisis y Diseño de Sistemas de Información. Editorial Prentice Hall. Mexico","Laudon, K – Laudon, J. 1994. Sistemas de Información para la Administración. Organización y Tecnología. Editorial Prentice Hall","Fabregas, J. – Horens. 1991. Sistemas de Información: Planificación, Análisis y Diseño. Editorial Miro. Venezuela."]},
    {nombre:'Modelos de Operaciones I' ,codigo:'0714633' , creditos:3, evaluacion:2, libros: ["Bonini – Hausman - Bierman. 2000. Análisis Cuantitativo para los Negocios. Novena Edición. Editorial Mc Graw Hill - Irwin. Colombia","Handy, Taha. 1998. Investigación de Operaciones. Una introducción PH. México.","Aquilano, CH. 1994. Dirección de la Producción y de las Operaciones. Sexta Edición. Editorial Mc Graw Hill. USA."]},
    {nombre:'Sistemas Dinámicos' ,codigo:'0714643' , creditos:3, evaluacion:2, libros: ["Grantham, W. – Vincent, T. 1998. Sistemas de Control Moderno. Editorial Limusa. México","Ogata, Katsuhiko. 1993. Ingeniería de Control Moderna. Segunda Edición. Editorial Prentice Hall.","Hostetter, G. – Savant, C. – Stefani, R. 1990. Sistemas de Control. Editorial Mc Graw Hill."]},
    {nombre:'Laboratorio de Circuitos y Electrónica' ,codigo:'0724641' , creditos:1, evaluacion:1, libros: ["Neamen, Donald. 1999. Análisis y Diseño de Circuitos Electrónicos. Editorial Mc Graw Hill. México","Cooper, William - Helfrick, A. 1991. Instrumentación Electrónica, Modernas y Técnicas de Medición. Editorial Prentice Hall Hispanoamericana, S.A. México.","Johnson, D. – Hilburn, Johnson. 1991. Análisis Básico de Circuitos Eléctricos. Editorial Prentice Hall Hispanoamericana, S.A. México"]},
    {nombre:'Administración Financiera de Empresas' ,codigo:'0625613' , creditos:3, evaluacion:1, libros: ["Van Horne James. Fundamentos de Administración Financiera. Madrid: Prentice Hall Internacional, N.J: Englewood Cliffs, 1998 by Dossat S.A.","Weston F. Brigham. E. Administración Financiera de Empresas. México: Interamericana. 1978."," Mora M. Ricardo. Función Financiera en La Empresa. Interamericana. S.A. México: 1999."]},
    {nombre:'Gestión Empresarial I' ,codigo:'0714123' , creditos:3, evaluacion:1, libros: ["Pressman, Roger. 1995. Ingeniería de Software: Un Enfoque Estructurado. Tercera Edición. Editorial Mc Graw Hill.","Murdick, R. – Munson, J. 1993. Sistemas de Información Administrativa. Editorial Prentice Hall","Echenique, José. 1990. Auditoria en Informática. Editorial Mc Graw Hill. México."]},
    {nombre:'Modelos de Operaciones II' ,codigo:'0714133' , creditos:3, evaluacion:2, libros: ["Handy, Taha. 1998. Investigación de Operaciones. Una introducción PH. México.","Gould – Eppen - Schmidt. 1992. Investigación de Operaciones en la Ciencia Administrativa. Editorial Prentice Hall. México.","Anderson, D. – Sweeney, D. – Williams, T. 1993. Introducción a los Modelos Cuantitativos para la Administración. Grupo Editorial Iberoamericana. México."]},
    {nombre:'Aplicación y Auditoria de Sistemas  de Inform.' ,codigo:'0714612' , creditos:2, evaluacion:1, libros: ["Echenique, José. 1990. Auditoria en Informática. Editorial Mc Graw Hill. México","Schmuller, J. 2000. Aprendiendo UML en 24 horas. Primera Edición. Editorial Prentice Hall","Sommerville,I. 2005. Ingeniería del Software. Séptima Edición. Editorial Addison Wesley"]},
    {nombre:'Sistemas de Comunicación Industrial' ,codigo:'0714642' , creditos:2, evaluacion:1, libros: ["Adam, J. – Malgalhaes, M. Ramamritham, K. 1998. Developing Predictable and Flexible Distribuited Real Time Systems. Control Eng. Practice. Vol. 6. Nº 1.","Gil, J. – Pont, A. 1997. Análisis and Similation of a Deterministic Multiple Access Communication Protocol. Euro-PDS´97. Barcelona, Spain.","García, H. 1997. A Hierarchical Plataform for Implementing Hybrid Systems in Process Control. Control Eng. Practice. Vol. 5. Nº 6.","Tanenbaum, A. 1996. Computer Network. Tercera Edición. Editorial Prentice Hall. México."]},
    {nombre:'Leyes y Deontología' ,codigo:'0625822' , creditos:2, evaluacion:1, libros: ["Constitución de la República Bolivariana de Venezuela, Ley Orgánica del trabajo, Ley de condiciones y medio ambiente del trabajo, Código Procesal Civil, Ley de Universidades, Leyes, normas y reglamentos vigentes."]},
    {nombre:'Planificación Estratégica' ,codigo:'0715112' , creditos:2, evaluacion:1, libros: ["David, Fred. 1997. Conceptos de Administración Estratégica. Editorial Prentice Hall. México","Morrisey, George. 1995. Planeación Táctica. Editorial Prentice Hall Interamericana. México","Thompson - Strickland. 1994. Dirección y Administración Estratégica, Conceptos, Casos y Lecturas. Edición Especial en Español, Addison Wesley. México."]},
];

function construirMateria(){
    for (i=0;i<49;i++){
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');
        let h6 = document.createElement('h6');
        let h7 = document.createElement('h6');
        let checkboxCont = document.createElement('div');
        let body = document.getElementById('innerFirst');
        body.backgroundColor = 'white';
        body.append(div);
        div.classList.add('materia');
        div.setAttribute('clicko', '0');      
        div.append(h4);
        h4.innerHTML = datos[i].nombre;
        div.append(h5);
        h5.innerHTML = 'Numero de creditos: '+ datos[i].creditos;            
        div.append(h6);
        h6.innerHTML = 'Codigo de la asignatura: '+ datos[i].codigo;
        div.append(h7);
        h7.innerHTML = '-  Importancia personal +'
        h7.style.display = 'none';
        div.append(checkboxCont);        
        checkboxCont.style.margin = 'auto'
        checkboxCont.style.display = 'none';      
        var fragment = document.createDocumentFragment();
        var intensity;
        var intensityText = -3;
        for (var j=0; j<5; j++){
           intensity = document.createElement('input');
           intensity.style.width = '20px'
           intensity.style.height = '20px'
           intensity.style.margin = '2px'
           intensity.style.display = 'inline-block';
           intensity.setAttribute('type', 'radio')
           intensity.setAttribute('name', 'checkboxgroup'+i);
           intensity.setAttribute('name', 'checkboxgroup'+i);
           if (j==2){
               intensity.setAttribute('checked', '');
           }
           intensity.style.textAlign = 'center';
           intensity.style.border = '1px black solid'
           intensity.classList.add('intensity');
           intensityText = intensityText+1;
           intensity.innerHTML = intensityText;
           fragment.appendChild(intensity);
        }  
        checkboxCont.appendChild(fragment);

        div.addEventListener('click', function(){
            div.classList.toggle('selected');
            h7.classList.toggle('pantallaOff');
           // console.log(this.attributes.clicko.value);
            if (this.attributes.clicko.value == 0){
                checkboxCont.style.display = 'block'
                h7.style.display = 'block'
                this.attributes.clicko.value = 1;
            }else{
                checkboxCont.style.display = 'none'
                h7.style.display = 'none'
                this.attributes.clicko.value = 0;
            }
        });    
    }
    var check = document.getElementsByClassName('intensity');
    for(i=0; i<check.length; i++){
    check[i].addEventListener('click', function(event){
       // console.log("s");
        event.stopPropagation();
    });
    }
}
construirMateria();
b.addEventListener('click', function(){
    if (one.className == 'pantallaOn'){
        one.classList.remove('pantallaOn');
        one.classList.add('pantallaOff');
        two.classList.remove('pantallaOff');
        two.classList.add('pantallaOn');

        // Guardar las materias seleccionadas (en arrayMateriasSelected -declarada al principio del documento-)
        var setMateriasSelected = document.querySelectorAll(".materia.selected");

        Array.from(setMateriasSelected).forEach(function(materia){
            let materiaTitle = materia.querySelector("h4").innerText;
            let importancia = parseInt(materia.querySelector("input[type='radio']:checked").innerText);
            let materiaObject;

            for(let i=0; i < datos.length; i++){
                if(datos[i].nombre == materiaTitle){
                    materiaObject = datos[i];
                    break;
                }
            }

            // Agregar al objeto la propiedad "ponderación", basado en el siguiente modelo matemático:
            // ponderación = 50 + (importancia)*10 +(evaluacion)*5 (creditos)*5 - 10*included
            // (included representa un valor que aumenta por cada bloque de hora en el cual ya se haya
            // incluído la materia en el día)
            materiaObject.included = 0;
            materiaObject.importancia = importancia;
            materiaObject.calcPonderacion = function(){
                this.ponderacion = 40 + this.importancia*15  + this.evaluacion*5 + this.creditos*5 - 10*this.included;
            }
            materiaObject.calcPonderacion();

            arrayMateriasSelected.push(materiaObject);
        });






    }else if(two.className == 'pantallaOn'){
        two.classList.remove('pantallaOn');
        two.classList.add('pantallaOff');
        three.classList.remove('pantallaOff');
        three.classList.add('pantallaOn');
        b.addEventListener('click', send);
        b.addEventListener('click', send2);

        
        for (var i = 0; i < casilla.length; i++){
            if (i % 8 != 0){
                ['mouseover', 'mouseup', 'mousedown'].forEach(event => casilla[i].removeEventListener(event, table));
            }
        }
        for(var i=0; i<7; i++){
            max = 0;
            var ya = false;
            for(var j=0; j<fila; j++){
                var juntos = 0;
                if(j<22){
                    for(var l = j; l < j+5; l++){                                        
                        if(nuevoArray[l][i] == ''){
                            juntos++;
                            if(juntos == 5){
                                ya = true;
                            }
                        }else{
                            juntos = 0;
                        }
                    }
                }
                if(ya == true && max < 5){
                    for(var m = j; m<j+4; m++){
                        nuevoArray[m][i]= 5;
                        max++;
                    }                
                }
            }
        }

        // Distribuir las materias para cada día.
        let tempArray = [];
        let materiaToAssign;
        for(let i=0; i < 7; i++){
            for(let j=0; j < nuevoArray.length; j++){
                if(tempArray.every((element) => element.ponderacion <= 0) || tempArray.length == 0){
                    tempArray = copyArray(arrayMateriasSelected);
                }
                if(nuevoArray[j][i] == 5){
                    tempArray.sort(function(x, y){
                        if(x.ponderacion < y.ponderacion){
                            return -1;
                        }
                    });
                    materiaToAssign = tempArray[tempArray.length-1];
                    materiaToAssign.included += 1;
                    materiaToAssign.calcPonderacion();
                    nuevoArray[j][i] = materiaToAssign.nombre;
                }
            }
        }    
}
    for(var k= 0; k< 7; k++){
        let temporal = [];
        for(var j= 0; j< fila; j++){
            if (isNaN(nuevoArray[j][k])){
                temporal.push(nuevoArray[j][k]);                
            }
        }
        temporal.sort();
      //  console.log(temporal);        
        let space = 0;
        for(var j = 0; j< fila; j++){
                      
            if (isNaN(nuevoArray[j][k])){
                if(space <temporal.length){
                nuevoArray[j][k] = temporal[space];
                space++;
                }                                
            }
        }        
    }
    var finalTable = document.getElementsByClassName('finalT');
    var cell = 0;
        for(var j= 0; j< fila; j++){
            for(var k= 0; k< 7; k++){               
                finalTable[cell].innerHTML = nuevoArray[j][k];               
                if(finalTable[cell].innerHTML == '2'){
                    finalTable[cell].style.backgroundColor = '#fa5252';
                    finalTable[cell].innerHTML = ' ';
                }else if (finalTable[cell].innerHTML == '1'){
                    finalTable[cell].style.backgroundColor = '#228be6';
                    finalTable[cell].innerHTML = ' ';
                }
                cell++;   
            }
        }
    }
)

function copyArray(array){    
    // Función para copiar el arrayMateriasSelected
    let arrayReturned = [];
    array.forEach(function(materia_element){
        arrayReturned.push(Object.assign({}, materia_element));
    });
    return arrayReturned;
}

function send(){
         var testJson = JSON.stringify(nuevoArray);
        $.ajax({
        url : "/ajaxRoute",
        type: "POST",
       dataType:'json',
        data : {
            arrayBox: testJson        
        },
        success: function(data){
            console.log(data.msg); // 'OK'
        },
    });
}

function send2(){
    var testJson2 = JSON.stringify(arrayMateriasSelected);
    
    console.log(testJson2);
        $.ajax({
        url : "/ajaxRoute2",
        type: "POST",
       dataType:'json',
        data : {            
            arraySelected: testJson2
        },
        success: function(data){
            console.log(data.msg); // 'OK'
        },
    });
    //three.classList.add('pantallaOff');
    //b.classList.add('pantallaOff');
    //location.reload(true);
    setTimeout(function() {
        location.reload(true);
    }, 1000);    
}