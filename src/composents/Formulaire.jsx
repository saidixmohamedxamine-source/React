import "../css/Formulaire.css";
import { useState } from "react";
function Formulaire() {
  const states = [
    "Tanger-Tétouan-Al Hoceïma",
    "L'Oriental",
    "Fès-Meknès",
    "Rabat-Salé-Kénitra",
    "Béni Mellal-Khénifra",
    "Casablanca-Settat",
    "Marrakech-Safi",
    "Drâa-Tafilalet",
    "Souss-Massa",
    "Guelmim-Oued Noun",
    "Laâyoune-Sakia El Hamra",
    "Dakhla-Oued Ed-Dahab",
  ];
  const memberShipLevels = [
    {
      id: 1,
      level: "Bronze",
    },
    {
      id: 2,
      level: "Silver",
    },
    {
      id: 3,
      level: "Gold",
    },
    {
      id: 4,
      level: "Platinum",
    },
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [adressLine, setAdressLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [adressEmail, setAdressEmail] = useState("");
  const [memberShipLevel, setMemberShipLevel] = useState("");

  return (
    <form action="">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        name="firstName"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        name="lastName"
      />
      <label htmlFor="streetAdress">Street Adress</label>
      <input
        type="text"
        value={streetAdress}
        onChange={(e) => {
          setStreetAdress(e.target.value);
        }}
        name="streetAdress"
      />
      <label htmlFor="adressLine">Adress Line</label>
      <input
        type="text"
        value={adressLine}
        onChange={(e) => {
          setAdressLine(e.target.value);
        }}
        name="adressLine"
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        name="city"
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        list="stateList"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        name="state"
      />
      <datalist id="stateList">
        {states.map((state) => {
          return (
            <option key={state} value={state}>
              {state}
            </option>
          );
        })}
      </datalist>
      <label htmlFor="zipCode">Zip Code</label>
      <input
        type="password"
        value={zipCode}
        onChange={(e) => {
          setZipCode(e.target.value);
        }}
        name="zipCode"
      />
      <label htmlFor="phoneNum">Phone Number</label>
      <input
        type="tel"
        value={phoneNum}
        onChange={(e) => {
          setPhoneNum(e.target.value);
        }}
        name="phoneNum"
      />
      <label htmlFor="adressEmail">Adress Email</label>
      <input
        type="text"
        value={adressEmail}
        onChange={(e) => {
          setAdressEmail(e.target.value);
        }}
        name="adressEmail"
      />
      {memberShipLevels.map((level, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              value={level.level}
              name={level.level}
              checked={memberShipLevel === level.level}
              onChange={(e) => setMemberShipLevel(e.target.value)}
            />
            <label htmlFor={level.level}>{level.level}</label>
          </div>
        );
      })}
    </form>
  );
}
export default Formulaire;
