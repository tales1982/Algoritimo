const trajeto = Number(
  prompt(
    "INFORME O TOTAL DE KM PECORRIDO.\nVIAGENS ATE 200 KM:     R$0,50/Km\nVIAGENS ACIMA 200 KM:   R$0,35/Km"
  )
);

if(trajeto <= 200 ){
  alert(`Uma viagem de ${trajeto} km vai custa R$ 0,50.
  VALOR TOTAL DO TRAJETO = R$ ${trajeto * 0.50}`)
}else{
  alert(`Uma viagem de ${trajeto} km vai custa R$ 0,35.
  VALOR TOTAL DO TRAJETO = R$ ${trajeto * 0.35}`);
}
  
