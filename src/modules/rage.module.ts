export interface IRageServerState {
    name: string;
    gamemode: string;
    url: string;
    lang: string;
    players: number;
    peak: number;
    maxPlayers: number;
}

class RAGE {
    /**
     * Функция для получения данных о сервер (RAGE)
     * @param serverIp - Полный айпи сервера
     * @returns - Объект с данными сервера или null
     */
    async getServerStats(serverIp: string): Promise<IRageServerState | null> {
        const response = await fetch('https://cdn.rage.mp/master/');

        if (!response.ok) {
            throw new Error(`Error to get online (${serverIp}: ${response.status})`);
        }

        const responseJson = await response.json();
        if (!responseJson.hasOwnProperty(serverIp))
            return null;

        return responseJson[serverIp];
    }
}

export const rage = new RAGE();