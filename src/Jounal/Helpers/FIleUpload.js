import { CloudinaryApi } from "../../Api/CloudinaryApi";

export const FileUpload = async (file) => {
  const CloudinaryURL = "https://api.cloudinary.com/v1_1/dceapj45w/upload";

  try {
    const res = await CloudinaryApi.postForm("/dceapj45w/upload", {
      upload_preset: "React-Journal",
      file: file,
    });
    console.log(res);

    return res.data.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
