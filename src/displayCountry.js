




export const displayCountry = (country) => {
  const { name:{common}, capital, currencies, region, flags, maps:{googleMaps} } = country;

  document.querySelector(
    ".info"
  ).innerHTML = `<div class="card" >
  <img src="${flags[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${capital || "-"}</li>
    <li class="list-group-item">${Object.keys(currencies)[0] || "-"}</li>
    <li class="list-group-item">${region}</li>
  
  </ul>
    <a href="${googleMaps}" class="btn btn-primary">Go Map</a>
  </div>
</div>`;
};
