export async function fetchPokemonById(id: string) {
    
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  return response.json();
}
