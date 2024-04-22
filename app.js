let imagesNumber = 0;
let images = ["lahmacun", "gözleme", "mercimek", "pizza", "tavuk sote"]
document.querySelectorAll(".previousFoodİmage,.nextFoodİmage ").forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.className == "previousFoodİmage") {
            if (imagesNumber != 0) {
                imagesNumber--
                document.querySelector(".image").src = `/Resimler/${images[imagesNumber]}.jpg`
            }
        }
        else if (imagesNumber != 4) {
            imagesNumber++
            document.querySelector(".image").src = `/Resimler/${images[imagesNumber]}.jpg`
        }
        console.log(imagesNumber)
    });
});