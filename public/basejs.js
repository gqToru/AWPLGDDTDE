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
        nuevoArray[i][j]= 0;
    }
}
var testo = document.documentElement;
testo.addEventListener('mousedown', function(){
    respond = 1;

});
testo.addEventListener('mouseup', function(){
    respond = 0;
});


for (var i = 0; i < casilla.length; i++){
    if (i > 8 && i!= 16 && i!= 24 && i!= 32 && i!= 40 && i!= 48 && i!= 56 && i!= 64 && i!= 72){
        casilla[i].addEventListener( 'mouseover', table);        
    } 
}


function table(e){
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
    }

function activate (accion){
        if (accion == 'red'){
            if (valor == 0 || valor == 1){
                valor = 2;            
            }else{
                valor = 0;
                           
           }
        }else if (accion == 'blue'){
            if (valor == 2 || valor == 0){
                valor = 1;            
            }else{
                valor = 0;       
           }
        }else if (accion == 'white'){
            if (valor == 1 || valor == 2){
                valor = 0;
                
            }else{
                valor = 0;
                
            }
           }else if (accion == 'clear'){
               for (var i = 0; i < casilla.length; i++){
                   if(i % 8 != 0 && i > 8 && i !=81 && i !=82 && i !=83 && i !=84 && i !=85 && i !=86 && i !=87){                       
                   casilla[i].style.backgroundColor = 'white';
                }
               }

                   for(var i=0; i<fila; i++){
                    for(var j=0; j<7; j++){
                        nuevoArray[i][j]= 0;
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
    {nombre:'Comprensión y expresión Lingüística I' ,codigo:'0061013' , creditos: 3, evaluacion:1},
    {nombre:'Inglés Instrumental' ,codigo:'0071823' , creditos: 3, evaluacion:1},
    {nombre:'Matemáticas I' ,codigo:'0081814' , creditos: 4, evaluacion:2},
    {nombre:'Desarrollo de Destrezas para el Aprendizaje' ,codigo:'0091012' , creditos: 2, evaluacion:1},
    {nombre:'Química General' ,codigo:'0101214' , creditos: 4, evaluacion:2},
    {nombre:'Extracadémica (Deportiva)' ,codigo:'0151111' , creditos: 1, evaluacion:1},
    {nombre:'Comprensión y Expresión Lingüística II' ,codigo:'0061023' , creditos: 3, evaluacion:1},
    {nombre:'Inglés Técnico I' ,codigo:'0071121' , creditos: 1, evaluacion:1},
    {nombre:'Matemáticas II' ,codigo:'0081824' , creditos: 4, evaluacion:2},
    {nombre:'Intr. a la Lógica Formal y Algoritmos' ,codigo:'0721162' , creditos: 2, evaluacion:2},
    {nombre:'Electivas Socio humanísticas (1)' ,codigo:'0000003' , creditos: 3, evaluacion:1},
    {nombre:'Laboratorio de Física I' ,codigo:'0052131' , creditos: 1, evaluacion:2},
    {nombre:'Física II' ,codigo:'0052134' , creditos: 4, evaluacion:2},
    {nombre:'Matemáticas III' ,codigo:'0082814' , creditos: 4, evaluacion:2},
    {nombre:'Introducción a la Ingeniería de Sistemas'  ,codigo:'0712642' , creditos: 2, evaluacion:1},
    {nombre:'Programación Orientada a Objetos (POO)' ,codigo:'0722103' , creditos: 3, evaluacion:1},
    {nombre:'Taller de Programación Orientada a Objetos (POO)' ,codigo:'0722111' , creditos: 1, evaluacion:2},
    {nombre:'Electivas Socio humanísticas (2)' ,codigo:'0000003' , creditos: 3, evaluacion:1},
    {nombre:'Metodología de la Investigación' ,codigo:'0073023' , creditos: 3, evaluacion:1},
    {nombre:'Matemáticas IV' ,codigo:'0082824' , creditos:4, evaluacion:2},
    {nombre:'Estadística I' ,codigo:'0623313' , creditos:3, evaluacion:2},
    {nombre:'Introducción a la Economía' ,codigo:'0712142' , creditos:2, evaluacion:1},
    {nombre:'Objetos y Abstracción de Datos' ,codigo:'0722123' , creditos:3, evaluacion:1},
    {nombre:'Taller de Objeto y Abstracción de Datos' ,codigo:'0722131' , creditos:1, evaluacion:2},
    {nombre:'Estadística II' ,codigo:'0624622' , creditos:2, evaluacion:2},
    {nombre:'Inferencia y Diseño de Experimentos' ,codigo:'0713122' , creditos:2, evaluacion:2},
    {nombre:'Sistemas de Costo' ,codigo:'0713172' , creditos:2, evaluacion:1},
    {nombre:'Circuitos y Sistemas' ,codigo:'0713463' , creditos:3, evaluacion:2},
    {nombre:'Teoría de Sistemas' ,codigo:'0713632' , creditos:2, evaluacion:1},
    {nombre:'Sistemas de Operación' ,codigo:'0713643' , creditos:3, evaluacion:2},
    {nombre:'Métodos Numéricos' ,codigo:'0723913' , creditos:3, evaluacion:2},
    {nombre:'Economía de Empresas' ,codigo:'0713113' , creditos:3, evaluacion:1},
    {nombre:'Admón. de Sistemas De Base de Datos' ,codigo:'0713622' , creditos:2, evaluacion:1},
    {nombre:'Enfoque Sistémico' ,codigo:'0713633' , creditos:3, evaluacion:1},
    {nombre:'Análisis de Decisiones' ,codigo:'0713653' , creditos:3, evaluacion:2},
    {nombre:'Optimización de Operaciones' ,codigo:'0713663' , creditos:3, evaluacion:2},
    {nombre:'Electrónica' ,codigo:'0723533' , creditos:3, evaluacion:2},
    {nombre:'Preparación  Evaluación y Control de Proyectos (PECP)' ,codigo:'0714153' , creditos:3, evaluacion:1},
    {nombre:'Análisis y Diseño de Sistemas de Información (ADSI)' ,codigo:'0714323' , creditos:3, evaluacion:1},
    {nombre:'Modelos de Operaciones I' ,codigo:'0714633' , creditos:3, evaluacion:2},
    {nombre:'Sistemas Dinámicos' ,codigo:'0714643' , creditos:3, evaluacion:2},
    {nombre:'Laboratorio de Circuitos y Electrónica' ,codigo:'0724641' , creditos:1, evaluacion:1},
    {nombre:'Administración Financiera de Empresas' ,codigo:'0625613' , creditos:3, evaluacion:1},
    {nombre:'Gestión Empresarial I' ,codigo:'0714123' , creditos:3, evaluacion:1},
    {nombre:'Modelos de Operaciones II' ,codigo:'0714133' , creditos:3, evaluacion:2},
    {nombre:'Aplicación y Auditoria de Sistemas  de Inform.' ,codigo:'0714612' , creditos:2, evaluacion:1},
    {nombre:'Sistemas de Comunicación Industrial' ,codigo:'0714642' , creditos:2, evaluacion:1},
    {nombre:'Leyes y Deontología' ,codigo:'0625822' , creditos:2, evaluacion:1},
    {nombre:'Planificación Estratégica' ,codigo:'0715112' , creditos:2, evaluacion:1},
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
        b.classList.add('pantallaOff');
        
        for (var i = 0; i < casilla.length; i++){
            if (i > 8 && i!= 16 && i!= 24 && i!= 32 && i!= 40 && i!= 48 && i!= 56 && i!= 64 && i!= 72){
                casilla[i].removeEventListener('mouseover', table);
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
                if(nuevoArray[j][i] == 0){
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
        var testJson = JSON.stringify(nuevoArray);
        
            $.ajax({
            url : "/ajaxRoute",
            type: "POST",
           dataType:'json',
            data : testJson,
            success: function(data){
                console.log(data.msg); // 'OK'
            },
        });
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
        for(var j= 0; j< fila; j++){            
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

