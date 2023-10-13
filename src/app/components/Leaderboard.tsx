import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../utils/firebase";
import { collection } from "firebase/firestore";

export const Leaderboard: React.FC = () => {
  const [value, loading, error] = useCollection(collection(db, "leaderboard"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }

  return (
    <div className="flex flex-col p-6 rounded-3xl bg-slate-300 w-80 h-auto text-slate-800 m-10">
      <h2 className="font-bold text-xl text-center">100%'ers</h2>

      {value?.docs.map((doc) => {
        const data = doc.data();
        const time = data.time.toDate();

        return (
          <div
            className="flex text-slate-200 bg-slate-800 rounded-lg font-bold p-2 my-2 text-center justify-between w-full"
            key={doc.id}
          >
            <p className="">{data.name}</p>
            <p>{time.toLocaleDateString()}</p>
          </div>
        );
      })}
    </div>
  );
};
