import {
  getAllProducts,
  getProductById as getProductModelById,
  createProduct as createProductModel,
  deleteProduct as deleteProductModel
} from '../models/products.model.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await getProductModelById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await createProductModel(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await deleteProductModel(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    next(error);
  }
};
