var capturando = "";

function capturar () {
//Fazendo o get do primeiro nome e o último nome do formulário
capturando = $('#Fnome').val() + ' ' + $('#Lnome').val();
document.getElementById('fullname-val').innerText = capturando;

//Fazendo o get do email do formulário 
capturando = document.getElementById('email').value;
document.getElementById('email-val').innerText = capturando;

capturando = $('#escolha input:radio:checked').val();
document.getElementById('designer-val').innerText = capturando;

//Fazendo o get do endereço do formulário 
capturando = $('#street_name').val() + ' ' + $('#street_number').val() + ' ' + $('#city').val() + ' ' + $('#bairro').val();
document.getElementById('street-val').innerText = capturando;
};
//Fazendo upload da imagem e direcionando para a view  
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.your_picture_image')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
