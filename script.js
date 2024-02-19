// let selectedSeats = [];
let totalPrice = 0;
// let couponDiscount = 0;
let titleCount = 1;

const seats = document.querySelectorAll(".seat");
// console.log(seats);

for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];
  // console.log(seat);

  seat.addEventListener("click", function () {

    const seatName = seat.querySelector("p").innerText;
    // console.log(seatName);

    const ticketName = document.getElementById("tName");

    const pName = parseFloat(document.getElementById("pName").innerText);
    // console.log(pName);

    
    const p = document.createElement("p");
    p.innerText = titleCount + ". " + seatName;
    ticketName.appendChild(p);

    titleCount++;

    const p2 = document.createElement("p");
    p2.innerText =  pName;
    // pName.appendChild(p);
  
    //total price

    totalPrice += pName;
    document.getElementById("total-price").innerText = totalPrice ;

    // console.log(totalPrice);
     
  });

}

const btn = document.getElementById("apply-coupon");
 
btn.addEventListener("click", function(){
  

  //get data from input
  const couponeData = document.getElementById("coupon-code").value;
  const coupone

      if (code === 'NEW15') {
        couponDiscount = totalPrice * 0.15;
      } else if (code === 'Couple20') {
        couponDiscount = totalPrice * 0.20;
      } else {
        alert("Invalid coupon code.");
        return;
      }


});

// const dataTakes = document.querySelectorAll(".dataTake");
// // console.log(dataTakes);

// for (let index = 0; index < dataTakes.length; index++) {
//   const dataTake = dataTakes[index];
//   // console.log(dataTake);

//   dataTake.addEventListener("click", function () {

//     const tName = document.getElementById("tName");
//     console.log(tName);

//     // const p = document.createElement("p");
    // p.innerText = tName;
    // tName.appendChild(p);

    // const cName = document.getElementById("cName");

    // const p2 = document.createElement("p");
    // p2.innerText = cName;
    // cName.appendChild(p);

    // const pName = document.getElementById("pName");

    // const p3 = document.createElement("p");
    // p3.innerText = pName;
    // pName.appendChild(p);

//   });

// }


// function selectSeat(seat) {
//   if (selectedSeats.includes(seat)) {
//     // Seat already selected, deselect it
//     selectedSeats = selectedSeats.filter(s => s !== seat);
//     totalPrice -= 550; // Assuming $550 per seat
//   } else {
//     // Seat not selected, select it
//     if (selectedSeats.length < 4) {
//       selectedSeats.push(seat);
//       totalPrice += 550; // Assuming $550 per seat
//     } else {
//       alert("You can only select up to 4 seats.");
//     }
//   }
//   updateUI();
// }

// function updateUI() {
//   // Update seat colors
//   const seats = document.getElementsByClassName('seat');
//   for (let i = 0; i < seats.length; i++) {
//     if (selectedSeats.includes(seats[i].innerText)) {
//       seats[i].style.backgroundColor = 'green';
//     } else {
//       seats[i].style.backgroundColor = 'gray';
//     }
//   }

//   // Update total price
//   document.getElementById('total-price').innerText = `Total Price: $${totalPrice}`;

//   // Enable next button if at least one seat is selected
//   document.getElementById('next-btn').disabled = selectedSeats.length === 0;
// }

// function applyCoupon(code) {
//   // Apply coupon code discount
//   if (code === 'NEW15') {
//     couponDiscount = totalPrice * 0.15;
//   } else if (code === 'Couple20') {
//     couponDiscount = totalPrice * 0.20;
//   } else {
//     alert("Invalid coupon code.");
//     return;
//   }

//   updateUI();
// }

// function proceedToNextPage() {
//   // Proceed to the next page (implementation required)
// }