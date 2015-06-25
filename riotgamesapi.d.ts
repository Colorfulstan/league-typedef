// Type definitions for the Riot Game's API
// Project: https://developer.riotgames.com/api/methods
// Definitions by: Kewin Dousse (Protectator) <https://github.com/Protectator>
// Definitions: https://github.com/Protectator/riotgamesapi-typedef

declare module riotGamesApi {
	
	/**
	 * champion-v1.2
	 */
	export module champion {
		/**
		 * Contains a collection of champion information
		 */
		export class ChampionListDto {
			/**
			 * The collection of champion information.
			 */
			champions: ChampionDto[];
		}
		
		/**
		 * Contains champion information
		 */
		export class ChampionDto {
			/**
			 * Indicates if the champion is active
			 */
			active: boolean;
			/**
			 * Bot enabled flag (for custom games)
			 */
			botEnabled: boolean;
			/**
			 * Bot Match Made enabled flag (for Co-op vs. AI games).
			 */
			botMmEnabled: boolean;
			/**
			 * Indicates if the champion is free to play.
			 * Free to play champions are rotated periodically.
			 */
			freeToPlay: boolean;
			/**
			 * Champion ID.
			 * For static information correlating champion IDs, refer to the LoL Static Data API.
			 */
			id: number;
			/**
			 * Ranked play enabled flag
			 */
			rankedPlayEnabled: boolean;
		}
	}
	
	/**
	 * current-game-v1.0
	 */
	export module currentGame {
		/**
		 * 
		 */
		export class CurrentGameInfo {
			/**
			 * Banned champion information
			 */
			bannedChampions: BannedChampion[];
			/**
			 * The ID of the game
			 */
			gameId: number;
			/**
			 * The amount of time in seconds that has passed since the game started
			 */
			gameLength: number;
			/**
			 * The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
			 */
			gameMode: string;
			/**
			 * The queue type (queue types are documented on the Game Constants page)
			 */
			gameQueueConfigId: number;
			/**
			 * The game start time represented in epoch milliseconds
			 */
			gameStartTime: number;
			/**
			 * The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
			 */
			gameType: string;
			/**
			 * The ID of the map
			 */
			mapId: number;
			/**
			 * The observer information
			 */
			observers: Observer;
			/**
			 * The participant information
			 */
			participants: CurrentGameParticipant[];
			/**
			 * The ID of the platform on which the game is being played
			 */
			platformId: string;
		}
		
		/**
		 * 
		 */
		export class BannedChampion {
			/**
			 * The ID of the banned champion
			 */
			championId: number;
	
			/**
			 * The turn during which the champion was banned
			 */
			pickTurn: number;
	
			/**
			 * The ID of the team that banned the champion
			 */
			teamId: number;
		}
		
		/**
		 * 
		 */
		export class CurrentGameParticipant {
			/**
			 * Flag indicating whether or not this participant is a bot
			 */
			bot: boolean;
			/**
			 * The ID of the champion played by this participant
			 */
			championId: number;
			/**
			 * The masteries used by this participant
			 */
			masteries: Mastery[];
			/**
			 * The ID of the profile icon used by this participant
			 */
			profileIconId: number;
			/**
			 * The runes used by this participant
			 */
			runes: Rune[];
			/**
			 * The ID of the first summoner spell used by this participant
			 */
			spell1Id: number;
			/**
			 * The ID of the second summoner spell used by this participant
			 */
			spell2Id: number;
			/**
			 * The summoner ID of this participant
			 */
			summonerId: number;
			/**
			 * The summoner name of this participant
			 */
			summonerName: string;
			/**
			 * The team ID of this participant, indicating the participant's team
			 */
			teamId: number;
		}
		
		/**
		 * 
		 */
		export class Observer {
			/**
			 * Key used to decrypt the spectator grid game data for playback
			 */
			encryptionKey: string;
		}
		 
		/**
		 * 
		 */
		export class Mastery {
			/**
			 * The ID of the mastery
			 */
			masteryId: number;
			/**
			 * The number of points put into this mastery by the user
			 */
			rank: number;
		}
		
		/**
		 * 
		 */
		export class Rune {
			/**
			 * The count of this rune used by the participant
			 */
			count: number;
			/**
			 * The ID of the rune
			 */
			runeId: number;
		}
		
		/* features-games-v1.0 */
		
		/**
		 * 
		 */
		export class FeaturesGames {
			/**
			 * The suggested interval to wait before requesting FeaturedGames again
			 */
			clientRefreshInterval: number;
			/**
			 * The list of featured games
			 */
			gameList: FeaturedGameInfo[];
		}
		
