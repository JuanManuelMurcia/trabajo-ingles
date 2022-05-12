$(document).ready(

    function () {

        $(window).scroll(
            function() {
                 
                deslizar($('#seccion0'), $('#seccion0 .efecto'));
                deslizar($('#seccion1'), $('#seccion1 .efecto'));
                deslizar($('#Seccion2'), $('#Seccion2 .efecto'));
                deslizar($('#Seccion3'), $('#Seccion3 .efecto'));
                llenar_barra();

                efecto_parallax( $('#seccion0'), 0.3);
                efecto_parallax( $('#seccion1'), 0.3);
                efecto_parallax( $('#Seccion2'), 0.3);
                efecto_parallax( $('#Seccion3'), 0.3);
            }



        );
       


    }

);
function deslizar(padre, hija) {

    hija.each(
        function () {

            var scroll = padre.offset().top - $(window).scrollTop();

            var elemento = $(this);
            var restablecer = "";
            var ocultar = "";

            if (elemento.hasClass('e-derecha')) {
                restablecer = { right: '0px', filter: 'opacity(100%)' };
                ocultar = { right: '-100px', filter: 'opacity(0%)' };
            }
            if (elemento.hasClass('e-izquierda')) {
                restablecer = { left: '0px', filter: 'opacity(100%)' };
                ocultar = { left: '-100px', filter: 'opacity(0%)' };
                
            }
            if (elemento.hasClass('e-arriba')) {
                restablecer = { top: '0px', filter: 'opacity(100%)' };
                ocultar = { top: '-100px', filter: 'opacity(0%)' };
                
            }
            if (elemento.hasClass('e-abajo')) {
                restablecer = { boottom: '0px', filter: 'opacity(100%)' };
                ocultar = { boottom: '-100px', filter: 'opacity(0%)' };
                
            }
            if(scroll <= 300 && scroll >= -300){
                elemento.css(restablecer);

            }
            else{
                elemento.css(ocultar);
            }
        }
    );
} 

function llenar_barra(){

    var activar = true;
    $('.progreso').each(
        function(){
            var elemento = $(this);
            if(activar){
                if(!elemento.hasClass('visto')){
                    elemento.addClass('visto');
                }
            }
            else{
                elemento.removeClass('active');
                elemento.removeClass('visto');

            }
            if(elemento.hasClass('active')){
                activar = false;
            }
        }
    );
}

function efecto_parallax(div, speed) {
    var diff = $(window).scrollTop() - div.offset().top;
    var pos_y = -(diff * speed);
    var  coordenadas = '0 ' + pos_y +'px';
    div.css({'background position': coordenadas });

}