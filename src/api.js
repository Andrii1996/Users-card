export async function getUsers(count) {
  const respons = await fetch(`https://randomuser.me/api/?results=${count}`);

  return respons.json();
}
