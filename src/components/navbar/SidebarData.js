import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
// import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Úvodní stránka",
    path: "/homepage",
    icons: <AiIcons.OutlineHome />
  },
  {
    title: "Kdo jsme",
    path: "/",
    icons: <AiIcons.AiOutlineUser />,
    iconClose: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Historie",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Pionýr",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Tradice",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "PTO",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Vedoucí",
        path: "/",
        icons: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: "Muzikanti",
    path: "/",
    icons: <FiIcons.FiMusic />,
    iconClose: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Kde nás najdete",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "O nás",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Kontakty",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Seznam kurzů",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Plán akcí",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Fotogalerie",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Videogalerie",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Vyučující",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Učební materiály",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Ekonomické informace",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Fashion",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Vystoupení",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Příměstské tábory",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Skupina",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Noty",
        path: "/",
        icons: <AiIcons.AiFillHome />
      },
      {
        title: "Letní stanový tábor",
        path: "/",
        icons: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: "Informace",
    path: "/",
    icons: <AiIcons.AiOutlineInfoCircle />
  },
  {
    title: "Schůzky",
    path: "/",
    icons: <BsIcons.BsPeople />
  },
  {
    title: "Plán akcí",
    path: "/",
    icons: <AiIcons.AiOutlineCalendar />
  },
  {
    title: "Kronika",
    path: "/",
    icons: <AiIcons.AiOutlineBook />
  },
  {
    title: "Klubovna",
    path: "/",
    icons: <AiIcons.AiFillHome />
  },
  {
    title: "Tábory",
    path: "/",
    icons: <AiIcons.AiFillHome />
  },
  {
    title: "Vzdělávání",
    path: "/",
    icons: <AiIcons.AiFillHome />
  },
  {
    title: "Naučná stezka",
    path: "/",
    icons: <AiIcons.AiFillHome />
  },
  {
    title: "Kontakty",
    path: "/",
    icons: <AiIcons.AiOutlinePhone />
  },
  {
    title: "Kilometrovník",
    path: "/",
    icons: <AiIcons.AiFillHome />
  }
];
