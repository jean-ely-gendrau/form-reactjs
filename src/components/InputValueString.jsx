import { useState } from "react";

// Composant réutilisable : accepte des props pour personnaliser son comportement
function InputValueString({ label, type = "text", classParent = "flex flex-col" }) {

    // Input contrôlé : React gère la valeur via le state
    const [valueString, setValueString] = useState("");

    return (
        <div className={classParent}>
            <label htmlFor={`id-${label}`} className='text-xl md:text-2xl'>Entrez votre {label}</label>
            <input
                id={`id-${label}`}
                className='border-2 border-amber-700 rounded-2xl'
                type={type}
                // value : lie l'input au state (input contrôlé)
                value={valueString}
                // onChange : met à jour le state à chaque frappe
                onChange={(e) => setValueString(e.target.value)}
                placeholder={`Entrez votre ${label}`}
            />

            <p>Vous avez entrer {valueString}</p>
        </div>
    )
}

export default InputValueString;