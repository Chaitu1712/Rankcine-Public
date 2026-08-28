export function WatchIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-14 w-14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main purple gradient */}
        <linearGradient id="watchGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B58CFF" />
          <stop offset="50%" stopColor="#9B63F5" />
          <stop offset="100%" stopColor="#6335D8" />
        </linearGradient>

        {/* Outer bevel gradient */}
        <linearGradient id="outerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D8CCFF" />
          <stop offset="45%" stopColor="#A88AFF" />
          <stop offset="100%" stopColor="#6945E8" />
        </linearGradient>

        {/* Highlight */}
        <linearGradient id="highlightGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Play button gradient */}
        <linearGradient id="playGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EDE9FF" />
        </linearGradient>

        {/* Shadow */}
        <filter
          id="watchShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="170%"
        >
          <feDropShadow
            dx="0"
            dy="5"
            stdDeviation="4"
            floodColor="#5B3ACB"
            floodOpacity="0.35"
          />
        </filter>

        {/* Play shadow */}
        <filter
          id="playShadow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2"
            floodColor="#4B2AA8"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      {/* Slight 3D rotation */}
      <g transform="rotate(-7 50 50)" filter="url(#watchShadow)">

        {/* Deep bottom layer */}
        <rect
          x="12"
          y="19"
          width="76"
          height="62"
          rx="14"
          fill="#6240D5"
        />

        {/* Outer bevel */}
        <rect
          x="8"
          y="14"
          width="80"
          height="62"
          rx="14"
          fill="url(#outerGrad)"
        />

        {/* Main purple surface */}
        <rect
          x="13"
          y="19"
          width="70"
          height="52"
          rx="11"
          fill="url(#watchGrad)"
          stroke="#6339D7"
          strokeWidth="1.5"
        />

        {/* Top glossy highlight */}
        <rect
          x="14"
          y="20"
          width="68"
          height="22"
          rx="10"
          fill="url(#highlightGrad)"
        />

        {/* Inner purple bevel */}
        <rect
          x="16"
          y="22"
          width="64"
          height="46"
          rx="9"
          fill="none"
          stroke="#C5A9FF"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />

        {/* Play button */}
        <g filter="url(#playShadow)">
          <path
            d="
              M42 31
              Q39 29 39 33
              L39 57
              Q39 61 42 59
              L62 47
              Q66 45 62 42
              Z
            "
            fill="url(#playGrad)"
          />
        </g>

        {/* Play button highlight */}
        <path
          d="
            M42 32
            Q40 31 40 34
            L40 38
            Q40 35 43 34
            L59 43
            Q61 44 62 43
            L42 32
          "
          fill="white"
          opacity="0.35"
        />

      </g>
    </svg>
  );
}

export function RankIcon() {
   return (
    <svg
      viewBox="0 0 100 100"
      className="h-14 w-14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main mint gradient */}
        <linearGradient id="growthGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#55D8B8" />
          <stop offset="55%" stopColor="#79E4C9" />
          <stop offset="100%" stopColor="#B1F3DF" />
        </linearGradient>

        {/* Arrow gradient */}
        <linearGradient id="arrowGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#50D4B4" />
          <stop offset="100%" stopColor="#79E6C8" />
        </linearGradient>

        {/* Gloss */}
        <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Soft shadow */}
        <filter
          id="softShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="170%"
        >
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2.5"
            floodColor="#45C9AA"
            floodOpacity="0.25"
          />
        </filter>
      </defs>

      <g filter="url(#softShadow)">

        {/* ===== BARS ===== */}

        {/* Bar 1 */}
        <rect
          x="12"
          y="62"
          width="15"
          height="27"
          rx="4"
          fill="url(#growthGrad)"
          stroke="#4BC9AA"
          strokeWidth="1"
        />

        {/* Bar 2 */}
        <rect
          x="32"
          y="52"
          width="15"
          height="37"
          rx="4"
          fill="url(#growthGrad)"
          stroke="#4BC9AA"
          strokeWidth="1"
        />

        {/* Bar 3 */}
        <rect
          x="52"
          y="42"
          width="15"
          height="47"
          rx="4"
          fill="url(#growthGrad)"
          stroke="#4BC9AA"
          strokeWidth="1"
        />

        {/* Bar 4 */}
        <rect
          x="72"
          y="29"
          width="15"
          height="60"
          rx="4"
          fill="url(#growthGrad)"
          stroke="#4BC9AA"
          strokeWidth="1"
        />

        {/* Bar highlights */}
        <rect x="13" y="63" width="13" height="10" rx="3" fill="url(#gloss)" />
        <rect x="33" y="53" width="13" height="11" rx="3" fill="url(#gloss)" />
        <rect x="53" y="43" width="13" height="11" rx="3" fill="url(#gloss)" />
        <rect x="73" y="30" width="13" height="12" rx="3" fill="url(#gloss)" />

        {/* ===== GROWTH ARROW ===== */}
        {/* Path stays strictly above each bar's top edge at every x, so it never dips into a bar */}

        {/* Main arrow shaft */}
        <path
          d="
            M12 55
            C18 52 23 50 27 48
            C29 47 30 45 32 43
            C38 41 43 39 47 36
            C49 35 50 34 52 33
            C58 30 63 27 67 24
            C69 23 70 22 72 20
            C78 16 83 10 86 7
          "
          fill="none"
          stroke="url(#arrowGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrowhead, oriented along the final shaft direction (72,20) -> (86,7) */}
        <path
          d="
            M93 1
            L86 16
            L78 7
            Z
          "
          fill="url(#arrowGrad)"
          stroke="#45C6A5"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Arrow glossy highlight, following the same path, slightly offset */}
        <path
          d="
            M13 53.5
            C19 50.5 24 48.5 28 46.5
            C30 45.5 31 43.5 33 41.5
            C39 39.5 44 37.5 48 34.5
            C50 33.5 51 32.5 53 31.5
            C59 28.5 64 25.5 68 22.5
            C70 21.5 71 20.5 73 18.5
            C79 14.5 84 8.5 87 5.5
          "
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.3"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

      </g>
    </svg>
  );
}

