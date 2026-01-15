import { useState } from "react";
import InputForm from "./InputForm";

export default function ConnectForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Fonction appelée lors de la soumission du formulaire
    const handleSubmit = (e) => {
        //Empêche le comportement par défaut du formulaire
        e.preventDefault();

        if (!email.includes("@")) {
            setError(`Votre email est incorrect : ${email}`);
            return;
        }

        if (password.length < 6) {
            setError("Votre mot de passe ne contient pas le nombre de caractères requis");
            return;
        }

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

                {/* Affichage en temps réel de la valeur saisie */}
                {error && <p className="text-red-500">{error}</p>}

                <button type="submit">Enoyer</button>
            </form>
        </>
    )
}