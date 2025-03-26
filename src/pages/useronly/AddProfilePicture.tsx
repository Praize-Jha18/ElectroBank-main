import { useState } from "react"
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
function AddProfilePicture() {
    const [file, setFile] = useState(null)
   
    const handleUpload = (e : any)=>{
        e.preventDefault();
        const formdata = new FormData()
        if (!file) {
            console.log("No file selected");
            return;
        }
        formdata.append('file', file)
         axios.post( 'https://electrobank-main.onrender.com/upload-pfp', formdata, {withCredentials : true})
         .then((res => toast.success(res.data.message)))
         .catch(err=>{
            console.log(err)
            toast.error(err.message)
        })
    }

  return (
    <>
    <ToastContainer/>
    <div className="w-[90%] mx-auto mt-10 flex flex-col items-center">
        <h1 className="text-center text-[40px]">Upload picture</h1>
        <input type="file" className="mt-10 w-[50%] mx-auto" onChange={(e: any) => setFile(e.target.files[0])} /><br />
        <button onClick={handleUpload} className="mt-10 w-[30%] mx-auto text-center border-2 border-sky-500 text-white h-[50px] rounded bg-sky-500">Upload</button>
    </div>
    </>
  )
}

export default AddProfilePicture