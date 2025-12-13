import { db } from "../config/firebase.js";

const collection = db.collection("products");

export const getAllProducts = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getProductById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

export const createProduct = async (data) => {
  const ref = await collection.add(data);
  return { id: ref.id, ...data };
};

export const deleteProduct = async (id) => {
  await collection.doc(id).delete();
};
