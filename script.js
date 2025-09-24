const countryInput = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", async () => {
  const countryName = countryInput.value.trim();

  if (!countryName) {
    result.textContent = "Please write a country!";
    return;
  }

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (!response.ok)
      throw new Error("There is a problem with the connection!");

    const data = await response.json();
    const country = data[0];

    result.innerHTML = `
<p><strong>Name:</strong> ${country.name.common}</p>
<p><strong>Official Name:</strong> ${country.name.official}</p>
<p><strong>Time zone:</strong> ${country.timezones}</p>
<p><strong>Capital:</strong> ${country.capital}</p>
<p><strong>Population:</strong> ${country.population}</p>


`;
  } catch (error) {
    result.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
