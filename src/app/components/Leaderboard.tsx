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
    <div className="p-6">
      <h2>100%'ers</h2>

      <span>
        {value?.docs.map((doc) => {
          const data = doc.data();
          const time = data.time.toDate()

          return (
            <div className="border-2 m-2 p-2 text-center" key={doc.id}>
              <p>{data.name}</p>
              <p>{time.toLocaleDateString()}</p>
            </div>
          );
        })}
      </span>
    </div>
  );
};
