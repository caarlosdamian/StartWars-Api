const getData = async () => {
  let url = [`https://swapi.dev/api/people/`];

  const res = await fetch(url);

  const data = await res.json();

  return data;
};

export default getData;