		/**
		 * 
		 */
		export class FeaturedGameInfo {
			/**
			 * Banned champion information
			 */
			bannedChampions: BannedChampion[];
			/**
			 * The ID of the game
			 */
			gameId: number;
			/**
			 * The amount of time in seconds that has passed since the game started
			 */
			gameLength: number;
			/**
			 * The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
			 */
			gameMode: string;
			/**
			 * The queue type (queue types are documented on the Game Constants page)
			 */
			gameQueueConfigId: number;
			/**
			 * The game start time represented in epoch milliseconds
			 */
			gameStartTime: number;
			/**
			 * The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
			 */
			gameType: string;
			/**
			 * The ID of the map
			 */
			mapId: number;
			/**
			 * The observer information
			 */
			observers: Observer;
			/**
			 * The participant information
			 */
			participants: Participant[];
			/**
			 * The ID of the platform on which the game is being played
			 */
			platformId: string;
		}
		
		// BannedChampion is already defined
		
		// Observer is already defined
		
		/**
		 * 
		 */
		export class Participant {
			/**
			 * Flag indicating whether or not this participant is a bot
			 */
			bot: boolean;
			/**
			 * The ID of the champion played by this participant
			 */
			championId: number;
			/**
			 * The ID of the profile icon used by this participant
			 */
			profileIconId: number;
			/**
			 * The ID of the first summoner spell used by this participant
			 */
			spell1Id: number;
			/**
			 * The ID of the second summoner spell used by this participant
			 */
			spell2Id: number;
			/**
			 * The summoner name of this participant
			 */
			summonerName: string;
			/**
			 * The team ID of this participant, indicating the participant's team
			 */
			teamId: number;
		}

	}
	
	
	/**
	 * game-v1.3
	 */
	export module game {
		/**
		 * Contains recent games information
		 */
		export class RecentGamesDto {
			/**
			 * Collection of recent games played (max 10).
			 */
			games: GameDto[];
			/**
			 * Summoner ID.
			 */
			summonerId: number;
		}
		
		/**
		 * Contains game information
		 */
		export class GameDto {
			/**
			 * Champion ID associated with game.
			 */
			championId: number;
			/**
			 * Date that end game data was recorded, specified as epoch milliseconds.
			 */
			createDate: number;
			/**
			 * Other players associated with the game.
			 */
			fellowPlayers: PlayerDto[];
			/**
			 * Game ID.
			 */
			gameId: number;
			/**
			 * Game mode. (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
			 */
			gameMode: string;
			/**
			 * Game type. (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
			 */
			gameType: string;
			/**
			 * Invalid flag.
			 */
			invalid: boolean;
			/**
			 * IP Earned.
			 */
			ipEarned: number;
			/**
			 * Level.
			 */
			level: number;
			/**
			 * Map ID.
			 */
			mapId: number;
			/**
			 * ID of first summoner spell.
			 */
			spell1: number;
			/**
			 * ID of second summoner spell.
			 */
			spell2: number;
			/**
			 * Statistics associated with the game for this summoner.
			 */
			stats: RawStatsDto;
			/**
			 * Game sub-type. (Legal values: NONE, NORMAL, BOT, RANKED_SOLO_5x5, RANKED_PREMADE_3x3, RANKED_PREMADE_5x5, ODIN_UNRANKED, RANKED_TEAM_3x3, RANKED_TEAM_5x5, NORMAL_3x3, BOT_3x3, CAP_5x5, ARAM_UNRANKED_5x5, ONEFORALL_5x5, FIRSTBLOOD_1x1, FIRSTBLOOD_2x2, SR_6x6, URF, URF_BOT, NIGHTMARE_BOT, ASCENSION, HEXAKILL, KING_PORO, COUNTER_PICK)
			 */
			subType: string;
			/**
			 * Team ID associated with game. Team ID 100 is blue team. Team ID 200 is purple team.
			 */
			teamId: number;
		}
		
		/**
		 * Contains player information
		 */
		export class PlayerDto {
			/**
			 * Champion id associated with player.
			 */
			championId: number;
			/**
			 * Summoner id associated with player.
			 */
			summonerId: number;
			/**
			 * Team id associated with player.
			 */
			teamId: number;
		}
		
