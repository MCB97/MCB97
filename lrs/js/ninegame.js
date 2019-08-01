$(function(){
$("#Start").click(function() {
    var j = 0;
    var aleft;
    var atop;
    for (var i = 0; i < 10; i++) {
      if (i == 1) {
        Licensing(i, j, 3, 120);
      } else if (i == 2) {
        Licensing(i, j, 133, 120);
      } else if (i == 3) {
        Licensing(i, j, 261, 120);
      } else if (i == 4) {
        Licensing(i, j, 3, 250);
      } else if (i == 5) {
        Licensing(i, j, 133, 250);
      } else if (i == 6) {
        Licensing(i, j, 261, 250);
      } else if (i == 7) {
        Licensing(i, j, 3, 380);
      } else if (i == 8) {
        Licensing(i, j, 133, 380);
      } else if (i == 9) {
        Licensing(i, j, 261, 380);
      }
      j += 300;
    }

    function Licensing(i, j, aleft, atop) {
      var a = setTimeout(() => {
        $("ul li:nth-child(" + i + ")").css({
          left: aleft,
          top: atop,
          transition: "all .3s",
          opacity: 1
        });
      }, j);
    }

    if ($(this).hasClass("show")) {
      $(this).removeClass("show");
      $("#textstart").html("<span>发牌</span>");
      var j = 0;
      var aleft;
      var atop;
      for (var i = 0; i < 10; i++) {
        if (i == 1) {
          Licensing(i, j, 125, 240);
        } else if (i == 2) {
          Licensing(i, j, 125, 240);
        } else if (i == 3) {
          Licensing(i, j, 125, 240);
        } else if (i == 4) {
          Licensing(i, j, 125, 240);
        } else if (i == 5) {
          Licensing(i, j, 125, 240);
        } else if (i == 6) {
          Licensing(i, j, 125, 240);
        } else if (i == 7) {
          Licensing(i, j, 125, 240);
        } else if (i == 8) {
          Licensing(i, j, 125, 240);
        } else if (i == 9) {
          Licensing(i, j, 125, 240);
        }
        j += 300;
      }
      function Licensing(i, j, aleft, atop) {
        var a = setTimeout(() => {
          $("ul li:nth-child(" + i + ")").css({
            left: aleft,
            top: atop,
            transition: "all .3s",
            opacity: 0
          });
        }, j);
        $("#cards li").each(function() {
          if (parseInt(Math.random() * 2) == 0) {
            $(this).prependTo($(this).parent());
          }
        });
      }
    } else {
      $(this).addClass("show");
      $("#textstart").html("<span>重置</span>");
      $("#cards li").each(function() {
        if (parseInt(Math.random() * 2) == 0) {
          $(this).prependTo($(this).parent());
        }
      });
    }
  });
  
  $('#cards>li').click(function(){
      $(this).children('a').css({
          'opacity':'1',
          'transform':'scale(1.1)'
        })
      setTimeout(() => {
        $(this).children('a').css('opacity','0')
      },1100);
  })


//跳转传递随机数组
  $('#gamestart').click(function(){
     $(location).attr('href','../html/startgame.html')
     asdas() 
  })

  function asdas() {
    var arr = [];
    $("li").each(function(i, v) {
      arr.push(
        $(v)
          .children("a")
          .attr("name")
      );
    });
    localStorage.setItem("xx", JSON.stringify(arr));
  }
//
})
