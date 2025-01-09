console.log("hola")

let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('emailaddress').value;
    const age = document.getElementById('age').value;
    const description = document.querySelector('select[id="bestdescription"]')?.value;
    const recommendation = document.querySelector('input[name="recommendation"]:checked')?.value;
    // const languages = [document.querySelector('input[type="checkbox"]:checked').value] mejorar, solo muestra el primero
    const review = document.getElementById('review').value;

    let results = [name, email, age, description, recommendation, /*languages,*/ review]
    console.log(results)
}
)



