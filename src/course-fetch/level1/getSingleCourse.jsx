export default async function getSingleCourse(id) {
  const ApiUrl = process.env.API_URL;
  try {
    const response = await fetch(`${ApiUrl}/api/level1/${id}`, {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
