import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import IconeRuban from "@mui/icons-material/MilitaryTech";
import { useContext } from "react";
import { PersonnageContext } from "../context/personnages.context";
import { FormattedMessage } from "react-intl";

export default function DetailPersonnage() {
  const { personnageSelectionne } = useContext(PersonnageContext);
  function PersonnagePrincipal() {
    if (personnageSelectionne.personnage_principal) {
      return (
        <Box sx={{ mx: 1 }}>
          <Alert variant="filled" severity="warning" icon={<IconeRuban />}>
            <Typography variant="button">
              <FormattedMessage
                id="details.personnagePrincipal"
                defaultMessage="Principal"
              />
            </Typography>
          </Alert>
        </Box>
      );
    }
  }
  return (
    <>
      {PersonnagePrincipal()}
      <Container sx={{ p: 5 }}>
        <Box sx={{ pb: 4 }}>
          <Typography variant="h5">
          <FormattedMessage
                id="details.description"
                defaultMessage="Details"
              />
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ ml: 5 }}>
            {personnageSelectionne.description}
          </Typography>
        </Box>
        <Box sx={{ py: 4 }}>
          <Typography variant="h5">Franchises</Typography>
          <Divider />
          <Box sx={{ ml: 5, mt: 2, width: "100%" }}>
            {personnageSelectionne.franchises.map((franchise) => (
              <Box sx={{ width: "90%", p: 2 }}>
                <Stack direction="row">
                  <Typography sx={{ flexGrow: 1 }}>{franchise}</Typography>
                  <Button>
                    <FormattedMessage
                      id="boutons.franchises"
                      defaultMessage="De Cette Franchise"
                    />
                  </Button>
                </Stack>
                <Divider />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ py: 4 }}>
          <Typography variant="h5">
          <FormattedMessage
                id="details.apparitions"
                defaultMessage="Principal"
              />
          </Typography>
          <Divider />
          <Box sx={{ ml: 5, mt: 2, width: "100%" }}>
            {personnageSelectionne.apparitions.map((apparition) => (
              <Box sx={{ width: "90%", p: 2 }}>
                <Stack direction="row">
                  <Typography sx={{ flexGrow: 1 }}>
                    {apparition.titre} ({apparition.annee_sortie.toString()})
                  </Typography>
                  <Typography align="right">{apparition.type_media}</Typography>
                </Stack>
                <Divider />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
