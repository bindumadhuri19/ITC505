document.getElementById('madLibForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adjective = document.getElementById('adjective').value;
  const adverb = document.getElementById('adverb').value;
  const pluralNoun = document.getElementById('pluralNoun').value;

  fetch('/ITC505/lab-7', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      noun,
      verb,
      adjective,
      adverb,
      pluralNoun
    })
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('result').innerHTML = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
