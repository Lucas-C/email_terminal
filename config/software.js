/*
 This file contains the logic for custom software programs
 that perform more complex actions than just displaying some text or HTML.

 You are invited to edit this file to define your own commands!
 Start by removing the demo ones that you don't need for your game.

 Remember that function names must match the names of the programs in software.json.
 */
/* eslint-disable no-inner-declarations, no-nested-ternary, no-sequences, no-unused-vars */

function predictiveShuffle(array) {
  let currentIndex = array.length;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick aremainig elemet...
    let randomIndex = Math.floor(0.5* currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

// All Arnie & Miranda androids:
const ALL_ANDROIDS = Array(19).fill().map((_, n) => `Arnie${n + 1}`);
Array(7).fill().map((_, n) => ALL_ANDROIDS.push(`Mir${n + 1}`));
predictiveShuffle(ALL_ANDROIDS);
function map() {
    // Androids generator:
    const allAndroids = [...ALL_ANDROIDS];
    const androids = (count, width) => {
        const andros = [];
        for (let i = 0; i < count; i++) {
            andros.push(allAndroids.pop());
        }
        const androStr = andros.join(", ");
        return androStr + " ".repeat((width || 39) - androStr.length);
    }
    return `<p style="color: red">Géolocalistion des androïdes inactive. Leur dernière position connue est indiquée.</p>
<pre>
┌──────────────────────────────────────────────────────┐
│  Niveau 1 : Communications                           │
│  Androïdes : Cory3, ${androids(1, 32)} │
├──────────────────────────────────────────────────────┤
│  Niveau 2 : Bureaux de G.E.C.                        │
│  Androïdes : ${androids(3)} │
├──────────────────────────────────────────────────────┤
│  Niveau 3 : Bureaux de Revolve Industries            │
│  Androïdes : Cory1, ${androids(3, 32)} │
├──────────────────────────────────────────────────────┤
│  Niveau 4 : Bureaux d'entreprises                    │
│  Androïdes : ${androids(3)} │
├──────────────────────────────────────────────────────┤
│  Niveau 5 : Administration                           │
│  Androïdes : Cory2, ${androids(3, 32)} │
├──────────────────────────────────────────────────────┤
│  Niveau 6 : Cabines A                                │
│  Androïdes : ${androids(1)} │
├──────────────────────────────────────────────────────┤
│  Niveau 7 : Cabines B                                │
│  Androïdes :                                         │
├──────────────────────────────────────────────────────┤
│  Niveau 8 : Les Arches                               │
│  Androïdes : ${androids(3)} │
├──────────────────────────────────────────────────────┤
│  Niveau 9 : Port spatial                             │
│  Androïdes : ${androids(5)} │
├──────────────────────────────────────────────────────┤
│  Niveau 10 : Hangar & salle des machines             │
│  Androïdes : ${androids(4)} │
└──────────────────────────────────────────────────────┘
    </pre>`;
}

function audit() {
    setTimeout(auditFinished, 4_500);
    return [`<p class="shimmer">Démarrage de l'audit des télécommunications...</p>`, DWEETS[ 888 ](/*delay=*/0, /*style=*/'height: 100px')];
}

function auditFinished() {
    setHeader(); // clear terminal
    output({delayed: 500, text: [
        'Audit terminé.',
        '* communications internes Terra Nova : <b style="color: red">X</b><br><ul><li>réseau CommLinks TX100 : <b>✓</b></li><li>interconnexion aux androïdes OC7/bgp3 : 22/22 <b style="color: red">X</b></li><li>base de données heuristique Moon//go : <b>✓</b></li></ul>',
        '<p class=glow>* communications avec Cepheus : <b style="color: red">X</b></p><ul><li>qualité du signal : <b style="color: red">X</b></li><li>latence atmosphérique /ping : <b style="color: red">X</b></li></ul>',
        DWEETS[ 5600 ](/*delay=*/1600, /*style=*/'height: 120px'),
        '<p class=glow>* communications spatiales : <b style="color: red">X</b></p><ul><li>antenne relais A1 : <b style="color: red">X</b></li><li>antenne relais A2 : <b style="color: red">X</b></li><li>antenne relais A3 : <b style="color: red">X</b></li></ul>',
        DWEETS[ 10534 ](/*delay=*/2800, /*style=*/'width: 150px; height: 100px; padding: 10px 30px'),
    ]});
}

const DWEETS = {
    888: ( delay, style ) => dweet( ( t, x ) => { // FROM: https://www.dwitter.net/d/888
        for ( let i = 0; i < 300; i++ ) {
            for ( let j = 0; j < 6; j++ ) {
                x.fillRect( 100 + 66 * C( i ) * S( T( t / 1.1 ) + j / i ), 100 + 66 * S( i ), 2, 2 );
            }
        }
    }, 0, 0, delay, style ),
    10534: ( delay, style ) => dweet( ( t, x ) => { // FROM: https://www.dwitter.net/d/10534
        t += 160;
        let n;
        for ( let i = 2e3; i--; ) {
            const p = i & 1;
            const m = ( t / C( t / i ) + p * ( t / 2 + i % t ) ) / 5;
            const s = ( 3 - C( n ) * 3 ) / 3;
            x.fillRect( 100 + m * S( n = t / 9 + i * i ) * C( !p * i / t ), 100 + m * C( n + p * 2 ), s, s );
        }
    }, 0, 0, delay, style),
    5600: ( delay, style ) => dweet( ( t, x, c ) => { // FROM: https://www.dwitter.net/d/5600
        const h = c.width;
        for ( let i = h; i--; ) {
            if ( C( t - i ) > 0 ) {
                x.fillText( ".⬤"[ "榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင".charCodeAt( i / 16 ) >> i % 16 & 1 ], 192 + ( ( i * h - i * i ) ** 0.5 ) * S( t - i ) / 2, i / 2 + 9 );
            }
        }
    }, 432, 230, delay, style ),
};

function setCoords() {
    const coordsElem = $("#coords");
    const time = (new Date()).getTime();
    // Inspi: http://simbad.u-strasbg.fr/simbad/sim-id?Ident=PSR+J1852-2610&NbIdent=1&Radius=2&Radius.unit=arcmin
    //        https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_r%C3%A9f%C3%A9rence_c%C3%A9leste_international
    coordsElem.text(`ICRS 18 52 59.${ Math.floor( ( time % 1_000_000 ) / 1000 ) } -26 10 12.70`);
}
setInterval(setCoords, 1_000); // la station semble se déplacer plus / plus vite

function setOxygen() {
    const oxygenElem = $("#oxygen");
    const time = (new Date()).getTime();
    oxygenElem.text(800 - Math.floor( ( time % 10_000_000 ) / 10_000 ));
}
setInterval(setOxygen, 5_00);
