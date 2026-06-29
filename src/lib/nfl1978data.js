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