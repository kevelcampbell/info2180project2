window.onload = function(){   
    var puzzle = document.getElementById("puzzlearea");
    var pieces = puzzle.children;
    var positionTop = 0;
    var positionLeft = 0;
    var emptyTop = 300;
    var emptyLeft = 300;
    var lastTop;
    var lastLeft;
    var shufflePiece;
    var shuffleTimes = 400;
    var backgroundLeft = 0;
    var backgroundTop = 0;

    for(var i =0; i < pieces.length; i++){
        pieces[i].addClassName ("puzzlepiece");
        pieces[i].style.top =  positionTop + "px";
        pieces[i].style.left = positionLeft + "px";
        pieces[i].style.backgroundPosition = backgroundLeft + "px " + backgroundTop + "px";
                
        if(positionLeft < 300){
            positionLeft = positionLeft + 100;
            backgroundLeft = backgroundLeft - 100;
        }
        else{
            positionLeft = 0;
            backgroundLeft = 0;
            positionTop = positionTop + 100;
            backgroundTop = backgroundTop - 100;
        }
    }

    for ( i in pieces){
        pieces[i].onclick=function(){
            lastTop = parseInt(this.style.top);
            lastLeft = parseInt(this.style.left);

            if (lastTop == emptyTop && lastLeft == (emptyLeft-100) || lastTop == emptyTop && lastLeft == (emptyLeft+100) || lastTop == (emptyTop-100) && lastLeft == emptyLeft || lastTop == (emptyTop+100) && lastLeft == emptyLeft){
                this.style.top = emptyTop + "px";
                this.style.left = emptyLeft + "px";
                emptyTop = lastTop;
                emptyLeft = lastLeft;    
            }
        }

        pieces[i].onmouseover=function(){
            lastTop = parseInt(this.style.top);
            lastLeft = parseInt(this.style.left);
            if (lastTop == emptyTop && lastLeft == (emptyLeft-100) || lastTop == emptyTop && lastLeft == (emptyLeft+100) || lastTop == (emptyTop-100) && lastLeft == emptyLeft || lastTop == (emptyTop+100) && lastLeft == emptyLeft){
                this.addClassName("movablepiece");        
            }
            else{
                this.removeClassName("movablepiece");
            }
        }
    }

    $("controls").onclick = function Shuffle(){
        for(var c = 0; c < shuffleTimes; c++){
            var choice = Math.floor (Math.random () * 4);
            console.log(choice);
            if ( choice == 0) {
                (getStyle((emptyTop-100)+"px", emptyLeft+"px"));
                lastTop = parseInt(shufflePiece.style.top);
                lastLeft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = lastTop;
                emptyLeft = lastLeft;
            }

            else if ( choice == 1) {
                (getStyle(emptyTop+"px", (emptyLeft-100)+"px"));
                lastTop = parseInt(shufflePiece.style.top);
                lastLeft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = lastTop;
                emptyLeft = lastLeft;
            }

            else if ( choice == 2) {
                getStyle((emptyTop+100)+"px", emptyLeft+"px");
                lastTop = parseInt(shufflePiece.style.top);
                lastLeft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = lastTop;
                emptyLeft = lastLeft;
            }

            else {
                getStyle(emptyTop+"px", (emptyLeft + 100)+"px")
                lastTop = parseInt(shufflePiece.style.top);
                lastLeft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = lastTop;
                emptyLeft = lastLeft;
            }
        }   
    };

    function getStyle(top, left){
    for(var i =0; i < pieces.length; i++){
        if(pieces[i].style.top==top && pieces[i].style.left==left){
            shufflePiece = pieces[i];
            return shufflePiece;        
            }
        }
    };
    var seconds = 0;
    var minutes = 0;
    var timeCheck = document.getElementById("w3c");
    timeCheck.innerHTML = "00:00";
    function updateTime(){
        if(seconds == 59){
            minutes++;
            seconds = 0;
        }
        else {
        seconds++;
        }
        if(seconds<10){
        timeCheck.innerHTML = minutes + ':0' + seconds;
        }
        else {
        timeCheck.innerHTML = minutes + ':' + seconds;
        }  
    }
    window.setInterval(updateTime, 1000);
    var timeTracker = setInterval(startTimer(), 1000);
    function startTimer() {
        var date = new Date();
        document.getElementById().innerHTML = date.toLocaleTimeString();
    }
    window.clearInterval(updateTime)
    timeTracker = setInterval(updateTime(), 5000);
    clearInterval(timeTracker);
};