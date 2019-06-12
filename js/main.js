var btn = Array.from(document.querySelectorAll('button')),
    input = Array.from(document.querySelectorAll('input'));
    btn.forEach(function(el,idx){
        el.addEventListener('click',function(){
            console.log(el)
            input[idx].select();
            document.execCommand("copy");
        })
    })