		/**
		 * Contains raw stat information
		 */
		export class RawStatsDto {
			/**
			 * 
			 */
			assists: number;
			/**
			 * Number of enemy inhibitors killed.
			 */
			barracksKilled: number;
			/**
			 * 
			 */
			championsKilled: number;
			/**
			 * 
			 */
			combatPlayerScore: number;
			/**
			 * 
			 */
			consumablesPurchased: number;
			/**
			 * 
			 */
			damageDealtPlayer: number;
			/**
			 * 
			 */
			doubleKills: number;
			/**
			 * 
			 */
			firstBlood: number;
			/**
			 * 
			 */
			gold: number;
			/**
			 * 
			 */
			goldEarned: number;
			/**
			 * 
			 */
			goldSpent: number;
			/**
			 * 
			 */
			item0: number;
			/**
			 * 
			 */
			item1: number;
			/**
			 * 
			 */
			item2: number;
			/**
			 * 
			 */
			item3: number;
			/**
			 * 
			 */
			item4: number;
			/**
			 * 
			 */
			item5: number;
			/**
			 * 
			 */
			item6: number;
			/**
			 * 
			 */
			itemsPurchased: number;
			/**
			 * 
			 */
			killingSprees: number;
			/**
			 * 
			 */
			largestCriticalStrike: number;
			/**
			 * 
			 */
			largestKillingSpree: number;
			/**
			 * 
			 */
			largestMultiKill: number;
			/**
			 * Number of tier 3 items built.
			 */
			legendaryItemsCreated: number;
			/**
			 * 
			 */
			level: number;
			/**
			 * 
			 */
			magicDamageDealtPlayer: number;
			/**
			 * 
			 */
			magicDamageDealtToChampions: number;
			/**
			 * 
			 */
			magicDamageTaken: number;
			/**
			 * 
			 */
			minionsDenied: number;
			/**
			 * 
			 */
			minionsKilled: number;
			/**
			 * 
			 */
			neutralMinionsKilled: number;
			/**
			 * 
			 */
			neutralMinionsKilledEnemyJungle: number;
			/**
			 * 
			 */
			neutralMinionsKilledYourJungle: number;
			/**
			 * Flag specifying if the summoner got the killing blow on the nexus.
			 */
			nexusKilled: boolean;
			/**
			 * 
			 */
			nodeCapture: number;
			/**
			 * 
			 */
			nodeCaptureAssist: number;
			/**
			 * 
			 */
			nodeNeutralize: number;
			/**
			 * 
			 */
			nodeNeutralizeAssist: number;
			/**
			 * 
			 */
			numDeaths: number;
			/**
			 * 
			 */
			numItemsBought: number;
			/**
			 * 
			 */
			objectivePlayerScore: number;
			/**
			 * 
			 */
			pentaKills: number;
			/**
			 * 
			 */
			physicalDamageDealtPlayer: number;
			/**
			 * 
			 */
			physicalDamageDealtToChampions: number;
			/**
			 * 
			 */
			physicalDamageTaken: number;
			/**
			 * 
			 */
			playerPosition: number;
			/**
			 * 
			 */
			playerRole: number;
			/**
			 * 
			 */
			quadraKills: number;
			/**
			 * 
			 */
			sightWardsBought: number;
			/**
			 * Number of times first champion spell was cast.
			 */
			spell1Cast: number;
			/**
			 * Number of times second champion spell was cast.
			 */
			spell2Cast: number;
			/**
			 * Number of times third champion spell was cast.
			 */
			spell3Cast: number;
			/**
			 * Number of times fourth champion spell was cast.
			 */
			spell4Cast: number;
			/**
			 * 
			 */
			summonSpell1Cast: number;
			/**
			 * 
			 */
			summonSpell2Cast: number;
			/**
			 * 
			 */
			superMonsterKilled: number;
			/**
			 * 
			 */
			team: number;
			/**
			 * 
			 */
			teamObjective: number;
			/**
			 * 
			 */
			timePlayed: number;
			/**
			 * 
			 */
			totalDamageDealt: number;
			/**
			 * 
			 */
			totalDamageDealtToChampions: number;
			/**
			 * 
			 */
			totalDamageTaken: number;
			/**
			 * 
			 */
			totalHeal: number;
			/**
			 * 
			 */
			totalPlayerScore: number;
			/**
			 * 
			 */
			totalScoreRank: number;
			/**
			 * 
			 */
			totalTimeCrowdControlDealt: number;
			/**
			 * 
			 */
			totalUnitsHealed: number;
			/**
			 * 
			 */
			tripleKills: number;
			/**
			 * 
			 */
			trueDamageDealtPlayer: number;
			/**
			 * 
			 */
			trueDamageDealtToChampions: number;
			/**
			 * 
			 */
			trueDamageTaken: number;
			/**
			 * 
			 */
			turretsKilled: number;
			/**
			 * 
			 */
			unrealKills: number;
			/**
			 * 
			 */
			victoryPointTotal: number;
			/**
			 * 
			 */
			visionWardsBought: number;
			/**
			 * 
			 */
			wardKilled: number;
			/**
			 * 
			 */
			wardPlaced: number;
			/**
			 * Flag specifying whether or not this game was won.
			 */
			win: boolean;
		}

	}
	
	
	/**
	 * league-v2.5
	 */
	export module league {
		/**
		 * Contains league information
		 */
		export class LeagueDto {
			/**
			 * The requested league entries.
			 */
			entries: LeagueEntryDto[];
			/**
			 * This name is an internal place-holder name only. Display and localization of names in the game client are handled client-side.
			 */
			name: string;
			/**
			 * Specifies the relevant participant that is a member of this league (i.e., a requested summoner ID, a
			 * requested team ID, or the ID of a team to which one of the requested summoners belongs). Only present when
			 * full league is requested so that participant's entry can be identified. Not present when individual
			 * entry is requested.
			 */
			participantId: string;
			/**
			 * The league's queue type. (Legal values: RANKED_SOLO_5x5, RANKED_TEAM_3x3, RANKED_TEAM_5x5)
			 */
			queue: string;
			/**
			 * The league's tier. (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE)
			 */
			tier: string;
		}
		
