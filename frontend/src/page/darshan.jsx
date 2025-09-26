import Gifimage from "../assets/darshan/mataranigif.gif";
import Darshanimg from "../assets/darshan/mataranidarshan.webp";
import Swal from "sweetalert2";

function Darshan () {

    const kirpa = () => {
          Swal.fire({
      title: "🙏🙏 Maa Ka Aashirwad 🙏🙏",
      html: `
        <div style="font-size:18px; font-family:poppins; line-height:1.6; text-align:center;">
          🌸 Maa ki kirpa se aapka har din <b>mangal</b> aur <b>safalta</b> se bhara rahe 🌸 <br/><br/>
          🚩 Maa Durga ki shakti aapko hamesha <b>himat</b> aur <b>samman</b> de 🚩 <br/><br/>
          🌺 Aapke ghar mein <b>khushhali</b> aur <b>shanti</b> bani rahe 🌺
        </div>
      `,
      imageUrl: "https://i.ibb.co/0MvxGd0/durga-maa.png", // you can use any Maa Durga image
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: "Maa Durga",
      background: "#fff7f7",
      color: "#b91c1c",
      confirmButtonText: "🙏 Dhanyavaad Maa 🙏",
      confirmButtonColor: "#d946ef",
      showClass: {
        popup: "animate__animated animate__fadeInDown"
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp"
      }
    });
    }
    
    Swal.fire("🙏 Mata Rani ka aashirwad lijiye! 🙏\n\nPrarthna kijiye aur ashirwad prapt kijiye.\n\n20 seconds ke baad aapko automatically Home Page par le jaya jayega.");

     setTimeout(() => {
     Swal.fire({
     title: "🙏 Jay Mata Di Time Out 🙏",
     text: "Aapko ab Home Page par le jaya ja raha hai...",
     icon: "info",
     timer: 3000, // popup shows for 2 seconds
     showConfirmButton: false,
     }).then(() => {
    window.location.href = "/"; // redirect after popup closes
    });
    }, 20000);

      setTimeout(() => {
                //  window.location.href = "/";  //that means after 5 sec it will redirect to home page
      },10000);

    return(
        <>
        <div className="h-[1100px] w-full bg-white grid place-content-center gap-1">
             {/* adding upper gif */}
             <div className="h-[200px] w-full flex justify-center items-center gap-[300px]">
                 {/* first */}
                 <div className="w-[300px] h-full border-[0px] border-red-300 rounded-4xl flex justify-center items-center">
                    <div className="w-[200px] h-full rounded-full border-[0px] border-red-300 shadow-2xl">
                        <img src={Gifimage} alt="maapic" className="w-full h-full rounded-full"/>
                    </div>
                 </div>
                 {/* second */}
                 <div className="w-[300px] h-full border-[0px] border-red-300 rounded-4xl flex justify-center items-center">
                    <div className="w-[200px] h-full rounded-full border-[0px] border-red-300 shadow-2xl">
                        <img src={Gifimage} alt="maapic" className="w-full h-full rounded-full"/>
                    </div>
                 </div>
             </div>

             {/* adding middle hero sec */}
             <div className="w-full h-[600px] grid place-content-center gap-[30px]">
                <div className="w-[550px] h-[550px] border-[0px] border-red-300 shadow-2xl rounded-full flex justify-center items-center">
                    <img src={Darshanimg} alt="maapic" className="w-[500px] h-[500px] rounded-full"/>   
                </div> 
                {/* button */}
                <div className="w-full h-[50px] flex justify-center items-center">
                    <button onClick={kirpa } className="h-full w-[300px] border-[1px] border-red-300 transition-colors ease-in-out duration-200 flex justify-center items-center rounded-full">
                        <p className="w-full h-full cursor-pointer tracking-widest hover:text-cyan-400 flex justify-center items-center">After Prathna Press</p>
                    </button>
                </div>
             </div>

             {/* adding bottom gif */}
             <div className="h-[200px] w-full flex justify-center items-center gap-[300px]">
                 {/* first */}
                 <div className="w-[300px] h-full border-[0px] border-red-300 rounded-4xl flex justify-center items-center">
                    <div className="w-[200px] h-full rounded-full border-[0px] border-red-300 shadow-2xl">
                        <img src={Gifimage} alt="maapic" className="w-full h-full rounded-full"/>
                    </div>
                 </div>
                 {/* second */}
                 <div className="w-[300px] h-full border-[0px] border-red-300 rounded-4xl flex justify-center items-center">
                    <div className="w-[200px] h-full rounded-full border-[0px] border-red-300 shadow-2xl">
                        <img src={Gifimage} alt="maapic" className="w-full h-full rounded-full"/>
                    </div>
                 </div>
             </div>
        </div>
        </>
    )
}

export default Darshan;