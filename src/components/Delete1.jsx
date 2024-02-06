"use client";
import { useRouter } from "next/navigation";

export default function RemoveButton({ id }) {
  const router = useRouter();
  const removeCourse = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`/api/level1?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeCourse} className="btn border-0">
      <span className="text-muted small ps-1 p-1 rounded-2 ">
        <i className=" card-icon bi bi-trash text-danger  "> </i>
        Delete
      </span>
    </button>
  );
}
