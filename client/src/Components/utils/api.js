import axios from 'axios';


let url;

// "proxy": "http://localhost:80"



export const makeRequest=async(ImgData)=>{
try{

    console.log("piyush")
    let data= await axios.post(`/addImage`,{ImgData}); 
    
    return data;
    


}catch(er){

}
}


export const addProject=async(alldata)=>{
    try{

    // console.log("piyush")
        let data= await axios.post(`/addProject`,{alldata});
        // console.log("all okk");
        // console.log(data);
        return data;
        
    
    }catch(er){
    
    }
}

export const getAllData = async () => {

    try {
        console.log("yes bro i m in");
        let data = await axios.get(`/getAllData`);
        
            return data;


    }catch(er){

}
    }


// ======>> Testimonial section requests <<====== 

    export const postTestiomonial=async(testimonialData)=>{
        try{
                let data= await axios.post(`/addReview`,testimonialData);
                    return data;
        
        
            }catch(er){
        
        }
            }

export const contactusForm=async(formdata)=>{
                try{
                        let data= await axios.post(`/submit`,formdata);

                            return data;
                
                
                    }catch(er){
                console.log(er);
                }
                    }


export const deletProject=async(id)=>{
    try{
        // console.log(data);
        let resData= await axios.delete(`/dltProject/${id}`);

        return resData;
    }catch(er){
console.log(er);
    }
}

// ====> request for edit project <<======

export const edit=async(id,formData)=>{
    try{
        let resData=await axios.post(`/editProject/${id}`,formData);
        return resData
    }
    catch(er){
        console.log(er);
    }
}


export const updateImage=async(imgData,preImgid)=>{
    try{
  
        let data= await axios.post(`/updateImage?preImgid=${preImgid}`,{imgData});
        return data;
        
    
    }catch(er){
    
    }
    }


    // =========>> admin get requesst <<==========

    export const getAdmin =async()=>{
        try{
            // console.log("admin is activated");
        let data =await axios.get(`/admin`);
        return data;
        }
        catch(er){

        }
    }