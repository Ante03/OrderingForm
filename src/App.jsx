
import { useState, useEffect } from 'react';
import './App.css'
import TemaContext from './assets/Kontekst';
 
function App() {


  const [drzava, setDrzava] = useState("");
  const [kontaktInputState, setKontaktInputState] = useState("");
  const [adresaImeState, setadresaImeState] = useState("");
  const [adresaAdresaState, setadresaAdresaState] = useState("");
  const [kartica, setKartica] = useState(false);
  const [poduzece, setPoduzece] = useState(false);
  const [prihvaceno, setPrihvaceno] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tema, postaviTemu] = useState("light");
 
function promjenaTeme() {
  postaviTemu(tema === "light" ? "dark" : "light");
}


  function PromjeniDrzavu(event){
    setDrzava(event.target.value);
  }
  const PromijeniUnosKontakt = (event) =>{
    setKontaktInputState(event.target.value)
  }
  const PromijeniUnosAdresa = (event) =>{
    setadresaAdresaState(event.target.value)
  }
  const PromijeniUnosIme = (event) =>{
    setadresaImeState(event.target.value)
  }
  function PromjeniKarticu(){
    setKartica(true);
    setPoduzece(false);
  }
  function PromjeniPoduzece(){
    setPoduzece(true);
    setKartica(false);
  }
  function PromjeniPrihvaceno(){
    if(prihvaceno === true)
      setPrihvaceno(false);
    else
      setPrihvaceno(true);
  }
  function Submit() {
    if(kontaktInputState != 0 && adresaAdresaState !=0 && adresaImeState != 0 && (kartica === true || poduzece === true) && drzava!=0){
      const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
      if (!emailRegex.test(kontaktInputState)) {
        window.alert("Unesite tocan email");
      }
      else{
        if(prihvaceno===true){
          setSubmitted(!submitted);
        }
        else
        window.alert("Prihvatite uvjete koristenja");
      }
    }
    else{
      window.alert("Popunite sva polja!");
    }
  }
  function Submitponovo() {
    setSubmitted(!submitted);
    setDrzava("");
    setKontaktInputState("");
    setadresaImeState("");
    setadresaAdresaState("");
    setKartica("");
    setPoduzece("");
    setPrihvaceno(false);
    setSubmitted(false);
  }
  function odabranoPlacanje(){
    if(kartica===true)
      return <p>Placanje: Karticom</p>
    else if(poduzece===true)
      return <p>Placanje: Poduzecem</p>
    else
      return<p>Placanje: Niste odabrali!</p>
  }
  function Pocetna(){
    return(
      <div id="glavni">
        <h3>Račun ➡ Plaćanje</h3>
        <div id="kontakt">
          <p>Kontakt:</p>
          <div>
            <input  maxLength={12} value={adresaAdresaState} onChange={PromijeniUnosAdresa} type="text" placeholder='Unesite svoje ime...' id="adresaIme"></input><br/>
            <input maxLength={30} value={kontaktInputState} onChange={PromijeniUnosKontakt} type="mail" placeholder='netko@gmail.com' id="kontaktInput"></input>
          </div>
        </div>
        <div id="adresa">
          <p>Adresa:</p>
          <select id="drz" value={drzava} onChange={PromjeniDrzavu}>
              <option value="">Odaberite državu</option>
              <option value="Albanija">Albanija</option>
              <option value="Andora">Andora</option>
              <option value="Austrija">Austrija</option>
              <option value="Belgija">Belgija</option>
              <option value="Bjelorusija">Bjelorusija</option>
              <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
              <option value="Bugarska">Bugarska</option>
              <option value="Crna Gora">Crna Gora</option>
              <option value="Češka">Češka</option>
              <option value="Danska">Danska</option>
              <option value="Estonija">Estonija</option>
              <option value="Finska">Finska</option>
              <option value="Francuska">Francuska</option>
              <option value="Grčka">Grčka</option>
              <option value="Hrvatska">Hrvatska</option>
              <option value="Irska">Irska</option>
              <option value="Island">Island</option>
              <option value="Italija">Italija</option>
              <option value="Kazahstan">Kazahstan</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Latvija">Latvija</option>
              <option value="Lihtenštajn">Lihtenštajn</option>
              <option value="Litva">Litva</option>
              <option value="Luksemburg">Luksemburg</option>
              <option value="Mađarska">Mađarska</option>
              <option value="Makedonija">Makedonija</option>
              <option value="Malta">Malta</option>
              <option value="Moldavija">Moldavija</option>
              <option value="Monako">Monako</option>
              <option value="Nizozemska">Nizozemska</option>
              <option value="Norveška">Norveška</option>
              <option value="Njemačka">Njemačka</option>
              <option value="Poljska">Poljska</option>
              <option value="Portugal">Portugal</option>
              <option value="Rumunjska">Rumunjska</option>
              <option value="Rusija">Rusija</option>
              <option value="San Marino">San Marino</option>
              <option value="Slovačka">Slovačka</option>
              <option value="Slovenija">Slovenija</option>
              <option value="Srbija">Srbija</option>
              <option value="Španjolska">Španjolska</option>
              <option value="Švedska">Švedska</option>
              <option value="Švicarska">Švicarska</option>
              <option value="Turska">Turska</option>
              <option value="Ukrajina">Ukrajina</option>
              <option value="Vatikan">Vatikan</option>
              <option value="Velika Britanija">Velika Britanija</option>
            </select><br/>
            <input maxLength={12} value={adresaImeState} onChange={PromijeniUnosIme} type="text" placeholder='Unesite svoju adresu...' id="adresaAdresa"></input><br/>
        </div>
        <div id="nacinPlacanja">
          <p>Nacin Placanja:</p>
          <input value="kart" type='radio' checked={kartica} onChange={PromjeniKarticu} />Karticom
          <br />
          <input value="pod" type='radio' checked={poduzece} onChange={PromjeniPoduzece} />Poduzecem
        </div>
        <div id="uvjeti">
          <input type='checkbox' checked={prihvaceno} onChange={PromjeniPrihvaceno}/>
          <p>Prihvacam uvjete koristenja</p>
        </div>
        <button id="naruci" onClick={Submit}>Naruči</button>
      </div>
    )
  }
  function NakonPlacanja(){

    return(
      <div id="narudzba">
        <p>Ime: {adresaImeState}</p>
        <p>E-mail: {kontaktInputState}</p>
        <p>Drzava: {drzava}</p>
        <p>Adresa: {adresaAdresaState}</p>
        <label>{odabranoPlacanje()}</label>
        <button id="naruci" onClick={Submitponovo}>Naruči novo</button>
      </div>
    );
  }
 
  return (
    
    <TemaContext.Provider value={tema}>
      <div id="sve"  className={tema === "light" ? "lightTheme" : "darkTheme"}>
        <button id="lightDarkBut" onClick={promjenaTeme}>Light/Dark</button>
        <div>
          {submitted ? NakonPlacanja() : Pocetna()}
        </div>
      </div>
    </TemaContext.Provider>
   );
}


export default App;
