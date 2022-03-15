import $ from "jquery"
$(document).ready(function () {
   
  var arr = [
    {
        "title": "AIR JORDAN 1",
        "desc": "The Air Jordan 1 is a footwear pioneer—but the OG silhouette isn't too old to learn new tricks. The Air Jordan 1 KO repackages the famous design using a mix of leather and canvas to create a fit that's redesigned for comfort. This edition sports a classic colour scheme, with contrasting hits of black and white blended with Varsity Red.",
        "img": "https://m.kickz4u.ru/userfiles/Novosti2021_4/air-jordan-1-ko-ajko-white-black-red-chicago-DA9089-100-3.jpg"
    },
    {
      "title": "ZION 1 PF",
      "desc": "With a down-to-earth persona and abilities that are out of this world, Zion is unlike anybody else.On court, the gentle spirit who's all about family transforms into an unmatched force of unstoppable athleticism and speed.The Zion 1 kicks off his signature line with a design inspired by his duality of humility and superhuman ability.Full-length Air Strobel cushioning is stacked with a Zoom Air unit in the forefoot—a sensational mix of plush underfoot comfort and rapid responsiveness.It's light, stable and strong, with aggressive traction to help Zion grip the court and control his power.This PF version uses an extra-durable outsole that's designed for outdoor courts.",
      "img": "https://sneakernews.com/wp-content/uploads/2021/04/jordan-zion-1-noah-da3130-001-5.jpg"
    },
    {
      "title": "AIR JORDAN 4",
        "desc": "AIR JORDAN IV The Air Jordan IV debuted in 1989 and was designed by Tinker Hatfield. It features lightweight netting and plastic wings on the upper as well as visible Max Air. The original colorways of the Air Jordan IV are 'White/Cement,' 'Bred,' 'Military,' and 'Fire Red.",
        "img": "https://outmaxshop.ru/components/com_jshopping/files/img_products/834/nike-air-jordan-4-retro-834-2.jpg"
    },
    
    {
      "title": "DAME 7",
        "desc": "The traction on the Dame 7 performs well - significantly better than the 6. Good news if you play outdoors a lot: the outsole is made of very durable rubber and performs well on the blacktop. The Lightstrike foam cushion setup is also an upgrade over the 6 and is a good balance of impact protection, court feel, and responsiveness. The materials are of decent quality, well ventilated, and get the job done performance-wise. The support offers good lateral stability and containment but the low cut doesn't provide any additional ankle support. Overall, the Dame 7 is a great all-around performer - especially for the price!.",
        "img": "https://images.satu.kz/153703823_w640_h640_basketbolnye-krossovki-dame.jpg"
    }

]; 


$.each(arr,function(index,value){
  
  
  // $('.out .obj-' + index).css("display", 'none')
  
 
  
  $('input[type="search"]').on('change keyup',function(){
    var str = $(this).val();

    if(str.toUpperCase()===value.title)
    {
      $('.out').append('<div class="objects obj-' + index + '">' + '<h1></h1>'+'<img>'+'<p></p>'+'</div>');
      console.log(value.title);
      $('.out .obj-'+index+' img' ).attr('src',value.img);
      $('.out .obj-'+index+' h1').html(value.title);
      $('.out .obj-'+index+' small').html(value.date);
      $('.out .obj-'+index+' p').html(value.desc);

    }
    else
    {
      $('.out .obj-' + index).css("display", 'none');
    }
  });

  
 
})

});





