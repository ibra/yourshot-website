let inputButton = document.getElementById('proof')
let labeledButton = document.getElementById('proof-label')

inputButton.addEventListener("change", function () {
    if (inputButton.value) labeledButton.innerHTML = inputButton.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
    else labeledButton.innerHTML = 'Choose file'
})