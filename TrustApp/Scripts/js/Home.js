$(document).ready(function () {
    var x = window.location.search.length;
    if (x>0) {
        var res = window.location.search.split('?')[1].split('=')[1];
        $('#uname').text(res);
    }
    else {
        location.replace('../Templates/Login.html');
    }     
    $(function () {
        var d = 300;
        $('#navigation a').each(function () {
            var $this = $(this);
            var r = Math.floor(Math.random() * 41) - 20;
           // $this.css({ '-moz-transform': 'rotate(' + r + 'deg)', '-webkit-transform': 'rotate(' + r + 'deg)'});
            //$('#content').css({ '-moz-transform': 'rotate(' + r + 'deg)', '-webkit-transform': 'rotate(' + r + 'deg)'});
            $this.stop().animate({
                'marginTop': '-70px'
            }, d += 150);
        });
        $('#navigation > li').hover(
            function () {
                var $this = $(this);
                $('a', $this).stop().animate({
                    'marginTop': '-40px'
                }, 200);
            },
            function () {
                var $this = $(this);
                $('a', $this).stop().animate({
                    'marginTop': '-70px'
                }, 200);
            }
        ).click(function () {
            var $this = $(this);
            var name = this.className;
            $('#content').animate({ marginTop: -600 }, 300, function () {
                var $this = $(this);
                var r = Math.floor(Math.random() * 41) - 20;
                 //$this.css({ '-moz-transform': 'rotate(' + r + 'deg)', '-webkit-transform': 'rotate(' + r + 'deg)' });
                $('#content div').hide();
                $('#' + name).show();
                $this.animate({ marginTop: 84 }, 300);
            })
        });
    });
})