		/**
		 * Contains league participant information representing a summoner or team.
		 */
		export class LeagueEntryDto {
			/**
			 * The league division of the participant.
			 */
			division: string;
			/**
			 * Specifies if the participant is fresh blood.
			 */
			isFreshBlood: boolean;
			/**
			 * Specifies if the participant is on a hot streak.
			 */
			isHotStreak: boolean;
			/**
			 * Specifies if the participant is inactive.
			 */
			isInactive: boolean;
			/**
			 * Specifies if the participant is a veteran.
			 */
			isVeteran: boolean;
			/**
			 * The league points of the participant.
			 */
			leaguePoints: number;
			/**
			 * The number of losses for the participant.
			 */
			losses: number;
			/**
			 * Mini series data for the participant. Only present if the participant is currently in a mini series.
			 */
			miniSeries: MiniSeriesDto;
			/**
			 * The ID of the participant (i.e., summoner or team) represented by this entry.
			 */
			playerOrTeamId: string;
			/**
			 * The name of the the participant (i.e., summoner or team) represented by this entry.
			 */
			playerOrTeamName: string;
			/**
			 * The number of wins for the participant.
			 */
			wins: number;
		}
		
		/**
		 * Contains mini series information.
		 */
		export class MiniSeriesDto {
			/**
			 * Number of current losses in the mini series.
			 */
			losses: number;
			/**
			 * String showing the current, sequential mini series progress where 'W' represents a win, 'L' represents a loss, and 'N' represents a game that hasn't been played yet.
			 */
			progress: string;
			/**
			 * Number of wins required for promotion.
			 */
			target: number;
			/**
			 * Number of current wins in the mini series.
			 */
			wins: number;
		}
	}
	
	
	/**
	 * lol-static-data-v1.2
	 */
	export module lolStaticData {
		/**
		 * Contains champion list data.
		 */
		export class ChampionListDto {
			/**
			 * 
			 */
			data: { [s: string]: ChampionDto; };
			/**
			 * 
			 */
			format: string;
			/**
			 * 
			 */
			keys: { [s: string]: string; };
			/**
			 * 
			 */
			type: string;
			/**
			 * 
			 */
			version: string;
		}
		
		/**
		 * Contains champion data.
		 */
		export class ChampionDto {
			/**
			 * 
			 */
			allytips: string[];
			/**
			 * 
			 */
			blurb: string;
			/**
			 * 
			 */
			enemytips: string[];
			/**
			 * 
			 */
			id: number;
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			info: InfoDto;
			/**
			 * 
			 */
			key: string;
			/**
			 * 
			 */
			lore: string;
			/**
			 * 
			 */
			name: string;
			/**
			 * 
			 */
			partype: string;
			/**
			 * 
			 */
			passive: PassiveDto;
			/**
			 * 
			 */
			recommended: RecommendedDto[];
			/**
			 * 
			 */
			skins: SkinDto[];
			/**
			 * 
			 */
			spells: ChampionSpellDto[];
			/**
			 * 
			 */
			stats: StatsDto;
			/**
			 * 
			 */
			tags: string[];
			/**
			 * 
			 */
			title: string;
		}
		
		/**
		 * Contains champion spell data
		 */
		export class ChampionSpellDto {
			/**
			 * 
			 */
			altimages: ImageDto[];
			/**
			 * 
			 */
			cooldown: number[];
			/**
			 * 
			 */
			cooldownBurn: string;
			/**
			 * 
			 */
			cost: number[];
			/**
			 * 
			 */
			costBurn: string;
			/**
			 * 
			 */
			costType: string;
			/**
			 * 
			 */
			description: string;
			/**
			 * This field is a List of List of Double.
			 */
			effect: number[][];
			/**
			 * 
			 */
			effectBurn: string[];
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			key: string;
			/**
			 * 
			 */
			leveltip: LevelTipDto;
			/**
			 * 
			 */
			maxrank: number;
			/**
			 * 
			 */
			name: string;
			/**
			 * This field is either a List of Integer or the String 'self' for spells that target one's own champion.
			 */
			range: string|number[];
			/**
			 * 
			 */
			rangeBurn: string;
			/**
			 * 
			 */
			resource: string;
			/**
			 * 
			 */
			sanitizedDescription: string;
			/**
			 * 
			 */
			sanitizedTooltip: string;
			/**
			 * 
			 */
			tooltip: string;
			/**
			 * 
			 */
			vars: SpellVarsDto[];
		}
		
		/**
		 * Contains image data.
		 */
		export class ImageDto {
			/**
			 * 
			 */
			full: string;
			/**
			 * 
			 */
			group: string;
			/**
			 * 
			 */
			h: number;
			/**
			 * 
			 */
			sprite: string;
			/**
			 * 
			 */
			w: number;
			/**
			 * 
			 */
			x: number;
			/**
			 * 
			 */
			y: number;
		}
		
