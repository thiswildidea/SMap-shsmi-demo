import mapconfig from '@/config/mapconfigshare.js'

const mapsenceViewPopup = {
  createContentpopup(data) {
    let htmlstring = '';
    htmlstring += "<table>"
    for (let key in data) {
      htmlstring += "<tr>";
      htmlstring += '<td class="tdlabel">';
      htmlstring += "<span>";
      htmlstring += key;
      htmlstring += " :";
      htmlstring += "</span>";
      htmlstring += "</td>";
      htmlstring += '<td class="tdvalue">';
      htmlstring += "<span>";
      htmlstring += data[key] != null ? data[key] : "";
      htmlstring += "</span>";
      htmlstring += "</td>";
      htmlstring += "</tr>";
    }
    htmlstring += "</table>"
    return htmlstring;
  },
}

export default mapsenceViewPopup
