import Note from "../models/Note.js";

export async function getAllNotes(req,res) {
    try{
        const notes=await Note.find();
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes controller",error);
        res.status(500).json({message:"Internal server error in getAllNotes"});
    }
}

export async function createNote(req,res) {
     try{
        const {title,content}=req.body;
        const note=new Note({title,content});
        const savedNote=await note.save();
        res.status(201).json(savedNote);
    }catch(error){
        console.error("Error in createNote controller",error);
        res.status(500).json({message:"Internal server error in createNote"});
    }
}

export function updateNote(req,res) {
    // try{
    //     const {title,content}=req.body;
    //     const newNote=new Note({title,content});
    //     await newNote.save();
    //     res.status(201).json({message:""})
    // }catch(error){
    //     console.error("Error in getAllNotes controller",error);
    //     res.status(500).json({message:"Internal server error"});
    // }
    res.status(201).json({message:"updated"});
}

export function deleteNote(req,res) {
    res.status(200).json({message:"deleted"});
}

// {
//     "title":"my first route",
//     "content":"some content"
// }