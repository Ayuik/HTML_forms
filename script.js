const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('emailaddress').value;
    const age = document.getElementById('age').value;
    const description = document.querySelector('select[id="bestdescription"]')?.value;
    const recommendation = document.querySelector('input[name="recommendation"]:checked')?.value;
    const languages = document.querySelectorAll('input[type="checkbox"]:checked');
    const languagesChecked = [];
          languages.forEach(language => {
            languagesChecked.push(language.value)
            })
    const review = document.getElementById('review').value;

    let results = [name, email, age, description, recommendation, languagesChecked, review]
    console.log(results)
})
