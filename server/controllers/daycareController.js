const Daycare = require("../models/Daycare");

const createDaycare = async (req, res) => {
    try {
        const { name, location, capacity, pricePerDay } = req.body;

        const daycare = await Daycare.create({
            name,
            location,
            capacity,
            pricePerDay,
            provider: req.user.id,
        });

        res.status(201).json({
            success: true,
            message: "Daycare Created Successfully",
            daycare,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllDaycares = async (req, res) => {
    try {

       const daycares = await Daycare.find().populate(
  "provider",
  "_id name email"
);

        res.status(200).json({
            success: true,
            count: daycares.length,
            daycares,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};
const getDaycareById = async (req, res) => {
    try {

        const { id } = req.params;

       const daycare = await Daycare.findById(id).populate(
  "provider",
  "_id name email"
);

        if (!daycare) {
            return res.status(404).json({
                success: false,
                message: "Daycare not found",
            });
        }

        res.status(200).json({
            success: true,
            daycare,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};
const updateDaycare = async (req, res) => {
    try {

        const { id } = req.params;

        const updatedDaycare = await Daycare.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedDaycare) {
            return res.status(404).json({
                success: false,
                message: "Daycare not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Daycare Updated",
            updatedDaycare,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

const deleteDaycare = async (req, res) => {
    try {

        const { id } = req.params;

        const deletedDaycare = await Daycare.findByIdAndDelete(id);

        if (!deletedDaycare) {
            return res.status(404).json({
                success: false,
                message: "Daycare not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Daycare Deleted Successfully",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};
module.exports = {
    createDaycare,
    getAllDaycares,
    getDaycareById,
    updateDaycare,
    deleteDaycare,
};