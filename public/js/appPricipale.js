const divImage = document.querySelectorAll('.divImage');
const plusDinformation = document.querySelector('.plusDinformation');
const suiteJun = document.querySelector('.suiteJun');
const chambreStan = document.querySelector('.chambreStan');
const chambreSup = document.querySelector('.chambreSup');

divImage.forEach(element => {
    console.log(element);
    // Action au Click sur les differentes images des chambres
    element.addEventListener('click', (e) =>{
        let classValue =e.target.classList.value;
        // console.log(e.target.classList.value);
        if (classValue == "card-img-top suiteJuniore") {
            console.log("suiteJuniore");
            location.assign('/suiteJun')
        }else if (classValue == "card-img-top chambreStandard") {
            console.log("chambreStandard");
        }else{
            console.log("chambreSuperieur");
        }
    });

// Action au Mouseover sur les differentes images des chambres
    element.addEventListener('mouseover', (e) =>{
        let classValue =e.target.classList.value;
        console.log(classValue);
        if (classValue == "card-img-top suiteJuniore") {
            suiteJun.classList.add("activeInformation");
            chambreStan.classList.remove("activeInformation");
            chambreSup.classList.remove("activeInformation");
        }else if (classValue == "card-img-top chambreStandard") {
            chambreStan.classList.add("activeInformation");
            suiteJun.classList.remove("activeInformation");
            chambreSup.classList.remove("activeInformation");
        }else{
            chambreSup.classList.add("activeInformation");
            chambreStan.classList.remove("activeInformation");
            suiteJun.classList.remove("activeInformation");
        }
    });


// Action au Mouseout sur les differentes images des chambres
    element.addEventListener('mouseout', (e) =>{
        suiteJun.classList.remove("activeInformation");
        chambreStan.classList.remove("activeInformation");
        chambreSup.classList.remove("activeInformation");
    });
});


