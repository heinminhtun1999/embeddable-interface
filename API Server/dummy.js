module.exports.getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=20');
    const json = await res.json();
    const data = {};

    let j = 1;
    for (let i=0; i<json.length; i += 5) {
        data[j] = json.slice(i, i + 5);
        j++;
    }
    
    return data
}


