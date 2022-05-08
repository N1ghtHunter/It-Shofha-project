window.onload = function() {
    var span = document.querySelectorAll(".sully_span");
    var div = document.querySelectorAll(".item-a");
    var l = 0;
    span[1].onclick = () => {
        console.log("right span");
        l++;
        for (var divIndex of div) {
            if (l == 0) {
                divIndex.style.left = "0px";
                console.log(l + divIndex);
            }
            if (l == 1) {
                divIndex.style.left = "-740px";
                console.log(l + divIndex);
            }
            if (l == 2) {
                divIndex.style.left = "-1480px";
                console.log(l + divIndex);
            }
            if (l == 3) {
                divIndex.style.left = "-2220px";
                console.log(l + divIndex);
            }

            if (l == 4) {
                divIndex.style.left = "-2990px";
                console.log(l + divIndex);
            }


            if (l > 4) {
                divIndex = 2;
                console.log(l + divIndex);
            }
        }
    };

    span[0].onclick = () => {
        console.log("left span ");
        l--;
        for (var divIndex of div) {
            if (l == 0) {
                divIndex.style.left = "0px";
                console.log(l + divIndex);
            }
            if (l == 1) {
                divIndex.style.left = "-740px";
                console.log(l + divIndex);
            }
            if (l == 2) {
                divIndex.style.left = "-1480px";
                console.log(l + divIndex);
            }
            if (l == 3) {
                divIndex.style.left = "-2220px";
                console.log(l + divIndex);
            }
            if (l > 0) {
                divIndex = 0;
                console.log(l + divIndex);
            }
        }
    };

    var koko = document.querySelectorAll(".sully_spanb");
    var kiro = document.querySelectorAll(".item-b");
    var x = 0;
    koko[1].onclick = () => {
        console.log("right koko");
        x++;
        for (var divIndex1 of kiro) {
            if (x == 0) {
                divIndex1.style.left = "0px";
                console.log(l + divIndex1);
            }
            if (x == 1) {
                divIndex1.style.left = "-740px";
                console.log(l + divIndex1);
            }
            if (x == 2) {
                divIndex1.style.left = "-1480px";
                console.log(l + divIndex1);
            }
            if (x == 3) {
                divIndex1.style.left = "-2220px";
                console.log(l + divIndex1);
            }

            if (x == 4) {
                divIndex1.style.left = "-2990px";
                console.log(l + divIndex1);
            }


            if (x > 4) {
                divIndex1 = 2;
                console.log(l + divIndex1);
            }
        }
    };

    koko[0].onclick = () => {
        console.log("left koko ");
        x--;
        for (var divIndex1 of kiro) {
            if (x == 0) {
                divIndex1.style.left = "0px";
                console.log(l + divIndex1);
            }
            if (x == 1) {
                divIndex1.style.left = "-740px";
                console.log(l + divIndex1);
            }
            if (x == 2) {
                divIndex1.style.left = "-1480px";
                console.log(l + divIndex);
            }
            if (x == 3) {
                divIndex1.style.left = "-2220px";
                console.log(l + divIndex1);
            }
            if (x > 0) {
                divIndex1 = 0;
                console.log(l + divIndex1);
            }
        }
    };
};