import { useEffect, useState } from "react";

const USERNAME = "matheshs777";
const PROFILE_URL = `https://www.thegitcity.com/dev/${USERNAME}`;
const REFRESH_INTERVAL = 5 * 60 * 1000;

// Git City-only values (not available from the GitHub API) – update manually.
const STATIC = {
  name: "MATHESH S",
  title: "«CONSOLE.LOG»",
  rank: "#55,479",
  level: 2,
  levelName: "CONSOLE.LOG",
  tier: "LOCALHOST",
  xp: 99,
  xpNext: 166,
  xpTotal: 213,
  kudos: 0,
  badge: "FIRST PUSH",
};

const C = {
  lime: "#c8e84a",
  limeDim: "#4a5a1c",
  cream: "#ebe6d8",
  muted: "#8b8b95",
  panel: "#1a1a1f",
  line: "#34343c",
  orange: "#d98a2e",
  dark: "#0d0e0c",
};

// Design is authored on a 1200x675 canvas; px -> container-relative units.
const u = (px) => `${(px / 12).toFixed(4)}cqw`;

const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');
.gc-card, .gc-card * { font-family: 'Silkscreen', 'Courier New', monospace; box-sizing: border-box; }
`;

const abs = (x, y, extra = {}) => ({ position: "absolute", left: u(x), top: u(y), ...extra });

const fmt = (n) => (n == null ? "—" : n.toLocaleString());

const GitCityLiveCard = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const [userRes, reposRes, calRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
          fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`),
        ]);
        if (![userRes, reposRes, calRes].every((r) => r.ok)) throw new Error("bad response");
        const [user, repos, cal] = await Promise.all([
          userRes.json(),
          reposRes.json(),
          calRes.json(),
        ]);

        const days = cal.contributions || [];
        const commits = days.reduce((t, d) => t + d.count, 0);
        // newest 48 days -> window lights (6 cols x 8 rows)
        const recent = days.slice(-48).map((d) => d.count);

        if (active) {
          setStats({
            avatar: user.avatar_url,
            repos: user.public_repos,
            stars: Array.isArray(repos)
              ? repos.reduce((t, r) => t + r.stargazers_count, 0)
              : 0,
            commits,
            recent,
          });
          setError(false);
        }
      } catch {
        if (active) setError(true);
      }
    };

    load();
    const id = setInterval(load, REFRESH_INTERVAL);
    const onVisible = () => document.visibilityState === "visible" && load();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      active = false;
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const xpPct = Math.min(100, (STATIC.xp / STATIC.xpNext) * 100);

  // 48 windows: lit when that day had activity. Pad if data is short/loading.
  const windows = Array.from({ length: 48 }, (_, i) => {
    const arr = stats?.recent ?? [];
    const v = arr[arr.length - 48 + i] ?? 0;
    return v > 0;
  });

  const statCells = [
    ["COMMITS", fmt(stats?.commits)],
    ["REPOS", fmt(stats?.repos)],
    ["STARS", fmt(stats?.stars)],
    ["KUDOS", fmt(STATIC.kudos)],
  ];

  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="View Mathesh S's Git City profile"
      style={{ display: "block", width: "100%", maxWidth: 900, margin: "2rem auto 0" }}
    >
      <style>{FONT_CSS}</style>
      <div
        className="gc-card"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1200 / 675",
          containerType: "inline-size",
          overflow: "hidden",
          background: `linear-gradient(135deg, #1b1e14 0%, ${C.dark} 45%, #0b0c0b 100%)`,
          border: `${u(6)} solid #1d1e22`,
          color: C.cream,
        }}
      >
        {/* grid overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(200,232,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,232,74,0.05) 1px, transparent 1px)",
            backgroundSize: `${u(24)} ${u(24)}`,
          }}
        />

        {/* avatar */}
        <div
          style={{
            ...abs(56, 56),
            width: u(132),
            height: u(132),
            border: `${u(6)} solid ${C.lime}`,
            background: "#222",
            padding: u(6),
          }}
        >
          {stats?.avatar ? (
            <img
              src={stats.avatar}
              alt="Mathesh S"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "rgba(200,232,74,0.12)" }} />
          )}
        </div>

        {/* name */}
        <div style={abs(216, 66, { display: "flex", alignItems: "baseline", gap: u(14), whiteSpace: "nowrap" })}>
          <span style={{ fontSize: u(42), fontWeight: 700, letterSpacing: u(3), color: C.cream }}>
            {STATIC.name}
          </span>
          <span style={{ fontSize: u(17), color: C.lime, letterSpacing: u(1) }}>{STATIC.title}</span>
        </div>

        {/* handle + claimed */}
        <div style={abs(216, 122, { display: "flex", alignItems: "center", gap: u(14), whiteSpace: "nowrap" })}>
          <span style={{ fontSize: u(21), color: C.muted, letterSpacing: u(2) }}>
            @{USERNAME.toUpperCase()}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: u(8),
              padding: `${u(5)} ${u(12)}`,
              border: `${u(2)} solid ${C.line}`,
              background: "#1a1b1f",
              fontSize: u(12),
              color: C.muted,
              letterSpacing: u(1.5),
            }}
          >
            <i style={{ width: u(9), height: u(9), background: C.lime, display: "block" }} />
            CLAIMED
          </span>
        </div>

        {/* rank */}
        <div
          style={abs(216, 162, {
            padding: `${u(5)} ${u(14)}`,
            border: `${u(3)} solid ${C.lime}`,
            background: "rgba(200,232,74,0.06)",
            fontSize: u(14),
            color: C.lime,
            letterSpacing: u(2),
            whiteSpace: "nowrap",
          })}
        >
          RANK {STATIC.rank}
        </div>

        {/* level box */}
        <div
          style={{
            ...abs(62, 232),
            width: u(68),
            height: u(68),
            border: `${u(4)} solid ${C.lime}`,
            background: "rgba(200,232,74,0.06)",
            display: "grid",
            placeItems: "center",
            fontSize: u(30),
            fontWeight: 700,
            color: C.lime,
          }}
        >
          {STATIC.level}
        </div>

        {/* level label */}
        <div style={abs(151, 230, { display: "flex", alignItems: "center", gap: u(14), whiteSpace: "nowrap" })}>
          <span style={{ fontSize: u(21), letterSpacing: u(2), color: C.cream }}>
            LVL {STATIC.level} · {STATIC.levelName}
          </span>
          <span
            style={{
              padding: `${u(5)} ${u(12)}`,
              background: "#2a3014",
              fontSize: u(11),
              letterSpacing: u(1.5),
              color: C.lime,
            }}
          >
            {STATIC.tier}
          </span>
        </div>

        {/* xp bar */}
        <div style={{ ...abs(150, 266), width: u(672), height: u(13), background: "#2a2a30" }}>
          <div style={{ width: `${xpPct}%`, height: "100%", background: C.lime }} />
        </div>
        <span style={abs(150, 288, { fontSize: u(11), color: C.muted, letterSpacing: u(1) })}>
          {STATIC.xp} / {STATIC.xpNext} XP
        </span>
        <span style={abs(0, 288, { left: "auto", right: u(1200 - 822), fontSize: u(11), color: C.muted, letterSpacing: u(1) })}>
          {STATIC.xpTotal} TOTAL
        </span>

        {/* stats strip */}
        <div
          style={{
            ...abs(62, 333),
            width: u(760),
            height: u(107),
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: `${u(3)} solid ${C.line}`,
            background: C.panel,
          }}
        >
          {statCells.map(([label, value], i) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: u(10),
                borderLeft: i ? `${u(3)} solid ${C.line}` : "none",
              }}
            >
              <span style={{ fontSize: u(36), fontWeight: 700, color: C.lime, letterSpacing: u(2) }}>
                {value}
              </span>
              <span style={{ fontSize: u(13), color: C.muted, letterSpacing: u(2) }}>{label}</span>
            </div>
          ))}
        </div>

        {/* badge */}
        <div
          style={abs(62, 462, {
            padding: `${u(7)} ${u(14)}`,
            border: `${u(2)} solid ${C.orange}`,
            background: "rgba(217,138,46,0.08)",
            fontSize: u(12),
            color: C.orange,
            letterSpacing: u(2),
          })}
        >
          {STATIC.badge}
        </div>

        {/* background building */}
        <div
          aria-hidden="true"
          style={{
            ...abs(846, 392),
            width: u(80),
            height: u(211),
            background: "#25262c",
            borderTop: `${u(3)} solid #3a3b42`,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: u(10),
            padding: `${u(12)} ${u(14)}`,
            alignContent: "start",
          }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <i key={i} style={{ height: u(22), background: i % 3 === 0 ? "#2a2b31" : "#3b3c45" }} />
          ))}
        </div>

        {/* main building – windows light up from real recent activity */}
        <div
          role="img"
          aria-label="Building whose lit windows show recent GitHub activity"
          style={{
            ...abs(910, 262),
            width: u(240),
            height: u(341),
            background: C.panel,
            borderTop: `${u(5)} solid ${C.lime}`,
            borderLeft: `${u(3)} solid ${C.limeDim}`,
            borderRight: `${u(3)} solid ${C.limeDim}`,
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: u(24),
            gap: u(10),
            padding: `${u(16)} ${u(14)}`,
            alignContent: "start",
          }}
        >
          {windows.map((lit, i) => (
            <i
              key={i}
              style={{
                display: "block",
                background: lit ? C.lime : "#2a2c20",
                transition: "background .4s",
              }}
            />
          ))}
        </div>

        {/* footer */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: u(72),
            background: "#16161a",
            borderTop: `${u(4)} solid ${C.lime}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${u(58)}`,
          }}
        >
          <span style={{ fontSize: u(26), fontWeight: 700, letterSpacing: u(4), color: C.cream }}>
            GIT <span style={{ color: C.lime }}>CITY</span>
          </span>
          <span style={{ fontSize: u(17), letterSpacing: u(2), color: error ? C.orange : C.muted }}>
            {error ? "STATS OFFLINE" : `THEGITCITY.COM/DEV/${USERNAME.toUpperCase()}`}
          </span>
        </div>
      </div>
    </a>
  );
};

export default GitCityLiveCard;