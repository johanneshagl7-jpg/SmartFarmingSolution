import React from "react";
import { Link } from "react-router-dom";

const areas = [
  { id: "boden", title: "Boden & Düngung", color: "from-green-400 to-green-600" },
  { id: "pflanze", title: "Pflanzenbau", color: "from-yellow-400 to-orange-500" },
  { id: "maschine", title: "Maschinen & Technik", color: "from-blue-400 to-blue-600" },
  { id: "wetter", title: "Wetter & Umwelt", color: "from-cyan-400 to-blue-500" }
];

export default function Dashboard(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {areas.map(a=>(
        <Link key={a.id} to={"/tools/"+a.id}
          className={`p-10 rounded-3xl shadow-lg bg-gradient-to-r ${a.color} text-white text-center font-bold text-xl hover:scale-105 transition`}>
          {a.title}
        </Link>
      ))}
    </div>
  );
}
