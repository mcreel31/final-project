export module TeamInfo {

    export interface Team {
        ID: string;
        City: string;
        Name: string;
        Abbreviation: string;
    }

    export interface GamesPlayed {
        abbreviation: string;
        text: string;
    }

    export interface Pts {
        category: string;
        abbreviation: string;
        text: string;
    }

    export interface PtsAgainst {
        category: string;
        abbreviation: string;
        text: string;
    }

    export interface Wins {
        category: string;
        abbreviation: string;
        text: string;
    }

    export interface Losses {
        category: string;
        abbreviation: string;
        text: string;
    }

    export interface Stats {
        GamesPlayed: GamesPlayed;
        Pts: Pts;
        PtsAgainst: PtsAgainst;
        Wins: Wins;
        Losses: Losses;
    }

    export interface Teamentry {
        team: Team;
        rank: string;
        stats: Stats;
    }

    export interface Conference {
        name: string;
        teamentry: Teamentry[];
    }

    export interface Conferenceteamstandings {
        lastUpdatedOn: string;
        conference: Conference[];
    }

    export interface RootObject {
        conferenceteamstandings: Conferenceteamstandings;
    }

}