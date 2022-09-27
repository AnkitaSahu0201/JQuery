$(document).ready(function(){
    $('.bounce').click(function(){
        $("h1").addClass('animate__animated animate__bounce');
    });
    $('.flash').click(function(){
        $("h1").addClass('animate__animated animate__flash');
    });
    $('.pulse').click(function(){
        $("h1").addClass('animate__animated animate__pulse');
    });
    $('.rubberBand').click(function(){
        $("h1").addClass('animate__animated animate__rubberBand');
    });
    $('.shakeX').click(function(){
        $("h1").addClass('animate__animated animate__shakeX');
    });
    $('.shakeY').click(function(){
        $("h1").addClass('animate__animated animate__shakeY');
    }); 
    $('.headShake').click(function(){
        $("h1").addClass('animate__animated animate__headShake');
    });
    $('.swing').click(function(){
        $("h1").addClass('animate__animated animate__swing');
    });
    $('.tada').click(function(){
        $("h1").addClass('animate__animated animate__tada');
    });
    $('.wobble').click(function(){
        $("h1").addClass('animate__animated animate__wobble');
    });
    $('.jello').click(function(){
        $("h1").addClass('animate__animated animate__jello');
    });
    $('.heartBeat').click(function(){
        $("h1").addClass('animate__animated animate__heartBeat');
        
    // setTimeout(()=>{
        
    //     jQuery('h1').attr('class','');
    // },1000);
    });

});