import { useEffect } from 'react';
import Swal from 'sweetalert2';

function Pop (){

    useEffect(() => {
        setTimeout(() => {
            Swal.fire({
                title: "🚩🚩 Happy Navratri 🚩🚩",
                text: "Wishing You And Your Family A Very Happy Navratri",
                icon: "info",
                timer: 3000
            });
        }, 3000);
    }, []);

    return(
        <>
        </>
    )
}

export default Pop;
