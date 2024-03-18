

VERKKOSIVUJEN PERUSTOIMINTA

Sovellukseni koostuu neljästä sivusta, Pääsivu, Susi-sivu, Karhu-sivu ja Ilves-sivusta. Jokaisella sivulla on omanlainen taustakuva suomalaiseen metsään liittyen. Sivuilla on hieman tekstiä, jotka kertoo perus informaatiota. Verkkosivuilla on myös menu, jonka avulla voit vaivattomasti liikkua sivujen välillä.

Sivujen javascript toiminta on ollut kuviin liittyvää.

- Pääsivulla kuva vaihtuu automaattisesti muutaman sekunnin välein
- Susi-sivulla kuva vaihtuu, kun painaa itse kuvasta.
- Karhu-sivulla on kolme erillaista kuvaa, jotka vaihtuvat kesäisestä tyylistä talviseen, kun niiden päälle menee hiirellä.
- Ilves-sivulla on pieni animaatio, jossa ilmestyy ja katoaa.

MIKÄ ON SEN TARKOITUS?

Suomen peto eläimet verkkosivun, tarkoitus on antaa perustietoa muutamasta suomen petoeläimistä sen lukijalle.

- Pääsivun tarkoitus on esitellä mistä eläimestä tällä verkkosivulla voi lukea, joten kuva vaihtuu muutaman sekunnin välein.
- Susi sivulla voit lukea susista ja kuva on siellä mysteeri, kun siitä painaa niin kuva vaihtuu toiseen.
- Karhusivulla voit lukea karhuista ja tälläkin sivulla on oma mysteerinsä, kun menee hiirellä karhun kuvien ylitse niin ne vaihtuvat talvisiin, jonka tarkoitus on luoda tunnette varkkosivulle.
- Ilves sivulla voit lukea ilveksistä, tällä sivulla on yksinäinen ilves, joka väijyy se katoaa sekunnin välein ja tulee takaisin jonka tarkoitus on luoda visuaalista tunnette, verkkosivulle.


TARKEMMAT SELITYKSET JAVASCRIPT TOIMINOLLE VERKKOSIVUILLA

PÄÄSIVU

- Pääsivulla käytetään Kuvan vaihto aikavälein JavaScript-skriptiä Tämä JavaScript-skripti vaihtaa kuvaa säännöllisin väliajoin määritettyjen kuvien joukosta.

- Skriptin Toiminto var image = document.getElementById("image") - Hakee HTML-dokumentista kuvaelementin, jolla on id "image".

- var images - Määrittelee taulukon, jossa on polut kuvien lähdetiedostoihin. volgendefoto(): - Vaihtaa kuvan kuvataulukossa seuraavaan kuvaa. setInterval(volgendefoto) - Käynnistää volgendefoto()-funktion ajoituksen mukaan vaihtaa kuvan automaattisesti.

KARHU-SIVU

Karhu-sivulla käytetään Kuvan vaihto funktiota JavaScriptillä, joka vaihtaa annetun kuvan numeron perusteell, kun sen ylitse menee hiirellä.

- Funktion Selitys switch(x) { }: Tämä rakenne tarkistaa parametrin x arvon ja suorittaa vastaavan kuvan asettamisen sen mukaan.
- case  Asettaa kuvan lähteeksi tiedostoa default - Oletusvaihtoehto, joka suoritetaan, jos x ei vastaa mitään edellä määritetyistä vaihtoehdoista.
- image.src = Asettaa kuvan lähteen annettuun polkuun ja tiedostoon. Funktio ei tee mitään, jos parametri x ei vastaa yhtäkään määritellyistä vaihtoehdoista.

ILVES-SIVU/SISU

ILves sivulla on läpinäkyvyysanimaatio Tämä JavaScript-skripti tarjoaa yksinkertaisen läpinäkyvyysanimaatioefektin HTML-elementille. Se muuttaa elementin läpinäkyvyyttä asteittain välillä 0,1 ja 0,9 ja takaisin, luoden vaikutuksen, jossa ilves katoaa ja ilmestyy takaisin

Skriptin Toiminto

- Skripti hakee HTML-elementin id:llä "image" - käyttäen document.getElementById('image'). Se alustaa muuttujat opacity aloitusarvolla 0,1 ja direction arvolla 1.
- setInterval()-funktiota - käytetään suorittamaan koodilohkoa toistuvasti määritetyn aikavälin välein.
- Interval-funktion sisällä läpinäkyvyyden arvoa kasvatetaan tai vähennetään 0,1 riippuen suunnasta. Elementin läpinäkyvyys päivitetään uudella arvolla. Jos läpinäkyvyys saavuttaa joko 0,9 tai 0,1, suunta kääntyy kertomalla se -1:llä, muuttaen tehokkaasti läpinäkyvyyden muutoksen suuntaa.
- Tämä skripti luo jatkuvan sykkivän vaikutuksen, kun elementin läpinäkyvyyttä siirretään pehmeästi. Säädä parametreja tai integroi se muiden toiminnallisuuksien kanssa tarpeidesi mukaan projektissasi.

Tämä JavaScript-funktio vaihtaa kuvaa annetun logiikan mukaisesti. Funktion toiminta selitetään alla:

- Alustetaan muuttuja currentImage arvolla 1, joka edustaa nykyistä kuvaa.
- Kun funktiota changeImage() kutsutaan: Tarkistetaan currentImage-muuttujan arvo:

- Jos currentImage on , vaihdetaan kuvan lähde (src-ominaisuus) kuvaksi "Kuvat" ja muutetaan currentImage-muuttujan arvoa 2:ksi. Jos currentImage ei ole 1, 2 tai 3 (eli se on 4 tai mikä tahansa muu arvo), vaihdetaan kuvan lähde (src-ominaisuus) kuvaksi muutetaan currentImage-muuttujan arvoa takaisin 1:ksi.
