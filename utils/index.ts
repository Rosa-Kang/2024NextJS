export async function fetchCars() {
    const headers = {
            'x-rapidapi-key': '896a95c876msh8612c58cf9b9e01p17995ejsn7a0921b19462',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corollacd', {
        headers : headers,
    });

    const result = await response.json();

    return result;
}