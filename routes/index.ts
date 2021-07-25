import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

router.post('/customers', controllers.createCustomer)

router.get('/customers', controllers.getAllCustomers);

router.get('/customers/:id', controllers.getCustomerById);

router.put('/customers/:id', controllers.updateCustomer);

router.delete('/customers/:id', controllers.deleteCustomer);

export default router

