// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdrwEHdsJwmkoTsRnpkAsdjhMd6STdT0I",
  authDomain: "hyprlocalventuresweb.firebaseapp.com",
  projectId: "hyprlocalventuresweb",
  storageBucket: "hyprlocalventuresweb.firebasestorage.app",
  messagingSenderId: "95944047683",
  appId: "1:95944047683:web:9ae276609e7e0014f8a8f6",
  measurementId: "G-9HFNWVMLTZ"
};

// Initialize Firebase (lazy in case of SSR)
let app;
let db;
function getDb() {
  if (typeof window === "undefined") return null;
  if (!app) {
    app = initializeApp(firebaseConfig);
    try {
      getAnalytics(app);
    } catch (_) { /* analytics optional */ }
  }
  if (!db) db = getFirestore(app);
  return db;
}

const CONTACT_COLLECTION = "contactSubmissions";
const VISITS_COLLECTION = "visits";

/** Save a contact form submission to Firestore */
export async function addContactSubmission(data) {
  const database = getDb();
  if (!database) throw new Error("Firebase unavailable (server-side)");
  const docRef = await addDoc(collection(database, CONTACT_COLLECTION), {
    name: data.name,
    phone: data.phone,
    pincode: data.pincode,
    type: data.type,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
}

/** Record a site visit (call from main pages only, not admin) */
export async function recordVisit() {
  const database = getDb();
  if (!database) return;
  try {
    await addDoc(collection(database, VISITS_COLLECTION), {
      timestamp: new Date().toISOString(),
      path: typeof window !== "undefined" ? window.location.pathname : "/",
    });
  } catch (err) {
    console.warn("Visit tracking failed:", err?.message || err);
  }
}

/** Get total visit count for admin dashboard */
export async function getVisitCount() {
  const database = getDb();
  if (!database) return 0;
  const snapshot = await getDocs(collection(database, VISITS_COLLECTION));
  return snapshot.size;
}

/** Fetch all visits for admin (with timestamps for filtering/export) */
export async function getVisits() {
  const database = getDb();
  if (!database) return [];
  const snapshot = await getDocs(collection(database, VISITS_COLLECTION));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/** Fetch all contact form submissions for admin */
export async function getContactSubmissions() {
  const database = getDb();
  if (!database) return [];
  const snapshot = await getDocs(collection(database, CONTACT_COLLECTION));
  const docs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  docs.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
  return docs;
}