import { collection, doc, getDocs, query, where, DocumentData } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { User } from "../types";


interface botStoreProps {
  myBot: DocumentData | User | null;
  isBotLoading: boolean;
  fetchBotInfo: () => void;
}

export const useUserBot = create<botStoreProps>((set) => ({
  myBot: null,
  isBotLoading: true,
  fetchBotInfo: async () => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("username", "==", "Bot."));
    try {
      const docSnap = await getDocs(q);

      if (!docSnap.empty) {
        set({ myBot: docSnap.docs[0].data(), isBotLoading: false });
      } else {
        set({ myBot: null, isBotLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ myBot: null, isBotLoading: false });
    }
  },
}));
