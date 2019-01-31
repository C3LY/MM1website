window.onload = function()
{
    var paper = new Raphael(0,0,800,600);
    var backGround = paper.rect(0,0,800,600).attr({fill: "#AAAAAA"});

    var outerBody = paper.circle(300,400,60);
    var innerBody = paper.circle(300,400,45);

    //Initially bottom foot
    var foot1pt1 = paper.path(["M300,490 C300,470 340,470 340,490z"]);          //main foot shape (semi circle)
    var foot1pt2 = paper.path(["M300,490L340,490"]);                            //bottom of foot
    var foot1pt3 = paper.path(["M300,460L300,490"]);                            //leg

    //Initially right foot
    var foot2pt1 = paper.path(["M390,360 C370,360 370,400 390,400z"]);
    var foot2pt2 = paper.path(["M390,400L390,360"]);
    var foot2pt3 = paper.path(["M360,400L390,400"]);

    //Initially top foot
    var foot3pt1 =  paper.path(["M260,310 C260,330 300,330 300,310z"]);
    var foot3pt2 = paper.path(["M300,310L260,310"]);
    var foot3pt3 = paper.path(["M300,340L300,310"]);

    //Initially left foot
    var foot4pt1 = paper.path(["M210,400 C230,400 230,440 210,440z"]);
    var foot4pt2 = paper.path(["M210,400L210,440"]);
    var foot4pt3 = paper.path(["M240,400L210,400"]);

    //Modifying parts
    outerBody.attr({fill: "#000000"});
    innerBody.attr({fill: "#AAAAAA"});
    foot1pt1.attr({fill: "#000000"});
    foot2pt1.attr({fill: "#000000"});
    foot3pt1.attr({fill: "#000000"});
    foot4pt1.attr({fill: "#000000"});

    //Grouping whole character
    var character = paper.set();
    character.push(
        outerBody,innerBody,
        foot1pt1,foot1pt2,foot1pt3,
        foot2pt1,foot2pt2,foot2pt3,
        foot3pt1,foot3pt2,foot3pt3,
        foot4pt1,foot4pt2,foot4pt3
    );

    //Animation variables
    var rotationOne = Raphael.animation({transform:"R90,300,400"},150,'ease-in',rotationTwoFunc);
    var rotationTwo = Raphael.animation({transform:"R0,300,400"},0,'ease-in',rotationOneFunc);

    function rotationOneFunc() {
        character.animate(rotationOne.delay(300));
    }

    function rotationTwoFunc() {
        character.animate(rotationTwo.delay(300));
    }

    var overlayBackground = paper.rect(0,0,800,600).attr({fill: "#555", opacity: "0.6"});
    var playIcon = paper.path(["M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z"]);
    playIcon.attr({fill: "#000", stroke: "none"}).transform("t388.834,276.037 s6,6");

    var playButtonOverlay = paper.set();
    playButtonOverlay.push(
        overlayBackground,
        playIcon
    );

    //Hovering over the play button
    playIcon.hover (
        function() {                                    //Hover in animation
            playIcon.animate({fill: "#410000"});},
        function() {                                    //Hover out animation
            playIcon.animate({fill: "#000"});}
    );

    //Start animation clicking on play button
    playIcon.click (function() {
        playButtonOverlay.animate({opacity: 0}, 300);
        rotationOneFunc();
    });

};
