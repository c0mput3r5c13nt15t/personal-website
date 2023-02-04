import { useEffect, useState } from "react";
import { db } from "lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function useMe() {
  const [me, setMe] = useState<any>({});

  useEffect(() => {
    getProjects().then((me) => setMe(me));
  }, []);

  async function getProjects(): Promise<any> {
    const docRef = doc(db, "me", "0WGLUBVzOZYN07RZ2bmI");
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  return { me };
}
