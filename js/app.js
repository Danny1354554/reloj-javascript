window.addEventListener("load", function() {

    function mueveReloj(){ 
        momentoActual = new Date() ;
        var hora = momentoActual.getHours() ;
        var minuto = momentoActual.getMinutes() ;
        var segundo = momentoActual.getSeconds() ;

        minuto = cero(minuto);
        segundo = cero(segundo);

        horaImprimible = hora + " : " + minuto + " : " +segundo ;
         
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>" + horaImprimible + "</p>";

        var resultadoLondres = document.getElementById("resultadoLondres");
        resultadoLondres.innerHTML = (hora+6) + " : " + minuto + " : " + segundo;

        setTimeout(mueveReloj,1000) ;
    }

    function cero(i) {
        if (i<10) { i="0" +i};
        return i; 
    }

    mueveReloj();
});