let images={
    imgA:"images/1.jpg",
    imgB: "images/2.jpg",
    imgC:"images/3.jpg"
};
let sequenceA = [imgA, imgB, imgC];

function showSequence(sequence){
    document.getElementById("firstSlot").src = sequence[0];
    document.getElementById("secondSlot").src = sequence[1];
    document.getElementById("thirdSlot").src = sequence[2];
}

document.getElementById("btnA").addEventListener("press", function (){showSequence(sequenceA)
});
