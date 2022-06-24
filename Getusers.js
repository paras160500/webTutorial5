import { Usrs } from "./Usrs.js";

export const Getusers = async (req, res) => {
    try {

        switch(Usrs.length){
            case 0:
              return res.status(404).json({
                message:"Sorry we dont have users",
                success : false
                }).status(404)
                break;
                
            default:
                return res.status(200).json({
                message:"Users retrieved",
                success : true,
                users : Usrs
            })
            break;
        }
        
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};