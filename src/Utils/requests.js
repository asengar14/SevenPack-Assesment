/**
 * Request Names for the Application
 */

const API = "954116bd-bce2-4744-97fa-60352bc94a4e";
export const requests = {
  search: `search?api-key=${API}`,
  business: `search?q=business&api-key=${API}`,
  sports: `search?q=Sports&api-key=${API}`,
  singleItem : (itemURL) => {
    return `${itemURL}?api-key=${API}`
  },
  orderByGenre : (order ,genre) => {
    return `search?q=${genre}&order-by=${order}&api-key=${API}`
  }
 };

export const genres = {
  topNews: "Top News",
  business: "Business",
  sports: `Sports`,
  singleItem: `singleItem`,
};
