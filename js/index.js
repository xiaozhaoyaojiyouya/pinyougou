window.addEventListener('load',function(){
    // 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    // 鼠标经过focus 就显示左右按钮
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })
    // 动态生成小圆圈 有几张图片  我们就生成几个小圆圈
    var ul = focus.querySelector('ul')
    var ol =focus.querySelector('.circle')
    for(var i=  0; i<ul.children.length;i++){
        //创建一个小li
        var  li = document.createElement('li')
        // 把小li插入到ol里面
        ol.appendChild(li)
    }
        ol.children[0].className = 'current'

    
})