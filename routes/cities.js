import express from "express";
import cityController from "../controllers/citiesController.js";

export const citiesRouter = express.Router();

citiesRouter.get(`/getCityIdByName/:name`, (req, res) => {
  cityController.getCityIdByName(req, res);
});
export default citiesRouter;
