// Step 1: Grab elements from the page
const birthdateInput = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

// Step 2: Listen for button click
calculateBtn.addEventListener('click', function(){
  // Step 3: Get the value the user typed
  const birthdateValue = birthdateInput.value;
  // Step 4: Check if they actually picked a date
  if (!birthdateValue){
    result.textContent = 'Please select your birthdate first!';
    return;
  }
  // Step 5: Create date object
  const birthdate = new Date(birthdateValue);
  const today = new Date();

  if(birthdate > today){
    result.textContent = 'That date is in the future!';
    return;
  }

  // Step 6: Calculate the differences
  let years = today.getFullYear() - birthdate.getFullYear();
  let months= today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  // Fix negative days
  if (days < 0) {
    months--;
    days+= new Date(today.getFullYear(), today.getMonth(),0).getDate();
  }

  // Step 8: Fix negative months
  if (months < 0){
    years--;
    months += 12;
  }

  // Stepp 9: Display the result
  result.textContent = `You are ${years} years, ${months} months, and ${days} days old!`;
});
