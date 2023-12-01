const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Hem",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Utbildning",
    link: "/utbildning",
    active: "",
    sub_menus: [
      { link: "/about", title: "HLR Utbildning" },
      { link: "/team-1", title: "Första hjälpen" },
      { link: "/team-2", title: "Brand" },
      { link: "/team-details", title: "Alchol & Droger" },
      { link: "/pricing-plan", title: "Krissamtal" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Bemanning",
    link: "/bemanning",
    active: "",
    sub_menus: [
      { link: "/service", title: "Event" },
      { link: "/service-2", title: "Sjukvård" },
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Kunder",
    link: "/kunder",
    active: "",
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Kontakt",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
