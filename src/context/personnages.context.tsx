import axios from 'axios';
import React, { useState } from 'react';
import Francais from "../lang/fr.json";
import Anglais from "../lang/en.json"

type Apparition = {
    titre:string;
    type_media:string;
    annee_sortie:number;
}

interface IPersonnage {
    _id:string,
    nom:string,
    auteur:string;
    apparitions: Apparition[],
    franchises: string[],
    description:string,
    personnage_principal: boolean,
}

const URLbase:string = "https://animated-faloodeh-b346a5.netlify.app/api/"

const langues = [Francais,Anglais];

export type PersonnageContextType = {
  listePersonnages: IPersonnage[];
  personnageSelectionne: IPersonnage;
  updateListePersonnages: () => void;
  selectionnerPersonnage:(id:string) => void;
};

const personnages: IPersonnage[] = [
    {
      _id:"6724dd9680e67d964961d02c",
      nom: "Personnage",
      auteur: "Auteur",
      apparitions: [
        {
          titre: "Apparition1",
          type_media: "Autre",
          annee_sortie: 123,
        },
        {
          titre: "Apparition2",
          type_media: "Autre",
          annee_sortie: 123,
        },
        {
          titre: "Apparition3",
          type_media: "Autre",
          annee_sortie: 123,
        },
      ],
      franchises: ["Franchise1", "Franchise2"],
      description: "Un Personnage",
      personnage_principal: true,
    },
    {
      _id:"6724dd9680e67d964961d02c",
      nom: "Personnage",
      auteur: "",
      apparitions: [],
      franchises: ["Franchise1", "Franchise2"],
      description: "",
      personnage_principal: false,
    },
  ];
const personnage: IPersonnage = {
  _id:"6724dd9680e67d964961d02c",
  nom: "Personnage",
  auteur: "Auteur",
  apparitions: [
    {
      titre: "Apparition1",
      type_media: "Autre",
      annee_sortie: 123,
    },
    {
      titre: "Apparition2",
      type_media: "Autre",
      annee_sortie: 123,
    },
    {
      titre: "Apparition3",
      type_media: "Autre",
      annee_sortie: 123,
    },
  ],
  franchises: ["Franchise1", "Franchise2"],
  description: "Un Personnage",
  personnage_principal: true,
};

export const PersonnageContext = React.createContext<PersonnageContextType>({
    listePersonnages: personnages,
    personnageSelectionne: personnage,
    updateListePersonnages: () => {},
    selectionnerPersonnage: () => {},
});

export default function PersonnageProvider(props: any) {
  const [listePersonnages, setListePersonnages] = useState(personnages);
  const [personnageSelectionne, setPersonnageSelectionne] = useState(personnage);
  const [langue,setLangue] = useState(langues[0]);

  function updateListePersonnages(){
    axios.get(URLbase + "personnages").then((response) => {
        setListePersonnages(response.data.personnages);
      });
  }

  function selectionnerPersonnage(id:string) {
    axios.get(URLbase+'personnages/id/'+id).then((response) => {
        setPersonnageSelectionne(response.data.personnage);
      });
  }
  function ajouterPersonnage(personnage:IPersonnage) {
    axios.post(URLbase,personnage);
  }
  function modifierPersonnage(personnage:IPersonnage) {
    axios.put(URLbase,personnage);
  }
  function supprimerPersonnage(personnage:IPersonnage) {
    axios.delete(URLbase,{data:personnage});
  }
  function changerLangue(langue:number) {
    setLangue(langues[langue])
  }

  const values = {
    listePersonnages,
    personnageSelectionne,
    langue,
    updateListePersonnages,
    selectionnerPersonnage,
    ajouterPersonnage,
    modifierPersonnage,
    supprimerPersonnage,
    changerLangue,
  };
  updateListePersonnages;
  return (
    <PersonnageContext.Provider value={values}>
      {props.children}
    </PersonnageContext.Provider>
  );
}