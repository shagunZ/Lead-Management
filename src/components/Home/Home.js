import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import Header from "../Header";
import Footer from "../Footer/Footer";
function Home(props) {
  return (
   

    <div className="w-full border h-full"  >
      <Header/>

      
      <div class="grid grid-cols-2 gap-4 p-16 opacity-90 "  style={{ backgroundImage: `url('https://www.cuchd.in/admissions/images/admission-banner.jpg')`,  backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'}}>

  <div className="">

  <div className="container h-full mx-auto">
        <div className="grid h-full items-center gap-4 md:grid-cols-10">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-8 md:items-start md:py-10 xl:col-span-6">
            <h1 className="text-white font-bold   text-4xl lg:text-6xl ">
            First Experience then Proceed
            </h1>
       
         
            
            <div className="p-4 mt-6">
                <a className="bg-blue py-4 border-blue border-2 hover:bg-white hover:border-accent hover:text-accent w-36 rounded-full p-3 px-8 text-center font-thin text-white transition-all"
                 >
                  Apply Now ➡️
                </a>
            </div>
            </div>
          </div>    
          </div>    

  </div>
 
  <div>
  <div className="font-bold text-5xl text-blue p-5">{props.name ? `Welcome - ${props.name}` : "Login please"}</div>
  <p className="text-white  text-lg font-extralight md:text-left flex flex-wrap">
            Empowering Careers & Fulfilling Dreams With Scholarships worth ₹170 Crore</p>
  <img className=" border-dark rounded" src="./SMVDU.png" alt="afdsaf" />
  </div>
</div>

<hr ></hr>

{/* tophighlights */}
<div className=" mb-4 py-4 bg-[#f5f5f5]">
  <div className="text-center font-thin mt-5">
  <h1 className="font-extralight tracking-wide text-red text-5xl">#Top Highlights</h1>
  </div>

  <div class="grid grid-cols-3 gap-8 container my-8">
  <div class="max-w-sm  bg-teal border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{boxShadow:"0 0 20px #ccc"}}>
    <a href="#">
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyg1_XUif7DPqsFPsY9VngwDrshWNdWFTfA&usqp=CAU" alt="" style={{width:"100%",height:"60%"}} />
    </a>
    <div class="p-5">
        <p class="mb-3 italic font-normal text-gray-700 dark:text-gray-400">The prestigious WURI Rankings 2023 has ranked us third in India among both government and private universities.</p>
    </div>
</div>
  <div class="max-w-sm  bg-teal border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{boxShadow:"0 0 20px #ccc"}}>
    <a href="#">
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv-d166YeQr5eB8laZxZj_ePGtiBSydCxzw&usqp=CAU" alt="" style={{width:"100%",height:"60%"}}/>
    </a>
    <div class="p-5">
        <p class="mb-3 italic font-normal text-gray-700 dark:text-gray-400">The prestigious WURI Rankings 2023 has ranked us third in India among both government and private universities.</p>
    </div>
</div>
  <div class="max-w-sm  bg-teal border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{boxShadow:"0 0 20px #ccc"}}>
    <a href="#">
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3h7liW07grLz7GzX7-gVaQLRgU_ZwQ30AOA&usqp=CAU" alt="" style={{width:"100%",height:"60%"}}/>
    </a>
    <div class="p-5">
        <p class="mb-3 italic font-normal text-gray-700 dark:text-gray-400">The prestigious WURI Rankings 2023 has ranked us third in India among both government and private universities.</p>
    </div>
</div>

</div>
</div>



<div class="grid grid-cols-4 gap-4 container my-8">
  
<div class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="container">
        <img class="rounded-t-lg" src="https://www.lpu.in/images/icons/student-icon.png" alt="" />
    </div>
    <div class="p-5 container">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">30000+</h5>
            <p className="font-extralight text-sm tracking-wide">Student</p>

    </div>
</div>
<div class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="container">
        <img class="rounded-t-lg" src="https://www.lpu.in/images/icons/alumni-icon.png" alt="" />
    </div>
    <div class="p-5 container">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">50k+</h5>
            <p className="font-extralight text-sm tracking-wide text-gray-500">Alumini</p>
    </div>
</div>
<div class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="container">
        <img class="rounded-t-lg" src="https://www.lpu.in/images/icons/campus-icon.png" alt="" />
    </div>
    <div class="p-5 container">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">600+</h5>
            <p className="font-extralight text-sm tracking-wide">Events</p>

    </div>
</div>
<div class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="container">
        <img class="rounded-t-lg" src="https://www.lpu.in/images/icons/profile-icon.png" alt="" />
    </div>
    <div class="p-5 container">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">300+</h5>
            <p className="font-extralight text-sm tracking-wide">Profile visitors</p>

    </div>
</div>

</div>


{/* 
<div className="text-center font-thin ">
  <h1 className="font-thin tracking-wide text-red text-5xl">#Rankings</h1>
  </div> */}

<div class="grid grid-cols-3 gap-8 container my-8">
<div class="max-w-sm  bg-teal border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{boxShadow:"0 0 20px #ccc"}}>
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-z38X9LgvIHoMxJsdvHWEb_k4Wue2cFeNw&usqp=CAU"  style={{width:"100%",height:"60%"}} alt="" />
        <div class="p-5">
        <p class="mb-3 italic font-normal text-gray-700 dark:text-gray-400">The prestigious WURI Rankings 2023 has ranked us third in India among both government and private universities.</p>
       
    </div>
</div>
<div class="max-w-sm  bg-teal border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{boxShadow:"0 0 20px #ccc"}}>
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwp9WFCo9Qkkk2dlHTQpDTz7IOih-22eMUEg&usqp=CAU"  style={{width:"100%"}} alt=""  />
    <div class="p-5">
        <p class="mb-3 italic font-normal text-gray-700 dark:text-gray-400">The prestigious WURI Rankings 2023 has ranked us third in India among both government and private universities.</p>
       
    </div>
</div>
<div class="max-w-sm  bg-teal border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{boxShadow:"0 0 20px #ccc"}}>
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkaMQFmvUge-2pSIP5OEqtulV4RwEz6pA3arwC3ndEPMkVuMF3GtjPAdiB5znjdx0T5Y&usqp=CAU"  style={{width:"100%"}}  alt="" />
    <div class="p-5">
        <p class="mb-3 italic font-normal text-gray-700 dark:text-gray-400">The prestigious WURI Rankings 2023 has ranked us third in India among both government and private universities.</p>
       
    </div>
</div>


</div>


<Footer/>
    </div>
  );
}

export default Home;
