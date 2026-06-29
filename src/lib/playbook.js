// 1978 Era-Appropriate NFL Playbook

export const OFFENSIVE_PLAYS = [
  // Running Plays
  { id: "run_dive", name: "HB Dive", category: "Run", formation: "I-Formation", description: "Halfback runs straight up the middle behind the fullback.", type: "run", direction: "middle", risk: "low" },
  { id: "run_sweep_left", name: "HB Sweep Left", category: "Run", formation: "I-Formation", description: "Halfback sweeps around the left end behind pulling guards.", type: "run", direction: "left", risk: "medium" },
  { id: "run_sweep_right", name: "HB Sweep Right", category: "Run", formation: "I-Formation", description: "Halfback sweeps around the right end behind pulling guards.", type: "run", direction: "right", risk: "medium" },
  { id: "run_off_tackle", name: "Off Tackle", category: "Run", formation: "Pro Set", description: "Running back hits the hole between the tackle and tight end.", type: "run", direction: "right", risk: "low" },
  { id: "run_power", name: "Power Run", category: "Run", formation: "I-Formation", description: "Fullback leads through the hole with guard pulling.", type: "run", direction: "middle", risk: "low" },
  { id: "run_counter", name: "Counter", category: "Run", formation: "I-Formation", description: "Halfback fakes one direction then cuts back the other way.", type: "run", direction: "left", risk: "medium" },
  { id: "run_draw", name: "Draw Play", category: "Run", formation: "Pro Set", description: "QB drops back as if to pass, then hands off to the RB.", type: "run", direction: "middle", risk: "medium" },
  { id: "run_option_left", name: "Option Left", category: "Run", formation: "Wishbone", description: "QB reads the end, can keep or pitch to the halfback.", type: "run", direction: "left", risk: "high" },
  { id: "run_option_right", name: "Option Right", category: "Run", formation: "Wishbone", description: "QB reads the end, can keep or pitch to the halfback.", type: "run", direction: "right", risk: "high" },
  { id: "run_fb_dive", name: "FB Dive", category: "Run", formation: "I-Formation", description: "Fullback hits straight ahead for short yardage.", type: "run", direction: "middle", risk: "low" },
  { id: "run_toss", name: "Toss Sweep", category: "Run", formation: "Pro Set", description: "QB tosses to HB running wide behind pulling linemen.", type: "run", direction: "right", risk: "medium" },
  { id: "run_qb_sneak", name: "QB Sneak", category: "Run", formation: "Under Center", description: "QB pushes forward behind the center for short yardage.", type: "run", direction: "middle", risk: "low" },

  // Short Pass Plays
  { id: "pass_slant", name: "Slant Pass", category: "Short Pass", formation: "Pro Set", description: "Quick slant route to the wide receiver cutting inside.", type: "pass", distance: "short", risk: "low" },
  { id: "pass_out", name: "Out Route", category: "Short Pass", formation: "Pro Set", description: "Receiver runs out toward the sideline.", type: "pass", distance: "short", risk: "low" },
  { id: "pass_screen_rb", name: "RB Screen", category: "Short Pass", formation: "Pro Set", description: "Short pass to RB behind a wall of linemen.", type: "pass", distance: "short", risk: "medium" },
  { id: "pass_flat", name: "Flat Pass", category: "Short Pass", formation: "I-Formation", description: "Quick pass to the back running to the flat.", type: "pass", distance: "short", risk: "low" },
  { id: "pass_hitch", name: "Hitch Route", category: "Short Pass", formation: "Pro Set", description: "WR runs upfield, stops and turns for a quick catch.", type: "pass", distance: "short", risk: "low" },
  { id: "pass_quick_out", name: "Quick Out", category: "Short Pass", formation: "Shotgun", description: "Fast out route near the line of scrimmage.", type: "pass", distance: "short", risk: "low" },

  // Medium Pass Plays
  { id: "pass_curl", name: "Curl Route", category: "Medium Pass", formation: "Pro Set", description: "WR runs 12 yards then curls back toward the QB.", type: "pass", distance: "medium", risk: "medium" },
  { id: "pass_crossing", name: "Crossing Route", category: "Medium Pass", formation: "Pro Set", description: "WR runs across the middle of the field.", type: "pass", distance: "medium", risk: "medium" },
  { id: "pass_dig", name: "Dig Route", category: "Medium Pass", formation: "Shotgun", description: "WR runs deep then breaks inside across the middle.", type: "pass", distance: "medium", risk: "medium" },
  { id: "pass_te_seam", name: "TE Seam", category: "Medium Pass", formation: "Pro Set", description: "Tight end runs up the seam between LBs and safeties.", type: "pass", distance: "medium", risk: "medium" },
  { id: "pass_play_action", name: "Play Action", category: "Medium Pass", formation: "I-Formation", description: "Fake the run then throw downfield.", type: "pass", distance: "medium", risk: "medium" },

  // Deep Pass Plays
  { id: "pass_fly", name: "Fly Route", category: "Deep Pass", formation: "Pro Set", description: "WR runs straight downfield — a deep bomb.", type: "pass", distance: "deep", risk: "high" },
  { id: "pass_post", name: "Post Route", category: "Deep Pass", formation: "Pro Set", description: "WR runs deep then breaks toward the goalpost.", type: "pass", distance: "deep", risk: "high" },
  { id: "pass_corner", name: "Corner Route", category: "Deep Pass", formation: "Shotgun", description: "WR breaks toward the corner of the end zone.", type: "pass", distance: "deep", risk: "high" },
  { id: "pass_deep_cross", name: "Deep Cross", category: "Deep Pass", formation: "Pro Set", description: "WR runs deep crossing route over the middle.", type: "pass", distance: "deep", risk: "high" },
  { id: "pass_hail_mary", name: "Hail Mary", category: "Deep Pass", formation: "Shotgun", description: "Throw it deep and pray — all receivers go long!", type: "pass", distance: "deep", risk: "very_high" },

  // Special
  { id: "punt", name: "Punt", category: "Special Teams", formation: "Punt", description: "Punt the ball to the other team.", type: "punt", risk: "low" },
  { id: "field_goal", name: "Field Goal", category: "Special Teams", formation: "Field Goal", description: "Attempt a field goal.", type: "field_goal", risk: "medium" },
];

