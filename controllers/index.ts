import { Request, Response } from 'express';
import Customer  from '../models/customer';

const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.findAll();
        return res.status(200).json({ customers });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCustomerById = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const customer = await Customer.findByPk(id)
        if (customer) {
            return res.status(200).json({ customer });
        }
        return res.status(404).send('customer with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateCustomer = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;

        const body: {
            firstname: string,
            lastname: string,
            age: number,
            email: string,
            phone: string
        } = req.body ?? null;

        const updated = await Customer.update(body, {
            where: { id: id }
        });

        if (updated) {
            const updatedCustomer = await Customer.findOne({ where: { id: id } });
            return res.status(200).json({ customer: updatedCustomer });
        }
        throw new Error('Customer not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


const deleteCustomer = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;

        const deleted: number = await Customer.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Customer deleted");
        }
        throw new Error("Customer not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


const createCustomer = async (req: Request, res: Response) => {

    const body: {
        firstname: string,
        lastname: string,
        age: number,
        email: string,
        phone: string
    } = req.body ?? null;
    try {
        const customer = await Customer.create(body);
        return res.status(201).json({
            customer,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export default {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}






