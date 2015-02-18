var memoria = " ";
var consola = "0";
var signo = false
$(document).ready(function() {
     var valor;
     $("#Resultado").val(consola);
     $("#valores  button").click(function(){
     valor = $(this).val();
     if($("#Resultado").val().length < 9)
     {
       $("#Resultado").css("font-size","4em");
     }
     if($("#Resultado").val().length > 9)
     {
       $("#Resultado").css("font-size","2em");
     }
     if($("#Resultado").val().length > 19)
     {
       $("#Resultado").css("font-size","0.8em");
     }
     if(valor == "=")
     {
        try
        {
          var total = eval($("#Resultado").val());
          $("#Resultado").val(total);
        }
        catch(err)
        {
          $("#Resultado").css("font-size","2em");
          $("#Resultado").val("VALOR ERROR");
        }
     }
     else if(valor == "MR")
     {
       consola = "memoria";
       $("#Resultado").val(memoria);     
     }
     else if(valor == "M")
     {
       memoria = $("#Resultado").val();
     }
     else if(valor == "C")
     {
       signo = false;
       consola = "0";
       $("#Resultado").css("font-size","4em");
       $("#Resultado").val(consola);
     }
     else if(valor == "<-")
     {       
      var digitos = $("#Resultado").val().substring(0, ($("#Resultado").val().length) - 1);
      $("#Resultado").val(digitos);
     }
     else if(valor == "+/-")
     {
       if(signo == true)
       {
         var digito = $("#Resultado").val().substring(1, $("#Resultado").val().length);
         $("#Resultado").val(digito);
         signo = false;
       }
       else if (signo == false)
       {
         var digito = "-" + $("#Resultado").val();
         $("#Resultado").val(digito);
         signo = true;
       }    
     }
     else
     {
       guardardigito(valor);
     }
    
  });
});    

function guardardigito(numero)
{
  
  if(consola != "0")
    {
      $("#Resultado").val($("#Resultado").val() + numero);
    }
    else
    {
      consola =  numero;
      $("#Resultado").val(consola);
    }
}