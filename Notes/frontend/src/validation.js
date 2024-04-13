export const validate = (heading,note)=>{

    heading.trim()
    note.trim()

    if(!heading.length){
        return "Heading is required"
    }else if(!note.length){
        return "Note is required"
    }else if(heading.length > 22){
        return "Heading length must be less than 22"
    }

    return ""
}