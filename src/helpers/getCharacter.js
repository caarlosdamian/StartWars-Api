const getData = async(person) => {
    let url = [`https://swapi.dev/api/people/${person}`];
    
    const res = await fetch(url);
  
    const data = await res.json();
  
    return data
  };
  
  export default getData;
  