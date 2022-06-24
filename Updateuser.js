import e from "express";
import { Usrs } from "./Usrs.js";

export const Updateuser = async (req, res) => {
    try {
        const userid = req.params.id
        const data = req.body
        if(!data['email']){
            return res.status(500).json({
            message: 'Please Provide us Email',
            success: false
            });
        }
        if(!data['firstName']){
            return res.status(500).json({
            message: 'Please Provide us firstName',
            success: false
            });
        }

        if(Usrs.length === 0) {
            return res.status(404).json({
            message: 'Sorry we dont have users',
            success: false
            });
        }


        const checkUserIndex = Usrs.findIndex((usr) => usr["id"] === userid)
        if(checkUserIndex > -1){
            data["id"] = Usrs[checkUserIndex]["id"];
            if(data["email"]==Usrs[checkUserIndex]["email"]){
                if(data["email"]==Usrs[checkUserIndex]["email"]){
                    return res.status(400).json({
                        message: 'User Already Updated',
                        success: false
                    })
                }
            }
            Usrs[checkUserIndex] = data
            return res.status(200).json({
            message: 'User updated',
            success: true
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