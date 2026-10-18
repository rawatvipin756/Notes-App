export function getAllNotes(req,res) {
    res.status(200).send("you get 20");
}

export function createNotes(req,res) {
    res.status(200).json({message:"sucess"});
}

export function updateNotes(req,res) {
    res.status(200).json({message:"updates"});
}

export function deleteNotes(req,res) {
    res.status(200).json({message:"deleted"});
}