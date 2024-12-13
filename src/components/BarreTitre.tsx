import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import FormulaireAjout from "./FormulaireAjout";
import { FormattedMessage } from "react-intl";

export default function BarreTitre() {
  const [ajout, setAjout] = React.useState(false);

  const ouvrirAjout = () => {
    setAjout(true);
  };

  const fermerAjout = () => {
    setAjout(false);
    console.log("Fermer");
  };
  return (
    <Box paddingBottom={"5%"}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            <FormattedMessage
              id="titres.titrePrincipal"
              defaultMessage="Final"
            />
          </Typography>
          <IconButton onClick={ouvrirAjout}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog
        open={ajout}
        onClose={fermerAjout}
        scroll="paper"
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle><FormattedMessage
              id="titres.ajout"
              defaultMessage="Ajouter"
            /></DialogTitle>
        <DialogContent>
          <FormulaireAjout />
        </DialogContent>
        <DialogActions>
          <Button onClick={fermerAjout}>
          <FormattedMessage
              id="boutons.annuler"
              defaultMessage="Annuler"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