		/**
		 * Contains champion information
		 */
		export class InfoDto {
			/**
			 * 
			 */
			attack: number;
			/**
			 * 
			 */
			defense: number;
			/**
			 * 
			 */
			difficulty: number;
			/**
			 * 
			 */
			magic: number;
		}
		
		/**
		 * Contains champion passive data.
		 */
		export class PassiveDto {
			/**
			 * 
			 */
			description: string;
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			name: string;
			/**
			 * 
			 */
			sanitizedDescription: string;
		}
		
		/**
		 * Contains champion recommended data.
		 */
		export class RecommendedDto {
			/**
			 * 
			 */
			blocks: BlockDto[];
			/**
			 * 
			 */
			champion: string;
			/**
			 * 
			 */
			map: string;
			/**
			 * 
			 */
			mode: string;
			/**
			 * 
			 */
			priority: boolean;
			/**
			 * 
			 */
			title: string;
			/**
			 * 
			 */
			type: string;
		}
		
		/**
		 * Contains champion skin data.
		 */
		export class SkinDto {
			/**
			 * 
			 */
			id: number;
			/**
			 * 
			 */
			name: string;
			/**
			 * 
			 */
			num: number;
		}
		
		/**
		 * Contains champion stats data.
		 */
		export class StatsDto {
			/**
			 * 
			 */
			armor: number;
			/**
			 * 
			 */
			armorperlevel: number;
			/**
			 * 
			 */
			attackdamage: number;
			/**
			 * 
			 */
			attackdamageperlevel: number;
			/**
			 * 
			 */
			attackrange: number;
			/**
			 * 
			 */
			attackspeedoffset: number;
			/**
			 * 
			 */
			attackspeedperlevel: number;
			/**
			 * 
			 */
			crit: number;
			/**
			 * 
			 */
			critperlevel: number;
			/**
			 * 
			 */
			hp: number;
			/**
			 * 
			 */
			hpperlevel: number;
			/**
			 * 
			 */
			hpregen: number;
			/**
			 * 
			 */
			hpregenperlevel: number;
			/**
			 * 
			 */
			movespeed: number;
			/**
			 * 
			 */
			mp: number;
			/**
			 * 
			 */
			mpperlevel: number;
			/**
			 * 
			 */
			mpregen: number;
			/**
			 * 
			 */
			mpregenperlevel: number;
			/**
			 * 
			 */
			spellblock: number;
			/**
			 * 
			 */
			spellblockperlevel: number;
		}
		
		/**
		 * Contains champion level tip data.
		 */
		export class LevelTipDto {
			/**
			 * 
			 */
			effect: string[];
			/**
			 * 
			 */
			label: string[];
		}
		
		/**
		 * Contains spell vars data.
		 */
		export class SpellVarsDto {
			/**
			 * 
			 */
			coeff: number[];
			/**
			 * 
			 */
			dyn: string;
			/**
			 * 
			 */
			key: string;
			/**
			 * 
			 */
			link: string;
			/**
			 * 
			 */
			ranksWith: string;
		}
		
		/**
		 * Contains champion recommended block data
		 */
		export class BlockDto {
			/**
			 * 
			 */
			items: BlockItemDto[];
			/**
			 * 
			 */
			recMath: boolean;
			/**
			 * 
			 */
			type: string;
		}
		
		/**
		 * Contains champion recommended block item data.
		 */
		export class BlockItemDto {
			/**
			 * 
			 */
			count: number;
			/**
			 * 
			 */
			id: number;
		}
		
		/**
		 * Contains item list data.
		 */
		export class ItemListDto {
			/**
			 * 
			 */
			basic: BasicDataDto;
			/**
			 * 
			 */
			data: { [s: string]: ItemDto; };
			/**
			 * 
			 */
			groups: GroupDto[];
			/**
			 * 
			 */
			tree: ItemTreeDto[];
			/**
			 * 
			 */
			type: string;
			/**
			 * 
			 */
			version: string;
		}
		
		/**
		 * Contains basic data.
		 */
		export class BasicDataDto {
			/**
			 * 
			 */
			colloq: string;
			/**
			 * 
			 */
			consumeOnFull: boolean;
			/**
			 * 
			 */
			consumed: boolean;
			/**
			 * 
			 */
			depth: number;
			/**
			 * 
			 */
			description: string;
			/**
			 * 
			 */
			from: string[];
			/**
			 * Data Dragon includes the gold field for basic data, which is shared by both rune and item.
			 * However, only items have a gold field on them, representing their gold cost in the store.
			 * Since runes are not sold in the store, they have no gold cost.
			 */
			gold: GoldDto;
			/**
			 * 
			 */
			group: string;
			/**
			 * 
			 */
			hideFromAll: boolean;
			/**
			 * 
			 */
			id: number;
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			inStore: boolean;
			/**
			 * 
			 */
			into: string[];
			/**
			 * 
			 */
			maps: { [s: string]: boolean; };
			/**
			 * 
			 */
			name: string;
			/**
			 * 
			 */
			plaintext: string;
			/**
			 * 
			 */
			requiredChampion: string;
			/**
			 * 
			 */
			rune: MetaDataDto;
			/**
			 * 
			 */
			sanitizedDescription: string;
			/**
			 * 
			 */
			specialRecipe: number;
			/**
			 * 
			 */
			stacks: number;
			/**
			 * 
			 */
			stats: BasicDataStatsDto;
			/**
			 * 
			 */
			tags: string[];
		}
		
