import { Application } from "../models/applicationSchema.js";
import { Job } from "../models/jobSchema.js";

export const applyJob = async (req, res) => {
  try {
    const userID = req.id;
    const jobID = req.params.id;

    if (!jobID) {
      return res.status(400).json({
        message: "Job ID is required!!",
        success: false,
      });
    }

    //check if user has already applied or not
    const existingApplication = await Application.findOne({
      job: jobID,
      applicant: userID,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied!!",
        success: false,
      });
    }

    //check if the job exists
    const job = await Job.findById(jobID);

    if (!job) {
      return res.status(404).json({
        message: "Job not found!!",
        success: false,
      });
    }

    //create a new application
    const newApplication = await Application.create({
      job: jobID,
      applicant: userID,
    });

    job.application.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      message: "Job applied successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userID = req.id;
    const application = await Application.find({ applicant: userID })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!application) {
      return res.status(404).json({
        message: "No applications found!!",
        success: false,
      });
    }

    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getApplicants = async (req, res) => {
  try {
    const jobID = req.params.id;
    const job = await Job.findById(jobID).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        options: { sort: { createdAt: -1 } },
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "No job found!!",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationID = req.params.id;

    if (!status) {
      return res.status(404).json({
        message: "Status required!!",
        success: false,
      });
    }

    const application = await Application.findOne({ _id: applicationID });

    if (!application) {
      return res.status(404).json({
        message: "Application not found!!",
        success: false,
      });
    }

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
