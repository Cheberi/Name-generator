function generateAkanName () {
  let yearOfBirth = document.getElementById("Birthday").Value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value);
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