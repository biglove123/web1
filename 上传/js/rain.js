document.addEventListener('DOMContentLoaded', function () {
    var z = document.querySelector('.zon');
    var btn = document.querySelector('button');
    var cs = document.querySelector('.cs');
    var light = document.querySelector('#l');
    light.addEventListener('mouseover', function () {
        for (var i = 0; i < light.children.length; i++) {
            light.children[i].style.boxShadow = '5px 5px 15px 5px white';
        }
    })
    light.addEventListener('mouseout', function () {
        for (var i = 0; i < light.children.length; i++) {
            light.children[i].style.boxShadow = null;
        }
    })
    function rain(obj) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var sp = obj.offsetTop;
            var cw = obj.offsetWidth;
            var cg = obj.offsetHeight;
            obj.style.top = sp + 1 + 'px';
            obj.style.height = cg + + 'px';
            if (sp > 500) {
                if (cw > 10) clearInterval(obj.timer);
                obj.style.height = cg - 1 + 'px';
                obj.style.width = cw + 1 + 'px';
                obj.style.top = sp + 0 + 'px';
            }
        }, 20)
    }
    var l = 200;
    btn.addEventListener('click', function () {
        if (l > 300) l = 100;
        else l += 5;
        var div = document.createElement('div');
        div.style.backgroundColor = 'rgb(9, 240, 240)';
        div.style.boxShadow = '1px 1px 10px 3px rgb(9, 240, 240)';
        div.style.position = 'absolute';
        div.style.top = '175px';
        div.style.width = '3px';
        div.style.height = '10px';
        div.style.left = l + 'px';
        z.appendChild(div);
        rain(div);
    })
    var p = 200;
    var f = 0;
    var timer = null;
    var btn1 = this.documentElement.querySelector('#lrain');
    btn1.addEventListener('click', function () {
        if (f == 0) {
            f = 1;
            timer = setInterval(function () {
                p = 100 + Math.random() * 200;
                var div = document.createElement('div');
                div.style.backgroundColor = 'rgb(9, 240, 240)';
                div.style.boxShadow = '1px 1px 10px 3px rgb(9, 240, 240)';
                div.style.position = 'absolute';
                div.style.top = '175px';
                div.style.width = '3px';
                div.style.height = '10px';
                div.style.left = p + 'px';
                z.appendChild(div);
                rain(div);
            }, 100)
        }
        else {
            clearInterval(timer);
            f = 0;
        }
    })
})
