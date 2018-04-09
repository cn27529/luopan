// $(function () {

//     resize_tensvg();
//     window.onresize = function (event) {
//         resize_tensvg();
//     }

//     var deg_num = 0;

//     //setTimeout('run(6)', 3000);
//     setInterval(function () {
//         goo(0.125);
//     }, 50);

// });

//var luopan = new Luopan('luopan');

// function goo(number) {
//     luopan.run(number);
// }

// function Luopan(obj_id) {
//     var w_win = $(window).width();
//     var h_win = $(window).height();
//     this.luopan_id = obj_id;
//     this.deg_number = 0;
// }


//畫十字線
function TenLine(prop) {

    // this.w_win = w_win;
    // this.h_win = h_win;

    this.element_id = prop.element_id;
    this.w_id = prop.w_id;
    this.h_id = prop.h_id;
    this.color_code = prop.color_code;

    this.w_win = window.innerWidth; //目前瑩幕寛
    this.h_win = window.innerHeight; //目前瑩幕高

    this.reset_tenline = function () {

        //var w_win = window.innerWidth; //目前瑩幕寛
        //var h_win = window.innerHeight; //目前瑩幕高

        //alert(h_win);
        var w_svg = window.innerWidth - 15; //設寬
        var h_svg = window.innerHeight - 15; //設高
        //alert(h_svg);
        //w_svg = w_win - 0;
        //h_svg = h_svg - 0;

        //w_svg = window.innerWidth
        //h_svg = window.innerHeight
        console.log('w_svg=', w_svg)
        console.log('h_svg=', h_svg)

        var my_style = 'stroke:#0080ff;stroke-width:1;'; //設藍色

        if (typeof this.color_code !== 'undefined') {
            my_style = 'stroke:' + this.color_code + ';stroke-width:1;';
        }

        var my_svg = document.querySelector('#' + this.element_id);
        var my_w = document.querySelector('#' + this.w_id);
        var my_h = document.querySelector('#' + this.h_id);

        //設定svg寛高
        my_svg.setAttribute('width', w_svg + 'px');
        my_svg.setAttribute('height', h_svg + 'px');

        // my_svg.attr({
        //     width: w_svg + 'px',
        //     height: h_svg + 'px',
        // });

        my_w.setAttribute('style', my_style);
        my_w.setAttribute('x1', "0");
        my_w.setAttribute('y1', "50%");
        my_w.setAttribute('x2', "100%");
        my_w.setAttribute('y2', "50%");

        // my_w.attr({
        //     style: my_style,
        //     x1: "0",
        //     y1: "50%",
        //     x2: "100%",
        //     y2: "50%",
        // });

        my_h.setAttribute('style', my_style);
        my_h.setAttribute('x1', "50%");
        my_h.setAttribute('y1', "0");
        my_h.setAttribute('x2', "50%");
        my_h.setAttribute('y2', "100%");

        // my_h.attr({
        //     style: my_style,
        //     x1: "50%",
        //     y1: "0",
        //     x2: "50%",
        //     y2: "100%",
        // });

    }

    this.element = function () {
        return document.querySelector('#' + element_id);
    }

}