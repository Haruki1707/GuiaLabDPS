import './App.css';
import Game from "./Game";
import {useState} from "react";

function GameList() {
    const [game, setGame] = useState({});
    const [games, setGames] = useState([{
        id: 1,
        name: 'The Legend of Zelda: Tears of The Kingdom',
        price: 60.00,
        description: 'The game takes place a number of years after Breath of the Wild, at the end of the Zelda timeline in the kingdom of Hyrule. Link and Zelda set out to explore a cavern beneath Hyrule Castle, from which gloom, a poisonous substance, has been seeping out and causing people to fall ill.',
        imageUrl: 'https://m.media-amazon.com/images/I/91hN+j+G7LL._AC_UF894,1000_QL80_.jpg'
    }, {
        id: 2,
        name: 'Super Mario Wonder',
        price: 60.00,
        description: 'The game features an art style reminiscent of the New Super Mario Bros. games, as well as new power-ups, including the Wonder Flower. The game features Mario, Luigi, Princess Peach, Princess Daisy, Yellow Toad, and Yoshis of four different colors as playable characters.',
        imageUrl: 'https://m.media-amazon.com/images/I/81FNgqSc40L.jpg'
    }, {
        id: 3,
        name: 'Minecraft',
        price: 30.00,
        description: 'Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The game’s two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. They also interact with blocklike mobs, or moving creatures.',
        imageUrl: 'https://m.media-amazon.com/images/I/81gJUSx-TjL.jpg'
    }, {
        id: 4,
        name: 'Splatoon 2',
        price: 60.00,
        description: 'Like its predecessor, Splatoon 2 is a third-person shooter in which players control characters, known as Inklings and Octolings (Octolings being a new addition to Splatoon 2), and use colored ink as ammunition. Ink is also used to cover the ground, or any paintable surface, in order to swim or refill their ink tanks.',
        imageUrl: 'https://m.media-amazon.com/images/I/71-XXp8T-lL._AC_UF1000,1000_QL80_.jpg'
    }, {
        id: 5,
        name: 'Bayonetta',
        price: 60.00,
        description: 'The game follows the story of the witch Bayonetta, as she defeats the angelic forces of Paradiso and demonic forces of Inferno alike with a combination of firearms and magical attacks using her hair as her clothing.',
        imageUrl: 'https://m.media-amazon.com/images/I/81NLZ-ilveL._AC_UF1000,1000_QL80_.jpg'
    }, {
        id: 6,
        name: 'Bayonetta 2',
        price: 60.00,
        description: 'The game follows the story of the witch Bayonetta as she battles the angelic forces of Paradiso and demonic forces of Inferno alike with magic, guns, and melee attacks using her hair as her clothing.',
        imageUrl: 'https://m.media-amazon.com/images/I/71EgECoNe6L._AC_UF1000,1000_QL80_.jpg'
    }, {
        id: 7,
        name: 'Bayonetta 3',
        price: 60.00,
        description: 'It is the third entry in the Bayonetta series, following Bayonetta (2009) and Bayonetta 2 (2014), and features the eponymous character Bayonetta, who returns to fight against hordes of angels and demons in the game’s signature hack-and-slash combat style.',
        imageUrl: 'https://m.media-amazon.com/images/I/81FDdAVN8YL._AC_UF894,1000_QL80_.jpg'
    }, {
        id: 8,
        name: 'Mortal Kombat 1',
        price: 60.00,
        description: ' The game focuses on the journey of the monk Liu Kang to save Earth from the evil sorcerer Shang Tsung, ending with their confrontation in the tournament known as Mortal Kombat.',
        imageUrl: 'https://m.media-amazon.com/images/I/81Wl1NBPqlL.jpg'
    }, {
        id: 9,
        name: 'It Takes Two',
        price: 45.00,
        description: 'The game follows the story of Cody and May, a couple who are turned into dolls by a magic spell and must work together to navigate their way through various environments to return to their human forms.',
        imageUrl: 'https://m.media-amazon.com/images/I/61W2WNF3vzL._AC_UF1000,1000_QL80_.jpg'
    }, {
        id: 10,
        name: 'Super Mario 3D All Stars',
        price: 60.00,
        description: 'It was released on September 18, 2020 to celebrate the 35th anniversary of Super Mario Bros. The compilation contains Super Mario 64 (1996), Super Mario Sunshine (2002), and Super Mario Galaxy (2007).',
        imageUrl: 'https://m.media-amazon.com/images/I/81Xi9uVRf4L._AC_UF1000,1000_QL80_.jpg'
    }]);

    return (<>
        <div className="container">
            <div className="row row-cols-2">
            {games.map((value, index) => (<Game game={value}/>))}
            </div>
        </div>
    </>);
}

export default GameList;
