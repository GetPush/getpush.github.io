function randomName() {
  var firstName = "";
  var lastName = "";

  var vowels = "aeiou";
  var consonants = "bcdfghjklmnpqrstvwxyz";

  // Generate first name
  var length = Math.floor(Math.random() * 4) + 3;
  var useVowel = Math.random() < 0.5;

  for (var i = 0; i < length; i++) {
    var randomIndex;
    if (useVowel) {
      randomIndex = Math.floor(Math.random() * vowels.length);
      firstName += vowels.charAt(randomIndex);
    } else {
      randomIndex = Math.floor(Math.random() * consonants.length);
      firstName += consonants.charAt(randomIndex);
    }

    useVowel = !useVowel;
  }

  // Generate last name
  length = Math.floor(Math.random() * 4) + 3;
  useVowel = Math.random() < 0.5;

  for (var i = 0; i < length; i++) {
    var randomIndex;
    if (useVowel) {
      randomIndex = Math.floor(Math.random() * vowels.length);
      lastName += vowels.charAt(randomIndex);
    } else {
      randomIndex = Math.floor(Math.random() * consonants.length);
      lastName += consonants.charAt(randomIndex);
    }

    useVowel = !useVowel;
  }

  return firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
}

function updateNames() {
  var fullName = randomName();
  
  document.getElementById('randomNames1').textContent = fullName;
  document.getElementById('randomNames2').textContent = fullName;
}

window.addEventListener('load', updateNames);

window.addEventListener('beforeunload', function() {
  window.removeEventListener('load', updateNames);
});