		/**
		 * Contains item group data.
		 */
		export class GroupDto {
			/**
			 * 
			 */
			MaxGroupOwnable: string;
			/**
			 * 
			 */
			key: string;
		}
		
		/**
		 * Contains item data.
		 */
		export class ItemDto {
			/**
			 * 
			 */
			colloq: string;
			/**
			 * 
			 */
			consumeOnFull: boolean;
			/**
			 * 
			 */
			consumed: boolean;
			/**
			 * 
			 */
			depth: number;
			/**
			 * 
			 */
			description: string;
			/**
			 * 
			 */
			effect: { [s: string]: string; };
			/**
			 * 
			 */
			from: string[];
			/**
			 * Data Dragon includes the gold field for basic data, which is shared by both rune and item.
			 * However, only items have a gold field on them, representing their gold cost in the store.
			 * Since runes are not sold in the store, they have no gold cost.
			 */
			gold: GoldDto;
			/**
			 * 
			 */
			group: string;
			/**
			 * 
			 */
			hideFromAll: boolean;
			/**
			 * 
			 */
			id: number;
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			inStore: boolean;
			/**
			 * 
			 */
			into: string[];
			/**
			 * 
			 */
			maps: { [s: string]: boolean; };
			/**
			 * 
			 */
			name: string;
			/**
			 * 
			 */
			plaintext: string;
			/**
			 * 
			 */
			requiredChampion: string;
			/**
			 * 
			 */
			rune: MetaDataDto;
			/**
			 * 
			 */
			sanitizedDescription: string;
			/**
			 * 
			 */
			specialRecipe: number;
			/**
			 * 
			 */
			stacks: number;
			/**
			 * 
			 */
			stats: BasicDataStatsDto;
			/**
			 * 
			 */
			tags: string[];
		}
		
		/**
		 * Contains item tree data.
		 */
		export class ItemTreeDto {
			/**
			 * 
			 */
			header: string;
			/**
			 * 
			 */
			tags: string[];
		}
		
