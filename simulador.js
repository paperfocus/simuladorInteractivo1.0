

let info = confirm(" Bienvenidos a Floreria Lopez\n¿Te puedo ayudar a buscar un arreglo de flores?")
if (info==false){alert("Hasta pronto, que tengas un gran día!")}

let iva = 0.19

function totalIva(costo, iva) {
    let total = costo * iva
    return total
}

function valorTotal(resultado,costo){
    let valorTotal = resultado + costo
    return valorTotal
}
while (info){

    
        let consulta = prompt("Elige una opcion: \n(1) Comprar, Arreglo Matrimonio $24990 \n(2) Comprar, Arreglo Enamorados $29990 \n(3) Comprar, Arreglo Aniversario  $49990 \n(4) Salir")
      
        let resultado, valorfinal, costo, fin
       
        switch (consulta){

            
            case "1":
              
                costo = 24990
             
                resultado = totalIva(costo, iva)
                valorfinal = valorTotal(resultado, costo)   
                fin = confirm("Tu opcion de Arreglo Matrimonio esta disponible!\n\nTotal: "+ costo +"\nIVA(%19): "+ parseInt(resultado) + "\nValor total: "+ parseInt(valorfinal) + "\n\nMuchas gracias por su compra!"+ "\nDesea seguir comprando?")
                          
                if (fin){ 
                   consulta = true 
                }
                
                else {
                    info = false; 
                    alert("Hasta pronto, que tengas un gran día!")}
            break
                
            case "2":
                costo = 29990
                resultado = totalIva(costo, iva)
                valorfinal = valorTotal(resultado, costo)   
                fin = confirm("Tu opcion de Arreglo Matrimonio esta disponible!\n\nTotal: "+ costo +"\nIVA(%19): "+ parseInt(resultado) + "\nValor total: "+ parseInt(valorfinal) + "\n\nMuchas gracias por su compra!"+ "\nDesea seguir comprando?")
                
                if (fin){ 
                    consulta = true 
                }
                else {
                    info = false; 
                    alert("Hasta pronto, que tengas un gran día!")}
            break

            case "3":
                costo = 49990
                resultado = totalIva(costo, iva)
                valorfinal = valorTotal(resultado, costo)   
                fin = confirm("Tu opcion de Arreglo Matrimonio esta disponible!\n\nTotal: "+ costo +"\nIVA(%19): "+ parseInt(resultado) + "\nValor total: "+ parseInt(valorfinal) + "\n\nMuchas gracias por su compra!"+ "\nDesea seguir comprando?")
                
                if (fin){ 
                    consulta = true 
                }
                else {
                    info = false; 
                    alert("Hasta pronto, que tengas un gran día!")}
            break

            case "4":
                alert("Hasta pronto, que tengas un gran día!")
                info = false
                
            break
                    
            default:
            alert("Esa opción no esta disponible, intenta nuevamente")   
                
        }
    
        
} 

