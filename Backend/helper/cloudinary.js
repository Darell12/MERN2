import { v2 as cloudinary } from "cloudinary";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})
export const uploadImage = async filePath => {
return await cloudinary.uploader.upload(filePath, {
folder: 'productos'
});
};
export const deleteImage = async id => {
return await cloudinary.uploader.destroy(id);
};

// // cloudinary.config({
// //     cloud_name: "dt3vtf04i",
// //     api_key: "778696854623278",
// //     api_secret: "YJgz8l3dkS3v_PAkhKlXM0CJPqU"
// // })