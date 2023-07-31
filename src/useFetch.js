import { useState, useEffect } from 'react';

const useFetch = (url, updateFlag) => {
        // все данные массива с информацией о посте, записаны в post    
        const [data, setData] = useState(null)
        // Данные для прелоудера
        const [isLoading, setLoading] = useState(true)
        const [error, setError] = useState(null);
    
        // Данный хук будет вызываться каждый раз, когда будет происходить изменение на странице Home
        useEffect(() => {

            const abortCont = new AbortController();

            // делаем тормоз на 1с, лишь в целях показать прогрузку Loading...
            setTimeout(() => {
                // Получаем данные с поднятого json сервера через fetch
                fetch(url, {signal: abortCont.signal}).then((res) => {
                    if (res.ok !== true){
                        throw Error('Could not fetch the data from this resource');
                    }
                    return res.json()
                }).then((data) => {
                    setData(data)
                    setLoading(false)
                    setError(null)
                }).catch((err)=>{
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    } else {
                        setError(err.message)
                        setLoading(false)
                    }
                })
            }, 1000)

            return () => {
                console.log('cleanup');
                // cleanup функция позволяющая остановить fetch запрос если мы быстро перемещаемся между страницами 
                abortCont.abort();
            }

        }, [updateFlag])

        return {data, isLoading, error}
}

export default useFetch;


