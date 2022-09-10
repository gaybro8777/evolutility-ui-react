/*
  Evolutility UI model for Wine tastings
  https://github.com/evoluteur/evolutility-ui-react
*/

module.exports = {
  id: "winetasting",
  qid: "evol_wine_tasting",
  oid: 6,
  title: "Wine tastings",
  world: "organizer",
  name: "wine tasting",
  namePlural: "wine tastings",
  icon: "wine.gif",
  active: true,
  position: 55,
  defaultViewMany: "list",
  defaultViewOne: "browse",
  titleField: "drink_date",
  fields: [
    {
      id: "drink_date",
      type: "date",
      label: "Date",
      required: true,
      inMany: true,
      width: 38,
    },
    {
      id: "wine",
      type: "lov",
      label: "Wine",
      object: "winecellar",
      required: true,
      inMany: true,
      width: 62,
    },
    {
      id: "taste",
      type: "text",
      label: "Taste",
      maxLength: 100,
      inMany: true,
      width: 100,
    },
    {
      id: "robe",
      type: "text",
      label: "Robe",
      maxLength: 100,
      inMany: true,
      width: 100,
    },
    {
      id: "nose",
      type: "text",
      label: "Nose",
      maxLength: 100,
      inMany: true,
      width: 100,
    },
    {
      id: "notes",
      type: "textmultiline",
      label: "Note",
      inMany: true,
      width: 100,
      height: 5,
    },
  ],
  groups: [
    {
      id: "p1",
      type: "panel",
      label: "Degustation",
      width: 62,
      fields: ["drink_date", "wine", "notes"],
    },
    {
      id: "p2",
      type: "panel",
      label: "Evaluation",
      width: 38,
      fields: ["taste", "robe", "nose"],
    },
  ],
  collections: [],
  noStats: true,
};
