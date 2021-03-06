import React from "react";
 
export default function Section({ title, subtitle, dark, id }) {
 return (
 <div className={"section" + (dark ? " section-dark" : "")} style={{ padding: 0 }}>
 <div className="section-content" id={id}>
 <h1>{title}</h1>
 <p>{subtitle}</p>
 </div>
 </div>
 );
}
