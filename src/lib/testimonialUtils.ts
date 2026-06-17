import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './firebase';

export const saveTestimonial = async (name: string, review: string, rating: number) => {
  const path = 'testimonials';
  try {
    const docRef = await addDoc(collection(db, path), {
      name,
      review,
      rating,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    return { success: false, error };
  }
};
