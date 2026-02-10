export const userProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)    
    }
}