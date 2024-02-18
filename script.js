// let selectedSeats = [];
// let totalPrice = 0;
// let couponDiscount = 0;


const seats = document.querySelectorAll(".seat");
// console.log(seats);

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(seat);

    seat.addEventListener("click", function(){
      const seatName = seat.querySelector("p").innerText;
      console.log(seatName);
    });
     
}

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