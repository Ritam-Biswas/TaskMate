import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx7876fQ-JQOMSZLq4kXOnbW4Dg3mfU4g",
  authDomain: "taskmate-3d0fe.firebaseapp.com",
  projectId: "taskmate-3d0fe",
  storageBucket: "taskmate-3d0fe.appspot.com",
  messagingSenderId: "874030679634",
  appId: "1:874030679634:web:52a689b0b2b7906d42c18b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addPendingDocumentData = async (formFields,type) => {
  
  const docRef = doc(db, "Tasks", "Pending");

  try{
    if(type==="normal"){
      await updateDoc(docRef, {
        normal: arrayUnion(formFields)
      });
    }else{
      await updateDoc(docRef, {
        important: arrayUnion(formFields)
      });
    }
  }catch(e){
    console.error("Error adding field: ", e);
  }
}

export const addCompletedDocumentData = async (fieldToAdd) => {

  const docRef = doc(db, "Tasks", "Completed");

  try{
      await updateDoc(docRef, {
        complete: arrayUnion(fieldToAdd)
      });
  }catch(e){
    console.error("Error adding field: ", e);
  }
}

export const getNormalDataFromPending = async () => {
  const docRef = doc(db, "Tasks", "Pending");
  const docSnap = await getDoc(docRef);
  return docSnap.data().normal;
}

export const getImportantDataFromPending = async () => {
  const docRef = doc(db, "Tasks", "Pending");
  const docSnap = await getDoc(docRef);
  return docSnap.data().important;
}

export const getCompletedDataFromPending = async () => {
  const docRef = doc(db, "Tasks", "Completed");
  const docSnap = await getDoc(docRef);
  return docSnap.data().complete;
}



export const deleteDocumentdata = async (fieldToDelete) => {

  const docRef = doc(db, "Tasks", "Pending");

  try{
    await updateDoc(docRef, {
      normal : arrayRemove(fieldToDelete),
      important : arrayRemove(fieldToDelete)
    });
  }catch(e){
    console.error("Error adding field: ", e);
  }
}



