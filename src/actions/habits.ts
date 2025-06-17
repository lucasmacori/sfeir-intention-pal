import { firestore } from "@/lib/firebase";
import { Habit as HabitType } from "@/types/habits";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchHabits = async (): Promise<HabitType[]> => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    const habitsRef = collection(firestore, "habits");
    const q = query(habitsRef, where("userId", "==", currentUser?.uid));
    const docSnap = await getDocs(q);
    return docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as HabitType[];
  } catch (error) {
    console.log("An error occured while fetching habits", error);
    return [];
  }
};
