export module TeamLog {

    export interface AwayTeam {
        ID: string;
        City: string;
        Name: string;
        Abbreviation: string;
    }

    export interface HomeTeam {
        ID: string;
        City: string;
        Name: string;
        Abbreviation: string;
    }

    export interface Game {
        id: string;
        date: string;
        time: string;
        awayTeam: AwayTeam;
        homeTeam: HomeTeam;
        location: string;
    }

    export interface Team {
        ID: string;
        City: string;
        Name: string;
        Abbreviation: string;
    }

    export interface Fg2PtAtt {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg2PtAttPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg2PtMade {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg2PtMadePerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg2PtPct {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg3PtAtt {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg3PtAttPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg3PtMade {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg3PtMadePerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fg3PtPct {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FgAtt {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FgAttPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FgMade {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FgMadePerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FgPct {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FtAtt {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FtAttPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FtMade {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FtMadePerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FtPct {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface OffReb {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface OffRebPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface DefReb {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface DefRebPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Reb {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface RebPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Ast {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface AstPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Pts {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface PtsPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Tov {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface TovPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Stl {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface StlPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Blk {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface BlkPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface BlkAgainst {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface BlkAgainstPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface PtsAgainst {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface PtsAgainstPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Fouls {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulsPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulsDrawn {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulsDrawnPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulPers {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulPersPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulPersDrawn {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulPersDrawnPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulTech {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulTechPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulTechDrawn {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulTechDrawnPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag1 {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag1PerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag1Drawn {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag1DrawnPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag2 {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag2PerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag2Drawn {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface FoulFlag2DrawnPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Ejections {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface PlusMinus {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface PlusMinusPerGame {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Wins {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Losses {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface WinPct {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface GamesBack {
        "@category": string;
        "@abbreviation": string;
        "#text": string;
    }

    export interface Stats {
        Fg2PtAtt: Fg2PtAtt;
        Fg2PtAttPerGame: Fg2PtAttPerGame;
        Fg2PtMade: Fg2PtMade;
        Fg2PtMadePerGame: Fg2PtMadePerGame;
        Fg2PtPct: Fg2PtPct;
        Fg3PtAtt: Fg3PtAtt;
        Fg3PtAttPerGame: Fg3PtAttPerGame;
        Fg3PtMade: Fg3PtMade;
        Fg3PtMadePerGame: Fg3PtMadePerGame;
        Fg3PtPct: Fg3PtPct;
        FgAtt: FgAtt;
        FgAttPerGame: FgAttPerGame;
        FgMade: FgMade;
        FgMadePerGame: FgMadePerGame;
        FgPct: FgPct;
        FtAtt: FtAtt;
        FtAttPerGame: FtAttPerGame;
        FtMade: FtMade;
        FtMadePerGame: FtMadePerGame;
        FtPct: FtPct;
        OffReb: OffReb;
        OffRebPerGame: OffRebPerGame;
        DefReb: DefReb;
        DefRebPerGame: DefRebPerGame;
        Reb: Reb;
        RebPerGame: RebPerGame;
        Ast: Ast;
        AstPerGame: AstPerGame;
        Pts: Pts;
        PtsPerGame: PtsPerGame;
        Tov: Tov;
        TovPerGame: TovPerGame;
        Stl: Stl;
        StlPerGame: StlPerGame;
        Blk: Blk;
        BlkPerGame: BlkPerGame;
        BlkAgainst: BlkAgainst;
        BlkAgainstPerGame: BlkAgainstPerGame;
        PtsAgainst: PtsAgainst;
        PtsAgainstPerGame: PtsAgainstPerGame;
        Fouls: Fouls;
        FoulsPerGame: FoulsPerGame;
        FoulsDrawn: FoulsDrawn;
        FoulsDrawnPerGame: FoulsDrawnPerGame;
        FoulPers: FoulPers;
        FoulPersPerGame: FoulPersPerGame;
        FoulPersDrawn: FoulPersDrawn;
        FoulPersDrawnPerGame: FoulPersDrawnPerGame;
        FoulTech: FoulTech;
        FoulTechPerGame: FoulTechPerGame;
        FoulTechDrawn: FoulTechDrawn;
        FoulTechDrawnPerGame: FoulTechDrawnPerGame;
        FoulFlag1: FoulFlag1;
        FoulFlag1PerGame: FoulFlag1PerGame;
        FoulFlag1Drawn: FoulFlag1Drawn;
        FoulFlag1DrawnPerGame: FoulFlag1DrawnPerGame;
        FoulFlag2: FoulFlag2;
        FoulFlag2PerGame: FoulFlag2PerGame;
        FoulFlag2Drawn: FoulFlag2Drawn;
        FoulFlag2DrawnPerGame: FoulFlag2DrawnPerGame;
        Ejections: Ejections;
        PlusMinus: PlusMinus;
        PlusMinusPerGame: PlusMinusPerGame;
        Wins: Wins;
        Losses: Losses;
        WinPct: WinPct;
        GamesBack: GamesBack;
    }

    export interface Gamelog {
        game: Game;
        team: Team;
        stats: Stats;
    }

    export interface Teamgamelogs {
        lastUpdatedOn: string;
        gamelogs: Gamelog[];
    }

    export interface RootObject {
        teamgamelogs: Teamgamelogs;
    }

}

