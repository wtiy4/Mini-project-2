import { useState } from "react";
import "./App.css";
import axios from "axios";

function Characters() {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [gender, setGender] = useState("");
  const [characters, setCharacters] = useState([
    {
      name: "Harry Potter",
      pic: "https://ik.imagekit.io/hpapi/harry.jpg",
      gender: "Male",
    },
    {
      name: "Hermione Granger",
      pic: "https://ik.imagekit.io/hpapi/hermione.jpeg",
      gender: "Female",
    },
    {
      name: "Ron Weasley",
      pic: "https://ik.imagekit.io/hpapi/ron.jpg",
      gender: "Male",
    },
    {
      name: "tabby cat",
      pic: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
      gender: "Female",
    },
  ]);

  const submit = () => {
    const url = "https://68219a0e259dad2655afc1ba.mockapi.io/project/post";

    axios.post(url, { name, pic, gender }).then((response) => {
      console.log(response.data);

      const newCharacter = {
        name,
        pic,
        gender,
      };

      setCharacters([...characters, newCharacter]);
      setName("");
      setPic("");
      setGender("");
    });
  };

  return (
    <>
      <input
        type="text"
        className="border-gray-600 border-2 rounded p-3 absolute right-4 top-4"
        placeholder="search here.."
      />
      <div className="flex flex-col items-center space-y-8 py-8 w-[100%]">
        <h1 className="text-2xl font-bold">شخصيات هاري بوتر</h1>

        <div className="grid grid-cols-2 gap-6">
          {characters.map((char, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={char.pic}
                className="w-40 h-40 rounded-full object-cover"
              />
              <p className="text-center">{char.name}</p>
              <p className="mt-4 text-center">{char.gender}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            placeholder="اسم الشخصية"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 w-64"
          />
          <input
            type="text"
            placeholder="رابط الصورة"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 w-64"
          />

          <select
            value={gender}
            onSelect={(e) => {
              setGender(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
          <button
            onClick={submit}
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            إضافة شخصية
          </button>
        </div>
      </div>
    </>
  );
}

export default Characters;
