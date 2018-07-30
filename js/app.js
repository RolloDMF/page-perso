var app = {
    init: function() {
        $('span.percent').wrap('<div class="round" />').each(function() {
            var $span = $(this);
            var $div = $span.parent();
            var ratio =  parseInt($span.text())/100;

            $circle = $('<canvas width:"80px" height:"80px" />');
            $color = $('<canvas width:"80px" height:"80px" />');
            $div.append($circle);
            $div.append($color);

            var context = $circle[0].getContext('2d');

            context.beginPath();
            context.arc(50,50,40,0,2*Math.PI);
            context.lineWidth = 15;
            context.strokeStyle = '#FFF';
            context.shadowOffsetX = 2;
            context.shadowBlur = 10;
            context.shadowColor = '#000';
            context.stroke();

            var context = $color[0].getContext('2d');

            context.beginPath();
            context.arc(50,50,40,-1/2*Math.PI,ratio*2*Math.PI - 1/2*Math.PI);
            context.lineWidth = 15;
            context.strokeStyle = '#3699DC';
            context.stroke();
        })
    }
}
$(app.init);