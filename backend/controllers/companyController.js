import cloudinary from "../config/cloudinary.js";
import { Company } from "../models/companySchema.js";
import getDataUri from "../util/datauri.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company Name is required!!",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "Company Already Registered!!",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userID: req.id,
    });

    return res.status(201).json({
      message: "Registered Successfully!!",
      success: true,
      company,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userID = req.id;
    const companies = await Company.find({ userID });
    if (!companies) {
      return res.status(404).json({
        message: "Companies not found!!",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyID = req.params.id;
    const company = await Company.findById(companyID);
    if (!company) {
      return res.status(404).json({
        message: "Companny not found!!",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //cloudinary
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;

    const updateData = { name, description, website, location, logo };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Updated Successfully!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
