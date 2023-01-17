$(document).ready(function(){
    $('#input').change(function(){
        const input= $('#input').val()
        const value=$('ul').append('<li>'+input+'<i class="fa fa-check"></i> <i class="fa fa-trash"></i>'+'</li>')
        value.addClass('best')
        $('ul').on('click','.fa-trash' ,function(){
        $(this).parent('li').remove()
        })
        $('ul').on('click','.fa-check' ,function(){
            $(this).parent('li').addClass('checked')
            })
       
        })
    
  
})