import { useEffect, useState } from "react";
import { collection, query, getDocs } from "@firebase/firestore";
import { db } from "lib/firebase";

export default function useProjects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjects().then((projects) => setProjects(projects));
  }, []);

  async function getProjects(): Promise<any[]> {
    const q = query(collection(db, "/projects"));
    const querySnapshot = await getDocs(q);
    const projects: any[] = [];
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const new_project = { id: doc.id, ...data };
      projects.push(new_project);
    });
    return projects;
  }

  return { projects };
}
