

import { NextResponse } from 'next/server'

export async function POST(req, res) {
    if (req.method === 'POST') {
        const url = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/bad%20bruinha/br1";
        let data = []
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                    "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Origin": "https://developer.riotgames.com",
                    "X-Riot-Token": "RGAPI-412077e0-f915-4ee3-a6ee-43d79e69b8f0"
                }
            });
            const responsePUUID = await response.json()
            const PUUID = responsePUUID.puuid

            //lol/match/v5/matches/by-puuid/{puuid}/ids //pegar ultimas 20 partidas
            //lol/match/v5/matches/{matchId} // 
            //MATCHV5
            const url2 = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids`
            const dataRequest = await fetch(url2, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                    "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Origin": "https://developer.riotgames.com",
                    "X-Riot-Token": "RGAPI-412077e0-f915-4ee3-a6ee-43d79e69b8f0"
                }
            });
            const responseMatches = await dataRequest.json()

            const fetchMatchData = async (element) => {
                const url3 = `https://americas.api.riotgames.com/lol/match/v5/matches/${element}`;
                const response = await fetch(url3, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                        "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
                        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                        "Origin": "https://developer.riotgames.com",
                        "X-Riot-Token": "RGAPI-412077e0-f915-4ee3-a6ee-43d79e69b8f0"
                    }
                });
                return response.json();
            };

            const fetchAllMatchData = async () => {
                try {
                    const arrMatches = await Promise.all(responseMatches.map(element => fetchMatchData(element)));
                    arrMatches.map((item) => item.info.participants.map((itemX) => {
                        if (itemX?.summonerName === "bad bruinha" && itemX?.championName === "Urgot") {
                            data = [itemX, ...data]
                        }
                    }))
                    console.log(data)
                } catch (error) {
                    console.error('Erro ao buscar os dados das partidas:', error);
                }
            };

            fetchAllMatchData();

            return NextResponse.json({ error: 'Internal Server Error' }, { status: 200 })
        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}