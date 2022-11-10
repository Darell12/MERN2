import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
    cloud_name: "dt3vtf04i",
    api_key: "778696854623278",
    api_secret: "YJgz8l3dkS3v_PAkhKlXM0CJPqU"
})
export const uploadImage = async filePath => {
return await cloudinary.uploader.upload(filePath, {
folder: 'productos'
});
};
export const deleteImage = async id => {
return await cloudinary.uploader.destroy(id);
};

// cloudinary.config({
//     cloud_name: "dt3vtf04i",
//     api_key: "778696854623278",
//     api_secret: "YJgz8l3dkS3v_PAkhKlXM0CJPqU"
// })