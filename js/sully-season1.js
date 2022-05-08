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
            if (l > 2) {
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
            if (l > 0) {
                divIndex = 0;
                console.log(l + divIndex);
            }
        }
    };

    var p = document.querySelectorAll(".sully_spans");
    var b = document.querySelectorAll(".item-b");
    var x = 0;
    p[1].onclick = () => {
        console.log("right p");
        x++;
        for (var divIndex1 of b) {
            if (x == 0) {
                divIndex1.style.left = "0px";
            }
            if (x == 1) {
                divIndex1.style.left = "-740px";
            }
            if (x == 2) {
                divIndex1.style.left = "-1480px";
            }
            if (x > 2) {
                divIndex1 = 2;
            }
        }
    };

    p[0].onclick = () => {
        console.log("left p");
        x--;
        for (var divIndex1 of b) {
            if (x == 0) {
                divIndex1.style.left = "0px";
            }
            if (x == 1) {
                divIndex1.style.left = "-740px";
            }
            if (x == 2) {
                divIndex1.style.left = "-1480px";
            }
            if (x > 0) {
                divIndex1 = 0;
            }
        }
    };
};