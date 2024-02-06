import EditForm1 from "@/components/(forms)/EditForm1";
import Navbar from "@/components/Navbar";
import getSingleCourse from "@/course-fetch/level1/getSingleCourse";


export default async function page({ params: { id } }) {
  const user = await getSingleCourse(id);
  const { code, title, desc, name, position, field, email, phone, image, level } = user;
  return (
    <>
    <Navbar/>
      <EditForm1
        id={id}
        code={code}
        title={title}
        desc={desc}
        name={name}
        position={position}
        field={field}
        email={email}
        phone={phone}
        image={image}
        level={level}
      />
    </>
  );
}
