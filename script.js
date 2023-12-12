var startTime = new Date().getTime();
        var score = 0;
        var width;
        function getRandomColor(){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i<6; i++){
                color += letters[Math.floor(Math.random()*16)];
            }
            return color;
        }

        function shapeAppear(){
            width = Math.random() ;
            if(width<0.1){
                width = width * 450;
            }
            else{
                width = width * 200;
            }
            var height = width;

            document.getElementById("shape").style.top = Math.random()*500;
            document.getElementById("shape").style.left = Math.random() * 800;

            if (Math.random()<0.5)
            {
                document.getElementById("shape").style.borderRadius = "50%";
            }
            else
            {
                document.getElementById("shape").style.borderRadius = "0%";

            }
            document.getElementById("shape").style.width = width + "px";
            document.getElementById("shape").style.height = height + "px";

            document.getElementById("shape").style.display = "block";
            document.getElementById("shape").style.backgroundColor = getRandomColor();
            startTime = new Date().getTime();
        }
        
        function shapeAppearDelay(){
            setTimeout(shapeAppear, Math.random() * 2500);
        }
        
        shapeAppearDelay();

        document.getElementById("shape").onclick = function(){
            
            document.getElementById("shape").style.display = "none";
            var endTime = new Date().getTime();
            var time = (endTime - startTime)/1000;
            
            score = score + 10 -time;

            document.getElementById("timePara").innerHTML ="Spended Time =" +time + "S";
            document.getElementById("score").innerHTML = "Your Score =" + score ;
            shapeAppearDelay();
            
        }