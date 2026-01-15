import { useState } from "react";
import InputForm from "./InputForm";

export default function ConnectForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Fonction appelée lors de la soumission du formulaire
    const handleSubmit = (e) => {
        //Empêche le comportement par défaut du formulaire
        e.preventDefault();

        // Affiche dans la console les données saisies par l'utilisateur
        // Ces valeurs proviennent généralement du state (useState)
        console.log({
            email: email
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputForm
                    label="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <InputForm
                    label="password"
                    placeholder="Entre ton"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button type="submit">Enoyer</button>
            </form>
        </>
    )
}