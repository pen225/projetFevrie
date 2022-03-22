$('.multiple').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });




  let previousAll = document.querySelectorAll('.slick-prev');
  let nextAll = document.querySelectorAll('.slick-next');


  for (let i = 0; i < previousAll.length; i++) {
      const element = previousAll[i];
      console.log(element);
      element.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
  }
  for (let i = 0; i < nextAll.length; i++) {
      const element = nextAll[i];
      console.log(element);
      element.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
  }

//   ------- Fin slick

const bookForm = document.querySelector('.formCalcul');
const chekinDate = document.getElementById('checkin-date');
const chekoutDate = document.getElementById('checkout-date');
const adult = document.getElementById('adult');
const children = document.getElementById('children');
const nbrDeNuit = document.querySelector('.nbrDeNuit');
const totalPrix = document.querySelector('.totalPrix');
const calculReservation = document.querySelector('.calculReservation');
const contentReservation = document.querySelector('.contentReservation');
const contentForm = document.querySelector('.contentForm');

    let date = new Date();
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();
    
   

    if (jour < 10) {
        jour = "0" + jour;
    }
    if (mois < 10) {
        mois = "0" + mois;
    }
    console.log(mois);
    chekinDate.min = `${annee}-${mois}-${jour}`;
    chekoutDate.min = `${annee}-${mois}-${jour}`;



    chekoutDate.addEventListener('change', (e) =>{
        let date1 = new Date(`${chekinDate.value}`)
        let date2 = new Date(`${chekoutDate.value}`)
        e.preventDefault();
        console.log(chekinDate.value);
        console.log(chekoutDate.value);
        console.log(date1);
        console.log(date2);
        let jourReservation = (date1 - date2) / (1000*3600*24);
        jourReservation = Math.abs(jourReservation);
        let prixReservation = 250 *jourReservation;
        document.querySelector('.prixTotal').value = prixReservation;
        console.log(document.querySelector('prixTotal'));
        nbrDeNuit.innerHTML = jourReservation;
        totalPrix.innerHTML = prixReservation;
        console.log(prixReservation);
        calculReservation.style.display="block";
    })
    

// bookForm.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     // location.assign('/formReservation')
//     contentReservation.style.display="none";
//     contentForm.style.display="block";
// })

