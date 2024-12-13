import { Typography } from "@mui/material";
import ResumePersonnage from './ResumePersonnage';
import { useContext } from "react";
import { PersonnageContext } from "../context/personnages.context";
import { FormattedMessage } from "react-intl";

export default function ListePersonnage()
{
  const { listePersonnages } = useContext(PersonnageContext);  
  const personnages = listePersonnages.map(person => <ResumePersonnage 
    id={person._id}
    nom={person.nom}
    auteur={person.auteur}
    apparitions={person.apparitions}
    franchises={person.franchises}
    description={person.description}
    personnage_principal={person.personnage_principal}>
    </ResumePersonnage>)
    return (
      <>
        <Typography variant="h3" sx={{ padding: 2 }}>
        <FormattedMessage
              id="titres.listePersonnages"
              defaultMessage="Personnages"
            />
        </Typography>
        {personnages}
      </>
    );
}