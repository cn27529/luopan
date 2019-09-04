// $(function () {     resize_tensvg();     window.onresize = function (event) {
//         resize_tensvg();     }     var deg_num = 0;
// //setTimeout('run(6)', 3000);     setInterval(function () {
// goo(0.125);     }, 50); }); var luopan = new Luopan('luopan'); function
// goo(number) {     luopan.run(number); } function Luopan(obj_id) {     var
// w_win = $(window).width();     var h_win = $(window).height();
// this.luopan_id = obj_id;     this.deg_number = 0; } 畫十字線
function TenLine(props) {

    // this.w_win = w_win; this.h_win = h_win;

    this.element_id = props.element_id;
    this.w_id = props.w_id;
    this.h_id = props.h_id;
    this.color_code = props.color_code;

    this.w_win = window.innerWidth / 2; //目前瑩幕寛
    this.h_win = window.innerHeight; //目前瑩幕高
    this.stroke_width = props.stroke_width; //筆畫寛度

    this.w_svg = 0;
    this.h_svg = 0;

    this.reset_tenline = function () {

        // var w_win = window.innerWidth; //目前瑩幕寛 var h_win = window.innerHeight;
        // //目前瑩幕高 alert(h_win);
        var w_svg = (window.innerWidth) / 2; //設寬
        var h_svg = window.innerHeight; //設高
        // alert(h_svg); w_svg = w_win - 0; h_svg = h_svg - 0; w_svg = window.innerWidth
        // h_svg = window.innerHeight
        console.log('w_svg=', w_svg);
        console.log('h_svg=', h_svg);

        this.w_svg = w_svg;
        this.h_svg = h_svg;

        var my_style = 'stroke:#0080ff;stroke-width:1;'; //設藍色

        my_style = '';
        if (typeof this.color_code !== 'undefined') {
            my_style += 'stroke:' + this.color_code + ';';
        }
        if (typeof this.stroke_width !== 'undefined') {
            my_style += 'stroke-width:' + this.stroke_width + ';';
        }

        var my_svg = document.querySelector('#' + this.element_id);
        var my_w = document.querySelector('#' + this.w_id);
        var my_h = document.querySelector('#' + this.h_id);

        //設定svg寛高
        if (w_svg <= h_svg) {
            my_svg.setAttribute('width', h_svg + 'px');
            my_svg.setAttribute('height', h_svg + 'px');
        }
        else {
            my_svg.setAttribute('width', w_svg + 'px');
            my_svg.setAttribute('height', w_svg + 'px');
        }

        var marginLeft = (window.innerWidth - 0) / 4;
        //if (window.innerHeight > window.innerWidth) marginLeft = (window.innerHeight - 15) / 2;
        console.log('marginLeft', marginLeft);
        //my_svg.style.marginLeft = marginLeft + "px";

        // my_svg.attr({     width: w_svg + 'px',     height: h_svg + 'px', });

        my_w.setAttribute('style', my_style);
        my_w.setAttribute('x1', "0");
        my_w.setAttribute('y1', "50%");
        my_w.setAttribute('x2', "100%");
        my_w.setAttribute('y2', "50%");

        // my_w.attr({     style: my_style,     x1: "0",     y1: "50%",     x2: "100%",
        //    y2: "50%", });

        my_h.setAttribute('style', my_style);
        my_h.setAttribute('x1', "50%");
        my_h.setAttribute('y1', "0");
        my_h.setAttribute('x2', "50%");
        my_h.setAttribute('y2', "100%");

        // my_h.attr({     style: my_style,     x1: "50%",     y1: "0",     x2: "50%",
        //   y2: "100%", });

    };

    this.element = function () {
        return document.querySelector('#' + element_id);
    };

}


function Luopan(props) {

    this.src = props.src;
    this.w_luopan = 0;
    this.h_luopan = 0;
    this.element_id = props.element_id;
    this.deg_number = 0;
    this.my_style = '';

    this.find_transform = function (props) {
        this.deg_number = props.number;
        //歸零
        var deg = 'rotate(0deg)';
        var luopan = document.querySelector('#' + this.element_id);

        if (props.number >= 360) {
            $('#' + this.element_id).rotate({
                duration: 7000,
                angle: 0
            });
        } else {
            //goto
            $('#' + this.element_id).rotate({
                duration: 7000,
                angle: 180,
                animateTo: 180 - props.number
            });
        }
    };

    this.set_transform = function (props) {

        if (props.move === 'left') {
            this.deg_number -= props.number;
        } else {
            this.deg_number += props.number;
        }
        var deg = 'rotate(' + this.deg_number + 'deg)';
        document.querySelector('#' + this.element_id).style.transform = deg;

    };

    this.element = function () {
        return document.querySelector('#' + this.element_id);
    };

    this.reset_luopan = function () {

        var luopan = document.querySelector('#' + this.element_id);
        luopan.src = this.src;

        var my_width = 0;

        if (this.h_luopan >= this.w_luopan) {
            this.h_luopan = this.w_luopan; //高要等於寛
            my_width = this.w_luopan;
        }
        if (this.w_luopan >= this.h_luopan) {
            this.w_luopan = this.h_luopan;
        }

        var my_left_gap = 0; //修正誤差
        //取得left要位移的位置
        var my_left = 0;
        var my_top = 0;
        var my_top_gap = 0
        if (window.innerWidth >= window.innerHeight) {
            my_width = window.innerHeight - 30;
            my_left = window.innerWidth - window.innerHeight;
            my_left_gap = 17;
            my_left = (my_left + my_left_gap) / 2;
            my_top = 8;
        }

        if (window.innerWidth <= window.innerHeight) {
            my_width = window.innerWidth - 30;
            my_left = (window.innerWidth - this.w_luopan);
            my_left_gap = 12;
            my_left = (my_left - my_left_gap) / 2;
            my_top = (window.innerHeight - window.innerWidth);
            my_top_gap = 15;
            my_top = (my_top + my_top_gap) / 2;
        }

        luopan.setAttribute('width', my_width + 'px'); //設定寛為營目同高
        //console.log('my_left:' + my_left);

        var my_style = 'border: 0px solid #000000; position: absolute; z-index: -999; top: ' + my_top + 'px; left: ' + my_left + 'px;';

        //this.h_luopan = this.h_luopan - 50; //要比營目高小一點

        luopan.setAttribute('style', my_style);

        this.my_style = my_style;

        console.log('window.innerWidth=', window.innerWidth);
        console.log('window.innerHeight=', window.innerHeight);
        console.log('luopan my_style=', my_style);
        console.log('w_luopan=', this.w_luopan);
        console.log('h_luopan=', this.h_luopan);

    };

}