// All 28 NFL teams from the 1978 season
export const NFL_1978_TEAMS = [
  // AFC East
  { name: "Dolphins", city: "Miami", abbreviation: "MIA", conference: "AFC", division: "East", stadium: "Orange Bowl", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 75500, primary_color: "#008E97", secondary_color: "#FC4C02", head_coach: "Don Shula", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 82 },
  { name: "Patriots", city: "New England", abbreviation: "NE", conference: "AFC", division: "East", stadium: "Schaefer Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 61279, primary_color: "#002244", secondary_color: "#C60C30", head_coach: "Chuck Fairbanks", offensive_scheme: "Pro Set", defensive_scheme: "3-4", overall_rating: 84 },
  { name: "Jets", city: "New York", abbreviation: "NYJ", conference: "AFC", division: "East", stadium: "Shea Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 60000, primary_color: "#125740", secondary_color: "#FFFFFF", head_coach: "Walt Michaels", offensive_scheme: "I-Formation", defensive_scheme: "4-3", overall_rating: 72 },
  { name: "Bills", city: "Buffalo", abbreviation: "BUF", conference: "AFC", division: "East", stadium: "Rich Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 80020, primary_color: "#00338D", secondary_color: "#C60C30", head_coach: "Chuck Knox", offensive_scheme: "I-Formation", defensive_scheme: "3-4", overall_rating: 68 },
  { name: "Colts", city: "Baltimore", abbreviation: "BAL", conference: "AFC", division: "East", stadium: "Memorial Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 60712, primary_color: "#004C54", secondary_color: "#FFFFFF", head_coach: "Ted Marchibroda", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 66 },

  // AFC Central
  { name: "Steelers", city: "Pittsburgh", abbreviation: "PIT", conference: "AFC", division: "Central", stadium: "Three Rivers Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 59000, primary_color: "#FFB612", secondary_color: "#101820", head_coach: "Chuck Noll", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 92 },
  { name: "Oilers", city: "Houston", abbreviation: "HOU", conference: "AFC", division: "Central", stadium: "Astrodome", stadium_type: "dome", stadium_surface: "astroturf", stadium_capacity: 50496, primary_color: "#4F97D1", secondary_color: "#C41E3A", head_coach: "Bum Phillips", offensive_scheme: "I-Formation", defensive_scheme: "3-4", overall_rating: 83 },
  { name: "Browns", city: "Cleveland", abbreviation: "CLE", conference: "AFC", division: "Central", stadium: "Cleveland Municipal Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 78512, primary_color: "#FF3C00", secondary_color: "#311D00", head_coach: "Sam Rutigliano", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 74 },
  { name: "Bengals", city: "Cincinnati", abbreviation: "CIN", conference: "AFC", division: "Central", stadium: "Riverfront Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 56200, primary_color: "#FB4F14", secondary_color: "#000000", head_coach: "Homer Rice", offensive_scheme: "Pro Set", defensive_scheme: "3-4", overall_rating: 64 },

  // AFC West
  { name: "Broncos", city: "Denver", abbreviation: "DEN", conference: "AFC", division: "West", stadium: "Mile High Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 75103, primary_color: "#FB4F14", secondary_color: "#002244", head_coach: "Red Miller", offensive_scheme: "I-Formation", defensive_scheme: "3-4", overall_rating: 83 },
  { name: "Raiders", city: "Oakland", abbreviation: "OAK", conference: "AFC", division: "West", stadium: "Oakland-Alameda County Coliseum", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 54587, primary_color: "#A5ACAF", secondary_color: "#000000", head_coach: "John Madden", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 78 },
  { name: "Chargers", city: "San Diego", abbreviation: "SD", conference: "AFC", division: "West", stadium: "San Diego Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 52671, primary_color: "#0080C6", secondary_color: "#FFC20E", head_coach: "Tommy Prothro", offensive_scheme: "Pro Set", defensive_scheme: "3-4", overall_rating: 76 },
  { name: "Chiefs", city: "Kansas City", abbreviation: "KC", conference: "AFC", division: "West", stadium: "Arrowhead Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 78067, primary_color: "#E31837", secondary_color: "#FFB81C", head_coach: "Marv Levy", offensive_scheme: "I-Formation", defensive_scheme: "3-4", overall_rating: 64 },
  { name: "Seahawks", city: "Seattle", abbreviation: "SEA", conference: "AFC", division: "West", stadium: "Kingdome", stadium_type: "dome", stadium_surface: "astroturf", stadium_capacity: 64984, primary_color: "#002244", secondary_color: "#69BE28", head_coach: "Jack Patera", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 76 },

  // NFC East
  { name: "Cowboys", city: "Dallas", abbreviation: "DAL", conference: "NFC", division: "East", stadium: "Texas Stadium", stadium_type: "dome", stadium_surface: "astroturf", stadium_capacity: 65101, primary_color: "#003594", secondary_color: "#869397", head_coach: "Tom Landry", offensive_scheme: "Shotgun", defensive_scheme: "4-3", overall_rating: 90 },
  { name: "Eagles", city: "Philadelphia", abbreviation: "PHI", conference: "NFC", division: "East", stadium: "Veterans Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 65356, primary_color: "#004C54", secondary_color: "#A5ACAF", head_coach: "Dick Vermeil", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 76 },
  { name: "Redskins", city: "Washington", abbreviation: "WAS", conference: "NFC", division: "East", stadium: "RFK Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 55031, primary_color: "#773141", secondary_color: "#FFB612", head_coach: "Jack Pardee", offensive_scheme: "I-Formation", defensive_scheme: "4-3", overall_rating: 74 },
  { name: "Giants", city: "New York", abbreviation: "NYG", conference: "NFC", division: "East", stadium: "Giants Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 76891, primary_color: "#0B2265", secondary_color: "#A71930", head_coach: "John McVay", offensive_scheme: "Pro Set", defensive_scheme: "3-4", overall_rating: 70 },
  { name: "Cardinals", city: "St. Louis", abbreviation: "STL", conference: "NFC", division: "East", stadium: "Busch Memorial Stadium", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 51392, primary_color: "#97233F", secondary_color: "#000000", head_coach: "Bud Wilkinson", offensive_scheme: "I-Formation", defensive_scheme: "4-3", overall_rating: 70 },

  // NFC Central
  { name: "Vikings", city: "Minnesota", abbreviation: "MIN", conference: "NFC", division: "Central", stadium: "Metropolitan Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 48446, primary_color: "#4F2683", secondary_color: "#FFC62F", head_coach: "Bud Grant", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 74 },
  { name: "Packers", city: "Green Bay", abbreviation: "GB", conference: "NFC", division: "Central", stadium: "Lambeau Field", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 56189, primary_color: "#203731", secondary_color: "#FFB612", head_coach: "Bart Starr", offensive_scheme: "I-Formation", defensive_scheme: "4-3", overall_rating: 74 },
  { name: "Bears", city: "Chicago", abbreviation: "CHI", conference: "NFC", division: "Central", stadium: "Soldier Field", stadium_type: "outdoor", stadium_surface: "astroturf", stadium_capacity: 55049, primary_color: "#0B162A", secondary_color: "#C83803", head_coach: "Neill Armstrong", offensive_scheme: "I-Formation", defensive_scheme: "4-3", overall_rating: 72 },
  { name: "Lions", city: "Detroit", abbreviation: "DET", conference: "NFC", division: "Central", stadium: "Pontiac Silverdome", stadium_type: "dome", stadium_surface: "astroturf", stadium_capacity: 80311, primary_color: "#0076B6", secondary_color: "#B0B7BC", head_coach: "Monte Clark", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 72 },
  { name: "Buccaneers", city: "Tampa Bay", abbreviation: "TB", conference: "NFC", division: "Central", stadium: "Tampa Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 72126, primary_color: "#D50A0A", secondary_color: "#FF7900", head_coach: "John McKay", offensive_scheme: "I-Formation", defensive_scheme: "4-3", overall_rating: 66 },

  // NFC West
  { name: "Rams", city: "Los Angeles", abbreviation: "LA", conference: "NFC", division: "West", stadium: "Los Angeles Memorial Coliseum", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 92604, primary_color: "#003594", secondary_color: "#FFA300", head_coach: "Ray Malavasi", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 86 },
  { name: "Falcons", city: "Atlanta", abbreviation: "ATL", conference: "NFC", division: "West", stadium: "Atlanta-Fulton County Stadium", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 58850, primary_color: "#A71930", secondary_color: "#000000", head_coach: "Leeman Bennett", offensive_scheme: "Pro Set", defensive_scheme: "4-3", overall_rating: 76 },
  { name: "Saints", city: "New Orleans", abbreviation: "NO", conference: "NFC", division: "West", stadium: "Louisiana Superdome", stadium_type: "dome", stadium_surface: "astroturf", stadium_capacity: 73000, primary_color: "#D3BC8D", secondary_color: "#101820", head_coach: "Dick Nolan", offensive_scheme: "I-Formation", defensive_scheme: "3-4", overall_rating: 72 },
  { name: "49ers", city: "San Francisco", abbreviation: "SF", conference: "NFC", division: "West", stadium: "Candlestick Park", stadium_type: "outdoor", stadium_surface: "grass", stadium_capacity: 61185, primary_color: "#AA0000", secondary_color: "#B3995D", head_coach: "Pete McCulley", offensive_scheme: "Pro Set", defensive_scheme: "3-4", overall_rating: 58 }
];

// Key rosters for 1978 NFL season - starters for all 28 teams
export const NFL_1978_ROSTERS = {
  // PITTSBURGH STEELERS - Super Bowl XIII Champions
  "PIT": [
    { name: "Terry Bradshaw", number: 12, position: "QB", position_group: "QB", speed: 68, strength: 78, agility: 72, awareness: 92, catching: 20, throwing: 95, blocking: 15, tackling: 15, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Franco Harris", number: 32, position: "RB", position_group: "RB", speed: 82, strength: 85, agility: 80, awareness: 88, catching: 70, throwing: 10, blocking: 65, tackling: 30, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Rocky Bleier", number: 20, position: "RB", position_group: "RB", speed: 74, strength: 78, agility: 72, awareness: 82, catching: 65, throwing: 10, blocking: 72, tackling: 35, kick_power: 10, injury_prone: 35, is_starter: true },
    { name: "Lynn Swann", number: 88, position: "WR", position_group: "WR_TE", speed: 92, strength: 65, agility: 94, awareness: 90, catching: 95, throwing: 10, blocking: 40, tackling: 20, kick_power: 10, injury_prone: 45, is_starter: true },
    { name: "John Stallworth", number: 82, position: "WR", position_group: "WR_TE", speed: 90, strength: 70, agility: 88, awareness: 86, catching: 92, throwing: 10, blocking: 45, tackling: 22, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Bennie Cunningham", number: 86, position: "TE", position_group: "WR_TE", speed: 72, strength: 80, agility: 68, awareness: 78, catching: 78, throwing: 10, blocking: 75, tackling: 25, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Jon Kolb", number: 55, position: "LT", position_group: "OL", speed: 55, strength: 92, agility: 58, awareness: 85, catching: 15, throwing: 10, blocking: 92, tackling: 30, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Sam Davis", number: 57, position: "LG", position_group: "OL", speed: 52, strength: 88, agility: 55, awareness: 82, catching: 12, throwing: 10, blocking: 88, tackling: 28, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Mike Webster", number: 52, position: "C", position_group: "OL", speed: 58, strength: 90, agility: 62, awareness: 92, catching: 15, throwing: 10, blocking: 94, tackling: 35, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "Gerry Mullins", number: 72, position: "RG", position_group: "OL", speed: 50, strength: 86, agility: 54, awareness: 80, catching: 12, throwing: 10, blocking: 86, tackling: 27, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Larry Brown", number: 76, position: "RT", position_group: "OL", speed: 54, strength: 88, agility: 56, awareness: 84, catching: 14, throwing: 10, blocking: 88, tackling: 30, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Joe Greene", number: 75, position: "DT", position_group: "DL", speed: 72, strength: 95, agility: 75, awareness: 95, catching: 20, throwing: 10, blocking: 30, tackling: 95, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "L.C. Greenwood", number: 68, position: "DE", position_group: "DL", speed: 78, strength: 88, agility: 80, awareness: 90, catching: 22, throwing: 10, blocking: 25, tackling: 90, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Dwight White", number: 78, position: "DE", position_group: "DL", speed: 75, strength: 85, agility: 76, awareness: 85, catching: 18, throwing: 10, blocking: 22, tackling: 86, kick_power: 10, injury_prone: 32, is_starter: true },
    { name: "Ernie Holmes", number: 63, position: "DT", position_group: "DL", speed: 62, strength: 92, agility: 60, awareness: 78, catching: 15, throwing: 10, blocking: 28, tackling: 85, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Jack Ham", number: 59, position: "OLB", position_group: "LB", speed: 82, strength: 80, agility: 85, awareness: 96, catching: 60, throwing: 10, blocking: 30, tackling: 94, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Jack Lambert", number: 58, position: "MLB", position_group: "LB", speed: 80, strength: 82, agility: 82, awareness: 95, catching: 55, throwing: 10, blocking: 28, tackling: 96, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Loren Toews", number: 51, position: "OLB", position_group: "LB", speed: 76, strength: 78, agility: 74, awareness: 80, catching: 45, throwing: 10, blocking: 25, tackling: 82, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Mel Blount", number: 47, position: "CB", position_group: "DB", speed: 90, strength: 82, agility: 86, awareness: 94, catching: 75, throwing: 10, blocking: 35, tackling: 85, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "J.T. Thomas", number: 24, position: "CB", position_group: "DB", speed: 86, strength: 72, agility: 82, awareness: 82, catching: 68, throwing: 10, blocking: 28, tackling: 78, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Donnie Shell", number: 31, position: "SS", position_group: "DB", speed: 84, strength: 80, agility: 78, awareness: 88, catching: 62, throwing: 10, blocking: 30, tackling: 90, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "Mike Wagner", number: 23, position: "FS", position_group: "DB", speed: 82, strength: 74, agility: 80, awareness: 86, catching: 70, throwing: 10, blocking: 25, tackling: 80, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Roy Gerela", number: 10, position: "K", position_group: "K_P", speed: 50, strength: 65, agility: 50, awareness: 75, catching: 10, throwing: 10, blocking: 10, tackling: 15, kick_power: 80, injury_prone: 15, is_starter: true },
    { name: "Craig Colquitt", number: 7, position: "P", position_group: "K_P", speed: 48, strength: 62, agility: 48, awareness: 72, catching: 15, throwing: 10, blocking: 10, tackling: 18, kick_power: 78, injury_prone: 12, is_starter: true },
  ],
  // DALLAS COWBOYS
  "DAL": [
    { name: "Roger Staubach", number: 12, position: "QB", position_group: "QB", speed: 75, strength: 74, agility: 80, awareness: 95, catching: 18, throwing: 94, blocking: 12, tackling: 18, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Tony Dorsett", number: 33, position: "RB", position_group: "RB", speed: 96, strength: 68, agility: 95, awareness: 85, catching: 72, throwing: 10, blocking: 45, tackling: 25, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Robert Newhouse", number: 44, position: "FB", position_group: "RB", speed: 72, strength: 82, agility: 68, awareness: 80, catching: 58, throwing: 15, blocking: 78, tackling: 32, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Drew Pearson", number: 88, position: "WR", position_group: "WR_TE", speed: 88, strength: 72, agility: 88, awareness: 90, catching: 92, throwing: 10, blocking: 48, tackling: 20, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Tony Hill", number: 80, position: "WR", position_group: "WR_TE", speed: 90, strength: 70, agility: 86, awareness: 82, catching: 86, throwing: 10, blocking: 42, tackling: 18, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Billy Joe DuPree", number: 89, position: "TE", position_group: "WR_TE", speed: 78, strength: 82, agility: 72, awareness: 82, catching: 82, throwing: 10, blocking: 78, tackling: 28, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Pat Donovan", number: 67, position: "LT", position_group: "OL", speed: 56, strength: 88, agility: 60, awareness: 84, catching: 12, throwing: 10, blocking: 90, tackling: 28, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Herbert Scott", number: 63, position: "LG", position_group: "OL", speed: 52, strength: 86, agility: 54, awareness: 82, catching: 10, throwing: 10, blocking: 86, tackling: 25, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "John Fitzgerald", number: 62, position: "C", position_group: "OL", speed: 50, strength: 84, agility: 52, awareness: 85, catching: 12, throwing: 10, blocking: 88, tackling: 28, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Tom Rafferty", number: 64, position: "RG", position_group: "OL", speed: 52, strength: 85, agility: 55, awareness: 80, catching: 10, throwing: 10, blocking: 85, tackling: 26, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Rayfield Wright", number: 70, position: "RT", position_group: "OL", speed: 58, strength: 90, agility: 60, awareness: 88, catching: 15, throwing: 10, blocking: 92, tackling: 30, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Harvey Martin", number: 79, position: "DE", position_group: "DL", speed: 80, strength: 88, agility: 82, awareness: 90, catching: 20, throwing: 10, blocking: 22, tackling: 92, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Ed 'Too Tall' Jones", number: 72, position: "DE", position_group: "DL", speed: 78, strength: 90, agility: 76, awareness: 86, catching: 22, throwing: 10, blocking: 25, tackling: 88, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "Randy White", number: 54, position: "DT", position_group: "DL", speed: 78, strength: 92, agility: 80, awareness: 90, catching: 18, throwing: 10, blocking: 28, tackling: 94, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "Jethro Pugh", number: 75, position: "DT", position_group: "DL", speed: 65, strength: 85, agility: 62, awareness: 82, catching: 15, throwing: 10, blocking: 25, tackling: 82, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Thomas Henderson", number: 56, position: "OLB", position_group: "LB", speed: 88, strength: 78, agility: 85, awareness: 80, catching: 52, throwing: 10, blocking: 25, tackling: 84, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Bob Breunig", number: 53, position: "MLB", position_group: "LB", speed: 78, strength: 80, agility: 78, awareness: 86, catching: 55, throwing: 10, blocking: 28, tackling: 88, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "D.D. Lewis", number: 50, position: "OLB", position_group: "LB", speed: 74, strength: 78, agility: 74, awareness: 84, catching: 48, throwing: 10, blocking: 26, tackling: 84, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Benny Barnes", number: 31, position: "CB", position_group: "DB", speed: 86, strength: 72, agility: 84, awareness: 82, catching: 70, throwing: 10, blocking: 28, tackling: 76, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Aaron Kyle", number: 25, position: "CB", position_group: "DB", speed: 84, strength: 70, agility: 82, awareness: 78, catching: 68, throwing: 10, blocking: 25, tackling: 74, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Charlie Waters", number: 41, position: "SS", position_group: "DB", speed: 82, strength: 76, agility: 80, awareness: 90, catching: 72, throwing: 10, blocking: 30, tackling: 84, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Cliff Harris", number: 43, position: "FS", position_group: "DB", speed: 86, strength: 78, agility: 84, awareness: 88, catching: 74, throwing: 10, blocking: 28, tackling: 86, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Rafael Septien", number: 1, position: "K", position_group: "K_P", speed: 48, strength: 62, agility: 48, awareness: 78, catching: 10, throwing: 10, blocking: 10, tackling: 12, kick_power: 85, injury_prone: 12, is_starter: true },
    { name: "Danny White", number: 11, position: "P", position_group: "K_P", speed: 65, strength: 68, agility: 62, awareness: 80, catching: 20, throwing: 72, blocking: 10, tackling: 20, kick_power: 82, injury_prone: 15, is_starter: true },
  ],
  // MIAMI DOLPHINS
  "MIA": [
    { name: "Bob Griese", number: 12, position: "QB", position_group: "QB", speed: 62, strength: 72, agility: 68, awareness: 92, catching: 15, throwing: 90, blocking: 12, tackling: 12, kick_power: 10, injury_prone: 35, is_starter: true },
    { name: "Delvin Williams", number: 24, position: "RB", position_group: "RB", speed: 86, strength: 78, agility: 84, awareness: 80, catching: 68, throwing: 10, blocking: 55, tackling: 25, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Leroy Harris", number: 42, position: "FB", position_group: "RB", speed: 72, strength: 82, agility: 65, awareness: 75, catching: 55, throwing: 10, blocking: 78, tackling: 30, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Nat Moore", number: 89, position: "WR", position_group: "WR_TE", speed: 88, strength: 70, agility: 86, awareness: 84, catching: 88, throwing: 10, blocking: 42, tackling: 18, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Duriel Harris", number: 83, position: "WR", position_group: "WR_TE", speed: 86, strength: 68, agility: 82, awareness: 76, catching: 80, throwing: 10, blocking: 38, tackling: 16, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Andre Tillman", number: 85, position: "TE", position_group: "WR_TE", speed: 72, strength: 80, agility: 68, awareness: 76, catching: 75, throwing: 10, blocking: 72, tackling: 22, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Norm Evans", number: 73, position: "LT", position_group: "OL", speed: 52, strength: 85, agility: 55, awareness: 82, catching: 10, throwing: 10, blocking: 86, tackling: 25, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Bob Kuechenberg", number: 67, position: "LG", position_group: "OL", speed: 54, strength: 88, agility: 56, awareness: 86, catching: 12, throwing: 10, blocking: 90, tackling: 30, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Jim Langer", number: 62, position: "C", position_group: "OL", speed: 55, strength: 86, agility: 58, awareness: 90, catching: 14, throwing: 10, blocking: 92, tackling: 28, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "Larry Little", number: 66, position: "RG", position_group: "OL", speed: 52, strength: 90, agility: 54, awareness: 88, catching: 12, throwing: 10, blocking: 92, tackling: 30, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Doug Crusan", number: 79, position: "RT", position_group: "OL", speed: 50, strength: 84, agility: 52, awareness: 80, catching: 10, throwing: 10, blocking: 84, tackling: 25, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Vern Den Herder", number: 83, position: "DE", position_group: "DL", speed: 74, strength: 82, agility: 72, awareness: 82, catching: 18, throwing: 10, blocking: 22, tackling: 84, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Bob Baumhower", number: 73, position: "NT", position_group: "DL", speed: 65, strength: 88, agility: 62, awareness: 80, catching: 15, throwing: 10, blocking: 25, tackling: 86, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Doug Betters", number: 86, position: "DE", position_group: "DL", speed: 76, strength: 84, agility: 74, awareness: 78, catching: 16, throwing: 10, blocking: 20, tackling: 82, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Steve Towle", number: 59, position: "DT", position_group: "DL", speed: 62, strength: 84, agility: 58, awareness: 76, catching: 14, throwing: 10, blocking: 22, tackling: 80, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Kim Bokamper", number: 58, position: "OLB", position_group: "LB", speed: 80, strength: 78, agility: 78, awareness: 82, catching: 50, throwing: 10, blocking: 25, tackling: 84, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Steve Towle", number: 55, position: "MLB", position_group: "LB", speed: 74, strength: 78, agility: 72, awareness: 80, catching: 45, throwing: 10, blocking: 24, tackling: 82, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Larry Gordon", number: 53, position: "OLB", position_group: "LB", speed: 78, strength: 76, agility: 76, awareness: 78, catching: 48, throwing: 10, blocking: 22, tackling: 80, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Norris Thomas", number: 28, position: "CB", position_group: "DB", speed: 86, strength: 70, agility: 82, awareness: 78, catching: 68, throwing: 10, blocking: 25, tackling: 72, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Curtis Johnson", number: 26, position: "CB", position_group: "DB", speed: 84, strength: 68, agility: 80, awareness: 76, catching: 65, throwing: 10, blocking: 22, tackling: 70, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Tim Foley", number: 25, position: "SS", position_group: "DB", speed: 80, strength: 74, agility: 76, awareness: 82, catching: 65, throwing: 10, blocking: 26, tackling: 78, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Charlie Babb", number: 46, position: "FS", position_group: "DB", speed: 82, strength: 72, agility: 78, awareness: 80, catching: 68, throwing: 10, blocking: 24, tackling: 76, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Garo Yepremian", number: 1, position: "K", position_group: "K_P", speed: 42, strength: 58, agility: 42, awareness: 78, catching: 10, throwing: 10, blocking: 10, tackling: 10, kick_power: 82, injury_prone: 15, is_starter: true },
    { name: "Larry Seiple", number: 20, position: "P", position_group: "K_P", speed: 55, strength: 65, agility: 52, awareness: 76, catching: 18, throwing: 15, blocking: 10, tackling: 20, kick_power: 80, injury_prone: 12, is_starter: true },
  ],
  // NEW ENGLAND PATRIOTS (84 ovr) – 11-5, AFC East champs, NFL-record 3,165 rush yds
  "NE": [
    { name: "Steve Grogan", number: 14, position: "QB", position_group: "QB", speed: 78, strength: 76, agility: 74, awareness: 84, catching: 18, throwing: 84, blocking: 15, tackling: 20, kick_power: 10, injury_prone: 40, is_starter: true },
    { name: "Sam Cunningham", number: 39, position: "FB", position_group: "RB", speed: 80, strength: 86, agility: 76, awareness: 84, catching: 60, throwing: 10, blocking: 70, tackling: 30, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Horace Ivory", number: 23, position: "RB", position_group: "RB", speed: 86, strength: 74, agility: 84, awareness: 78, catching: 58, throwing: 10, blocking: 50, tackling: 25, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Andy Johnson", number: 32, position: "RB", position_group: "RB", speed: 80, strength: 78, agility: 78, awareness: 78, catching: 64, throwing: 35, blocking: 55, tackling: 28, kick_power: 10, injury_prone: 28, is_starter: false },
    { name: "Stanley Morgan", number: 86, position: "WR", position_group: "WR_TE", speed: 96, strength: 66, agility: 92, awareness: 82, catching: 88, throwing: 10, blocking: 38, tackling: 18, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Harold Jackson", number: 29, position: "WR", position_group: "WR_TE", speed: 86, strength: 66, agility: 86, awareness: 88, catching: 88, throwing: 10, blocking: 40, tackling: 18, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Russ Francis", number: 81, position: "TE", position_group: "WR_TE", speed: 80, strength: 84, agility: 78, awareness: 82, catching: 82, throwing: 10, blocking: 80, tackling: 26, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Leon Gray", number: 78, position: "LT", position_group: "OL", speed: 56, strength: 92, agility: 62, awareness: 90, catching: 12, throwing: 10, blocking: 94, tackling: 28, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "John Hannah", number: 73, position: "LG", position_group: "OL", speed: 60, strength: 96, agility: 68, awareness: 94, catching: 12, throwing: 10, blocking: 98, tackling: 32, kick_power: 10, injury_prone: 15, is_starter: true },
    { name: "Bill Lenkaltis", number: 67, position: "C", position_group: "OL", speed: 52, strength: 84, agility: 54, awareness: 84, catching: 12, throwing: 10, blocking: 86, tackling: 26, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Sam Adams", number: 61, position: "RG", position_group: "OL", speed: 54, strength: 86, agility: 56, awareness: 80, catching: 10, throwing: 10, blocking: 86, tackling: 27, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Shelby Jordan", number: 74, position: "RT", position_group: "OL", speed: 52, strength: 86, agility: 54, awareness: 78, catching: 10, throwing: 10, blocking: 84, tackling: 26, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Tony McGee", number: 75, position: "DE", position_group: "DL", speed: 80, strength: 84, agility: 80, awareness: 82, catching: 18, throwing: 10, blocking: 22, tackling: 84, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Ray Hamilton", number: 71, position: "NT", position_group: "DL", speed: 62, strength: 86, agility: 60, awareness: 84, catching: 14, throwing: 10, blocking: 25, tackling: 84, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Mel Lunsford", number: 72, position: "DE", position_group: "DL", speed: 74, strength: 82, agility: 72, awareness: 78, catching: 15, throwing: 10, blocking: 22, tackling: 80, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Richard Bishop", number: 64, position: "NT", position_group: "DL", speed: 60, strength: 86, agility: 58, awareness: 78, catching: 14, throwing: 10, blocking: 24, tackling: 82, kick_power: 10, injury_prone: 24, is_starter: false },
    { name: "Steve Zabel", number: 54, position: "OLB", position_group: "LB", speed: 76, strength: 80, agility: 74, awareness: 82, catching: 48, throwing: 10, blocking: 26, tackling: 82, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Steve Nelson", number: 57, position: "ILB", position_group: "LB", speed: 76, strength: 82, agility: 76, awareness: 88, catching: 50, throwing: 10, blocking: 28, tackling: 90, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Sam Hunt", number: 50, position: "ILB", position_group: "LB", speed: 70, strength: 82, agility: 68, awareness: 80, catching: 42, throwing: 10, blocking: 26, tackling: 84, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "Rod Shoate", number: 56, position: "OLB", position_group: "LB", speed: 80, strength: 76, agility: 80, awareness: 80, catching: 48, throwing: 10, blocking: 24, tackling: 82, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Raymond Clayborn", number: 26, position: "CB", position_group: "DB", speed: 92, strength: 72, agility: 88, awareness: 84, catching: 70, throwing: 10, blocking: 28, tackling: 78, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Mike Haynes", number: 40, position: "CB", position_group: "DB", speed: 92, strength: 74, agility: 92, awareness: 90, catching: 78, throwing: 10, blocking: 30, tackling: 80, kick_power: 10, injury_prone: 18, is_starter: true },
    { name: "Doug Beaudoin", number: 27, position: "SS", position_group: "DB", speed: 80, strength: 76, agility: 78, awareness: 80, catching: 60, throwing: 10, blocking: 28, tackling: 78, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Tim Fox", number: 48, position: "FS", position_group: "DB", speed: 84, strength: 76, agility: 82, awareness: 84, catching: 66, throwing: 10, blocking: 28, tackling: 84, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "David Posey", number: 9, position: "K", position_group: "K_P", speed: 48, strength: 60, agility: 48, awareness: 70, catching: 10, throwing: 10, blocking: 12, tackling: 18, kick_power: 72, injury_prone: 18, is_starter: true },
    { name: "Jerrel Wilson", number: 4, position: "P", position_group: "K_P", speed: 46, strength: 64, agility: 46, awareness: 74, catching: 12, throwing: 10, blocking: 10, tackling: 16, kick_power: 76, injury_prone: 18, is_starter: true },
  ],
  // NEW YORK JETS (72 ovr) – 8-8, Walt Michaels, young & rebuilding
  "NYJ": [
    { name: "Matt Robinson", number: 17, position: "QB", position_group: "QB", speed: 70, strength: 72, agility: 70, awareness: 70, catching: 16, throwing: 76, blocking: 12, tackling: 16, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Richard Todd", number: 14, position: "QB", position_group: "QB", speed: 76, strength: 74, agility: 76, awareness: 72, catching: 16, throwing: 78, blocking: 12, tackling: 18, kick_power: 10, injury_prone: 32, is_starter: false },
    { name: "Kevin Long", number: 33, position: "RB", position_group: "RB", speed: 80, strength: 80, agility: 78, awareness: 76, catching: 56, throwing: 10, blocking: 56, tackling: 28, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Scott Dierking", number: 25, position: "RB", position_group: "RB", speed: 78, strength: 82, agility: 76, awareness: 74, catching: 58, throwing: 10, blocking: 58, tackling: 26, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Bruce Harper", number: 42, position: "RB", position_group: "RB", speed: 90, strength: 60, agility: 88, awareness: 74, catching: 70, throwing: 10, blocking: 36, tackling: 18, kick_power: 10, injury_prone: 28, is_starter: false },
    { name: "Wesley Walker", number: 85, position: "WR", position_group: "WR_TE", speed: 98, strength: 64, agility: 90, awareness: 80, catching: 86, throwing: 10, blocking: 30, tackling: 16, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Derrick Gaffney", number: 81, position: "WR", position_group: "WR_TE", speed: 84, strength: 66, agility: 80, awareness: 72, catching: 76, throwing: 10, blocking: 36, tackling: 16, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Jerome Barkum", number: 83, position: "TE", position_group: "WR_TE", speed: 76, strength: 78, agility: 74, awareness: 80, catching: 78, throwing: 10, blocking: 70, tackling: 24, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Chris Ward", number: 72, position: "LT", position_group: "OL", speed: 54, strength: 84, agility: 56, awareness: 72, catching: 10, throwing: 10, blocking: 80, tackling: 24, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Dan Alexander", number: 60, position: "LG", position_group: "OL", speed: 52, strength: 84, agility: 54, awareness: 76, catching: 10, throwing: 10, blocking: 82, tackling: 26, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Joe Fields", number: 65, position: "C", position_group: "OL", speed: 52, strength: 82, agility: 56, awareness: 84, catching: 12, throwing: 10, blocking: 84, tackling: 28, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Randy Rasmussen", number: 66, position: "RG", position_group: "OL", speed: 50, strength: 84, agility: 52, awareness: 84, catching: 10, throwing: 10, blocking: 84, tackling: 27, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Marvin Powell", number: 79, position: "RT", position_group: "OL", speed: 56, strength: 88, agility: 60, awareness: 84, catching: 12, throwing: 10, blocking: 90, tackling: 28, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Joe Klecko", number: 73, position: "DE", position_group: "DL", speed: 80, strength: 90, agility: 80, awareness: 86, catching: 18, throwing: 10, blocking: 24, tackling: 85, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Abdul Salaam", number: 74, position: "DT", position_group: "DL", speed: 64, strength: 84, agility: 62, awareness: 80, catching: 14, throwing: 10, blocking: 24, tackling: 80, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Lawrence Pillers", number: 76, position: "DE", position_group: "DL", speed: 78, strength: 80, agility: 76, awareness: 76, catching: 16, throwing: 10, blocking: 22, tackling: 78, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Joe Pellegrini", number: 77, position: "DT", position_group: "DL", speed: 60, strength: 82, agility: 58, awareness: 74, catching: 14, throwing: 10, blocking: 24, tackling: 76, kick_power: 10, injury_prone: 26, is_starter: false },
    { name: "Bob Martin", number: 59, position: "OLB", position_group: "LB", speed: 78, strength: 78, agility: 76, awareness: 78, catching: 46, throwing: 10, blocking: 24, tackling: 82, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Larry Keller", number: 56, position: "ILB", position_group: "LB", speed: 74, strength: 80, agility: 72, awareness: 80, catching: 44, throwing: 10, blocking: 26, tackling: 82, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Greg Buttle", number: 51, position: "OLB", position_group: "LB", speed: 78, strength: 80, agility: 78, awareness: 84, catching: 50, throwing: 10, blocking: 26, tackling: 86, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Bobby Jackson", number: 40, position: "CB", position_group: "DB", speed: 88, strength: 68, agility: 84, awareness: 74, catching: 66, throwing: 10, blocking: 24, tackling: 72, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Ed Taylor", number: 38, position: "CB", position_group: "DB", speed: 84, strength: 68, agility: 82, awareness: 78, catching: 64, throwing: 10, blocking: 24, tackling: 72, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Burgess Owens", number: 22, position: "SS", position_group: "DB", speed: 82, strength: 76, agility: 80, awareness: 80, catching: 62, throwing: 10, blocking: 28, tackling: 80, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Shafer Suggs", number: 23, position: "FS", position_group: "DB", speed: 82, strength: 72, agility: 78, awareness: 76, catching: 66, throwing: 10, blocking: 24, tackling: 76, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Pat Leahy", number: 5, position: "K", position_group: "K_P", speed: 48, strength: 62, agility: 48, awareness: 78, catching: 10, throwing: 10, blocking: 10, tackling: 12, kick_power: 76, injury_prone: 14, is_starter: true },
    { name: "Chuck Ramsey", number: 15, position: "P", position_group: "K_P", speed: 46, strength: 60, agility: 46, awareness: 72, catching: 12, throwing: 10, blocking: 10, tackling: 14, kick_power: 76, injury_prone: 16, is_starter: true },
  ],
  // BUFFALO BILLS (68 ovr) – 5-11, Chuck Knox yr 1, post-O.J., historically bad run D
  "BUF": [
    { name: "Joe Ferguson", number: 12, position: "QB", position_group: "QB", speed: 68, strength: 76, agility: 70, awareness: 80, catching: 16, throwing: 80, blocking: 12, tackling: 16, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Terry Miller", number: 40, position: "RB", position_group: "RB", speed: 88, strength: 74, agility: 86, awareness: 74, catching: 56, throwing: 10, blocking: 46, tackling: 24, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Roland Hooks", number: 25, position: "RB", position_group: "RB", speed: 82, strength: 76, agility: 80, awareness: 76, catching: 64, throwing: 10, blocking: 56, tackling: 26, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Dennis Johnson", number: 39, position: "FB", position_group: "RB", speed: 74, strength: 84, agility: 70, awareness: 72, catching: 50, throwing: 10, blocking: 70, tackling: 30, kick_power: 10, injury_prone: 26, is_starter: false },
    { name: "Frank Lewis", number: 84, position: "WR", position_group: "WR_TE", speed: 88, strength: 72, agility: 86, awareness: 84, catching: 86, throwing: 10, blocking: 42, tackling: 18, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Bob Chandler", number: 81, position: "WR", position_group: "WR_TE", speed: 88, strength: 78, agility: 84, awareness: 82, catching: 84, throwing: 10, blocking: 40, tackling: 18, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Reuben Gant", number: 88, position: "TE", position_group: "WR_TE", speed: 78, strength: 78, agility: 76, awareness: 76, catching: 76, throwing: 10, blocking: 68, tackling: 24, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Ken Jones", number: 75, position: "LT", position_group: "OL", speed: 54, strength: 84, agility: 56, awareness: 76, catching: 10, throwing: 10, blocking: 80, tackling: 25, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Reggie McKenzie", number: 67, position: "LG", position_group: "OL", speed: 54, strength: 88, agility: 58, awareness: 86, catching: 10, throwing: 10, blocking: 88, tackling: 28, kick_power: 10, injury_prone: 20, is_starter: true },
    { name: "Willie Parker", number: 56, position: "C", position_group: "OL", speed: 52, strength: 82, agility: 54, awareness: 78, catching: 10, throwing: 10, blocking: 80, tackling: 26, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Joe DeLamielleure", number: 68, position: "RG", position_group: "OL", speed: 58, strength: 90, agility: 64, awareness: 92, catching: 12, throwing: 10, blocking: 94, tackling: 30, kick_power: 10, injury_prone: 14, is_starter: true },
    { name: "Donnie Green", number: 79, position: "RT", position_group: "OL", speed: 52, strength: 84, agility: 54, awareness: 76, catching: 10, throwing: 10, blocking: 80, tackling: 25, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Sherman White", number: 88, position: "DE", position_group: "DL", speed: 76, strength: 84, agility: 76, awareness: 80, catching: 16, throwing: 10, blocking: 22, tackling: 82, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Mike Kadish", number: 74, position: "DT", position_group: "DL", speed: 60, strength: 86, agility: 58, awareness: 78, catching: 14, throwing: 10, blocking: 24, tackling: 86, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Ben Williams", number: 78, position: "DE", position_group: "DL", speed: 78, strength: 82, agility: 78, awareness: 78, catching: 14, throwing: 10, blocking: 24, tackling: 76, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Phil Dokes", number: 70, position: "DT", position_group: "DL", speed: 60, strength: 82, agility: 58, awareness: 72, catching: 14, throwing: 10, blocking: 24, tackling: 76, kick_power: 10, injury_prone: 26, is_starter: false },
    { name: "Lucius Sanford", number: 57, position: "OLB", position_group: "LB", speed: 80, strength: 78, agility: 80, awareness: 78, catching: 46, throwing: 10, blocking: 24, tackling: 76, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Shane Nelson", number: 51, position: "ILB", position_group: "LB", speed: 74, strength: 78, agility: 72, awareness: 78, catching: 42, throwing: 10, blocking: 26, tackling: 82, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Tom Graham", number: 50, position: "OLB", position_group: "LB", speed: 76, strength: 76, agility: 74, awareness: 74, catching: 42, throwing: 10, blocking: 24, tackling: 78, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Mario Clark", number: 29, position: "CB", position_group: "DB", speed: 88, strength: 74, agility: 86, awareness: 80, catching: 70, throwing: 10, blocking: 24, tackling: 76, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Charles Romes", number: 26, position: "CB", position_group: "DB", speed: 90, strength: 72, agility: 84, awareness: 76, catching: 66, throwing: 10, blocking: 26, tackling: 76, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Steve Freeman", number: 22, position: "SS", position_group: "DB", speed: 80, strength: 74, agility: 78, awareness: 80, catching: 62, throwing: 10, blocking: 28, tackling: 80, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Tony Greene", number: 43, position: "FS", position_group: "DB", speed: 82, strength: 70, agility: 80, awareness: 82, catching: 68, throwing: 10, blocking: 26, tackling: 76, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Tom Dempsey", number: 6, position: "K", position_group: "K_P", speed: 42, strength: 70, agility: 40, awareness: 80, catching: 10, throwing: 10, blocking: 14, tackling: 14, kick_power: 86, injury_prone: 18, is_starter: true },
    { name: "Rusty Jackson", number: 4, position: "P", position_group: "K_P", speed: 46, strength: 62, agility: 46, awareness: 70, catching: 12, throwing: 10, blocking: 14, tackling: 14, kick_power: 74, injury_prone: 16, is_starter: true },
  ],
  // BALTIMORE COLTS (66 ovr) – 5-11, Ted Marchibroda, Bert Jones injured most of season
  "BAL": [
    { name: "Bill Troup", number: 12, position: "QB", position_group: "QB", speed: 56, strength: 76, agility: 58, awareness: 74, catching: 14, throwing: 74, blocking: 12, tackling: 14, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Bert Jones", number: 7, position: "QB", position_group: "QB", speed: 72, strength: 82, agility: 74, awareness: 88, catching: 16, throwing: 90, blocking: 12, tackling: 18, kick_power: 10, injury_prone: 60, is_starter: false },
    { name: "Joe Washington", number: 20, position: "RB", position_group: "RB", speed: 90, strength: 66, agility: 92, awareness: 82, catching: 82, throwing: 30, blocking: 44, tackling: 22, kick_power: 10, injury_prone: 28, is_starter: true },
    { name: "Don McCauley", number: 23, position: "FB", position_group: "RB", speed: 72, strength: 80, agility: 70, awareness: 80, catching: 64, throwing: 10, blocking: 72, tackling: 30, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Ron Lee", number: 34, position: "RB", position_group: "RB", speed: 76, strength: 82, agility: 72, awareness: 72, catching: 50, throwing: 10, blocking: 58, tackling: 28, kick_power: 10, injury_prone: 26, is_starter: false },
    { name: "Roger Carr", number: 81, position: "WR", position_group: "WR_TE", speed: 94, strength: 70, agility: 88, awareness: 82, catching: 84, throwing: 10, blocking: 40, tackling: 18, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "Glenn Doughty", number: 35, position: "WR", position_group: "WR_TE", speed: 80, strength: 72, agility: 80, awareness: 78, catching: 76, throwing: 10, blocking: 44, tackling: 18, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Reese McCall", number: 82, position: "TE", position_group: "WR_TE", speed: 74, strength: 80, agility: 72, awareness: 70, catching: 66, throwing: 10, blocking: 74, tackling: 26, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "David Taylor", number: 70, position: "LT", position_group: "OL", speed: 52, strength: 86, agility: 54, awareness: 76, catching: 10, throwing: 10, blocking: 78, tackling: 24, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Robert Pratt", number: 64, position: "LG", position_group: "OL", speed: 54, strength: 84, agility: 58, awareness: 76, catching: 10, throwing: 10, blocking: 82, tackling: 26, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Ken Mendenhall", number: 54, position: "C", position_group: "OL", speed: 52, strength: 80, agility: 54, awareness: 82, catching: 10, throwing: 10, blocking: 84, tackling: 26, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "Ken Huff", number: 62, position: "RG", position_group: "OL", speed: 54, strength: 86, agility: 58, awareness: 80, catching: 10, throwing: 10, blocking: 84, tackling: 26, kick_power: 10, injury_prone: 22, is_starter: true },
    { name: "George Kunz", number: 75, position: "RT", position_group: "OL", speed: 54, strength: 88, agility: 60, awareness: 86, catching: 10, throwing: 10, blocking: 88, tackling: 28, kick_power: 10, injury_prone: 30, is_starter: true },
    { name: "John Dutton", number: 78, position: "DE", position_group: "DL", speed: 78, strength: 88, agility: 80, awareness: 84, catching: 16, throwing: 10, blocking: 22, tackling: 86, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Mike Barnes", number: 65, position: "DT", position_group: "DL", speed: 66, strength: 86, agility: 64, awareness: 80, catching: 14, throwing: 10, blocking: 24, tackling: 82, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Joe Ehrmann", number: 76, position: "DT", position_group: "DL", speed: 64, strength: 84, agility: 62, awareness: 80, catching: 14, throwing: 10, blocking: 24, tackling: 80, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Fred Cook", number: 67, position: "DE", position_group: "DL", speed: 76, strength: 82, agility: 74, awareness: 76, catching: 16, throwing: 10, blocking: 22, tackling: 78, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Stan White", number: 59, position: "OLB", position_group: "LB", speed: 74, strength: 78, agility: 74, awareness: 84, catching: 50, throwing: 10, blocking: 26, tackling: 82, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Ed Simonini", number: 50, position: "ILB", position_group: "LB", speed: 78, strength: 78, agility: 72, awareness: 80, catching: 44, throwing: 10, blocking: 26, tackling: 82, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Sanders Shiver", number: 51, position: "OLB", position_group: "LB", speed: 78, strength: 78, agility: 76, awareness: 76, catching: 44, throwing: 10, blocking: 24, tackling: 80, kick_power: 10, injury_prone: 25, is_starter: true },
    { name: "Norm Thompson", number: 43, position: "CB", position_group: "DB", speed: 84, strength: 70, agility: 82, awareness: 84, catching: 70, throwing: 10, blocking: 26, tackling: 74, kick_power: 10, injury_prone: 26, is_starter: true },
    { name: "Doug Nettles", number: 30, position: "CB", position_group: "DB", speed: 84, strength: 68, agility: 82, awareness: 76, catching: 64, throwing: 10, blocking: 24, tackling: 72, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Lyle Blackwood", number: 44, position: "SS", position_group: "DB", speed: 80, strength: 74, agility: 78, awareness: 82, catching: 68, throwing: 10, blocking: 28, tackling: 80, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Bruce Laird", number: 40, position: "FS", position_group: "DB", speed: 80, strength: 74, agility: 78, awareness: 82, catching: 66, throwing: 10, blocking: 28, tackling: 80, kick_power: 10, injury_prone: 24, is_starter: true },
    { name: "Toni Linhart", number: 2, position: "K", position_group: "K_P", speed: 44, strength: 58, agility: 44, awareness: 72, catching: 10, throwing: 10, blocking: 10, tackling: 12, kick_power: 70, injury_prone: 16, is_starter: true },
    { name: "David Lee", number: 49, position: "P", position_group: "K_P", speed: 44, strength: 60, agility: 44, awareness: 72, catching: 12, throwing: 10, blocking: 10, tackling: 14, kick_power: 72, injury_prone: 18, is_starter: true },
  ],
};

// Generate roster function for teams without full rosters
export function generateGenericRoster(teamAbbr, scheme) {
  const defScheme = scheme || "4-3";
  const positions = [
    { position: "QB", position_group: "QB", base: { speed: 68, strength: 72, agility: 72, awareness: 78, catching: 15, throwing: 82, blocking: 12, tackling: 12, kick_power: 10 } },
    { position: "RB", position_group: "RB", base: { speed: 82, strength: 78, agility: 80, awareness: 76, catching: 62, throwing: 10, blocking: 55, tackling: 25, kick_power: 10 } },
    { position: "FB", position_group: "RB", base: { speed: 70, strength: 82, agility: 65, awareness: 74, catching: 52, throwing: 10, blocking: 76, tackling: 30, kick_power: 10 } },
    { position: "WR", position_group: "WR_TE", base: { speed: 86, strength: 65, agility: 84, awareness: 76, catching: 82, throwing: 10, blocking: 38, tackling: 18, kick_power: 10 } },
    { position: "WR", position_group: "WR_TE", base: { speed: 84, strength: 65, agility: 82, awareness: 74, catching: 78, throwing: 10, blocking: 36, tackling: 16, kick_power: 10 } },
    { position: "TE", position_group: "WR_TE", base: { speed: 72, strength: 80, agility: 68, awareness: 76, catching: 74, throwing: 10, blocking: 74, tackling: 24, kick_power: 10 } },
    { position: "LT", position_group: "OL", base: { speed: 52, strength: 86, agility: 55, awareness: 78, catching: 10, throwing: 10, blocking: 84, tackling: 25, kick_power: 10 } },
    { position: "LG", position_group: "OL", base: { speed: 50, strength: 84, agility: 52, awareness: 76, catching: 10, throwing: 10, blocking: 82, tackling: 24, kick_power: 10 } },
    { position: "C", position_group: "OL", base: { speed: 50, strength: 84, agility: 52, awareness: 80, catching: 12, throwing: 10, blocking: 84, tackling: 26, kick_power: 10 } },
    { position: "RG", position_group: "OL", base: { speed: 50, strength: 84, agility: 52, awareness: 76, catching: 10, throwing: 10, blocking: 82, tackling: 24, kick_power: 10 } },
    { position: "RT", position_group: "OL", base: { speed: 52, strength: 86, agility: 54, awareness: 78, catching: 10, throwing: 10, blocking: 84, tackling: 25, kick_power: 10 } },
  ];

  const defPositions34 = [
    { position: "DE", position_group: "DL", base: { speed: 76, strength: 84, agility: 74, awareness: 78, catching: 16, throwing: 10, blocking: 20, tackling: 82, kick_power: 10 } },
    { position: "NT", position_group: "DL", base: { speed: 60, strength: 90, agility: 58, awareness: 76, catching: 14, throwing: 10, blocking: 24, tackling: 84, kick_power: 10 } },
    { position: "DE", position_group: "DL", base: { speed: 74, strength: 82, agility: 72, awareness: 76, catching: 16, throwing: 10, blocking: 20, tackling: 80, kick_power: 10 } },
    { position: "OLB", position_group: "LB", base: { speed: 80, strength: 78, agility: 78, awareness: 80, catching: 48, throwing: 10, blocking: 24, tackling: 82, kick_power: 10 } },
    { position: "MLB", position_group: "LB", base: { speed: 76, strength: 80, agility: 74, awareness: 82, catching: 50, throwing: 10, blocking: 26, tackling: 85, kick_power: 10 } },
    { position: "MLB", position_group: "LB", base: { speed: 74, strength: 78, agility: 72, awareness: 80, catching: 46, throwing: 10, blocking: 24, tackling: 82, kick_power: 10 } },
    { position: "OLB", position_group: "LB", base: { speed: 78, strength: 76, agility: 76, awareness: 78, catching: 46, throwing: 10, blocking: 22, tackling: 80, kick_power: 10 } },
  ];

  const defPositions43 = [
    { position: "DE", position_group: "DL", base: { speed: 78, strength: 84, agility: 76, awareness: 80, catching: 16, throwing: 10, blocking: 20, tackling: 84, kick_power: 10 } },
    { position: "DT", position_group: "DL", base: { speed: 62, strength: 88, agility: 60, awareness: 78, catching: 14, throwing: 10, blocking: 24, tackling: 84, kick_power: 10 } },
    { position: "DT", position_group: "DL", base: { speed: 60, strength: 86, agility: 58, awareness: 76, catching: 14, throwing: 10, blocking: 22, tackling: 82, kick_power: 10 } },
    { position: "DE", position_group: "DL", base: { speed: 76, strength: 82, agility: 74, awareness: 78, catching: 16, throwing: 10, blocking: 20, tackling: 82, kick_power: 10 } },
    { position: "OLB", position_group: "LB", base: { speed: 78, strength: 78, agility: 76, awareness: 80, catching: 48, throwing: 10, blocking: 24, tackling: 82, kick_power: 10 } },
    { position: "MLB", position_group: "LB", base: { speed: 76, strength: 80, agility: 74, awareness: 82, catching: 50, throwing: 10, blocking: 26, tackling: 86, kick_power: 10 } },
    { position: "OLB", position_group: "LB", base: { speed: 76, strength: 76, agility: 74, awareness: 78, catching: 46, throwing: 10, blocking: 22, tackling: 80, kick_power: 10 } },
  ];

  const dbPositions = [
    { position: "CB", position_group: "DB", base: { speed: 86, strength: 68, agility: 82, awareness: 78, catching: 68, throwing: 10, blocking: 24, tackling: 72, kick_power: 10 } },
    { position: "CB", position_group: "DB", base: { speed: 84, strength: 66, agility: 80, awareness: 76, catching: 66, throwing: 10, blocking: 22, tackling: 70, kick_power: 10 } },
    { position: "SS", position_group: "DB", base: { speed: 82, strength: 76, agility: 78, awareness: 80, catching: 62, throwing: 10, blocking: 28, tackling: 80, kick_power: 10 } },
    { position: "FS", position_group: "DB", base: { speed: 84, strength: 72, agility: 80, awareness: 80, catching: 68, throwing: 10, blocking: 24, tackling: 76, kick_power: 10 } },
  ];

  const specialTeams = [
    { position: "K", position_group: "K_P", base: { speed: 45, strength: 60, agility: 45, awareness: 75, catching: 10, throwing: 10, blocking: 10, tackling: 12, kick_power: 78, } },
    { position: "P", position_group: "K_P", base: { speed: 48, strength: 62, agility: 48, awareness: 72, catching: 15, throwing: 10, blocking: 10, tackling: 15, kick_power: 76, } },
  ];

  const team = NFL_1978_TEAMS.find(t => t.abbreviation === teamAbbr);
  const rating = team ? team.overall_rating : 72;
  const ratingMod = (rating - 72) / 3;

  const defPos = defScheme === "3-4" ? defPositions34 : defPositions43;
  const allPos = [...positions, ...defPos, ...dbPositions, ...specialTeams];

  const genericNames = [
    "Jim", "Bob", "Mike", "Tom", "Bill", "Dan", "Joe", "Steve", "Larry", "Dave",
    "John", "Ken", "Ron", "Rick", "Gary", "Ray", "Jack", "Pat", "Ed", "Don",
    "Frank", "Terry", "Mark", "Paul", "Pete"
  ];
  const genericLast = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Davis", "Wilson", "Moore",
    "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin",
    "Thompson", "Garcia", "Robinson", "Clark", "Lewis", "Walker", "Hall", "Allen"
  ];

  return allPos.map((p, i) => {
    const variation = (Math.random() - 0.5) * 8;
    const attrs = {};
    for (const [key, val] of Object.entries(p.base)) {
      attrs[key] = Math.min(99, Math.max(30, Math.round(val + ratingMod + variation)));
    }
    return {
      name: `${genericNames[i % genericNames.length]} ${genericLast[i % genericLast.length]}`,
      team_abbr: teamAbbr,
      number: 10 + i,
      position: p.position,
      position_group: p.position_group,
      ...attrs,
      injury_prone: Math.round(20 + Math.random() * 20),
      is_injured: false,
      is_starter: true,
    };
  });
}

export function getRoster(teamAbbr) {
  if (NFL_1978_ROSTERS[teamAbbr]) return NFL_1978_ROSTERS[teamAbbr].map(p => ({ ...p, team_abbr: teamAbbr }));
  const team = NFL_1978_TEAMS.find(t => t.abbreviation === teamAbbr);
  return generateGenericRoster(teamAbbr, team?.defensive_scheme);
}