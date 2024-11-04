const URL_ = 'https://test2.maximum-haval.ru/public/test-task/v1/brand/';

export function GetData(brand){
    let URL = URL_+ brand;

    fetch(URL)
        .then(
            (response) => {
                if ( response.status !== 200 ) {
                    console.log( 'Looks like there was a problem. Status Code: ' +
                        response.status );
                    return;
                }
                response.json().then((data) =>{
                    console.log(data);
                    return data;
                })
            })
        .catch((err) => {
            console.log(err)
        })
}