var last_x, last_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
  
    var width = screen.width;
    
    if (width > 992) {
        var mouseEvent = "";

    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e) {
        mouseEvent = "mousedown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e) {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e) {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e) {
        current_x = e.clientX - canvas.offsetLeft;
        current_y = e.clientY - canvas.offsetTop;

    
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;

        console.log("last positions of x- and y-coordinates: x = " + last_x + ", y = " + last_y);
        console.log("current position of x- and y- coordinates: x = " + current_x + ", y = " + current_y);
       ctx.moveTo(last_x, last_y);
       ctx.lineTo(current_x, current_y);

        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}
}


    if (width <= 992) {
        var new_width = screen.width - 70;
        var new_height = screen.height-300;

        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    

    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        console.log("touch start");
        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;
    
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("touchmove");
         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    

        last_x = current_x; 
        last_y = current_y;
    
    
    }

}