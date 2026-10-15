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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [adressLine, setAdressLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
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
        list="stateList"
        value={zipCode}
        onChange={(e) => {
          setZipCode(e.target.value);
        }}
        name="zipCode"
      />
    </form>
  );
}
export default Formulaire;
