function produto(preço){
    preço = Number(prompt("Qual é o preçco do produto?"))
    let desconto = preço * 5 /100
    alert(`Com 5% de desconto, o produto sai por R$${preço - desconto}`)

}
produto()