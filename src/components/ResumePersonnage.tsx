import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import IconeRuban from "@mui/icons-material/MilitaryTech";
import DetailPersonnage from "./DetailPersonnage";
import { useContext, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreateIcon from "@mui/icons-material/Create";
import FormulaireModifie from "./FormulaireModifie";
import { PersonnageContext } from "../context/personnages.context";
import { FormattedMessage } from "react-intl";

type Apparition = {
  titre: String;
  type_media: String;
  annee_sortie: Number;
};
interface IPersonnageProps {
  id: string;
  nom: string;
  auteur: string;
  apparitions: Apparition[];
  franchises: string[];
  description: string;
  personnage_principal: boolean;
}

export default function ResumePersonnage(props: IPersonnageProps) {
  const [pageDetail, setPageDetail] = useState(false);
  const [pageModifie, setPageModifie] = useState(false);
  const { selectionnerPersonnage } = useContext(PersonnageContext);

  const ouvrirDetail = () => {
    selectionnerPersonnage(props.id);
    setPageDetail(true);
  };

  const fermerDetail = () => {
    setPageDetail(false);
  };

  const ouvrirModifie = () => {
    setPageModifie(true);
  };

  const fermerModifie = () => {
    setPageModifie(false);
  };
  function EstPrincipal() {
    if (props.personnage_principal) {
      return <IconeRuban></IconeRuban>;
    }
  }
  return (
    <>
      <Container sx={{ padding: 1, width: "100%" }}>
        <Button onClick={ouvrirDetail} sx={{ width: "100%" }}>
          <Card variant="outlined" sx={{ padding: 2, width: "100%" }}>
            <Box>
              <Stack direction="row" sx={{ alignItems: "left" }}>
                {EstPrincipal()}
                <Typography gutterBottom variant="h5" component="div">
                  {props.nom}
                </Typography>
              </Stack>
              <Divider />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", alignContent: "left" }}
              >
                {props.franchises.toString()}
              </Typography>
            </Box>
          </Card>
        </Button>
        <Dialog fullScreen open={pageDetail} onClose={fermerDetail}>
          <Box>
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <Stack direction={"row"} sx={{ flexGrow: 1 }}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={fermerDetail}
                    aria-label="close"
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <Stack>
                    <Typography variant="h5">{props.nom}</Typography>
                    <Typography variant="caption">
                      Par {props.auteur}
                    </Typography>
                  </Stack>
                </Stack>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={ouvrirModifie}
                  aria-label="close"
                >
                  <CreateIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
          <DetailPersonnage />
        </Dialog>
        <Dialog
          open={pageModifie}
          onClose={fermerModifie}
          scroll="paper"
          fullWidth={true}
          maxWidth="md"
        >
          <DialogTitle>
            <FormattedMessage
              id="titres.modifier"
              defaultMessage="Modifier Personnage"
              values={{ nomPersonnage: props.nom }}
            />
          </DialogTitle>
          <DialogContent>
            <FormulaireModifie />
          </DialogContent>
          <DialogActions>
            <Button onClick={fermerModifie}>
              <FormattedMessage
                id="boutons.annuler"
                defaultMessage="annuler"
              />
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
