import {UPLOAD_FOLDER} from "../config/config.js";
import {moveFile} from "../utility/moveFile.js";


// Create Route
export const createBlog =  async (req, res) => {
    return res.json({message:'Blog created successfully'});
}


// Read Route
export const readBlog =  async (req, res) => {
    return res.json({message:'Blog read successfully'});
}


// Update Route
export const updateBlog =  async (req, res) => {
    return res.json({message:'Blog update successfully'});
}


// Delete Route
export const deleteBlog =  async (req, res) => {
    return res.json({message:'Blog delete successfully'});
}
