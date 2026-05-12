export type NavItem = {
	label: string;
	href: string;
};

export type Stat = {
	value: string;
	label: string;
};

export type Card = {
	title: string;
	text: string;
	href: string;
	meta?: string;
};

export type WikiItem = {
	title: string;
	text: string;
	tag?: string;
	meta?: string[];
	steps?: string[];
	tips?: string[];
	note?: string;
};

export type WikiSection = {
	heading: string;
	body?: string;
	items: WikiItem[];
};

export type FAQ = {
	question: string;
	answer: string;
};

export type WikiPage = {
	slug: string;
	title: string;
	eyebrow: string;
	summary: string;
	badge: string;
	accent: string;
	quickTips: string[];
	sections: WikiSection[];
	faqs?: FAQ[];
	related: string[];
};

export const site = {
	name: 'Sledding Game Wiki',
	description:
		'Unofficial guide for Sledding Game covering controls, character unlocks, coin farming, secrets, achievements, mini-games, and Early Access updates.',
	referenceUrl: 'https://sleddinggame.wiki/',
	steamUrl: 'https://store.steampowered.com/app/3438850/Sledding_Game/',
};

export const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Guide', href: '/guide' },
	{ label: 'Characters', href: '/characters' },
	{ label: 'Earn Coins', href: '/money' },
	{ label: 'Mini-Games', href: '/minigames' },
	{ label: 'Secrets', href: '/secrets' },
	{ label: 'Achievements', href: '/achievements' },
	{ label: 'Changelog', href: '/changelog' },
];

export const heroStats: Stat[] = [
	{ value: '97%', label: 'Very Positive Steam reviews' },
	{ value: '37', label: 'Steam and Xbox achievements' },
	{ value: '8', label: 'listed mini-games and lodge activities' },
	{ value: '50', label: 'players supported per server' },
];

export const featureCards: Card[] = [
	{
		title: 'Start with the real beginner checklist',
		text: 'Learn steering, braking, flags, teleport, voice chat, emotes, the Lodge, chairlift, first coins, and the Fishing Rod priority.',
		href: '/guide',
		meta: 'Beginner guide',
	},
	{
		title: 'Farm coins with ranked methods',
		text: 'Compare Hot Chocolate, trick grinding, summit fishing, and Lodge mini-games by difficulty, location, and coin ceiling.',
		href: '/money',
		meta: 'Economy',
	},
	{
		title: 'Track unlocks and hidden content',
		text: 'Use the character list, secret commands, hidden items, and achievement categories as a practical checklist.',
		href: '/characters',
		meta: 'Completion',
	},
];

export const trailPlan = [
	{
		step: '01',
		title: 'Learn the Lodge',
		text: 'The reference guide treats the Lodge as the hub for sleds, cosmetics, mini-games, shop items, and early progression.',
	},
	{
		step: '02',
		title: 'Use flags',
		text: 'Place a flag with 1 and teleport with 2 so failed slope attempts become fast retries instead of long walks.',
	},
	{
		step: '03',
		title: 'Buy the rod',
		text: 'Earn the first 10,000 coins, buy the Fishing Rod, then use summit fishing for the strongest long-term coin route.',
	},
];

