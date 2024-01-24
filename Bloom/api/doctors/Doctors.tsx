import { useMutation, useQuery } from "react-query";

export const useFetchOneDoctor = async (id:string) => {
  try {
    const res = await fetch(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/doctors/getOne/${id}`);
    if (!res.ok) throw new Error(res.statusText);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const useFetchDocSpecialists = async (specialty:string) => {
  try {
    console.log("fetching doctors belehi rani fadit !!!!")
    const res = await fetch(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/doctors/specialty/${specialty}`);
    if (!res.ok) throw new Error(res.statusText);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const useFetchDocGender = async (gender:string) => {
  try {
    const res = await fetch(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/doctors/gender/${gender}`);
    if (!res.ok) throw new Error(res.statusText);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error("Error:", error);
  }
};


// const upDateData = () => {
//   console.log({ id: 1, ...data, ...doctorData }, "update data in fnc ");
//   fetch(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/doctors/update`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id: 1, ...data, ...doctorData }),
//   })
//     .then((res) => {
//       console.log(res);
//       Alert.alert("Updated Successfully!");
//     })
//     .catch((err) => {
//       Alert.alert("Error Updating Data");
//       console.log(err, "error");
//       // toast.error("Something went wrong! Please try again.")
//     })
//     .catch((err) => {
//       Alert.alert("Error Updating Data");
//       console.log(err, "error");
//       // toast.error("Something went wrong! Please try again.")
//     });
// };
