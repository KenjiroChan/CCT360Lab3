let images={
    imgA:"images/1.jpg",
    imgB: "images/2.jpg",
    imgC:"images/3.jpg"
};
let sequenceA = {
    title: "nice coincidence",
    images: [images.imgA, images.imgB, images.imgC],
    captions: ["finding a model", "she notices camera", "she poses"]
};

let sequenceB = {
    title: "rude interaction",
    images: [images.imgC, images.imgB, images.imgA],
    captions: ["sneak a pic while posing for someone else", "notices camera", "turns away and calls me weird"]
};

function showSequence(sequence){
    document.getElementbyId("title").textContent = sequence.title; 
    document.getElementById("firstSlot").src = sequence[0];
    document.getElementById("secondSlot").src = sequence[1];
    document.getElementById("thirdSlot").src = sequence[2];
    document.getElementById("caption1").textContent=sequence.captions[0];
    document.getElementById("caption2").textContent=sequence.captions[1];
    document.getElementById("caption3").textContent=sequence.captions[2];
}

document.getElementById("btnA").addEventListener("press", function (){showSequence(sequenceA)
});
