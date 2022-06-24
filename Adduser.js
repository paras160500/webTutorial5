import e from "express";
import { Usrs } from "./Usrs.js";

export const Adduser = async (req, res) => {
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

        const checkUserIndex = Usrs.findIndex((usr) => usr["email"] === data["email"])
        if(checkUserIndex > -1){
            return res.status(400).json({
            message: 'User Already Available',
            success: false
        });
        }else {
            //Source :- https://stackoverflow.com/questions/23327010/how-to-generate-unique-id-with-node-js
            data["id"] = Math.random().toString(26).slice(2)
            Usrs.push(data)
            return res.status(200).json({
            message: 'User added',
            success: true
        });
        }
        
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};