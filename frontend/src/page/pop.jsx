import { useEffect } from 'react';
import Swal from 'sweetalert2';

function Pop (){

    useEffect(() => {
        setTimeout(() => {
            Swal.fire({
                title: "🚩🚩 Happy Navratri 🚩🚩",
                text: "Wishing You And Your Family A Very Happy Navratri\n\n– From Raushan Raj",
                icon: "info",
                timer: 5000,
                timerProgressBar : true,
                background : "#f1f1f1",
            });
        }, 3000);
    }, []);

    return(
        <>
        </>
    )
}

export default Pop;
