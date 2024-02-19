let selectedSeats = [];
let totalPrice = 0;
let couponDiscount = 0;
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
    p2.innerText = pName;
    // pName.appendChild(p);

    //total price

    totalPrice += pName;
    document.getElementById("total-price").innerText = totalPrice;

    // console.log(totalPrice);

  });

}

const btn = document.getElementById("apply-coupon");

  btn.addEventListener("click", function () {

  //get data from input
  const couponeData = document.getElementById("coupon-code").value;
  const couponCode = couponeData.split(" ").join("");

  if (totalPrice >= 200) {

    if (couponCode === 'NEW15') {
      const discountElement = document.getElementById('disount-container');
      discountPrice = totalPrice * 0.15;
      discountElement.innerText = discountPrice

    } else if (couponCode === 'Couple20') {
      const discountElement = document.getElementById('disount-container');
      discountPrice = totalPrice * 0.20;
      discountElement.innerText = discountPrice;

      //rest grand total

      // Update grand total
      const grandTotal = totalPrice - discountPrice;
      document.getElementById('grand-total').innerText = `Grand Total: $${grandTotal}`;
      // console.log(grandTotal);

    } else {
      alert("Invalid coupon code.");
    }
  } else {
    alert("Invalid coupon code");
    return;
  }

});

function selectSeat(seat) {
  if (selectedSeats.includes(seat)) {
    // Seat already selected, deselect it
    selectedSeats = selectedSeats.filter(s => s !== seat);
    totalPrice -= 550; // Assuming $550 per seat
  } else {
    // Seat not selected, select it
    if (selectedSeats.length < 4) {
      selectedSeats.push(seat);
      totalPrice += 550; // Assuming $550 per seat
    } else {
      alert("You can only select up to 4 seats.");
    }
  }
  updateUI();
}
 

function updateUI() {
  // Update seat colors
  const seats = document.querySelectorAll(".seat");
  // console.log(seats);
 
  for (let i = 0; i < seats.length; i++) {
    if (selectedSeats.includes(seats[i].innerText)) {
      seats[i].style.backgroundColor = 'green';
    } else {
      seats[i].style.backgroundColor = 'gray';
    }
  }
}
