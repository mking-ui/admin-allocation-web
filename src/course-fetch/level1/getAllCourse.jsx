
export default async function getAllCourses() {
  const ApiUrl = process.env.API_URL;
    try {
      const response = await fetch(`${ApiUrl}/api/level1`, {
        cache: "no-store",
      });
  
      return response.json()
    } catch (error) {
      console.log(error);
    }
  }
  
