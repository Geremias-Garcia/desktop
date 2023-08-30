const corpoTabelaPersonagens = document.getElementById('corpoTabelaPersonagens');


function testeApi() {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt').then(response => {

        console.log(response);
        console.log(response.data);
        console.log(response.data.results);
        const piada1 = response.data.setup;
        document.getElementById('piadaHTML').innerHTML = piada1;
        piada2 = response.data.delivery;
    })
}

const botaoChamarAPI = document.getElementById('btChamaApi');

const botaoResposta = document.getElementById('piadaResposta');

botaoChamarAPI.addEventListener('click', () => {

    testeApi();
    console.log('Fui clicado')
})

botaoResposta.addEventListener('click', () => {
    
    verResposta();
    console.log('Fui clicado')
})

function verResposta() {
        document.getElementById('piadaResposta').innerHTML = piada2;
    
}