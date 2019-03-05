
var resultado = 0;
var SOMANDO = false;
var SUBTRAINDO = false;
var MULTIPLICANDO = false;
var DIVIDINDO = false;


function digita(num){
	var valorTela = $('#screen').val(); 
  if(num == '.' && valorTela.includes('.'))
     return;

	if(valorTela == '0')
       valorTela = (num == '.' ? '0.' : num);
    else{
       valorTela+=  num;
   }

    $('#screen').val(valorTela);

  } 

  function guardarUltimaOperacao(){

   var valorAux = $('#screen').val();
   valorAux = valorAux.replace(/([.]|\.0)$/g, '');
   var valorTela = valorAux.includes('.') ? parseFloat(valorAux) : parseInt(valorAux);

  	if(SOMANDO){
 	   	resultado += valorTela;
 	   	SOMANDO = false;
 	}
 	else if(SUBTRAINDO){
 		resultado -= valorTela;
 		SUBTRAINDO = false;
 	}
 	else if(MULTIPLICANDO){
 		resultado *= valorTela;
 		MULTIPLICANDO = false;
 	}
 	else if(DIVIDINDO){
 		resultado /= valorTela;
 		DIVIDINDO = false;
 	}
 	else{
 		resultado = valorTela;
 	}
  		
  }

 function soma(){
 	
    guardarUltimaOperacao();
    SOMANDO = true;
 	$('#screen').val(0);
 }
 
 function subtrai(){
 	
    guardarUltimaOperacao();
    SUBTRAINDO = true;
 	$('#screen').val(0);
 }  
 
 function multiplica(){
 	
    guardarUltimaOperacao();
    MULTIPLICANDO = true;
  	$('#screen').val(0);
 }  
 
 
 function divide(){
 	
   guardarUltimaOperacao();
   DIVIDINDO = true;
 	 $('#screen').val(0);
 }    

 function exibeResultado(){

 	 guardarUltimaOperacao();
   $('#screen').val(resultado);
 }


 function limparTudo(){
 	
 	 SOMANDO = false;
	 SUBTRAINDO = false;
	 MULTIPLICANDO = false;
	 DIVIDINDO = false;
	 resultado = 0;
   $('#screen').val(0);
 }


 function limpar(){

   $('#screen').val(0);
 }



 $(document).ready(function(){
  
     $(".numero").click(function(){
        digita(this.value);
        });
    $(".operador").click(function(){
        switch(this.value){
          case '+': soma(); break;
          case '-': subtrai(); break;
          case '*': multiplica(); break;
          case '/': divide(); break;  
          case '=': exibeResultado(); break;
          case 'C': limpar(); break;
          case 'CE': limparTudo(); break;
        }
        
        });                
               
      });

 
      