export function InfluenceIcon() {
   return (
    <svg
      viewBox="0 0 100 100"
      className="h-14 w-14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Outer bubble gradient (light purple to deep purple) */}
        <linearGradient id="bubbleGrad" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#C9B8F5" />
          <stop offset="45%" stopColor="#9B7CE8" />
          <stop offset="100%" stopColor="#7B4FD9" />
        </linearGradient>

        {/* Globe sphere gradient (purple to pink) */}
        <radialGradient id="globeGrad" cx="0.35" cy="0.3" r="0.85">
          <stop offset="0%" stopColor="#C08CE8" />
          <stop offset="55%" stopColor="#9B5CD6" />
          <stop offset="100%" stopColor="#7B3FC4" />
        </radialGradient>

        {/* Continent gradient (pink) */}
        <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F9C6E8" />
          <stop offset="100%" stopColor="#EF8FCE" />
        </linearGradient>

        {/* Badge gradient (pink) */}
        <linearGradient id="badgeGrad" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#FBC7E6" />
          <stop offset="100%" stopColor="#F17FC4" />
        </linearGradient>

        {/* Heart gradient (white) */}
        <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F3E9FB" />
        </linearGradient>

        {/* Gloss */}
        <linearGradient id="glossFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#5A3A9E" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#softShadow)">

        {/* ===== SPEECH BUBBLE TAIL (behind main circle) ===== */}
        <path
          d="
            M27 68
            C29 76 27 83 22 89
            C30 88 38 84 43 78
            Z
          "
          fill="url(#bubbleGrad)"
        />

        {/* ===== OUTER BUBBLE RING ===== */}
        <circle cx="47" cy="45" r="36" fill="url(#bubbleGrad)" />

        {/* ===== GLOBE SPHERE ===== */}
        <circle cx="47" cy="45" r="29" fill="url(#globeGrad)" stroke="#6A34B0" strokeWidth="0.6" />

        {/* Clip so continents stay within globe */}
        <clipPath id="globeClip">
          <circle cx="47" cy="45" r="29" />
        </clipPath>

        <g clipPath="url(#globeClip)">
          {/* North America */}
          <path
            d="
              M24 20
              C28 17 33 18 35 22
              C33 24 34 27 31 28
              C33 30 31 33 28 32
              C25 31 22 33 19 30
              C17 27 19 22 24 20
              Z
            "
            fill="url(#landGrad)"
          />
          {/* South America */}
          <path
            d="
              M32 46
              C36 44 40 47 40 52
              C40 58 38 64 34 68
              C31 65 29 60 29 55
              C29 51 30 48 32 46
              Z
            "
            fill="url(#landGrad)"
          />
          {/* Europe */}
          <path
            d="
              M52 18
              C55 17 58 19 58 22
              C56 23 57 25 54 25
              C52 25 50 23 52 18
              Z
            "
            fill="url(#landGrad)"
          />
          {/* Africa */}
          <path
            d="
              M55 27
              C60 26 64 30 64 36
              C64 42 62 48 58 52
              C55 48 53 42 53 36
              C53 32 53 29 55 27
              Z
            "
            fill="url(#landGrad)"
          />
          {/* Asia/Australia hint */}
          <path
            d="
              M68 24
              C72 23 76 26 75 30
              C74 33 70 33 68 31
              C66 29 66 26 68 24
              Z
            "
            fill="url(#landGrad)"
          />
        </g>

        {/* Globe gloss highlight */}
        <ellipse cx="38" cy="27" rx="14" ry="9" fill="url(#glossFade)" opacity="0.5" />

        {/* Outer ring gloss */}
        <path
          d="M20 22 A36 36 0 0 1 74 30"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ===== HEART NOTIFICATION BADGE ===== */}
        <rect x="62" y="58" width="30" height="26" rx="7" fill="url(#badgeGrad)" stroke="#D95FA8" strokeWidth="0.6" />
        <path
          d="
            M62 78
            L58 88
            L69 80
          "
          fill="url(#badgeGrad)"
        />

       {/* Heart icon inside badge */}
<path
  d="
    M77 68
    C74 64 68 65 68 70
    C68 74 73 77 77 80
    C81 77 86 74 86 70
    C86 65 80 64 77 68
    Z
  "
  fill="url(#heartGrad)"
/>

        {/* Badge gloss */}
        <rect x="64" y="60" width="20" height="8" rx="4" fill="url(#glossFade)" opacity="0.6" />

      </g>
    </svg>
  );
}

