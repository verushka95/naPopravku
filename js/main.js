$(function(){
    var swiper = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
      });

      $('.item li').click(function(){

            let active =  $('.program__item').find('li.active');

            let act_ind = active.index();
            console.log(act_ind);
            let index = $('.item li').index(this);

            console.log(index);
          if(active.length>=1){
            active.removeClass('active');
            active.next().removeClass('show');
            
            if(act_ind != index){

                 $('.item li').eq(index).toggleClass('active');
                 $('.item li').eq(index).next('.text').toggleClass('show');
            }

          }
          else{ 
              //если нет активных, открываем
            $(this).addClass('active');
            $(this).next('.text').addClass('show');
          }

      });


});
    


