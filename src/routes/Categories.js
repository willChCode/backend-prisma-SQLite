import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const route = Router();
const prisma = new PrismaClient();

const url = '/category';

route.get(url, async (req, res) => {
  const category = await prisma.category.findMany({
    include: {
      products: true
    }
  });

  res.json(category);
});

route.post(url, async (req, res) => {
  const newProduct = await prisma.category.create({
    data: req.body
  });
  res.json(newProduct);
});

export default route;
