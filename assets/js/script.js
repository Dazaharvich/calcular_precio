function calculo(){
    let cantidad = document.getElementById("cantidad").value;
    let valor = document.getElementById("valor").getAttribute("value");
    /* let valor = valor.replace(/\./g,''); ----no funcionó----*/
    let color = document.getElementById("color").value;
    
    parseInt(valor);
    parseInt(cantidad);
    
    let total = valor*cantidad;

    document.getElementById("total").innerHTML = total.toLocaleString("es-CL" , {style: "currency", currency:"CLP"});
    document.getElementById("cant-total").innerHTML = cantidad;
    document.getElementById("color-select").style.fill = color;
}
