import express from 'express';
import { Employee } from '../models/employeeModel.js';

const employeeApp = express.Router();

// Create Employee
employeeApp.post('/', async (req, res, next) => {
    try {
        const newEmployee = new Employee(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).json({ message: 'Employee created successfully', payload: savedEmployee });
    } catch (err) {
        next(err);
    }
});

// Read all Employees
employeeApp.get('/', async (req, res, next) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({ message: 'Employees fetched successfully', payload: employees });
    } catch (err) {
        next(err);
    }
});

// Edit Employee
employeeApp.put('/:id', async (req, res, next) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully', payload: updatedEmployee });
    } catch (err) {
        next(err);
    }
});

// Delete Employee
employeeApp.delete('/:id', async (req, res, next) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully', payload: deletedEmployee });
    } catch (err) {
        next(err);
    }
});

export { employeeApp };
