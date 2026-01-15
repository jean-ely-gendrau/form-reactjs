// Composant réutilisable : accepte des props pour personnaliser son comportement
function InputForm(
    {
        label,
        onChange,
        value,
        placeholder = "Entrez votre",
        type = "text",
        classParent = "flex flex-col",
        classEnfant = "border-2 border-amber-700 rounded-2xl",
        classLabel = "text-xl md:text-2xl"
    }) {

    return (
        <div className={classParent}>
            <label htmlFor={`id-${label}`} className={classLabel}>Entrez votre {label}</label>
            <input
                id={`id-${label}`}
                name={label}
                className={classEnfant}
                type={type}
                // value : lie l'input au state (input contrôlé)
                value={value}
                // onChange : met à jour le state à chaque frappe
                onChange={onChange}
                placeholder={`${placeholder} ${label}`}
            />

            <p>Vous avez entré: {value}</p>
        </div>
    )
}

export default InputForm;