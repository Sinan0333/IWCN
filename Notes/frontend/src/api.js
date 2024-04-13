import axios from 'axios'

const noteApi= axios.create({
    baseURL:'http://localhost:3000/'
})

export const addNoteApi = async (data)=>{
    try { 
        const result =  await noteApi.post('/create',data)  
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const getAllNoteApi = async ()=>{
    try { 
        const result =  await noteApi.get('/get_notes')  
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const deleteNoteApi = async (id)=>{
    try { 
        const result =  await noteApi.delete(`/delete/${id}`)  
        return result.data
    } catch (error) {
        console.log(error);
    }
}

