export const generateProductErrorInfo = (product) =>{
    return `Una o mas propiedades estan incompletas
    Lista de propiedades:
    *Title: Necesita ser un string, se recibió --> ${product.title} 
    *Price: Necesita ser un número, se recibió --> ${product.price}
    `
}