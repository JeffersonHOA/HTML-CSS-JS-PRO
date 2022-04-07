const button = document.querySelector("#button");
const numeroItens = document.querySelector("#number");

const itemNumber = (value) => {
  for (let i = 0; i < value; i++) {
    console.log(i);
    document.querySelector(".listItens").innerHTML += `
      <div class="itemList">
        <p> Item Número: ${i}</p>
      </div>
      `;
  }
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  const quantidadeAdicionada = numeroItens.value;

  console.log(quantidadeAdicionada);
  itemNumber(quantidadeAdicionada);
});