export function BeHeardIcon() {
   return (
    <svg
      viewBox="0 0 100 100"
      className="h-14 w-14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gold border gradient */}
        <linearGradient id="goldGrad" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#FCE29A" />
          <stop offset="50%" stopColor="#F7B93D" />
          <stop offset="100%" stopColor="#F0A324" />
        </linearGradient>

        {/* Purple shield fill gradient */}
        <linearGradient id="shieldGrad" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#B79CF0" />
          <stop offset="50%" stopColor="#9575E0" />
          <stop offset="100%" stopColor="#7C5CD6" />
        </linearGradient>

        {/* Star gradient */}
        <linearGradient id="starGrad" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#FDE49E" />
          <stop offset="55%" stopColor="#F9C445" />
          <stop offset="100%" stopColor="#F0A324" />
        </linearGradient>

        {/* Ribbon gradient */}
        <linearGradient id="ribbonGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9575E0" />
          <stop offset="100%" stopColor="#6E4FC9" />
        </linearGradient>

        <linearGradient id="glossFade2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#5A3A9E" floodOpacity="0.3" />
        </filter>
      </defs>

       
      <g filter="url(#badgeShadow)">

        {/* ===== RIBBON TAILS (behind shield) ===== */}
        <path
          d="
            M38 68
            L28 92
            C28 93 29 94 30 93
            L37 88
            L43 93
            C44 94 45 93 45 92
            L45 70
            Z
          "
          fill="url(#ribbonGrad)"
        />
        <path
          d="
            M62 68
            L72 92
            C72 93 71 94 70 93
            L63 88
            L57 93
            C56 94 55 93 55 92
            L55 70
            Z
          "
          fill="url(#ribbonGrad)"
        />

        {/* ===== SHIELD OUTER (gold border) ===== */}
        <path
          d="
            M50 8
            L82 26
            C85 28 87 31 87 35
            L87 55
            C87 63 84 70 79 75
            C71 83 61 89 50 92
            C39 89 29 83 21 75
            C16 70 13 63 13 55
            L13 35
            C13 31 15 28 18 26
            Z
          "
          fill="url(#goldGrad)"
        />

        {/* ===== SHIELD INNER (purple fill) ===== */}
        <path
          d="
            M50 15
            L76 30
            C78 31 79 33 79 36
            L79 54
            C79 61 77 66 73 70
            C66 77 58 82 50 85
            C42 82 34 77 27 70
            C23 66 21 61 21 54
            L21 36
            C21 33 22 31 24 30
            Z
          "
          fill="url(#shieldGrad)"
          stroke="#7C5CD6"
          strokeWidth="0.5"
        />

        {/* Shield gloss */}
        <path
          d="M28 32 A45 45 0 0 1 68 22"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ===== STAR ===== */}
        <path
          d="
            M50 27
            L57 44
            L75 45
            L61 57
            L66 74
            L50 64
            L34 74
            L39 57
            L25 45
            L43 44
            Z
          "
          fill="url(#starGrad)"
          stroke="#E08F1A"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />

        {/* Star center facet shading */}
        <path
          d="M50 27 L57 44 L50 64 Z"
          fill="#FFFFFF"
          opacity="0.18"
        />
        <path
          d="M50 27 L43 44 L50 64 L39 57 L25 45 L43 44 Z"
          fill="#E08F1A"
          opacity="0.12"
        />

      </g>
    </svg>
  );
}