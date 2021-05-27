const API = "954116bd-bce2-4744-97fa-60352bc94a4e";
export const requests = {
  search: `search?api-key=${API}`,
  business: `search?q=business&api-key=${API}`,
  sports: `search?q=Sports&api-key=${API}`,
  singleItem : (itemURL) => {
    return `${itemURL}?api-key=${API}`
  }
 };

export const genres = {
  topNews: "Top News",
  business: "Business",
  sports: `Sports`,
  singleItem: `singleItem`,
};

// export const getSingleItem = (itemURL) => {
//   return `${itemURL}?api-key=${API}`
// }
