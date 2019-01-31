//use drawsvg.org/drawsvg.html for paths


function StartAnimation() {
    //stickman2doesnt work properly

    document.getElementById("play").disabled = true;

    var audio = new Audio('VectorAnimation/VPT_Intro.mp3');
    audio.play();

    var paper = new Raphael(document.getElementById("canvas"), 800, 600);
    var backGround = paper.rect(0, 0, 800, 600); //using this as a canvas x y width height
    backGround.attr({fill: "#88DAF2"}); // this makes it a blue background
    var cloud = paper.rect(10, 100, 150, 20, 10);
    cloud.attr({fill: "white", stroke: "none"});
    var cloud2 = paper.rect(150, 15, 200, 20, 10);
    cloud2.attr({fill: "white", stroke: "none"});
    var cloud3 = paper.rect(400, 80, 150, 25, 10);
    cloud3.attr({fill: "white", stroke: "none"});

    var ball = paper.circle(270, 450, 30);
    ball.attr({fill: "45-green-yellow"});
    var sun = paper.circle(700, 90, 50);
    sun.attr({fill: "yellow"});
    var beam = paper.rect(150, 0, 100, 600);
    beam.attr({fill: "F2F098"});
    var Stickman = paper.image("VectorAnimation/StickMan.png", 20, 250, 350, 350);
    var ufo = paper.image("VectorAnimation/ufo.png", 370, 400, 80, 80);
    var grass = paper.rect(0, 505, 800, 100);
    grass.attr({fill: "green"});

    var Stickman2 = paper.image("VectorAnimation/StickMan2.png", 400, 400, 150, 150);
    var Stickman3 = paper.image("VectorAnimation/StickMan.png", 400, 400, 150, 150);
    Stickman2.hide();

    var withouteyes = paper.image("VectorAnimation/withouteyes.png", 178, 385, 45, 45);
    withouteyes.hide();
    beam.hide();

    var eyeball1 = paper.circle(210, 400, 2);
    eyeball1.attr({fill: "black"});
    var eyeball2 = paper.circle(190, 400, 2);
    eyeball2.attr({fill: "black"});

    ufo.hide();

    var bouncecount = 0;

    Stickman_dance1();

    var Stickmancoordx = 400;
    Stickman2.animate({y: 400 , x: Stickmancoordx}, 500, 'linear');
    Stickman3.animate({y: 400 , x: Stickmancoordx}, 500, 'linear');


    function Stickman_dance1() {
        Stickman2.hide();
        Stickman3.show();
        Stickmancoordx+=20;
        Stickman2.animate({y: 400 , x: Stickmancoordx}, 500, 'linear');
       Stickman3.animate({y: 400 , x: Stickmancoordx}, 500, 'linear');
        setTimeout(Stickman_dance2, 400);

    }

    function Stickman_dance2() {
        Stickman2.show();
        Stickman3.hide();
        setTimeout(Stickman_dance1,400);
    }

    var cloudcoordx=100;
    var currenttime=0;

   // cloudsanimation1();

/*
    function cloudsanimation1() {
        while (audio.currentTime < audio.duration) {
            currenttime=audio.currentTime;
            currenttime.toFixed();
            if(currenttime%2===0){
                cloud.animate({cy: 10, cx: (cloudcoordx += 20)}, 500, 'linear')
        }
    }
    }
    */



        function bounce_drop1() {
            bouncecount += 1;
            eyeball1.animate({cy: 395, cx: 210}, 500, 'ease-out');
            eyeball2.animate({cy: 395, cx: 190}, 500, 'ease-out');
            sun.animate({transform: 's1'});

            if (bouncecount === 3) {
                ball.animate({transform: 'r720'});
            }
            else if (bouncecount === 5) {
                ball.animate({fill: "blue"}, 100, "linear");
            }
            else if (bouncecount === 7) {
                ball.animate({fill: "purple"}, 100, "linear");
            }
            else if (bouncecount === 9) {
                ball.animate({fill: "red"}, 100, "linear");

            }
            else if (bouncecount === 11) {
                ball.animate({transform: 's0.5'});

            }
            else {
                //       sun.animate({transform: 's1.5'});
            }

            if (bouncecount < 13) {
                ball.animate({cy: 150, cx: 400}, 500, 'ease-out', bounce_up1);
            }
            else {
                ufo_off();
            }

            //   ball.hide();
        }

        function bounce_up1() {


            ball.animate({cy: 500, cx: 400}, 500, 'ease-in', bounce_drop1);
            eyeball1.animate({cy: 410, cx: 210}, 500, 'ease-in');
            eyeball2.animate({cy: 410, cx: 190}, 500, 'ease-in');
            sun.animate({transform: 's1.5'});
            //  ball.hide();

        }

        function ufo_off() {
            sun.animate({fill: 'url(VectorAnimation/moon.png)'}, 100, 'ease-in');
            backGround.animate({fill: "darkblue"}, 1000, 'ease-in');
            eyeball1.animate({fill: "white"}, 500, 'ease-in');
            eyeball2.animate({fill: "white"}, 500, 'ease-in');
            ball.hide();
            ufo.show();
            withouteyes.show();
            ufo.toFront();
            ufo.animate({transform: 's4.5'}, 1000);
            ufo.animate({y: 0, x: 0}, 10000, 'linear');
            eyeball1.animate({cy: 395, cx: 205}, 2500, 'ease-in');
            eyeball2.animate({cy: 395, cx: 185}, 2500, 'ease-in');
            setTimeout(beam_up, 5000);

        }

        function beam_up() {
            beam.show().animate({opacity: 1}, 2000);
            withouteyes.toFront();
            eyeball1.toFront();
            withouteyes.toFront();
            withouteyes.animate({y: -160, x: 173}, 3000, 'ease-in');
            Stickman.animate({y: -300, x: 15}, 3000, 'ease-in');
            eyeball1.animate({cy: -150, cx: 205}, 3000, 'ease-in');
            eyeball2.animate({cy: -150, cx: 185}, 3000, 'ease-in');
            beam.show().animate({opacity: 0}, 8000, 'ease-in');

            setTimeout(RemoveAnimation, 9000);
        }

        function StopAnimation() {

            beam.pause();
            ball.pause();
            eyeball1.pause();
            eyeball2.pause();
            withouteyes.pause();
            Stickman.pause();
            ufo.pause();
            sun.pause();
            backGround.pause();
            audio.pause();
            Stickman2.pause();//new
            Stickman3.pause();//new


        }

        function ResumeAnimation() {

            ball.resume();
            beam.resume();
            eyeball1.resume();
            eyeball2.resume();
            withouteyes.resume();
            Stickman.resume();
            ufo.resume();
            sun.resume();
            backGround.resume();
            Stickman2.resume();//new
            Stickman3.resume();//new
            audio.play();

        }

        function RemoveAnimation() {
            beam.remove();
            ball.remove();
            eyeball1.remove();
            eyeball2.remove();
            withouteyes.remove();
            Stickman.remove();
            ufo.remove();
            sun.remove();
            backGround.remove();
            grass.remove();
            cloud.remove();
            cloud2.remove();
            cloud3.remove();
            paper.remove();
            Stickman2.remove();//new
            Stickman3.remove();//new
            audio.pause();
            delete(beam);
            delete(ball);
            delete(eyeball1);
            delete(eyeball2);
            delete(withouteyes);
            delete(Stickman);
            delete(ufo);
            delete(sun);
            delete(backGround);
            delete(grass);
            delete(cloud);
            delete(cloud2);
            delete(cloud3);
            delete(paper);
            delete(audio);


        }

        function ResetAnimation() {
            RemoveAnimation();
            StartAnimation();
        }


        document.querySelector('#play').onclick = function () {// no working
            document.getElementById("play").style.display = "none";
            document.getElementById("reset").style.display = "inline";


        };

        document.querySelector('#stop').onclick = function () {
            StopAnimation();
            document.getElementById("play").style.display = "none";
            document.getElementById("stop").style.display = "none";
            document.getElementById("resume").style.display = "inline";
            document.getElementById("reset").style.display = "inline";

        };

        document.querySelector('#reset').onclick = function () {
            ResetAnimation();
            document.getElementById("resume").style.display = "none";
            document.getElementById("stop").style.display = "inline";

        };

        document.querySelector('#resume').onclick = function () {
            ResumeAnimation();
            document.getElementById("stop").style.display = "inline";
            document.getElementById("resume").style.display = "none";
        };

        document.querySelector('#volumedown').onclick = function () {
            if ((audio.volume - 0.1) <= 0.0) {
                alert("can't go lower")
            }
            else {
                audio.volume -= 0.1;
            }

        };
        document.querySelector('#volumeup').onclick = function () {
            if (audio.volume >= 1.0) {
                alert("can't go higher")
            }
            else {
                audio.volume += 0.1;
            }
        };

        document.querySelector('#mute').onclick = function () {
            document.getElementById("mute").style.display = "none";
            document.getElementById("unmute").style.display = "inline";
            audio.volume = 0;
        };

        document.querySelector('#unmute').onclick = function () {
            document.getElementById("mute").style.display = "inline";
            document.getElementById("unmute").style.display = "none";
            audio.volume = 1;
        };

        document.querySelector('#duration').onclick = function () {
            alert(audio.currentTime);
        };


        bounce_drop1();


}

