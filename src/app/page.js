"use client";


import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import RunesP from './components/RunesP';
import Item from './components/Item';
import Modal from './components/Modal';
import Image from 'next/image';
import youtube from "../app/assets/youtube.png"
import twitch from "../app/assets/twitch.png"
import instagram from "../app/assets/instagram.png"
import tiktok from "../app/assets/tiktok.png"
import defaultImage from "../app/assets/default.png"

export default function Page() {

  const [champion, setChampion] = useState({
    id: 1,
    name: 'Default',
    role: 'Mage',
    difficulty: 'Moderate',
    lore: 'Ahri é uma vastaya com um poderoso laço mágico com o espírito das almas.',
    image: 'ahri.jpg'
  })
  const [brilho, setBrilho] = useState("brightness(100%)")

  const [selection, setSelection] = useState({
    Runas: true,
    Skills: false,
    Trade: false,
    Video: false
  })

  const [modal, setModal] = useState(false)

  const [information, setInformation] = useState({})


  const changeSelection = (key) => {
    let newObject = {
      Runas: false,
      Skills: false,
      Trade: false,
      Video: false
    }

    newObject = {
      ...newObject,
      [key]: true
    }

    setSelection(newObject)
  }

  const apiCall = async () => {
    const request = await fetch(`/api/callData`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    console.log(request)
  };

  return <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Grid container spacing={2} style={{
      maxWidth: "500px", marginTop: "10px", height: "60px", display: "flex", position: "relative", backgroundColor: 'transparent',
      color: 'white', padding: "10px", borderRadius: "10px", scale: "0.9", marginLeft: "-490px", alignItems: "center", zIndex: "20",

    }}>
      <a href="https://www.youtube.com/@Inefavelol" target="_blank">
        <div style={{ padding: "20px", top: "0px", position: 'relative', borderRadius: "100%", background: "white", cursor: "pointer", zIndex: "20" }}>
          <Image src={youtube} width={108} style={{ padding: "20px", position: "absolute", top: "-34px", left: "-34px" }}>
          </Image>
        </div>
      </a>
      <a href="https://www.twitch.tv/inefavel1" target="_blank">
        <div style={{ padding: "20px", top: "0px", marginLeft: "10px", position: 'relative', cursor: "pointer" }}>
          <Image src={twitch} width={92} style={{ padding: "20px", position: "absolute", top: "-27px", left: "-26px" }}>
          </Image>
        </div>
      </a>
      <a href="https://www.instagram.com/inefavelol/" target="_blank">
        <div style={{ padding: "20px", top: "0px", marginLeft: "10px", position: 'relative', borderRadius: "50%", background: "white", cursor: "pointer" }}>
          <Image src={instagram} width={92} style={{ padding: "20px", position: "absolute", top: "-27px", left: "-26px" }}>
          </Image>
        </div>
      </a>
      <a href="https://www.tiktok.com/@inefavelol" target="_blank">
        <div style={{ padding: "20px", top: "0px", marginLeft: "10px", position: 'relative', borderRadius: "50%", background: "white", cursor: "pointer" }}>
          <Image src={tiktok} width={108} style={{ padding: "20px", position: "absolute", top: "-34px", left: "-34px" }}>
          </Image>
        </div>
      </a>
    </Grid>
    <div className='image' >

    </div>
    <Grid container spacing={2} style={{
      marginTop: "200px", height: "120px", display: "flex", position: "relative", backgroundColor: 'transparent',
      color: 'white', padding: "10px", borderRadius: "10px", scale: "0.9", marginLeft: "-35px", maxWidth: "1000px"
    }}>
      <div style={{ position: "absolute", top: "-190px", fontSize: "42px", fontWeight: "bold" }}>
        Guia de Aatrox
      </div>
      <p style={{ position: "absolute", top: "-130px", fontSize: "42px", fontWeight: "bold", fontSize: "20px", marginLeft: "5px" }}>
        Inefavel
      </p>
      <div style={{ position: "absolute", top: "-50px", fontSize: "24px", fontWeight: "bold" }}>
        Selecione a Matchup
      </div>
      <img src='https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/aatrox.png?V3' style={{ width: "100px", height: "100px", }}>
      </img>
      <div style={{ marginLeft: "20px" }}>
        <h1 style={{ color: "white", fontSize: "22px" }} >
          Aatrox
        </h1>
        <p>

        </p>
        <div style={{ color: "white", position: "absolute", left: "48%", fontSize: "21px" }} >
          <h1
            className='battle'
            style={{
              color: "white",
              position: "absolute",
              marginTop: "-35px",
              left: "48%",
              fontWeight: "lighter",
              fontSize: "37px",
              textShadow: "2px 2px 4px #000000"
            }}>

          </h1>
        </div>
      </div>
      <div style={{ marginLeft: "20px", position: "absolute", right: "150px" }}>
        <p style={{ textAlign: "right" }}>
        </p>
      </div>
      <Image onMouseEnter={() => setBrilho("brightness(200%)")} onMouseLeave={() => setBrilho("brightness(100%)")} onClick={() => setModal(true)} src={defaultImage} style={{ width: "100px", marginLeft: "30px", height: "100px", cursor: "pointer", filter: brilho, background: "white", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
      </Image>
      <div style={{ marginLeft: "20px" }}>
        <h1 style={{ color: "white", fontSize: "20px" }} >
          {champion.name}
        </h1>
        <p>

        </p>
        <div style={{ color: "white", position: "absolute", left: "48%", fontSize: "21px" }} >
          <h1
            className='battle'
            style={{
              color: "white",
              position: "absolute",
              marginTop: "-35px",
              left: "48%",
              fontWeight: "lighter",
              fontSize: "37px",
              textShadow: "2px 2px 4px #000000"
            }}>

          </h1>
        </div>
      </div>
    </Grid >
    <Grid container spacing={2} style={{ maxWidth: "1000px", marginTop: "40px", scale: "0.9" }}>
      <Grid item xs={12}
        style={{
          height: "600px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          background: "#0D0D0F",
          border: "1px solid #0c0c0c",
          alignItems: "center"
        }}>

        <div style={{
          border: "1px solid #0c0c0c",
          position: "absolute",
          display: "flex",
          width: "601px",
          height: "60px",
          top: "-60px",
          left: "-1px",
          borderBottom: "none",
          backgroundColor: "#0D0D0F",
          color: "WHITE",
          textAlign: 'center',
        }}>
          <div onClick={() => changeSelection("Runas")} style={{ border: "1px solid #0c0c0c", flex: "1", alignContent: "center", cursor: "pointer" }}> Runas</div>
          <div onClick={() => changeSelection("Combos")} style={{ border: "1px solid #0c0c0c", flex: "1", alignContent: "center", cursor: "pointer" }}> Combos</div>
          <div onClick={() => changeSelection("Skills")} style={{ border: "1px solid #0c0c0c", flex: "1", alignContent: "center", cursor: "pointer" }}> Skills</div>
          <div onClick={() => changeSelection("Trade")} style={{ border: "1px solid #0c0c0c", flex: "1", alignContent: "center", cursor: "pointer" }}> Dicas</div>
          <div onClick={() => changeSelection("Video")} style={{ border: "1px solid #0c0c0c", flex: "1", alignContent: "center", cursor: "pointer" }}> Video</div>
        </div>
        {selection.Runas &&
          <Grid container spacing={2} style={{ width: "100%", height: "100%" }}>
            <Grid item xs={4}>
              <RunesP />
            </Grid>
            <Grid item xs={4}>
              <RunesP minors />
            </Grid>
            <Grid item xs={4}>
              <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", scale: "0.9" }}>
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </Grid>
          </Grid>
        }
        {selection.Skills &&
          <div style={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", color: "white" }}>
            <div
              onClick={() => apiCall()}
              style={{ padding: "20px", background: "pink", height: "20px" }}></div>
          </div>
        }
        {selection.Combos &&
          <div style={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", color: "white" }}>
            <div style={{ textAlign: "center", width: "300px", height: "200px", margin: "10px" }}>
              combo A
              <div style={{ border: "1px solid black", width: "300px", height: "180px", marginTop: "10px" }}>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "300px", height: "200px", margin: "10px" }}>
              combo B
              <div style={{ border: "1px solid black", width: "300px", height: "180px", marginTop: "10px" }}>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "300px", height: "200px", margin: "10px" }}>
              combo C
              <div style={{ border: "1px solid black", width: "300px", height: "180px", marginTop: "10px" }}>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "300px", height: "200px", margin: "10px", marginTop: "-40px" }}>
              combo D
              <div style={{ border: "1px solid black", width: "300px", height: "180px", marginTop: "10px" }}>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "300px", height: "200px", margin: "10px", marginTop: "-40px" }}>
              combo E
              <div style={{ border: "1px solid black", width: "300px", height: "180px", marginTop: "10px" }}>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "300px", height: "200px", margin: "10px", marginTop: "-40px" }}>
              combo F
              <div style={{ border: "1px solid black", width: "300px", height: "180px", marginTop: "10px" }}>
              </div>
            </div>
          </div>
        }
        {selection.Trade &&
          <div style={{ height: "98%", overflowY: "scroll", width: "98%" }}>
            <h1 style={{ color: "white" }}>
              <div style={{ border: "1px solid black", fontSize: "20px", padding: "30px", width: "98%", borderRadius: "10px", background: "#151317", fontWeight: "normal", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>Dicas e truques</h2>
                Lorem ipsum dolor sit amet. A blanditiis exercitationem ut accusamus omnis sit dolorem soluta et perspiciatis aliquam.
                Sed consequatur quia sit quaerat aperiam et suscipit enim et nostrum beatae ut omnis pariatur ex accusamus amet ab mollitia alias.
              </div>
              <div style={{ border: "1px solid black", fontSize: "20px", padding: "30px", width: "98%", borderRadius: "10px", background: "#151317", fontWeight: "normal", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Dicas e truques</h2>
                Lorem ipsum dolor sit amet. A blanditiis exercitationem ut accusamus omnis sit dolorem soluta et perspiciatis aliquam.
                Sed consequatur quia sit quaerat aperiam et suscipit enim et nostrum beatae ut omnis pariatur ex accusamus amet ab mollitia alias.
              </div>
              <div style={{ border: "1px solid black", fontSize: "20px", padding: "30px", width: "98%", borderRadius: "10px", background: "#151317", fontWeight: "normal" }}>
                <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Dicas e truques</h2>
                Lorem ipsum dolor sit amet. A blanditiis exercitationem ut accusamus omnis sit dolorem soluta et perspiciatis aliquam.
                Sed consequatur quia sit quaerat aperiam et suscipit enim et nostrum beatae ut omnis pariatur ex accusamus amet ab mollitia alias.
              </div>
            </h1>
          </div>
        }
        {selection.Video &&
          <div style={{ width: "100%", height: "100%", marginLeft: "-20px", marginBottom: "10px" }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Jhvuu-iGEqI" title="QUASE QUE EU NÃO CONSIGO CARREGAR O TAKESHI!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        }
      </Grid>
    </Grid>
    <div style={{ height: "60px", fontSize: "14px", marginTop: "30px", width: "300px", zIndex: "1", color: "white", textAlign: "center", marginBottom: "0vh", display: "flex", justifyContent: "center", width: "300px", marginBottom: "40px" }}>
      Copyright © INEFAVEL - 2024
      Privacidade - Termos de Uso
      developed by HLE
    </div>
    {modal && <Modal sendData={(name) => setChampion(name)} modal={() => setModal(false)} />}
  </div >
}