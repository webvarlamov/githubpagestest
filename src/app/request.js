const URL_ = 'https://test2.maximum-haval.ru/public/test-task/v1/brand/';

export async function GetData(brand) {
    let URL = URL_ + brand;

    try {
        const response = await fetch(URL);
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}