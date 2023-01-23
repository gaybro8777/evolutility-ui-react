// Evolutility-UI-React :: format.js

// Helpers for string, numbers, and date formats

// https://github.com/evoluteur/evolutility-ui-react
// (c) 2023 Olivier Giulieri

import React from "react";
import Icon from "react-crud-icons";
import numeral from "numeral";
import moment from "moment";

import { locale } from "../i18n/i18n";
// include locale support for other languages
// import 'moment/locale/fr'
// import 'moment/locale/es'

import config from "../config";
import { fieldTypes as ft } from "./dico";

const { filesUrl } = config;
export const xItemsCount = (count, nameSingular, namePlural) =>
  count === 0
    ? "No " + namePlural
    : count === 1
    ? "1 " + nameSingular
    : count + " " + namePlural;

// const isFunction = (x) => typeof x === "function";

export const nullOrUndefined = (v) => v === null || v === undefined;
const mFormat = (d, format) =>
  nullOrUndefined(d) ? "" : moment(d).format(format);
const numFormat = (d, format) =>
  nullOrUndefined(d) ? "" : numeral(d).format(format);

// --- date formats ---
export const dateTZ = (d) => (d !== null ? d.toISOString() : null);
export const dateString = (d) => mFormat(d, "L");
// const timeString = d => mFormat(moment(d, 'HH:mm:ss'), 'LTS')
export const timeString = (d) => mFormat(moment(d, "HH:mm:ss"), "hh:mm A");
export const datetimeString = (d) => mFormat(d, "L hh:mm A");
const dateOpt = (d, type) => {
  if (type === ft.time) {
    return timeString(d);
  }
  // if (type === ft.datetime) {
  //   return dateString(d);
  // }
  return dateString(d);
};

export const image = (d) => {
  if (d === null) {
    return null;
  }
  return <img src={d} className="img-thumbnail" alt="" />;
};
//const intFormatter = new Intl.NumberFormat(locale);
export const integerString = (d) => numFormat(d, "0,0");
// export const integerString = (d) => numFormat(d, "0");
export const decimalString = (d) => numFormat(d, d > 1 ? "0.00" : "0.000");
export const moneyString = (d) => numFormat(d, "$0,0.00");
const jsonString = (js) => (js ? JSON.stringify(js, null, "\t") : "");

export const fieldValue = (f, d, abbr) => {
  if (f.type === ft.bool) {
    return d ? <Icon className="checkbox" name="check" theme="none" /> : "";
  }
  if (f.type === ft.int && d) {
    return integerString(d);
  }
  if (f.type === ft.dec && d) {
    return decimalString(d);
  }
  if (f.type === ft.money && d) {
    return moneyString(d);
  }
  if (f.type === ft.email && d) {
    return <a href={`mailto:${d}`}>{d}</a>;
  }
  if (f.type === ft.json && d) {
    return jsonString(d);
  }
  if (f.type === ft.lov) {
    return (
      <>
        {f.lovIcon && <img src={d?.icon} alt=""></img>}
        {d}
      </>
    );
  }
  if (f.type === ft.date) {
    return dateString(d);
  }
  if (f.type === ft.time) {
    return timeString(d);
  }
  if (f.type === ft.datetime) {
    return datetimeString(d);
  }
  if (f.type === ft.color) {
    return (
      <div>
        <div
          className="evo-color-box"
          id={f.id}
          style={{ backgroundColor: d }}
          title={d}
        >
          {!abbr && d ? <span>{d}</span> : null}
        </div>
      </div>
    );
  }
  if (f.type === ft.image && d) {
    return image(filesUrl + d);
  }
  if (f.type === ft.url && d) {
    return (
      <a href={d} target="_blank" rel="noopener noreferrer">
        {d}
      </a>
    );
  }
  return d;
};

// Set the locale from the browser -- which may need to be configured
moment.locale(
  locale || window.navigator.userLanguage || window.navigator.language
);

export const capitalize = (word) => {
  // TODO: maybe use _.string.capitalize(word);
  if (word && word.length > 0) {
    return word.substring(0, 1).toUpperCase() + word.substring(1); // .toLowerCase();
  }
  return "";
};

const formatLib = {
  // config to override browser
  locale: moment.locale(),

  now: () => moment(),

  fieldValue,

  dateOpt,
  dateString,
  timeString,
  datetimeString,
  decimalString,
  moneyString,
  jsonString,
};

export default formatLib;