export const wikiPages: Record<string, WikiPage> = {
	guide: {
		slug: 'guide',
		title: 'Complete Guide',
		eyebrow: 'Controls, techniques, map, multiplayer',
		summary:
			'The downloaded guide page focuses on real controls, hidden chat commands, advanced sledding techniques, map landmarks, and multiplayer strategy.',
		badge: 'Guide',
		accent: '#5a7a4a',
		quickTips: [
			'Keyboard controls include W/S/A/D, 1 to place a flag, 2 to teleport, R to respawn, and Enter for chat.',
			'Hidden chat commands documented on the guide page include /secret, /sit, and /walk.',
			'Advanced play depends heavily on counter-steering, controlled drift, summit starts, and flag teleporting.',
		],
		sections: [
			{
				heading: 'Controls and chat commands',
				body: 'These controls come from the reference table and are rendered as concise checklist cards instead of copying the original table.',
				items: [
					{ title: 'Keyboard controls', tag: 'Keyboard', text: 'W or Up accelerates, S or Down brakes or reverses, A/D steer, R respawns, C changes camera, M or Tab opens the map, and Enter opens text chat.', meta: ['1 = Place flag', '2 = Teleport to flag'] },
					{ title: 'Gamepad controls', tag: 'Xbox', text: 'RT accelerates, LT brakes or reverses, left stick steers, right stick click switches camera, and Y respawns.', meta: ['Xbox Game Pass compatible', 'Full gamepad support'] },
					{ title: '/secret', tag: 'Command', text: 'Grants the Golden Tie item, which is relevant to the Fashion Star achievement.', note: 'The command is entered in chat after pressing Enter.' },
					{ title: '/sit and /walk', tag: 'Command', text: '/sit makes the character sit and unlocks Sitting Game; /walk activates walking mode and is tied to Walking Game.', note: 'The source notes more commands may exist as the community discovers them.' },
				],
			},
			{
				heading: 'Advanced sledding techniques',
				body: 'This is the practical mechanics section of the source guide.',
				items: [
					{ title: 'Counter-steering for speed', tag: 'Speed', text: 'Briefly steer opposite before a tight bend to load a controlled drift and keep speed through turns.', tips: ['The reference calls this the single biggest skill improvement for clean fast runs.'] },
					{ title: 'Brake plus accelerate drift', tag: 'Control', text: 'Holding accelerate and brake together creates a controlled power-slide rather than simply cancelling movement.', tips: ['Use it on steep camber turns where normal steering sends you wide.'] },
					{ title: 'Flag teleport grinding', tag: 'Efficiency', text: 'Place a flag at the base of a jump or grind route with 1, then press 2 after each attempt to repeat quickly.', tips: ['The reference says this can double or triple trick attempts per hour.'] },
					{ title: 'Summit start for Speed Demon', tag: 'Achievement', text: 'Start from the absolute peak, use the fastest sled, hold full acceleration, avoid turns, and follow the fall line for 100 m/s attempts.' },
					{ title: 'Yeti boundary exploitation', tag: 'Advanced', text: 'Leaving the map edge gets you kicked back by the Yeti. The guide notes experienced players use this as an unusual high-speed return shortcut.' },
					{ title: 'Proximity chat range', tag: 'Multiplayer', text: 'Voice chat is proximity-based, roughly 15-20 meters, making the Lodge loud and the open slopes comparatively quiet.' },
				],
			},
			{
				heading: 'Map areas and locations',
				body: 'These location cards mirror the map landmark list from the downloaded guide page.',
				items: [
					{ title: 'Mountain Summit', tag: 'Location', text: 'Highest point on the map, best for long runs, rare fish, secret tents, and Speed Demon attempts.' },
					{ title: 'The Lodge', tag: 'Hub', text: 'Main social hub with indoor mini-games, Gacha, cosmetics shop, Sled Customization Table, and Hot Chocolate bar.' },
					{ title: 'Shooting Range', tag: 'Unlocks', text: 'Located beside the Lodge; used for snowball target challenges linked to Fox, Toad, and the Apple collectible.' },
					{ title: 'Mid-Mountain Cave', tag: 'Secret', text: 'Left side of the main slope around mid-mountain; contains a campfire and the Hard Hat collectible.' },
					{ title: 'Stone Arch Bridge', tag: 'Secret', text: 'Lower mountain landmark near the Crown Statue; the Cockroach is hidden on a small ledge under the bridge.' },
					{ title: 'Long Left Chairlift', tag: 'Boundary', text: 'Leads toward the Error 404 map escape and Yeti encounter beyond its top terminal.' },
					{ title: 'Crown Statue Area', tag: 'Landmark', text: 'A crown-shaped landmark on the main run used to orient secret-item searches.' },
					{ title: 'Campfire Areas', tag: 'Activity', text: 'Support Marshmallow Roasting; the cave campfire is the most notable one.' },
					{ title: 'Secret Map Edge', tag: 'Secret', text: 'Beyond the long left chairlift terminal; used for Error 404 and Yeti boundary interactions.' },
				],
			},
			{
				heading: 'Multiplayer and social tips',
				body: 'The reference guide treats multiplayer as core to the game rather than an optional mode.',
				items: [
					{ title: 'Server structure', tag: '50 players', text: 'Sledding Game supports public and private servers with up to 50 players per server.' },
					{ title: 'Voice chat use', tag: 'Proximity', text: 'Use Lodge proximity chat for gathering groups; slope conversations are limited to nearby players.' },
					{ title: 'Co-op unlocks', tag: 'Unlocks', text: 'Fox, Toad, Bench Talk, and Curling are all easier or required with another player according to the guide.' },
					{ title: 'Community resources', tag: 'Links', text: 'The guide points players toward the official Discord, r/SleddingGame, and @sledding_game on X/Twitter for discoveries.' },
				],
			},
		],
		faqs: [
			{ question: 'How do I go faster in Sledding Game?', answer: 'Equip a fast sled, hold forward, avoid braking, and use counter-steering to keep momentum through bends.' },
			{ question: 'What is the flag system?', answer: 'Press 1 to place a flag and 2 to teleport back. The reference guide calls it the key time-saving mechanic for grinding jumps and tricks.' },
			{ question: 'Can I play solo?', answer: 'Yes. Most content is available solo, but some unlocks such as Fox and multiplayer achievements are easier or require friends.' },
		],
		related: ['coins', 'characters', 'achievements'],
	},
	characters: {
		slug: 'characters',
		title: 'Characters',
		eyebrow: 'Roster and unlock paths',
		summary:
			'The characters page covers default animals, four unlockable characters, and two secret characters documented in the downloaded reference HTML.',
		badge: '12+ Characters',
		accent: '#8b5e3c',
		quickTips: [
			'Default characters have identical gameplay stats and support full cosmetic customization.',
			'Toad, Fox, Dark Toad, and Seal are listed as unlockable characters.',
			'Tent Character and Fishing Secret Character are listed as secret unlocks.',
		],
		sections: [
			{
				heading: 'Default roster',
				body: 'The reference page states these animals are available immediately and can be customized with hats, clothing, color palettes, trinkets, and sled accessories.',
				items: [
					{
						title: 'Default animals',
						text: 'The listed starting roster includes Frog (Fwog), Penguin, Polar Bear, Panda, Arctic Fox, and additional base animals marked as more to be announced.',
						tag: 'Default',
						meta: ['Available immediately', 'Identical gameplay stats', 'Steam Cloud persistence'],
						tips: ['Change your base character from the main menu or Lodge customization station.'],
					},
					{
						title: 'Cosmetic customization',
						text: 'Character bodies can use the broad cosmetic pool: hats, clothing, color palettes, trinkets, and sled accessories.',
						tag: 'Cosmetics',
						meta: ['90+ cosmetics referenced on the site'],
					},
				],
			},
			{
				heading: 'Unlockable characters',
				body: 'These entries follow the downloaded character guide: each has a concrete target, location, or community-discovered trigger.',
				items: [
					{
						title: 'Toad',
						text: 'Hit three hidden targets near the Toad Statue south of the Lodge.',
						tag: 'Medium',
						steps: [
							'Head south from the main Lodge entrance toward the south chairlift station area.',
							'Find the small glasses-wearing Toad Statue.',
							'Hit three nearby targets: right low, left low, and behind the statue.',
							'Use snowballs and finish before the targets reset.',
						],
						tips: ['Bring a friend to mark target positions; the rear target needs an upward angle.'],
					},
					{
						title: 'Fox',
						text: 'Hit three hidden targets near the Fox Statue, including the difficult Lodge chimney target.',
						tag: 'Hard',
						steps: [
							'Find the Fox Statue inside the Lodge and read the nearby paintings for target clues.',
							'Hit the target on top of the east abandoned chairlift.',
							'Hit the target near the north chairlift top wheel mechanism.',
							'Hit the Lodge chimney target from near the roof-edge orange fence.',
						],
						tips: ['Expect many attempts on the chimney shot; the reference recommends a friend spotting the angle.'],
					},
					{
						title: 'Dark Toad',
						text: 'A separate Toad variant using another set of three targets after regular Toad is unlocked.',
						tag: 'Hard',
						steps: [
							'Unlock regular Toad first.',
							'Return to the south Lodge area and search for the second target set.',
							'Hit all three elevated targets in sequence.',
						],
						tips: ['The reference notes elevated target positions make solo attempts difficult.'],
					},
					{
						title: 'Seal',
						text: 'A medium-difficulty unlock triggered by a specific interaction or location event that the community was still mapping at Early Access launch.',
						tag: 'Medium',
						steps: [
							'Explore mid-mountain areas thoroughly.',
							'Check Discord or community notes for the latest confirmed position.',
						],
						note: 'The downloaded source explicitly marks the exact Seal location as community-mapped rather than fully settled.',
					},
				],
			},
			{
				heading: 'Secret characters',
				body: 'These are listed separately as secret character paths on the reference page.',
				items: [
					{
						title: 'Tent Character',
						text: 'Find and collect the tent item in the mountain summit area.',
						tag: 'Secret',
						steps: [
							'Ride the chairlift to the summit.',
							'Explore the summit plateau for camping tents.',
							'Interact with summit tents until the Tent item is collected.',
						],
						tips: ['The summit also contains fishing spots and other hidden items, so search broadly.'],
					},
					{
						title: 'Fishing Secret Character',
						text: 'A hidden character unlock can reportedly be caught like a fish at the summit fishing point.',
						tag: 'Secret',
						steps: [
							'Buy the 10,000 coin Fishing Rod from the Lodge shop.',
							'Travel to the highest fishing point near the summit.',
							'Cast repeatedly; the trigger is described as RNG-based.',
						],
						tips: ['This overlaps with Great White Shark and The BIG one achievement attempts.'],
					},
				],
			},
		],
		faqs: [
			{ question: 'How many characters are in Sledding Game?', answer: 'The reference page says Early Access launched with 12+ playable characters, including default animals and unlockable characters.' },
			{ question: 'What is the hardest character to unlock?', answer: 'Fox is presented as the hardest because of the Lodge chimney target. Dark Toad is also marked as a difficult co-op-friendly challenge.' },
		],
		related: ['secrets', 'coins', 'achievements'],
	},
	coins: {
		slug: 'money',
		title: 'Earn Coins Fast',
		eyebrow: 'Money guide and economy',
		summary:
			'The coin guide ranks the real money methods: Hot Chocolate, flip and trick grinding, summit fishing, and Lodge mini-game rotation, then recommends buying the Fishing Rod first.',
		badge: 'Coin Routes',
		accent: '#b8862f',
		quickTips: [
			'Hot Chocolate is the most accessible beginner farm and needs no equipment.',
			'Fishing has the best long-term ceiling but first requires a 10,000 coin Fishing Rod.',
			'The reference economy order says to buy the Fishing Rod before spending heavily on Gacha.',
		],
		sections: [
			{
				heading: 'Methods ranked',
				body: 'The reference page compares methods by hourly potential, difficulty, and location. These are summarized instead of copied verbatim.',
				items: [
					{
						title: 'Hot Chocolate Reaction Game',
						text: 'Beginner-friendly farm outside the Lodge bar entrance. Direction prompts pay around 1,000 to 2,000 coins per successful round.',
						tag: '60k-120k/hr',
						meta: ['Beginner', 'Outside the Lodge bar entrance', 'No equipment required'],
						steps: [
							'Walk to the Hot Chocolate station outside the main Lodge bar.',
							'Interact with the station to start the mini-game.',
							'Press the matching W/A/S/D or arrow-key direction before the timer runs out.',
							'Replay immediately; the reference notes no cooldown between rounds.',
						],
						tips: [
							'Use it as the first route toward the 10,000 coin Fishing Rod.',
							'It also progresses Drinking Game and Professional Drinker.',
						],
					},
					{
						title: 'Flip and Trick Grinding',
						text: 'Intermediate method on the main slope. Use jumps, clean landings, and flag teleporting to repeat high-air routes quickly.',
						tag: '60k-180k/hr',
						meta: ['Intermediate', 'Main slope with jump structures', 'Clean landing required'],
						steps: [
							'Take the chairlift to the summit for a long approach.',
							'Equip a fast sled such as Snowmobile or Speed Sled if available.',
							'Hit the mid-mountain jump at speed, perform flips or tricks, and land cleanly.',
							'Place a flag near the jump route so retries are fast.',
						],
						tips: [
							'The reference guide says a clean multi-flip run can pay very well.',
							'Wiping out can lose trick combo value, so consistency matters.',
						],
					},
					{
						title: 'Summit Fishing',
						text: 'Advanced long-term method. Buy the Fishing Rod, reach the summit fishing spots, and chase rare fish such as Great White Shark.',
						tag: '100k-300k/hr',
						meta: ['Advanced', 'Summit fishing spots', 'Fishing Rod: 10,000 coins'],
						steps: [
							'Earn 10,000 coins first, commonly via Hot Chocolate.',
							'Buy the Fishing Rod from the Lodge shop.',
							'Ride to the mountain summit and find the highest fishing point.',
							'Cast, wait for the bite indicator, reel in, and repeat for rare fish.',
						],
						tips: [
							'Summit fishing has the best rare fish value according to the reference page.',
							'Fishing also overlaps with Fishing Character and The BIG one goals.',
						],
					},
					{
						title: 'Mini-Game Rotation',
						text: 'Lower ceiling but low stress: rotate Darts, Curling, Cornhole, and other Lodge games for income and achievements.',
						tag: '20k-40k/hr',
						meta: ['Beginner', 'Inside the Lodge', 'Relaxed income'],
						steps: [
							'Enter the Lodge and find Darts, Curling, Cornhole, or other stations.',
							'Complete games for rewards and rotate to avoid repetition.',
							'Use social games when friends are online.',
						],
						tips: ['Curling needs multiplayer, while Hot Chocolate is easy to repeat solo.'],
					},
				],
			},
			{
				heading: 'Economy order',
				body: 'The source page gives a clear progression order for avoiding wasted early coins.',
				items: [
					{
						title: 'First 10,000 coins',
						text: 'Use Hot Chocolate or other simple activities until you can afford the Fishing Rod.',
						tag: 'Step 1',
						meta: ['Reference estimate: roughly 1-2 hours via Hot Chocolate'],
					},
					{
						title: 'Buy Fishing Rod',
						text: 'The rod opens the highest-ceiling farm, fishing achievements, and a fishing-related secret character path.',
						tag: 'Step 2',
						meta: ['Cost: 10,000 coins', 'Best long-term ROI'],
					},
					{
						title: 'Build a reserve',
						text: 'Use summit fishing and trick routes to create spare coins before optional cosmetic spending.',
						tag: 'Step 3',
						meta: ['Recommended before Gacha spending'],
					},
					{
						title: 'Use Gacha later',
						text: 'The page warns that Gacha is random. Buy it after the rod, and sell duplicate cosmetics from customization when possible.',
						tag: 'Warning',
						note: 'The downloaded page specifically warns against spending all early coins on random Gacha output.',
					},
				],
			},
			{
				heading: 'Best purchases',
				body: 'The guide names the Fishing Rod as the best first buy, then points toward faster sleds, cosmetics, sparkle items, and trinkets.',
				items: [
					{
						title: 'Fishing Rod',
						text: 'Costs 10,000 coins and has the best return because it opens fishing income and collection goals.',
						tag: 'Buy first',
						meta: ['Cost: 10,000 coins', 'Unlocks summit farming', 'Related: The BIG one'],
					},
					{
						title: 'Speed sleds and snowmobile',
						text: 'Faster sleds help with long descents, trick grinding, and speed-related achievements.',
						tag: 'High priority',
						meta: ['Cost varies', 'Related: Speed Demon'],
					},
					{
						title: 'Cosmetics and sparkle items',
						text: 'Useful for style achievements and collection goals, but they should not delay the Fishing Rod.',
						tag: 'Optional',
						meta: ['Shop or Gacha', 'Related: Stylish, This One Sparkles'],
					},
				],
			},
		],
		faqs: [
			{
				question: 'What is the fastest way to earn coins in Sledding Game?',
				answer:
					'The downloaded page identifies Hot Chocolate as the fastest beginner method because it pays 1,000-2,000 coins per round with no equipment. Long-term, summit fishing has the highest ceiling once you own the Fishing Rod.',
			},
			{
				question: 'Should I use the Gacha machine early?',
				answer:
					'No. The reference page recommends buying the 10,000 coin Fishing Rod first, then using Gacha later when you have spare coins. Duplicate cosmetics can be sold back for a small refund.',
			},
		],
		related: ['guide', 'minigames', 'achievements'],
	},
	minigames: {
		slug: 'minigames',
		title: 'Mini-Games',
		eyebrow: 'Lodge games and activities',
		summary:
			'The mini-games page lists Fishing, Darts, Curling, Cornhole, Marshmallow Roasting, Hot Chocolate, Snowball Fight, and Snowman Building.',
		badge: '8 Activities',
		accent: '#6e7fb8',
		quickTips: [
			'Hot Chocolate is both a mini-game and one of the best beginner coin farms.',
			'Curling, Cornhole, Darts, and other Lodge activities overlap with achievements.',
			'Fishing requires the rod and becomes a major economy and collection activity.',
		],
		sections: [
			{
				heading: 'Money and collection games',
				body: 'These activities are important because they affect coins, unlocks, and achievements.',
				items: [
					{
						title: 'Hot Chocolate',
						text: 'A reaction game outside the Lodge bar entrance where directional inputs pay steady coins and support drink-related achievements.',
						tag: 'Coins',
						meta: ['Outside Lodge bar entrance', 'Solo', '1,000-2,000 coins per round'],
						steps: [
							'Stand at the Hot Chocolate station outside the Lodge bar.',
							'Interact to start and watch the directional arrows.',
							'Press matching arrow keys or W/A/S/D in time.',
							'Clear the sequence and replay immediately.',
						],
						tips: ['Arrow keys may feel more natural than WASD.', 'This is the recommended farm before the Fishing Rod.'],
					},
					{
						title: 'Fishing',
						text: 'Requires the Fishing Rod. Summit fishing is called out elsewhere as one of the strongest long-term money methods.',
						tag: 'Collection',
						meta: ['Multiple mountain spots', 'Solo or co-op', '500-30,000+ coins per catch'],
						steps: [
							'Buy the Fishing Rod for 10,000 coins.',
							'Find a blue-shimmer fishing location.',
							'Cast, wait for the bite indicator, then interact again to reel in.',
							'Check the catch value; rare summit fish are worth far more.',
						],
						tips: ['The summit spot has the best rare-fish odds.', 'Fishing can also trigger a secret character path.'],
					},
					{
						title: 'Marshmallow Roasting',
						text: 'A slower social activity tied to the Lodge campfire vibe and casual progression.',
						tag: 'Social',
						meta: ['Campfire areas', 'Solo or group', 'No direct coin focus'],
						steps: [
							'Find a campfire, including the one in the mid-mountain cave.',
							'Interact to begin roasting.',
							'Hold the interaction carefully so the marshmallow does not burn.',
						],
						tips: ['The cave campfire is also near the Hard Hat collectible.'],
					},
				],
			},
			{
				heading: 'Competitive Lodge games',
				body: 'The reference page treats these as short side games that also support achievements and party play.',
				items: [
					{
						title: 'Darts',
						text: 'A Lodge target game that works well as early practice and a break from slope attempts.',
						tag: 'Aim',
						meta: ['Inside the Lodge', 'Solo or versus players', 'Coin reward for high scores'],
						steps: ['Find the Darts board.', 'Interact to join.', 'Aim and throw for high score or bullseye value.'],
						tips: ['Darts practice helps with snowball target unlocks for Fox and Toad.'],
					},
					{
						title: 'Curling',
						text: 'A social, multiplayer-friendly activity; the money page also says it is useful in mini-game rotation.',
						tag: 'Co-op',
						meta: ['Inside the Lodge', '2+ players required', 'Winner reward'],
						steps: [
							'Find the Curling lane inside the Lodge.',
							'Invite or wait for another player.',
							'Slide stones toward the target and try to finish closest to center.',
						],
						tips: ['The reference guide recommends it for friend groups and small tournaments.'],
					},
					{
						title: 'Cornhole',
						text: 'Another Lodge activity used for relaxed rewards and achievement cleanup.',
						tag: 'Party',
						meta: ['Lodge outdoor area', 'Solo or versus players', 'Coin reward for wins'],
						steps: [
							'Find the Cornhole boards near the Lodge outdoor area.',
							'Toss bags onto the board or into the hole.',
							'First to the target score wins.',
						],
						tips: ['Medium-power underhand throws are called out as a reliable approach.'],
					},
				],
			},
			{
				heading: 'Snow activities',
				body: 'The page also lists outdoor social mini-games that fit the cozy multiplayer sandbox angle.',
				items: [
					{
						title: 'Snowball Fight',
						text: 'A lightweight multiplayer activity for social sessions and lobby variety.',
						tag: 'Outdoor',
						meta: ['Outdoor slopes and Lodge area', '2+ players', 'Related: Choosing Violence'],
						steps: [
							'Equip snowballs from the toolbar.',
							'Aim slightly ahead of moving targets.',
							'Account for the snowball arc, especially at range.',
						],
						tips: ['Snowball physics practice also helps character unlock target challenges.'],
					},
					{
						title: 'Snowman Building',
						text: 'A cozy activity that reinforces exploration and hangout play rather than pure racing.',
						tag: 'Creative',
						meta: ['Outdoor snow areas near Lodge', 'Solo or co-op', 'Related: Do you want to'],
						steps: [
							'Find the snowman-designated area or snow pile.',
							'Roll small, medium, and large snowballs.',
							'Stack the three sizes to complete the snowman.',
						],
						tips: ['Build near friends for proximity chat reactions.'],
					},
					{
						title: 'Achievement overlap',
						text: 'Several mini-games contribute to named achievements, so rotate activities when working toward 100%.',
						tag: 'Tracker',
					},
				],
			},
		],
		related: ['coins', 'achievements', 'guide'],
	},
	secrets: {
		slug: 'secrets',
		title: 'Secrets & Hidden Items',
		eyebrow: 'Collectibles, commands, hidden areas',
		summary:
			'The secrets page documents hidden wearable collectibles, three confirmed chat commands, the Error 404 map edge, and practical hunting tips.',
		badge: 'Secrets',
		accent: '#2f8f66',
		quickTips: [
			'Known hidden commands are /secret, /sit, and /walk.',
			'Collectibles include Hard Hat, Apple, Flower Pot, Cockroach, and Golden Tie from /secret.',
			'The Error 404 zone is beyond the long left-side chairlift terminal, where the Yeti kicks you back.',
		],
		sections: [
			{
				heading: 'Hidden collectible items',
				body: 'The downloaded secrets page lists four physical hidden items plus the Golden Tie command reward, all relevant to Fashion Star.',
				items: [
					{ title: 'Hard Hat', tag: 'Collectible', text: 'Located in the mid-mountain cave on the left side of the main slope, near the campfire.', meta: ['Location: mid-mountain cave'] },
					{ title: 'Apple', tag: 'Collectible', text: 'Found at the Shooting Range near the Lodge, resting on one of the targets.', meta: ['Location: shooting range'] },
					{ title: 'Flower Pot', tag: 'Collectible', text: 'Hidden behind the cosmetics or beauty shop counter inside the Lodge, on the staff-side back area.', meta: ['Location: Lodge cosmetics shop'] },
					{ title: 'Cockroach', tag: 'Collectible', text: 'Under the stone arch bridge near the Crown Statue, on a small ledge or step on the left side.', meta: ['Location: stone arch bridge'] },
					{ title: 'Golden Tie', tag: 'Command reward', text: 'Granted by typing /secret in the in-game chat.', meta: ['Related: Fashion Star'] },
				],
			},
			{
				heading: 'Hidden chat commands',
				body: 'Only these three commands are marked publicly confirmed in the downloaded source as of May 2026.',
				items: [
					{ title: '/secret', tag: 'Command', text: 'Adds the Golden Tie item to your inventory.', meta: ['Confirmed command'] },
					{ title: '/sit', tag: 'Command', text: 'Makes your character sit on the ground and unlocks Sitting Game.', meta: ['Related: Sitting Game'] },
					{ title: '/walk', tag: 'Command', text: 'Activates walking mode without a sled and unlocks Walking Game.', meta: ['Related: Walking Game'] },
					{ title: 'Unconfirmed commands', tag: 'Note', text: 'The page says additional commands may exist and are being investigated by the community.', note: 'Avoid publishing new commands as fact until they are verified.' },
				],
			},
			{
				heading: 'Hidden map area',
				body: 'The reference page identifies the known hidden area as the Map Edge / Error 404 zone.',
				items: [
					{
						title: 'Map Edge / Error 404 Zone',
						text: 'Located on the left side of the map beyond the long chairlift terminal.',
						tag: 'Hidden area',
						steps: [
							'Take the long left-side chairlift, not the main central chairlift.',
							'Ride all the way to the top terminal.',
							'Exit and keep running left past the terminal.',
							'Cross the invisible boundary until the Yeti appears and kicks you back.',
						],
						note: 'This is tied to the Error 404 achievement.',
					},
				],
			},
			{
				heading: 'Secret hunting tips',
				body: 'These are the practical discovery tips from the downloaded page, condensed into checklist cards.',
				items: [
					{ title: 'Explore on foot', tag: 'Tip', text: 'Most collectibles are easy to miss while sledding quickly, especially in caves and under bridges.' },
					{ title: 'Check interact prompts', tag: 'Tip', text: 'Unusual objects may glow subtly or reveal an interact prompt when approached.' },
					{ title: 'Search with friends', tag: 'Tip', text: 'Split up and share findings in proximity chat to cover more area quickly.' },
					{ title: 'Revisit after updates', tag: 'Tip', text: 'The source notes Early Access updates may add more secrets later.' },
				],
			},
		],
		faqs: [
			{ question: 'What are all confirmed chat commands?', answer: 'The downloaded page confirms /secret for Golden Tie, /sit for sitting, and /walk for walking mode.' },
			{ question: 'What are the known secret items?', answer: 'Known items are Hard Hat, Apple, Flower Pot, Cockroach, and Golden Tie. Golden Tie comes from /secret rather than a physical pickup.' },
		],
		related: ['characters', 'achievements', 'guide'],
	},
	achievements: {
		slug: 'achievements',
		title: 'Achievements',
		eyebrow: '37 achievement checklist',
		summary:
			'The achievements page covers all 37 Steam achievements and 37 Xbox achievements, totaling 1,000 Gamerscore, with categories for story, exploration, mini-games, secrets, and grinding.',
		badge: '37 Goals',
		accent: '#b95754',
		quickTips: [
			'Steam has 37 achievements, and Xbox has the same count with 1,000 Gamerscore.',
			'The page highlights Sled Master as the 100% completion achievement.',
			'Hot Chocolate, fishing, sled speed, secrets, and mini-games all have achievement overlap.',
		],
		sections: [
			{
				heading: 'Complete achievement list',
				body: 'Extracted from the downloaded reference HTML: each card keeps the achievement name, difficulty, public unlock rate, description, and unlock guidance in a compact checklist.',
				items: [
					{ title: 'Sledding Game', tag: 'Easy', meta: ['79.4% of players'], text: 'Sled in the game.', note: 'Hop on any sled and slide downhill. This is usually the first achievement players get.' },
					{ title: 'Taking Your Time', tag: 'Easy', meta: ['72.4% of players'], text: 'Ride the chairlift.', note: 'Interact with a chairlift station and ride from the base Lodge toward the summit.' },
					{ title: 'Fashion Star', tag: 'Easy', meta: ['65.3% of players'], text: 'Equip an item not sold in the shop.', note: 'Use a secret collectible such as Hard Hat, Apple, or Golden Tie, then equip it from inventory.' },
					{ title: 'Stylish', tag: 'Easy', meta: ['61.3% of players'], text: 'Equip a clothing item.', note: 'Buy clothing from the Lodge shop or Gacha machine, then equip it in customization.' },
					{ title: 'Error 404', tag: 'Medium / Secret', meta: ['37.9% of players'], text: 'Escape the map somehow.', note: 'Take the long left-side chairlift, run left beyond its terminal, and cross the boundary until the Yeti kicks you back.' },
					{ title: 'Back Where I Started', tag: 'Easy', meta: ['26.8% of players'], text: 'Return to spawn point.', note: 'Place a flag with 1 and teleport with 2, or use the respawn menu option.' },
					{ title: 'My Sled is Cooler', tag: 'Easy', meta: ['23.2% of players'], text: 'Customize your sled.', note: 'Use the Sled Customization Table in the Lodge and apply any sticker, color, or trinket.' },
					{ title: "Don't Wander Off", tag: 'Easy', meta: ['21.9% of players'], text: 'Get kicked by the Yeti.', note: 'Leave the playable map area deliberately; this commonly happens near the long left chairlift edge.' },
					{ title: 'Fishing Game', tag: 'Medium', meta: ['21.7% of players'], text: 'Catch a fish.', note: 'Buy the 10,000 coin Fishing Rod, visit a fishing spot, cast, wait for a bite, and reel in.' },
					{ title: 'Choosing Violence', tag: 'Easy', meta: ['21.5% of players'], text: 'Hit someone with a snowball.', note: 'Equip snowballs and throw at another player, ideally near the Lodge where players gather.' },
					{ title: 'Chicken Dinner', tag: 'Medium', meta: ['16.0% of players'], text: 'Win a mini-game.', note: 'Win any Lodge mini-game such as Darts, Curling, Cornhole, or Hot Chocolate.' },
					{ title: 'Soarin Flyin', tag: 'Medium', meta: ['15.7% of players'], text: 'Get big air on a jump.', note: 'Build speed on the main slope and hit a large wooden jump cleanly.' },
					{ title: 'This One Sparkles', tag: 'Medium', meta: ['15.1% of players'], text: 'Equip a sparkle item.', note: 'Find or buy an item tagged as a sparkle cosmetic, usually through Gacha.' },
					{ title: 'Do you want to', tag: 'Medium', meta: ['13.7% of players'], text: 'Build a snowman.', note: 'Use the snowman building area, roll small/medium/large snowballs, and stack them.' },
					{ title: 'Speed Demon', tag: 'Medium', meta: ['13.7% of players'], text: 'Go over 100 m/s in a sled.', note: 'Use a fast sled, start from the summit, hold full acceleration, avoid braking, and take a straight fall-line route.' },
					{ title: 'New Look', tag: 'Easy', meta: ['11.3% of players'], text: 'Change your character.', note: 'Unlock any alternate character, then switch in the Character Selection screen.' },
					{ title: 'Just the Two of Us', tag: 'Easy', meta: ['10.8% of players'], text: 'Sled with another player.', note: 'Join a public server and sled while another player is also on the slope.' },
					{ title: 'Just a Bump', tag: 'Easy', meta: ['9.5% of players'], text: 'Collide with another player.', note: 'Aim at a friend or player near the bottom of a run and bump them.' },
					{ title: 'Standing Game', tag: 'Easy / Secret', meta: ['7.2% of players'], text: 'Stand still for a while.', note: 'Exit the sled and idle on flat ground such as the Lodge plateau for about 30-60 seconds.' },
					{ title: 'Prepare for Takeoff', tag: 'Medium', meta: ['6.6% of players'], text: 'Launch from the big jump.', note: 'Find the biggest jump near mid-mountain, enter at maximum speed, and launch from the center.' },
					{ title: 'Fireball', tag: 'Medium', meta: ['5.6% of players'], text: 'Hit someone while going very fast.', note: 'Reach roughly high speed and ram into another player; speed trinkets help.' },
					{ title: 'Ticket Master', tag: 'Grind', meta: ['3.5% of players'], text: 'Ride the chairlift many times.', note: 'Ride lifts repeatedly; the reference notes community estimates around 15-25 rides.' },
					{ title: 'Sitting Game', tag: 'Easy / Secret', meta: ['1.4% of players'], text: 'Sit down.', note: 'Type /sit in chat to make your character sit.' },
					{ title: 'Walking Game', tag: 'Medium / Secret', meta: ['0.8% of players'], text: 'Walk without a sled.', note: 'Dismount and walk a meaningful distance; the /walk command may also trigger walking mode.' },
					{ title: 'Drive By', tag: 'Medium', meta: ['0.6% of players'], text: 'Hit someone from a sled.', note: 'Collide with another player while actively sledding at moderate or high speed.' },
					{ title: 'The BIG one', tag: 'Hard', meta: ['0.4% of players'], text: 'Catch the biggest fish.', note: 'Fish repeatedly at the highest summit fishing spot for the best Great White Shark chance.' },
					{ title: 'Bench Talk', tag: 'Medium / Secret', meta: ['0.4% of players'], text: 'Sit on a bench with another player.', note: 'Two players must sit on the same Lodge-area bench simultaneously.' },
					{ title: 'Sharp Shooter', tag: 'Hard', meta: ['0.3% of players'], text: 'Hit targets with precision at the shooting range.', note: 'Complete the Shooting Range target challenges with enough accuracy.' },
					{ title: 'Cross Map', tag: 'Hard', meta: ['0.3% of players'], text: 'Travel across the entire map.', note: 'Move from one far edge of the map to the other in one continuous run without teleporting or respawning.' },
					{ title: 'Fisherman', tag: 'Grind', meta: ['0.1% of players'], text: 'Catch many fish.', note: 'Catch fish across multiple sessions; the reference mentions community estimates around 50-100 total fish.' },
					{ title: 'Sniper Training', tag: 'Hard', meta: ['0.1% of players'], text: 'Complete all shooting range challenges.', note: 'Finish every increasing-difficulty target challenge at the Shooting Range.' },
					{ title: 'Training Arc', tag: 'Grind', meta: ['0.1% of players'], text: 'Grind a specific skill to maximum.', note: 'Focus many hours on one activity such as fishing, tricks, or shooting until its counter is maxed.' },
					{ title: 'Barista', tag: 'Hard / Secret', meta: ['0.1% of players'], text: 'Make hot chocolate.', note: 'Interact with the hot chocolate bar from the staff/server side of the counter, not just as a customer.' },
					{ title: 'Drinking Game', tag: 'Medium', meta: ['0.1% of players'], text: 'Play the hot chocolate reaction game.', note: 'Start the direction-based Hot Chocolate mini-game outside the Lodge bar and complete a round.' },
					{ title: 'Falling Game', tag: 'Hard / Secret', meta: ['0.1% of players'], text: 'Fall a great distance.', note: 'Walk off a very high summit cliff and fall without using the main slope route.' },
					{ title: 'Professional Drinker', tag: 'Grind', meta: ['0.1% of players'], text: 'Complete the hot chocolate game many times.', note: 'Replay Hot Chocolate repeatedly; the reference cites community estimates around 10-20 rounds.' },
					{ title: 'Sled Master', tag: 'Legendary', meta: ['0.1% of players'], text: 'Master all sledding mechanics.', note: 'The ultimate completion goal: speed, big jumps, high-speed collision, cross-map travel, and repeated trick mastery all appear to contribute.' },
				],
			},
			{
				heading: 'Achievement categories',
				body: 'The reference guide organizes completion by type, which makes checklist work easier.',
				items: [
					{
						title: 'Early progression',
						text: 'These unlock by learning core systems, playing mini-games, buying key items, and using the Lodge.',
						tag: 'Starter',
					},
					{
						title: 'Mini-game achievements',
						text: 'Activities such as Hot Chocolate, Darts, Curling, Cornhole, and fishing all support named achievement goals.',
						tag: 'Activities',
					},
					{
						title: 'Exploration and secrets',
						text: 'Hidden areas, badges, secret characters, and special commands belong in the exploration bucket.',
						tag: 'Secrets',
					},
					{
						title: 'Grind and mastery',
						text: 'Speed, trick, fish, cosmetic, and completion goals make up the longer-term checklist.',
						tag: 'Long-term',
					},
				],
			},
			{
				heading: 'Named goals to track',
				body: 'The coin and secret pages cross-reference several achievement names, so they should appear in the tracker.',
				items: [
					{
						title: 'Drinking Game and Professional Drinker',
						text: 'Linked to the Hot Chocolate activity, making this one efficient to combine with beginner coin farming.',
						tag: 'Hot Chocolate',
					},
					{
						title: 'Fishing Game, Fisherman, and The BIG one',
						text: 'Fishing achievements become practical after buying the Fishing Rod and visiting summit spots.',
						tag: 'Fishing',
					},
					{
						title: 'Soarin Flyin, Speed Demon, and Prepare for Takeoff',
						text: 'These are tied to fast routes, jumps, tricks, and clean aerial control.',
						tag: 'Slope',
					},
					{
						title: 'Chicken Dinner, Stylish, and This One Sparkles',
						text: 'These connect to Lodge games, cosmetics, and sparkle items from shop or Gacha routes.',
						tag: 'Collection',
					},
				],
			},
			{
				heading: 'Completion plan',
				body: 'The reference page positions Sled Master as the full-completion target.',
				items: [
					{
						title: 'Pass one: natural play',
						text: 'Learn controls, play Lodge activities, use flags, earn coins, and buy the Fishing Rod.',
						tag: 'Phase 1',
					},
					{
						title: 'Pass two: route goals',
						text: 'Clean up speed, jump, trick, and chairlift or summit-related goals after your handling improves.',
						tag: 'Phase 2',
					},
					{
						title: 'Pass three: secrets',
						text: 'Finish secret commands, hidden map area, character badges, fishing collection, and rare unlocks.',
						tag: 'Phase 3',
					},
				],
			},
		],
		faqs: [
			{
				question: 'How many achievements does Sledding Game have?',
				answer:
					'The reference page lists 37 Steam achievements and the same 37 Xbox achievements worth 1,000 Gamerscore total.',
			},
			{
				question: 'What is the rarest achievement?',
				answer:
					'Several achievements are shown at about 0.1% unlock rate, including Sled Master, Barista, Fisherman, Professional Drinker, Training Arc, Sniper Training, and Falling Game.',
			},
		],
		related: ['secrets', 'coins', 'minigames'],
	},
	changelog: {
		slug: 'changelog',
		title: 'Changelog & Roadmap',
		eyebrow: 'Early Access release history',
		summary:
			'The changelog page records the Early Access launch on April 30, 2026, the demo launch on September 25, 2025, roadmap themes, and official community channels.',
		badge: 'EA 1.0',
		accent: '#5e95d8',
		quickTips: [
			'Early Access 1.0 launched on April 30, 2026.',
			'The demo launched on September 25, 2025 and drove 80,000 Steam wishlists in the first week.',
			'The roadmap mentions more cosmetics, mini-games, hangout activities, characters, graphics improvements, and mechanics based on feedback.',
		],
		sections: [
			{
				heading: 'Early Access launch',
				body: 'The changelog lists the main content shipped with the Early Access version.',
				items: [
					{
						title: 'Content at launch',
						text: 'Launch notes include 12+ characters, 90+ cosmetics, 20+ sled types, 70+ trinkets, and 20 catchable fish species.',
						tag: 'Apr 30 2026',
					},
					{
						title: 'Activities and achievements',
						text: 'The page lists 8 mini-games and 37 Steam achievements, with 37 Xbox achievements totaling 1,000 Gamerscore.',
						tag: 'EA 1.0',
					},
					{
						title: 'Platform and online features',
						text: 'It notes Xbox Game Pass day-one availability, Steam Cloud, and proximity voice chat supporting up to 50 players per server.',
						tag: 'Platforms',
					},
				],
			},
			{
				heading: 'Demo history',
				body: 'The demo section explains why the game had a viral lead-up before Early Access.',
				items: [
					{
						title: 'Demo launch',
						text: 'Demo v1.0 launched on September 25, 2025 with core sledding, the base Lodge, main slope, voice chat, and initial character content.',
						tag: 'Sep 25 2025',
					},
					{
						title: 'Wishlist surge',
						text: 'The changelog says the demo generated 80,000 Steam wishlists in its first week, far above the developer expectation.',
						tag: 'Community',
					},
					{
						title: 'Demo unlocks',
						text: 'The demo included early character unlock challenges such as Fox and Toad, plus Hot Chocolate activity access.',
						tag: 'Demo',
					},
				],
			},
			{
				heading: 'Roadmap and channels',
				body: 'The roadmap is broad, but the page gives enough detail for a useful update section.',
				items: [
					{
						title: 'Full release target',
						text: 'The developer is described as aiming for full release within 12 months of Early Access, roughly by April 2027.',
						tag: 'Roadmap',
					},
					{
						title: 'Planned content themes',
						text: 'More cosmetics, mini-games, hangout activities, unlockable characters, graphics improvements, and feedback-driven mechanics.',
						tag: 'Future',
					},
					{
						title: 'Official channels',
						text: 'The page links Discord, Reddit, X/Twitter, YouTube, and the Steam page as places to follow updates.',
						tag: 'Community',
					},
				],
			},
		],
		faqs: [
			{
				question: 'Is Sledding Game still in Early Access?',
				answer:
					'Yes. The downloaded changelog says the game entered Early Access on April 30, 2026 and targets full release within 12 months, approximately April 2027.',
			},
			{
				question: 'What content is planned for future updates?',
				answer:
					'The page lists more cosmetic items, additional mini-games, more hang-out activities, more characters, graphics improvements, and feedback-driven mechanics.',
			},
		],
		related: ['guide', 'achievements', 'secrets'],
	},
};

export const wikiPageList = Object.values(wikiPages);
