console.log($);
let count = 0;

function updateView() {
    $("#counter").text(count);
}

function increaseOccured() {
    count++;
    updateView();
}

function decreaseOccured() {
    count--;
    updateView();
}

$("#increaseButton").click(increaseOccured);
$("#decreaseButton").click(decreaseOccured);

updateView();

$("#alertButton").click(function() {
    alert("YOU HIT THE ALERT BUTTON")
})

