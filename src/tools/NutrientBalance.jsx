import React, { useState } from "react";

export default function NutrientBalance(){
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const [k, setK] = useState(0);
  const [nOut, setNOut] = useState(0);
  const [pOut, setPOut] = useState(0);
  const [kOut, setKOut] = useState(0);
  return (<div className="space-y-2 text-sm">
    <div>Düngung N <input type='number' value={n} onChange={e=>setN(+e.target.value)} /></div>
    <div>Düngung P <input type='number' value={p} onChange={e=>setP(+e.target.value)} /></div>
    <div>Düngung K <input type='number' value={k} onChange={e=>setK(+e.target.value)} /></div>
    <div>Entzug N <input type='number' value={nOut} onChange={e=>setNOut(+e.target.value)} /></div>
    <div>Entzug P <input type='number' value={pOut} onChange={e=>setPOut(+e.target.value)} /></div>
    <div>Entzug K <input type='number' value={kOut} onChange={e=>setKOut(+e.target.value)} /></div>
    <div className="mt-2">Bilanz: N {n-nOut} | P {p-pOut} | K {k-kOut}</div>
  </div>);
}
