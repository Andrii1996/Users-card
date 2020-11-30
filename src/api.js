export async function getUsers(count) {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);

  return response.json();
}