export const DEFENSIVE_PLAYS = [
  // Base Defenses
  { id: "def_43_base", name: "4-3 Base", category: "Base", description: "Standard 4-3 defense. Balanced against run and pass.", strength: "balanced", weakness: "none", blitz: false },
  { id: "def_34_base", name: "3-4 Base", category: "Base", description: "3-4 defense with an extra linebacker. Versatile coverage.", strength: "balanced", weakness: "none", blitz: false },
  { id: "def_43_under", name: "4-3 Under", category: "Base", description: "Shifted line toward the strong side. Good against the run.", strength: "run", weakness: "pass_deep", blitz: false },
  { id: "def_43_over", name: "4-3 Over", category: "Base", description: "Shifted line toward the weak side. Good for pursuit.", strength: "run", weakness: "pass_short", blitz: false },

  // Run Defense
  { id: "def_goal_line", name: "Goal Line", category: "Run Stop", description: "Heavy front, stacking the box. All-in run stop.", strength: "run", weakness: "pass_deep", blitz: false },
  { id: "def_run_stuff", name: "Run Stuff", category: "Run Stop", description: "LBs crash the line. Designed to stop the run.", strength: "run", weakness: "pass_medium", blitz: false },
  { id: "def_pinch", name: "DL Pinch", category: "Run Stop", description: "DL crashes inside to close running lanes.", strength: "run_middle", weakness: "run_outside", blitz: false },

  // Blitz Packages
  { id: "def_lb_blitz", name: "LB Blitz", category: "Blitz", description: "One linebacker blitzes the QB through a gap.", strength: "pass_rush", weakness: "pass_short", blitz: true },
  { id: "def_safety_blitz", name: "Safety Blitz", category: "Blitz", description: "Strong safety comes on a blitz. High risk, high reward.", strength: "pass_rush", weakness: "pass_deep", blitz: true },
  { id: "def_corner_blitz", name: "Corner Blitz", category: "Blitz", description: "CB blitzes off the edge — surprise rush.", strength: "pass_rush", weakness: "pass_short", blitz: true },
  { id: "def_all_out_blitz", name: "All-Out Blitz", category: "Blitz", description: "Send everyone! Maximum pass rush, minimum coverage.", strength: "pass_rush_extreme", weakness: "pass_all", blitz: true },
  { id: "def_zone_blitz", name: "Zone Blitz", category: "Blitz", description: "Blitz a LB but drop a lineman into zone coverage.", strength: "pass_rush", weakness: "run", blitz: true },

  // Coverage
  { id: "def_man_coverage", name: "Man Coverage", category: "Coverage", description: "Each DB covers a specific receiver man-to-man.", strength: "pass_short", weakness: "run", blitz: false },
  { id: "def_cover_2", name: "Cover 2 Zone", category: "Coverage", description: "Two safeties split the deep field. Good short zone.", strength: "pass_medium", weakness: "pass_deep_middle", blitz: false },
  { id: "def_cover_3", name: "Cover 3 Zone", category: "Coverage", description: "Three deep defenders. Solid against deep passes.", strength: "pass_deep", weakness: "pass_short", blitz: false },
  { id: "def_prevent", name: "Prevent Defense", category: "Coverage", description: "Extra DBs deep. Prevents the big play but gives up short.", strength: "pass_deep", weakness: "run", blitz: false },
  { id: "def_bump_run", name: "Bump & Run", category: "Coverage", description: "Press coverage at the line. Disrupts timing routes.", strength: "pass_short", weakness: "pass_deep", blitz: false },

  // Special
  { id: "def_punt_return", name: "Punt Return", category: "Special Teams", description: "Set up to return a punt.", strength: "return", weakness: "fake", blitz: false },
  { id: "def_fg_block", name: "FG Block", category: "Special Teams", description: "Try to block the field goal attempt.", strength: "block", weakness: "fake", blitz: false },
  { id: "def_punt_block", name: "Punt Block", category: "Special Teams", description: "Rush to try blocking the punt.", strength: "block", weakness: "fake", blitz: true },
];

export function getPlaysByCategory(plays) {
  const categories = {};
  plays.forEach(p => {
    if (!categories[p.category]) categories[p.category] = [];
    categories[p.category].push(p);
  });
  return categories;
}