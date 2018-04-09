$(function() {

    resize_tensvg();
    window.onresize = function(event) {
        resize_tensvg();
    }

    var deg_num = 0;

    //setTimeout('run(6)', 3000);
    setInterval(function() {
        goo(0.125);
    }, 50);

});

var luopan = new Luopan('luopan');

function goo(number) {
    luopan.run(number);
}

function Luopan(obj_id) {
    var w_win = $(window).width();
    var h_win = $(window).height();
    this.luopan_id = obj_id;
    this.deg_number = 0;
}

Luopan.prototype.run = function(number) {

    //if(this.deg_number==360) this.deg_number=0;

    this.deg_number -= number;

    // body...
    //$('#'+this.luopan_id).css('transform', number+'deg');
    //transform: rotate(0deg);
    var deg = 'rotate(' + this.deg_number + 'deg)';

    //alert($('#' + this.luopan_id);
    //alert(deg);

    $('#' + this.luopan_id).css('transform', deg);



};






function resize_tensvg() {
    var mysvg = 'tensvg';
    var wline = 'wline';
    var hline = 'hline'
        //alert('123');
    var xline = $('#wline');
    var w_win = $(window).width();
    var h_win = $(window).height();
    //alert(h_win);
    var w_svg = w_win - 12; //設寬
    var h_svg = h_win - 12; //設高
    //alert(h_svg);
    w_svg = w_win - 0;
    h_svg = h_svg - 0;

    var line_style = 'stroke:#FF3300;stroke-width:1';
    line_style = 'stroke:#0066FF;stroke-width:1';

    $('#' + mysvg).attr('width', w_svg + 'px').attr('height', h_svg + 'px'); //設定svg寛高
    $('#' + wline).attr({
        style: line_style,
        x1: "0",
        y1: "50%",
        x2: "100%",
        y2: "50%",
    });

    $('#' + hline).attr({
        style: line_style,
        x1: "50%",
        y1: "0",
        x2: "50%",
        y2: "100%",
    });

}

function TenLine(win_w, win_h) {
    this.win_w = win_w;
    this.win_h = win_h;
    return this;
}