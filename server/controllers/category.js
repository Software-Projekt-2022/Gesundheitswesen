import Category from "../models/category.js"

export const getCategory = async (req, res) => { 
    try{
        const category = await Category.find();

        console.log(category)

        res.status(200).json(category);

    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createCategory = async (req, res) => {
    const body = req.body;

    const newCategory = new Category(body)

    try{
        await newCategory.save();

        res.status(201).json(newCategory)
    }catch{
        res.status(409).json( {message: error.message} )
    }

}