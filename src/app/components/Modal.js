import React from 'react'
import Grid from '@mui/material/Grid';

const Modal = ({ modal, sendData }) => {


    const closeModal = () => {
        modal()
    }

    const championsData = [
        {
            id: 1,
            name: 'Ahri',
            role: 'Mage',
            difficulty: 'Moderate',
            lore: 'Ahri é uma vastaya com um poderoso laço mágico com o espírito das almas.',
            image: 'ahri.jpg'
        },
        {
            id: 2,
            name: 'Ezreal',
            role: 'Marksman',
            difficulty: 'Easy',
            lore: 'Ezreal é um explorador brilhante e aventureiro, dedicado a desvendar segredos antigos.',
            image: 'ezreal.jpg'
        },
        {
            id: 3,
            name: 'Garen',
            role: 'Fighter',
            difficulty: 'Easy',
            lore: 'Garen é um guerreiro formidável, determinado a proteger Demacia de seus inimigos.',
            image: 'garen.jpg'
        },
        {
            id: 4,
            name: 'Jinx',
            role: 'Marksman',
            difficulty: 'Moderate',
            lore: 'Jinx é uma caótica e imprevisível atiradora, que adora causar estragos por diversão.',
            image: 'jinx.jpg'
        },
        {
            id: 1,
            name: 'Ahri',
            role: 'Mage',
            difficulty: 'Moderate',
            lore: 'Ahri é uma vastaya com um poderoso laço mágico com o espírito das almas.',
            image: 'ahri.jpg'
        },
        {
            id: 2,
            name: 'Ezreal',
            role: 'Marksman',
            difficulty: 'Easy',
            lore: 'Ezreal é um explorador brilhante e aventureiro, dedicado a desvendar segredos antigos.',
            image: 'ezreal.jpg'
        },
        {
            id: 3,
            name: 'Garen',
            role: 'Fighter',
            difficulty: 'Easy',
            lore: 'Garen é um guerreiro formidável, determinado a proteger Demacia de seus inimigos.',
            image: 'garen.jpg'
        },
        {
            id: 4,
            name: 'Jinx',
            role: 'Marksman',
            difficulty: 'Moderate',
            lore: 'Jinx é uma caótica e imprevisível atiradora, que adora causar estragos por diversão.',
            image: 'jinx.jpg'
        },
        {
            id: 1,
            name: 'Ahri',
            role: 'Mage',
            difficulty: 'Moderate',
            lore: 'Ahri é uma vastaya com um poderoso laço mágico com o espírito das almas.',
            image: 'ahri.jpg'
        },
        {
            id: 2,
            name: 'Ezreal',
            role: 'Marksman',
            difficulty: 'Easy',
            lore: 'Ezreal é um explorador brilhante e aventureiro, dedicado a desvendar segredos antigos.',
            image: 'ezreal.jpg'
        },
        {
            id: 3,
            name: 'Garen',
            role: 'Fighter',
            difficulty: 'Easy',
            lore: 'Garen é um guerreiro formidável, determinado a proteger Demacia de seus inimigos.',
            image: 'garen.jpg'
        },
        {
            id: 4,
            name: 'Jinx',
            role: 'Marksman',
            difficulty: 'Moderate',
            lore: 'Jinx é uma caótica e imprevisível atiradora, que adora causar estragos por diversão.',
            image: 'jinx.jpg'
        },
        {
            id: 1,
            name: 'Ahri',
            role: 'Mage',
            difficulty: 'Moderate',
            lore: 'Ahri é uma vastaya com um poderoso laço mágico com o espírito das almas.',
            image: 'ahri.jpg'
        },
        {
            id: 2,
            name: 'Ezreal',
            role: 'Marksman',
            difficulty: 'Easy',
            lore: 'Ezreal é um explorador brilhante e aventureiro, dedicado a desvendar segredos antigos.',
            image: 'ezreal.jpg'
        },
        {
            id: 3,
            name: 'Garen',
            role: 'Fighter',
            difficulty: 'Easy',
            lore: 'Garen é um guerreiro formidável, determinado a proteger Demacia de seus inimigos.',
            image: 'garen.jpg'
        },
        {
            id: 4,
            name: 'Jinx',
            role: 'Marksman',
            difficulty: 'Moderate',
            lore: 'Jinx é uma caótica e imprevisível atiradora, que adora causar estragos por diversão.',
            image: 'jinx.jpg'
        },
    ];

    return (
        <div onClick={closeModal} style={{ width: "100vw", height: "100vh", position: "fixed", top: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid className='modal' container spacing={2} style={{ maxWidth: "900px", border: "1px solid black", background: "#161616", zIndex: "1" }}>
                {championsData.map(champion => (
                    <div onClick={() => sendData(champion)} key={champion.id} style={{ width: '120px', marginLeft: "20px", marginTop: "15px" }}>
                        <img src={"https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/gragas.png?V3"} alt={champion.name} style={{ width: '120PX' }} />
                    </div>
                ))}
            </Grid>
            <div style={{
                width: "100%", height: "100%", position: "absolute", top: "0px",
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(3px)',
            }}>
                aaaaaaa
            </div>
        </div >
    )
}

export default Modal