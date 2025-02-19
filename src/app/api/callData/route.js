

import { NextResponse } from 'next/server'

export async function POST(req) {
    if (req.method === 'POST') {
        const preUser = await req.json()

        let data = []
        let user = ""

        function processString(str) {
            // Verifica se há um jogo da velha (#)
            if (str.includes("#")) {
                // Separa a string na posição do jogo da velha
                let parts = str.split("#");
                // Converte espaços para %20 nas duas partes
                let part1 = parts[0].replace(/ /g, "%20");
                let part2 = parts[1].replace(/ /g, "%20");
                // Retorna as duas partes em um objeto
                return { name: part1, tag: part2 };
            } else {
                // Se não houver jogo da velha, apenas converte espaços para %20
                return str.replace(/ /g, "%20");
            }
        }

        user = processString(preUser)
        console.log(user.name)
        console.log(user.tag)
        const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${user.name}/${user.tag}`;


        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                    "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Origin": "https://developer.riotgames.com",
                    "X-Riot-Token": "RGAPI-88a86147-0e84-4422-a2ad-066292c2d36d"
                }
            });
            const responsePUUID = await response.json()
            const PUUID = responsePUUID.puuid
            console.log(PUUID)
            //lol/match/v5/matches/by-puuid/{puuid}/ids //pegar ultimas 20 partidas
            //lol/match/v5/matches/{matchId} // 
            //MATCHV5
            const url2 = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?start=0&count=20`
            const dataRequest = await fetch(url2, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                    "Accept-Language": "en-US,en;q=0.9,pt;q=0.8",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Origin": "https://developer.riotgames.com",
                    "X-Riot-Token": "RGAPI-88a86147-0e84-4422-a2ad-066292c2d36d"
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
                        "X-Riot-Token": "RGAPI-88a86147-0e84-4422-a2ad-066292c2d36d",
                        "count": 100
                    }
                });
                return response.json();
            };

            const fetchAllMatchData = async () => {
                try {

                    const arrMatches = await Promise.all(responseMatches.map(element => fetchMatchData(element)));
                    console.log(arrMatches.length)
                    arrMatches.map((item) => item.info?.participants.map((itemX) => {
                        if (itemX?.riotIdGameName === preUser.split('#')[0] && itemX?.championName === "Aatrox") {
                            console.log("passou")
                            data = [itemX, ...data]
                        }
                    }))

                    return data
                } catch (error) {
                    console.error('Erro ao buscar os dados das partidas:', error);
                }
            };

            const result = await fetchAllMatchData();
            console.log(result.length, "result")
            return NextResponse.json({ data: result }, { status: 200 })

        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}