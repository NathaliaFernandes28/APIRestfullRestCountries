function createCountryCard(country) {
  /* Criação de cada card dos paises de forma individual*/
  const card = document.createElement("div");
  /*Esta linha adiciona a classe country ao div criado(card), o que permite aplicar estilos específicos via CSS. Vamos usar o country para estilizar a página. */
  card.classList.add("country");

  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  /*vamos colocar a variável name e flag dentro do card, que é o card individual de cada país e depois vamos acrescentar o card dentro do id criado no html (#countries) que representa o local onde todos os cards dos paises vão ficar dentro da página web. */
  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

/*Agora no arquivo index.js vamos criar uma função async que será responsável para fazer a requisição e vamos executá-la assim que a página for carregada:*/
async function getCountries() {
  /*Dentro da função iremos chamar a função fetch(), ela faz para nós a requisição HTTP e devolve a promise de uma resposta HTTP, portanto iremos chamá-la e usar o await para esperar pela resposta. Também passaremos como parâmetro a url que estamos requisitando:*/
  const response = await fetch("https://restcountries.com/v3.1/all");
  /*Temos uma resposta, mas para usar os dados recebidos nela precisamos converter esses dados para um formato que pode ser entendido pelo javascript. Para isso, a própria resposta do fetch() contém um método especial chamado json(). Esse método serve especificamente para obter o conteúdo json da resposta de forma que pode ser manipulado. Ele também retorna uma promise, então também utilizaremos o await: */
  const countries = await response.json();
  console.log(countries);
  /*Vamos chamar a função criada anteriormente (creatCountryCard) para cada resposta retornada da requisição do API*/
  countries.forEach(createCountryCard);
}

getCountries();
