export module PlayerInfo {

    export interface Player {
        ID: string;
        LastName: string;
        FirstName: string;
        JerseyNumber: string;
        Position: string;
    }

    export interface Team {
        ID: string;
        City: string;
        Name: string;
        Abbreviation: string;
    }

    export interface GamesPlayed {
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg2PtAtt {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg2PtMade {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg3PtAtt {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg3PtMade {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FtAtt {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FtMade {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Stats {
        GamesPlayed: GamesPlayed;
        Fg2PtAtt: Fg2PtAtt;
        Fg2PtMade: Fg2PtMade;
        Fg3PtAtt: Fg3PtAtt;
        Fg3PtMade: Fg3PtMade;
        FtAtt: FtAtt;
        FtMade: FtMade;
    }

    export interface Playerstatsentry {
        player: Player;
        team: Team;
        stats: Stats;
    }

    export interface Cumulativeplayerstats {
        lastUpdatedOn: string;
        playerstatsentry: Playerstatsentry[];
    }

    export interface RootObject {
        cumulativeplayerstats: Cumulativeplayerstats;
    }

}

