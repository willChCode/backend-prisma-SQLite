import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const route = Router();
const prisma = new PrismaClient();

const url = '/products';

route.get(url, async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

route.get(`${url}/:id`, async (req, res) => {
  const { id } = req.params;
  const productById = await prisma.product.findFirst({
    where: {
      id: parseInt(id)
    },
    include: {
      category: true
    }
  });
  res.json(productById);
  // res.send('s');
});

route.post(url, async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body
  });
  res.json(newProduct);
});

export default route;
