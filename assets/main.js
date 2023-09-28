const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 103));
const geraNum = () => String.fromCharCode(rand(48, 58));

const simbolos = "!@#$%&*()_-|<>.,/?][{}";
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const qtdCaracteres = Number(qtd);
  const senhaArr = [];

  for (let caracteres = 0; caracteres < qtdCaracteres; caracteres++) {
    maiusculas && senhaArr.push(geraMaiuscula());
    minusculas && senhaArr.push(geraMinuscula());
    numeros && senhaArr.push(geraNum());
    simbolos && senhaArr.push(geraSimbolos());
  }

  return senhaArr.join("").slice(0, qtdCaracteres);
}

const qtd = document.querySelector("#qtd-caracteres");
const maiusculas = document.querySelector("#inp-maiusculas");
const minusculas = document.querySelector("#inp-minusculas");
const numeros = document.querySelector("#inp-nums");
const inpSimbolos = document.querySelector("#inp-simbolos");

const gera = () => {
  const senha = geraSenha(
    qtd.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    inpSimbolos.checked
  );
  return senha;
};

const handleSubmit = (e) => {
  e.preventDefault();

  const senha = document.querySelector(".senha-gerada");
  senha.innerHTML = gera();
  senha.classList.add("show-senha");
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => handleSubmit(e));
