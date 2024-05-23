const apiUrl = "http://localhost:3000/productos"; 

// Funciones para la página web

const productList = () => {
    return fetch(apiUrl)
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = async (nombre, precio, imagen) => {
    try {
        const products = await productList();
        const id = products.length > 0 ? parseInt(products[products.length - 1].id) + 1 : 1;
        
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id.toString(),
                nombre,
                precio,
                imagen,
            }),
        });

        location.reload(); // Recargar la página después de crear el producto

        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct = (id) => {
    return fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .catch((err) => console.log(err));
};

export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,
};
