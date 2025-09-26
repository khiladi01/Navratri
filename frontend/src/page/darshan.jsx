import Gifimage from "../assets/darshan/mataranigif.gif";
import Darshanimg from "../assets/darshan/mataranidarshan.webp";
import Swal from "sweetalert2";

function Darshan() {
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
      imageUrl: "../assets/darshan/mataranidarshan.webp",
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: "Maa Durga",
      background: "#fff7f7",
      color: "#b91c1c",
      confirmButtonText: "🙏 Dhanyavaad Maa 🙏",
      confirmButtonColor: "#d946ef",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  Swal.fire(
    "🙏 Mata Rani ka aashirwad lijiye! 🙏\n\nPrarthna kijiye aur ashirwad prapt kijiye.\n\n30 seconds ke baad aapko automatically Home Page par le jaya jayega."
  );

  setTimeout(() => {
    Swal.fire({
      title: "🙏 Jay Mata Di Time Out 🙏",
      text: "Aapko ab Home Page par le jaya ja raha hai...",
      icon: "info",
      timer: 3000,
      showConfirmButton: false,
    }).then(() => {
      window.location.href = "/";
    });
  }, 30000);

  return (
    <>
      <div className="min-h-screen w-full bg-white grid place-content-center gap-4 p-4">
        {/* upper gif row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-32">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl">
            <img
              src={Gifimage}
              alt="maapic"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl">
            <img
              src={Gifimage}
              alt="maapic"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* middle hero section */}
        <div className="grid place-content-center gap-6">
          <div className="w-60 h-60 md:w-[550px] md:h-[550px] rounded-full shadow-2xl flex justify-center items-center">
            <img
              src={Darshanimg}
              alt="maapic"
              className="w-52 h-52 md:w-[500px] md:h-[500px] rounded-full"
            />
          </div>

          {/* button */}
          <div className="w-full flex justify-center items-center">
            <button
              onClick={kirpa}
              className="h-12 w-60 md:w-72 border border-red-300 transition-colors ease-in-out duration-200 flex justify-center items-center rounded-full"
            >
              <p className="w-full h-full cursor-pointer tracking-widest hover:text-cyan-400 flex justify-center items-center text-sm md:text-base">
                After Prathna Press
              </p>
            </button>
          </div>
        </div>

        {/* bottom gif row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-32">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl">
            <img
              src={Gifimage}
              alt="maapic"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl">
            <img
              src={Gifimage}
              alt="maapic"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Darshan;
