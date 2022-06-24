import e from "express";
import { Usrs } from "./Usrs.js";

export const Getuser = async (req, res) => {
    try {
        const userid = req.params.id
        if(Usrs.length === 0) {
            return res.status(404).json({
            message: 'Sorry we dont have users',
            success: false
            });
        }

        const checkUserIndex = Usrs.findIndex((usr) => usr["id"] === userid)
        if(checkUserIndex > -1){
            return res.status(200).json({
            msuccess : true,
            user: Usrs[checkUserIndex]
        });
        }else {
            return res.status(404).json({
            message: 'User Not Found',
            success: false
        });
        }
        
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};