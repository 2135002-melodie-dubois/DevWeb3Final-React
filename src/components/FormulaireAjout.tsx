import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { FormattedMessage } from "react-intl";


type Apparition = {
    titre:string;
    type_media:string;
    annee_sortie:number;
}

let listeFranchises:string[] = [];
let listeApparitions:Apparition[] = [];


export default function FormulaireAjout()
{
    const [nom, setNom] = useState("");
    const [auteur, setAuteur] = useState("");
    const [apparitions,setApparitions] = useState(listeApparitions);
    const [franchises, setFranchises] = useState(listeFranchises);
    const [description, setDesription] = useState("");
    const [principal, setPrincipal] = useState(false);
    
    const typesMedia = ['Jeu Video','Serie Televisee','Livre','Film','Musique','Autre'];
    
    const ListerFranchises = franchises.map((franchise, index) => (
      <Box>
        <Stack direction={"row"} sx={{ paddingLeft: 2 }}>
          <TextField
            required
            label={
              <FormattedMessage
                id="formulaires.franchise"
                defaultMessage="Franchise"
              />
            }
            value={franchise}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              modifierFranchise(event.target.value, index);
            }}
            variant="filled"
            sx={{ flexGrow: 1, paddingBottom: 1 }}
          />
          <Button
            onClick={() =>
              setFranchises(franchises.filter((_e, i) => i !== index))
            }
          >
            Supprimer
          </Button>
        </Stack>
      </Box>
    ));
  
    const modifierFranchise = (franchise: string, index: Number) => {
      const update = franchises.map((e, i) => {
        if (i === index) {
          return franchise;
        } else {
          return e;
        }
      });
      setFranchises(update);
    };
    const ajouterFranchise = () => {
      setFranchises(franchises.concat([""]));
    };
  
    const ListerApparitions = apparitions.map((apparition, index) => (
      <Box sx={{ paddingBottom: 1 }}>
        <Stack direction={"row"} sx={{ paddingLeft: 2 }}>
          <TextField
            required
            label={
              <FormattedMessage
                id="formulaires.apparition.titre"
                defaultMessage="Titre"
              />
            }
            value={apparition.titre}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              modifierTitreApparition(event.target.value, index);
            }}
            variant="filled"
            sx={{ flexGrow: 1 }}
          />
          <Button
            onClick={() =>
              setApparitions(apparitions.filter((_e, i) => i !== index))
            }
          >
            Supprimer
          </Button>
        </Stack>
        <Stack direction={"row"} sx={{ paddingLeft: 2, paddingTop: 1 }}>
          <TextField
            required
            select
            label={
              <FormattedMessage
                id="formulaires.apparition.media"
                defaultMessage="Media"
              />
            }
            value={apparition.type_media}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              modifierMediaApparition(event.target.value.toString(), index);
            }}
            sx={{ flexGrow: 4 }}
            variant="filled"
          >
            {typesMedia.map((media) => (
              <MenuItem value={media}>{media}</MenuItem>
            ))}
          </TextField>
          <TextField
            required
            type="number"
            label={
              <FormattedMessage
                id="formulaires.apparition.sortie"
                defaultMessage="Sortie"
              />
            }
            value={apparition.annee_sortie}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              modifierAnneeApparition(event.target.valueAsNumber, index);
            }}
            variant="filled"
            sx={{ flexGrow: 1, paddingLeft: 1 }}
          />
        </Stack>
      </Box>
    ));
  
    const modifierTitreApparition = (titre: string, index: Number) => {
      const update = apparitions.map((e, i) => {
        if (i === index) {
          return {
            titre: titre,
            type_media: apparitions[i].type_media,
            annee_sortie: apparitions[i].annee_sortie,
          };
        } else {
          return e;
        }
      });
      setApparitions(update);
    };
  
    const modifierMediaApparition = (media: string, index: Number) => {
      const update = apparitions.map((e, i) => {
        if (i === index) {
          return {
            titre: apparitions[i].titre,
            type_media: media,
            annee_sortie: apparitions[i].annee_sortie,
          };
        } else {
          return e;
        }
      });
      setApparitions(update);
    };
  
    const modifierAnneeApparition = (annee: number, index: Number) => {
      const update = apparitions.map((e, i) => {
        if (i === index) {
          return {
            titre: apparitions[i].titre,
            type_media: apparitions[i].type_media,
            annee_sortie: annee,
          };
        } else {
          return e;
        }
      });
      setApparitions(update);
    };
  
    const ajouterApparition = () => {
      setApparitions(
        apparitions.concat({
          titre: "",
          type_media: "",
          annee_sortie: new Date().getFullYear(),
        })
      );
    };
  
    return (
      <>
        <FormControl sx={{ padding: 1, width: "95%" }}>
          <Stack direction={"column"}>
            <TextField
              required
              label={
                <FormattedMessage id="formulaires.nom" defaultMessage="Nom" />
              }
              value={nom}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNom(event.target.value);
              }}
              variant="standard"
            />
            <TextField
              required
              label={
                <FormattedMessage
                  id="formulaires.auteur"
                  defaultMessage="Auteur"
                />
              }
              value={auteur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAuteur(event.target.value);
              }}
              variant="standard"
            />
            <TextField
              multiline
              label={
                <FormattedMessage
                  id="formulaires.description"
                  defaultMessage="Description"
                />
              }
              value={description}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDesription(event.target.value);
              }}
              variant="standard"
            />
            <Stack direction={"row"} sx={{ paddingTop: 3 }}>
              <Typography sx={{ flexGrow: 1 }} variant="h6">
              <FormattedMessage
                    id="formulaires.franchisesListe"
                    defaultMessage="Liste"
                  />
              </Typography>
              <IconButton onClick={ajouterFranchise}>
                <AddIcon />
              </IconButton>
            </Stack>
            {ListerFranchises}
  
            <Stack direction={"row"} sx={{ paddingTop: 3 }}>
              <Typography sx={{ flexGrow: 1 }} variant="h6">
              <FormattedMessage
                    id="formulaires.apparitionListe"
                    defaultMessage="Liste"
                  />
              </Typography>
              <IconButton onClick={ajouterApparition}>
                <AddIcon />
              </IconButton>
            </Stack>
            {ListerApparitions}
            <FormControlLabel
              control={
                <Checkbox
                  checked={principal}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPrincipal(event.target.checked);
                  }}
                />
              }
              label={
                <FormattedMessage
                  id="formulaires.personnagePrincipal"
                  defaultMessage="Principal"
                />
              }
            />
          </Stack>
          <Button type="submit" variant="contained">
            <FormattedMessage
              id="boutons.enregistrer"
              defaultMessage="Confirmer"
            />
          </Button>
        </FormControl>
      </>
    );
  }
  