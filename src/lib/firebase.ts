import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCODA4a-Tp4kMilVnoCCWvT7SZHQ63IuZ4",
  authDomain: "new-jumia-delivery-page.firebaseapp.com",
  projectId: "new-jumia-delivery-page",
  storageBucket: "new-jumia-delivery-page.firebasestorage.app",
  messagingSenderId: "431526468218",
  appId: "1:431526468218:web:6fa06ff75409b8248379c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export interface BusinessLead {
  businessName: string;
  email: string;
  phone: string;
  monthlyPackages: string;
  submittedAt: Date;
}

export const submitBusinessLead = async (lead: Omit<BusinessLead, 'submittedAt'>) => {
  console.log("Attempting to submit lead:", lead);
  try {
    const docRef = await addDoc(collection(db, "business_leads"), {
      ...lead,
      submittedAt: new Date()
    });
    console.log("Lead submitted successfully with ID:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting lead to Firebase:", error);
    throw error;
  }
};

export { db };
