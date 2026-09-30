let imgA = "images/IMG_4107.jpg";
let imgB = "images/IMG_4104.jpg";
let imgC = "images/IMG_4094.jpg";

let sequenceA = [imgA, imgB, imgC];

function showSequence(sequence){
    document.getElementById("firstSlot").src = sequence[0];
    document.getElementById("secondSlot").src = sequence[1];
    document.getElementById("thirdSlot").src = sequence[2];
}

document.getElementById("btnA").addEventListener("press", function (){showSequence(sequenceA)
});