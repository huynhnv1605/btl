var listbox = document.querySelectorAll('.slide')
var btnleft = document.querySelector('.btnleft')
var btnright = document.querySelector('.btnright')
var wrapperbox = document.querySelector('.body-head')
var reviewdiv = document.querySelector('.body1')
function make_slide(amountSlideAppear){
    var widthitemanhmargin = reviewdiv.offsetWidth / amountSlideAppear;
    let widthallbox = widthitemanhmargin * listbox.length;
    let count = 0
    let spacing = widthallbox - amountSlideAppear*widthitemanhmargin
        wrapperbox.style.width = `${widthallbox}px`
        listbox.forEach((e) =>{
            e.style.marginRight = '10px'
            e.style.marginLeft = '10px'
            e.style.width = `${widthitemanhmargin-20}px`

        })
    function auto(){
        count += widthitemanhmargin
        if (count > spacing+1){
            count = 0;
        }
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
    setTimeout(auto,2000)
    }
    //setTimeout(auto,2000)
    btnright.addEventListener('click',function(){
        count += widthitemanhmargin
        if (count > spacing){
            count = 0;
        }
        if (count < widthitemanhmargin){
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
    })
    btnleft.addEventListener('click',function(){
        count -= widthitemanhmargin
        if (count < -1){
            count = spacing;
        }
        if ( count <= widthitemanhmargin){
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
    })
}

make_slide(5);
