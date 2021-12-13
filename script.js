function generateAkanName () {
  let birthday = document.getElementById("Birthday").ariaValueMax;
  let genders = document.getElementsByName("gender")

  function getGender () {
    for (let gender of genders){
      if (gender.checked) {
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue)


  
}