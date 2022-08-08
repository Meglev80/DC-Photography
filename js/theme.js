const color = [
    {
        name:'clay',
        code:'#a17b6d',
        url: 'css/skins/clay.css'
    },
    {
        name:'navy',
        code:'#181761',
        url: 'css/skins/navy.css'
    }
]

$(document).ready(function () {
    setColors();
    function setColors(){
       for(let i=0; i<color.length; i++){
           const span = document.createElement("span");
           span.style.backgroundColor = color[i].code;
           $(".colors").append(span);
       }
    }
    $(".colors span").click(function(){
        const index = $(this).index();
      $(".alternate-style").attr("href",color[index].url);
    })

    $(".theme-mode").change(function(){
        if($(this).val() == "light"){
            $("body").removeClass("dark")
        }
        else{
            $("body").addClass("dark")
        }
    })

    //toggle box
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open")
    })
});