		/**
		 * Contains basic data stats.
		 */
		export class BasicDataStatsDto {
			/**
			 * 
			 */
			FlatArmorMod: number;
			/**
			 * 
			 */
			FlatAttackSpeedMod: number;
			/**
			 * 
			 */
			FlatBlockMod: number;
			/**
			 * 
			 */
			FlatCritChanceMod: number;
			/**
			 * 
			 */
			FlatCritDamageMod: number;
			/**
			 * 
			 */
			FlatEXPBonus: number;
			/**
			 * 
			 */
			FlatEnergyPoolMod: number;
			/**
			 * 
			 */
			FlatEnergyRegenMod: number;
			/**
			 * 
			 */
			FlatHPPoolMod: number;
			/**
			 * 
			 */
			FlatHPRegenMod: number;
			/**
			 * 
			 */
			FlatMPPoolMod: number;
			/**
			 * 
			 */
			FlatMPRegenMod: number;
			/**
			 * 
			 */
			FlatMagicDamageMod: number;
			/**
			 * 
			 */
			FlatMovementSpeedMod: number;
			/**
			 * 
			 */
			FlatPhysicalDamageMod: number;
			/**
			 * 
			 */
			FlatSpellBlockMod: number;
			/**
			 * 
			 */
			PercentArmorMod: number;
			/**
			 * 
			 */
			PercentAttackSpeedMod: number;
			/**
			 * 
			 */
			PercentBlockMod: number;
			/**
			 * 
			 */
			PercentCritChanceMod: number;
			/**
			 * 
			 */
			PercentCritDamageMod: number;
			/**
			 * 
			 */
			PercentDodgeMod: number;
			/**
			 * 
			 */
			PercentEXPBonus: number;
			/**
			 * 
			 */
			PercentHPPoolMod: number;
			/**
			 * 
			 */
			PercentHPRegenMod: number;
			/**
			 * 
			 */
			PercentLifeStealMod: number;
			/**
			 * 
			 */
			PercentMPPoolMod: number;
			/**
			 * 
			 */
			PercentMPRegenMod: number;
			/**
			 * 
			 */
			PercentMagicDamageMod: number;
			/**
			 * 
			 */
			PercentMovementSpeedMod: number;
			/**
			 * 
			 */
			PercentPhysicalDamageMod: number;
			/**
			 * 
			 */
			PercentSpellBlockMod: number;
			/**
			 * 
			 */
			PercentSpellVampMod: number;
			/**
			 * 
			 */
			rFlatArmorModPerLevel: number;
			/**
			 * 
			 */
			rFlatArmorPenetrationMod: number;
			/**
			 * 
			 */
			rFlatArmorPenetrationModPerLevel: number;
			/**
			 * 
			 */
			rFlatCritChanceModPerLevel: number;
			/**
			 * 
			 */
			rFlatCritDamageModPerLevel: number;
			/**
			 * 
			 */
			rFlatDodgeMod: number;
			/**
			 * 
			 */
			rFlatDodgeModPerLevel: number;
			/**
			 * 
			 */
			rFlatEnergyModPerLevel: number;
			/**
			 * 
			 */
			rFlatEnergyRegenModPerLevel: number;
			/**
			 * 
			 */
			rFlatGoldPer10Mod: number;
			/**
			 * 
			 */
			rFlatHPModPerLevel: number;
			/**
			 * 
			 */
			rFlatHPRegenModPerLevel: number;
			/**
			 * 
			 */
			rFlatMPModPerLevel: number;
			/**
			 * 
			 */
			rFlatMPRegenModPerLevel: number;
			/**
			 * 
			 */
			rFlatMagicDamageModPerLevel: number;
			/**
			 * 
			 */
			rFlatMagicPenetrationMod: number;
			/**
			 * 
			 */
			rFlatMagicPenetrationModPerLevel: number;
			/**
			 * 
			 */
			rFlatMovementSpeedModPerLevel: number;
			/**
			 * 
			 */
			rFlatPhysicalDamageModPerLevel: number;
			/**
			 * 
			 */
			rFlatSpellBlockModPerLevel: number;
			/**
			 * 
			 */
			rFlatTimeDeadMod: number;
			/**
			 * 
			 */
			rFlatTimeDeadModPerLevel: number;
			/**
			 * 
			 */
			rPercentArmorPenetrationMod: number;
			/**
			 * 
			 */
			rPercentArmorPenetrationModPerLevel: number;
			/**
			 * 
			 */
			rPercentAttackSpeedModPerLevel: number;
			/**
			 * 
			 */
			rPercentCooldownMod: number;
			/**
			 * 
			 */
			rPercentCooldownModPerLevel: number;
			/**
			 * 
			 */
			rPercentMagicPenetrationMod: number;
			/**
			 * 
			 */
			rPercentMagicPenetrationModPerLevel: number;
			/**
			 * 
			 */
			rPercentMovementSpeedModPerLevel: number;
			/**
			 * 
			 */
			rPercentTimeDeadMod: number;
			/**
			 * 
			 */
			rPercentTimeDeadModPerLevel: number;
		}
		
		/**
		 * Contains item gold data.
		 */
		export class GoldDto {
			/**
			 * 
			 */
			base: number;
			/**
			 * 
			 */
			purchasable: boolean;
			/**
			 * 
			 */
			sell: number;
			/**
			 * 
			 */
			total: number;
		}
		
		/**
		 * Contains image meta data.
		 */
		export class MetaDataDto {
			/**
			 * 
			 */
			isRune: boolean;
			/**
			 * 
			 */
			tier: string;
			/**
			 * 
			 */
			type: string;
		}
		
		/**
		 * Contains language strings data
		 */
		export class LanguageStringsDto {
			/**
			 * 
			 */
			data: { [s: string]: string; };
			/**
			 * 
			 */
			type: string;
			/**
			 * 
			 */
			version: string;
		}
		
		/**
		 * Contains map data.
		 */
		export class MapDataDto {
			/**
			 * 
			 */
			data: { [s: string]: MapDetailsDto; }
			/**
			 * 
			 */
			type: string;
			/**
			 * 
			 */
			version: string;
		}
		
		/**
		 * Contains map details data.
		 */
		export class MapDetailsDto {
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			mapId: number;
			/**
			 * 
			 */
			mapName: string;
			/**
			 * 
			 */
			unpurchasableItemList: number[];
		}
		
		/**
		 * Contains mastery list data.
		 */
		export class MasteryListDto {
			/**
			 * 
			 */
			data: { [s: string]: MasteryDto; };
			/**
			 * 
			 */
			tree: MasteryTreeDto;
			/**
			 * 
			 */
			type: string;
			/**
			 * 
			 */
			version: string;
		}
		
		/**
		 * Contains mastery data.
		 */
		export class MasteryDto {
			/**
			 * 
			 */
			description: string[];
			/**
			 * 
			 */
			id: number;
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * Legal values: Defense, Offense, Utility
			 */
			masteryTree: string;
			/**
			 * 
			 */
			name: string;
			/**
			 * 
			 */
			prereq: string;
			/**
			 * 
			 */
			ranks: number;
			/**
			 * 
			 */
			sanitizedDescription: string[];
		}
		
