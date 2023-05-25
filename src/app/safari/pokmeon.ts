export interface Pokemon{
    name: string;
    catch: number;
    bait: number;
    rock:number;
    png?: string;
    link?: string;
}

export interface Pokeball{
    name: string;
    png: string;
    class: string;
}

export const pokemon: Pokemon[] = [
    {name: 'Raichu', catch: 60, bait: 70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png', link: 'https://pokemondb.net/pokedex/raichu'},
    {name: 'Venomoth', catch: 80, bait: 80, rock: 75, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/venomoth.png', link: 'https://pokemondb.net/pokedex/venomoth'},
    {name: 'Dugtrio', catch: 70, bait: 75, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dugtrio.png', link: 'https://pokemondb.net/pokedex/dugtrio'},
    {name: 'Golduck', catch: 60, bait: 85, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/golduck.png', link: 'https://pokemondb.net/pokedex/golduck'},
    {name: 'Hypno', catch: 70, bait: 75, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hypno.png', link: 'https://pokemondb.net/pokedex/hypno'},
    {name: 'Chansey', catch: 55, bait: 75, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/chansey.png', link: 'https://pokemondb.net/pokedex/chansey'},
    {name: 'Vaporeon', catch: 65, bait: 75, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/vaporeon.png', link: 'https://pokemondb.net/pokedex/vaporeon'},
    {name: 'Jumpluff', catch: 90, bait: 70, rock: 75, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/jumpluff.png', link: 'https://pokemondb.net/pokedex/jumpluff'},
    {name: 'Espeon', catch: 55, bait: 75, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/espeon.png', link: 'https://pokemondb.net/pokedex/espeon'},
    {name: 'Umbreon', catch: 55, bait: 75, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/umbreon.png', link: 'https://pokemondb.net/pokedex/umbreon'},
    {name: 'Murkrow', catch: 75, bait: 75, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/murkrow.png', link: 'https://pokemondb.net/pokedex/murkrow'},
    {name: 'Girafarig', catch: 75, bait:80, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/girafarig.png', link: 'https://pokemondb.net/pokedex/girafarig'},
    {name: 'Dunsparce', catch: 65, bait:70, rock: 85, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dunsparce.png', link: 'https://pokemondb.net/pokedex/dunsparce'},
    {name: 'Sneasel', catch: 80, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sneasel.png', link: 'https://pokemondb.net/pokedex/sneasel'},
    {name: 'Phanpy', catch: 85, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/phanpy.png', link: 'https://pokemondb.net/pokedex/phanpy'},
    {name: 'Donphan', catch: 65, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/donphan.png', link: 'https://pokemondb.net/pokedex/donphan'},
    {name: 'Masquerain', catch: 65, bait:85, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/masquerain.png', link: 'https://pokemondb.net/pokedex/masquerain'},
    {name: 'Sableye', catch: 55, bait:70, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sableye.png', link: 'https://pokemondb.net/pokedex/sableye'},
    {name: 'Meditite', catch: 75, bait:70, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/meditite.png', link: 'https://pokemondb.net/pokedex/meditite'},
    {name: 'Medicham', catch: 65, bait:80, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/medicham.png', link: 'https://pokemondb.net/pokedex/medicham'},
    {name: 'Numel', catch: 85, bait:80, rock: 5, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/numel.png', link: 'https://pokemondb.net/pokedex/numel'},
    {name: 'Camerupt', catch: 75, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/camerupt.png', link: 'https://pokemondb.net/pokedex/camerupt'},
    {name: 'Swablu', catch: 75, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/swablu.png', link: 'https://pokemondb.net/pokedex/swablu'},
    {name: 'Altaria', catch: 65, bait:70, rock: 5, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/altaria.png', link: 'https://pokemondb.net/pokedex/altaria'},
    {name: 'Buizel', catch: 90, bait:80, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/buizel.png', link: 'https://pokemondb.net/pokedex/buizel'},
    {name: 'Floatzel', catch: 75, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/floatzel.png', link: 'https://pokemondb.net/pokedex/floatzel'},
    {name: 'Honchkrow', catch: 65, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/honchkrow.png', link: 'https://pokemondb.net/pokedex/honchkrow'},
    {name: 'Gible', catch: 75, bait:80, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gible.png', link: 'https://pokemondb.net/pokedex/gible'},
    {name: 'Gabite', catch: 65, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gabite.png', link: 'https://pokemondb.net/pokedex/gabite'},
    {name: 'Weavile', catch: 60, bait:70, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/weavile.png', link: 'https://pokemondb.net/pokedex/weavile'},
    {name: 'Pawniard', catch: 75, bait:70, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pawniard.png', link: 'https://pokemondb.net/pokedex/pawniard'},
    {name: 'Bisharp', catch: 65, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bisharp.png', link: 'https://pokemondb.net/pokedex/bisharp'},
    {name: 'Braviary', catch: 65, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/braviary.png', link: 'https://pokemondb.net/pokedex/braviary'},
    {name: 'Deino', catch: 75, bait:80, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/deino.png', link: 'https://pokemondb.net/pokedex/deino'},
    {name: 'Zweilous', catch: 65, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/zweilous.png', link: 'https://pokemondb.net/pokedex/zweilous'},
    {name: 'Volcarona', catch: 60, bait:70, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/volcarona.png', link: 'https://pokemondb.net/pokedex/volcarona'},
    {name: 'Talonflame', catch: 65, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/talonflame.png', link: 'https://pokemondb.net/pokedex/talonflame'},
    {name: 'Floette', catch: 85, bait:70, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/floette.png', link: 'https://pokemondb.net/pokedex/floette'},
    {name: 'Gogoat', catch: 65, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gogoat.png', link: 'https://pokemondb.net/pokedex/gogoat'},
    {name: 'Hawlucha', catch: 60, bait:70, rock: 75, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/hawlucha.png', link: 'https://pokemondb.net/pokedex/hawlucha'},
    {name: 'Lycanroc', catch: 60, bait:70, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/lycanroc.png', link: 'https://pokemondb.net/pokedex/lycanroc'},
    {name: 'Salandit', catch: 85, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/salandit.png', link: 'https://pokemondb.net/pokedex/salandit'},
    {name: 'Salazzle', catch: 75, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/salazzle.png', link: 'https://pokemondb.net/pokedex/salazzle'},
    {name: 'Corviknight', catch: 55, bait:80, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/corviknight.png', link: 'https://pokemondb.net/pokedex/corviknight'},
    {name: 'Frosmoth', catch: 75, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/frosmoth.png', link: 'https://pokemondb.net/pokedex/frosmoth'},
    {name: 'Cufant', catch: 80, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/cufant.png', link: 'https://pokemondb.net/pokedex/cufant'},
    {name: 'Copperajah', catch: 70, bait:65, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/copperajah.png', link: 'https://pokemondb.net/pokedex/copperajah'},
    {name: 'Dreepy', catch: 70, bait:75, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dreepy.png', link: 'https://pokemondb.net/pokedex/dreepy'},
    {name: 'Drakloak', catch: 55, bait:65, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/drakloak.png', link: 'https://pokemondb.net/pokedex/drakloak'},
    {name: 'Lokix', catch: 65, bait:70, rock: 85, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/lokix.png', link: 'https://pokemondb.net/pokedex/lokix'},
    {name: 'Pawmi', catch: 75, bait:80, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pawmi.png', link: 'https://pokemondb.net/pokedex/pawmi'},
    {name: 'Pawmo', catch: 65, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pawmo.png', link: 'https://pokemondb.net/pokedex/pawmo'},
    {name: 'Dachsbun', catch: 60, bait:75, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dachsbun.png', link: 'https://pokemondb.net/pokedex/dachsbun'},
    {name: 'Nacli', catch: 75, bait:70, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/nacli.png', link: 'https://pokemondb.net/pokedex/nacli'},
    {name: 'Naclstack', catch: 65, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/naclstack.png', link: 'https://pokemondb.net/pokedex/naclstack'},
    {name: 'Garganacl', catch: 55, bait:60, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/garganacl.png', link: 'https://pokemondb.net/pokedex/gargancal'},
    {name: 'Tadbulb', catch: 75, bait:70, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/tadbulb.png', link: 'https://pokemondb.net/pokedex/tadbulb'},
    {name: 'Bellibolt', catch: 65, bait:60, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/bellibolt.png', link: 'https://pokemondb.net/pokedex/bellibolt'},
    {name: 'Espathra', catch: 60, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/espathra.png', link: 'https://pokemondb.net/pokedex/espathra'},
    {name: 'Varoom', catch: 85, bait:55, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/varoom.png', link: 'https://pokemondb.net/pokedex/varoom'},
    {name: 'Glimmet', catch: 75, bait:65, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/glimmet.png', link: 'https://pokemondb.net/pokedex/glimmet'},
    {name: 'Glimmora', catch: 65, bait:55, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/glimmora.png', link: 'https://pokemondb.net/pokedex/glimmora'},
    {name: 'Greavard', catch: 80, bait:80, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/greavard.png', link: 'https://pokemondb.net/pokedex/greavard'},
    {name: 'Houndstone', catch: 70, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/houndstone.png', link: 'https://pokemondb.net/pokedex/hounstone'},
    {name: 'Flamigo', catch: 65, bait:60, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/flamigo.png', link: 'https://pokemondb.net/pokedex/flamigo'},
    {name: 'Farigiraf', catch: 55, bait:60, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/farigiraf.png', link: 'https://pokemondb.net/pokedex/farigiraf'},
    {name: 'Dudunsparce', catch: 60, bait:70, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dudunsparce.png', link: 'https://pokemondb.net/pokedex/dudunsparce'},
    {name: 'Great Tusk', catch: 55, bait:60, rock: 70, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/great-tusk.png', link: 'https://pokemondb.net/pokedex/great-tusk'},
    {name: 'Scream Tail', catch: 60, bait:65, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/scream-tail.png', link: 'https://pokemondb.net/pokedex/scream-tail'},
    {name: 'Brute Bonnet', catch: 60, bait:65, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/brute-bonnet.png', link: 'https://pokemondb.net/pokedex/brute-bonnet'},
    {name: 'Flutter Mane', catch: 55, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/flutter-mane.png', link: 'https://pokemondb.net/pokedex/flutter-mane'},
    {name: 'Slither Wing', catch: 55, bait:70, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/slither-wing.png', link: 'https://pokemondb.net/pokedex/slither-wing'},
    {name: 'Sany Shocks', catch: 70, bait:60, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/sandy-shocks.png', link: 'https://pokemondb.net/pokedex/sandy-shocks'},
    {name: 'Iron Treads', catch: 55, bait:60, rock: 65, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-treads.png', link: 'https://pokemondb.net/pokedex/iron-treads'},
    {name: 'Iron Bundle', catch: 65, bait:60, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-bundle.png', link: 'https://pokemondb.net/pokedex/iron-bundle'},
    {name: 'Iron Hands', catch: 60, bait:60, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-hands.png', link: 'https://pokemondb.net/pokedex/iron-hands'},
    {name: 'Iron Jugulis', catch: 55, bait:60, rock: 60, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-jugulis.png', link: 'https://pokemondb.net/pokedex/iron-jugulis'},
    {name: 'Iron Moth', catch: 55, bait:65, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-moth.png', link: 'https://pokemondb.net/pokedex/iron-moth'},
    {name: 'Iron Thorns', catch: 55, bait:60, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-thorns.png', link: 'https://pokemondb.net/pokedex/iron-thorns'},
    {name: 'Roaring Moon', catch: 55, bait:55, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/roaring-moon.png', link: 'https://pokemondb.net/pokedex/roaring-moon'},
    {name: 'Iron Valiant', catch: 55, bait: 55, rock: 55, png: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-valiant.png', link: 'https://pokemondb.net/pokedex/iron-valiant'},
]

export const pokeballList: Pokeball[] = [
    {name: 'Poke Ball', png:'assets/images/pokeball.png', class: 'badge bg-danger mx-auto d-block'},
    {name: 'Great Ball', png:'assets/images/greatball.png', class: 'badge bg-primary mx-auto d-block'},
    {name: 'Ultra Ball', png:'assets/images/ultraball.png', class: 'badge bg-warning mx-auto d-block'},
    {name: 'Master Ball', png:'assets/images/masterball.png', class: 'badge bg-dark mx-auto d-block'},
]

export const throwItems = [
    {name: 'rock', png: 'assets/images/imageedit_1_4407675616.png'},
    {name: 'bait', png:'assets/images/Dream_Pomeg_Berry_Sprite.png'}
]