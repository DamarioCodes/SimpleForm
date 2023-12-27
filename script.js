

// Get input elements
const adultsInput = document.getElementById('adults');
const checkInInput = document.getElementById('check-in'); 
const checkOutInput = document.getElementById('check-out');

// Get output elements  
const daysOutput = document.getElementById('days');
const costOutput = document.getElementById('cost');

// Calculate cost when inputs change
adultsInput.addEventListener('change', calculate);
checkInInput.addEventListener('change', calculate);
checkOutInput.addEventListener('change', calculate);



function calculate() {

  // Get values
  const adults = adultsInput.value;
  const checkIn = moment(checkInInput.value);
const checkOut = moment(checkOutInput.value);

 // const checkIn = new Date(checkInInput.value); 
//  const checkOut = new Date(checkOutInput.value);

  // Calculate days using moments
  const diff = checkOut.diff(checkIn, 'days');
  const days = diff;
 // const timeDiff = checkOut - checkIn; 
//  const days = timeDiff / (1000 * 60 * 60 * 24); 

  // Calculate cost
  const cost = 150 * adults * days;

  // Update outputs
  daysOutput.value = days;
  costOutput.value = cost;

}


const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {

  // Clear value of input fields
  document.querySelectorAll('input').forEach(input => {
    input.value = '';
  });

  // Clear textareas
  document.querySelectorAll('textarea').forEach(textarea => {
    textarea.value = '';
  });

  // Show notification
  toastr.success('Form cleared');

});

let isValid = true;
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
 

  // Prevent form submit
  e.preventDefault();
  
  // Get form fields
  const username = document.getElementById('username').value;
  const firstName = document.getElementById('firstName').value;
  
  const lastName =
document.getElementById('lastName').value;
  const phone =
document.getElementById('telephone').value;
 
 const fax =
document.getElementById('fax').value;
  
 const email=
document.getElementById('email').value;
  
const checkInInput = document.getElementById('check-in'); 
const checkOutInput = document.getElementById('check-out');
const cost = costOutput.value;
  
 
  

  // Validate fields
  if(username === '') {
    showError('username');
    isValid = false;
  } else if(firstName === '') { 
    showError('firstName');
    isValid = false;
  }else if(lastName ===''){
    showError('lastName');
    isValid = false;
  }else if(phone ===''){
    showError('telephone');
    isValid = false;
  }else if(fax ===''){
    showError('fax');
    isValid = false;
  }else if( email ===''){
    showError('email');
    isValid = false;
  }
  
  if(cost ==='' || isNaN(parseInt(cost))){
      toastr.error("Select Valid dates")
      isValid = false;
      }
  
  if(parseInt(cost)< 0){
    toastr.error("Select Valid dates")
    isValid = false;
  }
  

  // If valid, submit form
  
  if(isValid) {
    toastr.success('Submitted');
  }
  
  isValid = true;
  
  
  
  
});

function showError(field) {

  // Get field
  const f = document.getElementById(field);
  
  // Add error class
  f.classList.add('has-error');
  
  // Show toastr
  toastr.error(field + ' is required');

}