		/**
		 * Contains mastery tree data.
		 */
		export class MasteryTreeDto {
			/**
			 * 
			 */
			Defense: MasteryTreeListDto[];
			/**
			 * 
			 */
			Offense: MasteryTreeListDto[];
			/**
			 * 
			 */
			Utility: MasteryTreeListDto[];
		}
		
		/**
		 * Contains mastery tree list data.
		 */
		export class MasteryTreeListDto {
			/**
			 * 
			 */
			masteryTreeItems: MasteryTreeItemDto[];
		}
		
		/**
		 * Contains mastery tree item data.
		 */
		export class MasteryTreeItemDto {
			/**
			 * 
			 */
			masteryId: number;
			/**
			 * 
			 */
			prereq: string;
		}
		
		/**
		 * Contains realm data.
		 */
		export class RealmDto {
			/**
			 * The base CDN url.
			 */
			cdn: string;
			/**
			 * Latest changed version of Dragon Magic's css file.
			 */
			css: string;
			/**
			 * Latest changed version of Dragon Magic.
			 */
			dd: string;
			/**
			 * Default language for this realm.
			 */
			l: string;
			/**
			 * Legacy script mode for IE6 or older.
			 */
			lg: string;
			/**
			 * Latest changed version for each data type listed.
			 */
			n: { [s: string]: string; };
			/**
			 * Special behavior number identifying the largest profileicon id that can be used under 500. Any profileicon that is requested between this number and 500 should be mapped to 0.
			 */
			profileiconmax: number;
			/**
			 * Additional api data drawn from other sources that may be related to data dragon functionality.
			 */
			store: string;
			/**
			 * Current version of this file for this realm.
			 */
			v: string;
		}
		
		/**
		 * Contains rune list data
		 */
		export class RuneListDto {
			/**
			 * 
			 */
			basic: BasicDataDto;
			/**
			 * 
			 */
			data: { [s: string]: RuneDto; };
			/**
			 * 
			 */
			type: string;
			/**
			 * 
			 */
			version: string;
		}
		
		/**
		 * Contains rune data.
		 */
		export class RuneDto {
			/**
			 * 
			 */
			colloq: string;
			/**
			 * 
			 */
			consumeOnFull: boolean;
			/**
			 * 
			 */
			consumed: boolean;
			/**
			 * 
			 */
			depth: number;
			/**
			 * 
			 */
			description: string;
			/**
			 * 
			 */
			from: string[];
			/**
			 * 
			 */
			group: string;
			/**
			 * 
			 */
			hideFromAll: boolean;
			/**
			 * 
			 */
			id: number;
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			inStore: boolean;
			/**
			 * 
			 */
			into: string[];
			/**
			 * 
			 */
			maps: { [s: string]: boolean; };
			/**
			 * 
			 */
			name: string;
			/**
			 * 
			 */
			plaintext: string;
			/**
			 * 
			 */
			requiredChampion: string;
			/**
			 * 
			 */
			rune: MetaDataDto;
			/**
			 * 
			 */
			sanitizedDescription: string;
			/**
			 * 
			 */
			specialRecipe: number;
			/**
			 * 
			 */
			stacks: number;
			/**
			 * 
			 */
			stats: BasicDataStatsDto;
			/**
			 * 
			 */
			tags: string[];
		}
		
		/**
		 * Contains summoner spell list data.
		 */
		export class SummonerSpellListDto {
			/**
			 * 
			 */
			data: { [s: string]: SummonerSpellDto; };
			/**
			 * 
			 */
			type: string;
			/**
			 * 
			 */
			version: string;
		}
		
		/**
		 * Contains summoner spell data.
		 */
		export class SummonerSpellDto {
			/**
			 * 
			 */
			cooldown: number[];
			/**
			 * 
			 */
			cooldownBurn: string;
			/**
			 * 
			 */
			cost: number[];
			/**
			 * 
			 */
			costBurn: string;
			/**
			 * 
			 */
			costType: string;
			/**
			 * 
			 */
			description: string;
			/**
			 * This field is a List of List of Double.
			 */
			effect: number[][];
			/**
			 * 
			 */
			effectBurn: string[];
			/**
			 * 
			 */
			id: number;
			/**
			 * 
			 */
			image: ImageDto;
			/**
			 * 
			 */
			key: string;
			/**
			 * 
			 */
			leveltip: LevelTipDto;
			/**
			 * 
			 */
			maxrank: number;
			/**
			 * 
			 */
			modes: string[];
			/**
			 * 
			 */
			name: string;
			/**
			 * This field is either a List of Integer or the String 'self' for spells that target one's own champion.
			 */
			range: number[]|string;
			/**
			 * 
			 */
			rangeBurn: string;
			/**
			 * 
			 */
			resource: string;
			/**
			 * 
			 */
			sanitizedDescription: string;
			/**
			 * 
			 */
			sanitizedTooltip: string;
			/**
			 * 
			 */
			summonerLevel: number;
			/**
			 * 
			 */
			tooltip: string;
			/**
			 * 
			 */
			vars: SpellVarsDto[];
		}
	}
}