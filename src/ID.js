import { useState } from "react";

function ID(props) {
  const { fullName, gender, birthday, address } = props;
  let { street, city, province } = address;

  const lastname = fullName.split(" ")[1];
  const age = new Date().getFullYear() - birthday.getFullYear();

  const [toogleAgeOrBirthday, setToogleAgeOrBirthdayoogle] = useState(true);

  //  * Render full name dalam <p>
  //  * Render nama panggilan, menggunakan gender + nama belakang contoh: Sulam Hari + 'male' => Pak Hari
  //  * Toggle Birthday/Age
  //  * Jika address null: <p>Not Available</p>
  //  * Jika salah satu bagian dari address null atau empty maka print <p>Not Available</p>
  //  *
  //  * <p>Nama: Roni Bagus</p>
  //  * <p>Panggilan: Pak Bagus</p>
  //  * <p>{age/birthday}</p>
  //  * <button onClick={toggleAntaraUmurDanTanggal}/>
  //  * <p>Alamat: </p>
  //  * <p>Jalan: <p>
  //  * <p>Kota: <p>
  //  * <p>Provinsi: <p>
  //  * Jika alamat lengkap tulis notavailable
  //  *

  return (
    <>
      {/* Nama */}
      <p>Nama: {fullName}</p>
      {/* Panggilan */}
      <p>
        Panggilan: {gender === "male" ? "Pak" : "Bu"} {lastname}
      </p>

      {/* Age or birthday */}
      {toogleAgeOrBirthday ? (
        <p>Umur: {age} Tahun</p>
      ) : (
        <p>
          Birthday: {birthday.getFullYear()}-
          {birthday.getMonth() + 1 > 9
            ? `${birthday.getMonth() + 1}`
            : `0${birthday.getMonth() + 1}`}
          -{birthday.getDate()}{" "}
        </p>
      )}

      {/* Button */}
      <button onClick={() => setToogleAgeOrBirthdayoogle(!toogleAgeOrBirthday)}>
        Show {toogleAgeOrBirthday ? "Birthday" : "Age"}
      </button>

      {/* Alamat */}
      {[street, city, province].includes("") ? (
        <p>Alamat: Not Available</p>
      ) : (
        <>
          <p>
            Alamat: {street} {city} {province}
          </p>
          <p>Jalan: {street}</p>
          <p>Kota: {city}</p>
          <p>Provinsi: {province}</p>
        </>
      )}
    </>
  );
}

ID.defaultProps = {
  fullName: "Kevin Maulana",
  gender: "male",
  birthday: new Date(),
  address: {
    street: "Jl Pintu Ledeng",
    city: "Bogor",
    province: "Jawa Barat",
  },
};

export default ID;
