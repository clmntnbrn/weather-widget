'use client'

import { useEffect, useState } from 'react'

type WeatherType = 'clear' | 'cloudy' | 'foggy' | 'rainy' | 'stormy' | 'snowy'

interface WeatherData {
  temperature: number
  condition: string
  weatherType: WeatherType
}

function getConditionFromCode(code: number): { condition: string; weatherType: WeatherType } {
  if (code === 0) return { condition: 'Clear', weatherType: 'clear' }
  if (code <= 2) return { condition: 'Partly Cloudy', weatherType: 'cloudy' }
  if (code === 3) return { condition: 'Overcast', weatherType: 'cloudy' }
  if (code <= 48) return { condition: 'Foggy', weatherType: 'foggy' }
  if (code <= 55) return { condition: 'Drizzle', weatherType: 'rainy' }
  if (code <= 67) return { condition: 'Rain', weatherType: 'rainy' }
  if (code <= 77) return { condition: 'Snow', weatherType: 'snowy' }
  if (code <= 82) return { condition: 'Showers', weatherType: 'rainy' }
  if (code <= 86) return { condition: 'Snow Showers', weatherType: 'snowy' }
  return { condition: 'Thunderstorm', weatherType: 'stormy' }
}

function ClearScene() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a5c" />
          <stop offset="50%" stopColor="#c4783a" />
          <stop offset="100%" stopColor="#e8a060" />
        </linearGradient>
        <radialGradient id="cs-glow" cx="75%" cy="25%" r="35%">
          <stop offset="0%" stopColor="#f5e070" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f5e070" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cs-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4783a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8a4a20" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#cs-sky)" />
      <rect width="400" height="400" fill="url(#cs-glow)" />
      <circle cx="300" cy="100" r="30" fill="#f8f060" />
      <circle cx="300" cy="100" r="22" fill="#fff8a0" />
      <polygon points="0,300 70,170 130,230 200,140 270,210 340,160 400,200 400,400 0,400" fill="#8a6a40" />
      <polygon points="-10,360 50,240 100,290 160,210 230,270 300,200 360,250 420,220 420,400 -10,400" fill="#5a4a28" />
      <polygon points="28,360 38,330 48,360" fill="#2a3a20" />
      <polygon points="22,368 36,336 50,368" fill="#2a3a20" />
      <polygon points="46,360 56,330 66,360" fill="#2a3a20" />
      <polygon points="40,370 54,337 68,370" fill="#2a3a20" />
      <polygon points="322,358 332,328 342,358" fill="#2a3a20" />
      <polygon points="316,366 330,332 344,366" fill="#2a3a20" />
      <polygon points="340,360 350,330 360,360" fill="#2a3a20" />
      <polygon points="334,370 348,337 362,370" fill="#2a3a20" />
      <ellipse cx="200" cy="362" rx="20" ry="6" fill="#4a3a18" />
      <polygon points="192,354 198,337 204,354" fill="#2a3a20" />
      <polygon points="200,356 206,339 212,356" fill="#2a3a20" />
      <rect y="360" width="400" height="40" fill="url(#cs-lake)" />
      <ellipse cx="300" cy="377" rx="22" ry="4" fill="#f5e070" opacity="0.18" />
    </svg>
  )
}

function CloudyScene() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d3d38" />
          <stop offset="100%" stopColor="#1a2820" />
        </linearGradient>
        <linearGradient id="cl-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#253530" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1a2820" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#cl-sky)" />
      <circle cx="265" cy="95" r="34" fill="#3a4f48" opacity="0.8" />
      <circle cx="260" cy="91" r="28" fill="#2a3f38" opacity="0.5" />
      <ellipse cx="190" cy="84" rx="76" ry="13" fill="#354840" opacity="0.45" />
      <ellipse cx="290" cy="74" rx="58" ry="11" fill="#354840" opacity="0.3" />
      <ellipse cx="95" cy="110" rx="52" ry="9" fill="#354840" opacity="0.3" />
      <polygon points="0,295 60,175 105,215 165,135 225,195 285,125 345,185 400,145 400,400 0,400" fill="#263530" />
      <polygon points="-10,360 45,238 85,278 135,195 195,258 255,175 315,238 375,188 420,248 420,400 -10,400" fill="#1c2a25" />
      <polygon points="28,358 38,328 48,358" fill="#142020" />
      <polygon points="22,366 36,332 50,366" fill="#142020" />
      <polygon points="46,360 55,330 64,360" fill="#142020" />
      <polygon points="40,368 54,335 68,368" fill="#142020" />
      <polygon points="322,356 332,326 342,356" fill="#142020" />
      <polygon points="316,364 330,330 344,364" fill="#142020" />
      <polygon points="340,358 349,328 358,358" fill="#142020" />
      <polygon points="334,366 348,333 362,366" fill="#142020" />
      <ellipse cx="202" cy="361" rx="22" ry="7" fill="#1c2a25" />
      <polygon points="190,354 197,333 204,354" fill="#142020" />
      <polygon points="200,356 207,335 214,356" fill="#142020" />
      <rect y="358" width="400" height="42" fill="url(#cl-lake)" />
      <ellipse cx="265" cy="378" rx="18" ry="4" fill="#3a4f48" opacity="0.22" />
    </svg>
  )
}

function FoggyScene() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a8a85" />
          <stop offset="100%" stopColor="#4a5a55" />
        </linearGradient>
        <linearGradient id="fg-fog" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9aaaa5" stopOpacity="0" />
          <stop offset="25%" stopColor="#9aaaa5" stopOpacity="0.7" />
          <stop offset="75%" stopColor="#9aaaa5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#9aaaa5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#fg-sky)" />
      <circle cx="200" cy="145" r="42" fill="#c0c8c0" opacity="0.25" />
      <polygon points="0,310 70,200 120,240 180,165 240,220 300,170 400,210 400,400 0,400" fill="#5a6a65" opacity="0.55" />
      <polygon points="-10,360 50,260 100,300 160,230 220,280 280,210 340,260 420,240 420,400 -10,400" fill="#4a5a55" opacity="0.75" />
      <rect y="205" width="400" height="45" fill="url(#fg-fog)" />
      <rect y="248" width="400" height="55" fill="url(#fg-fog)" opacity="0.75" />
      <rect y="295" width="400" height="65" fill="url(#fg-fog)" opacity="0.55" />
      <polygon points="30,362 40,332 50,362" fill="#3a4a45" opacity="0.45" />
      <polygon points="24,370 38,336 52,370" fill="#3a4a45" opacity="0.45" />
      <polygon points="324,360 334,330 344,360" fill="#3a4a45" opacity="0.45" />
      <polygon points="318,368 332,334 346,368" fill="#3a4a45" opacity="0.45" />
      <rect y="362" width="400" height="38" fill="#6a7a75" opacity="0.55" />
      <rect y="350" width="400" height="30" fill="url(#fg-fog)" opacity="0.8" />
    </svg>
  )
}

function RainyScene() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="rn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2535" />
          <stop offset="100%" stopColor="#0d1820" />
        </linearGradient>
        <linearGradient id="rn-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2535" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0d1820" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#rn-sky)" />
      <ellipse cx="200" cy="78" rx="165" ry="30" fill="#1e3040" opacity="0.8" />
      <ellipse cx="90" cy="100" rx="105" ry="25" fill="#1e3040" opacity="0.7" />
      <ellipse cx="325" cy="90" rx="92" ry="23" fill="#1e3040" opacity="0.7" />
      <polygon points="0,300 65,180 110,220 170,140 230,195 295,130 355,185 400,155 400,400 0,400" fill="#162030" />
      <polygon points="-10,360 48,242 90,282 142,200 200,260 262,180 322,242 380,195 420,250 420,400 -10,400" fill="#0f1828" />
      {[50,82,118,158,198,238,278,318,358].map((x, i) => (
        <line key={i} x1={x} y1={110 + (i % 3) * 15} x2={x - 10} y2={185 + (i % 3) * 15} stroke="#4a6a88" strokeWidth="1" opacity="0.45" />
      ))}
      {[68,108,148,188,228,268,308,348].map((x, i) => (
        <line key={i} x1={x} y1={195 + (i % 2) * 10} x2={x - 10} y2={270 + (i % 2) * 10} stroke="#4a6a88" strokeWidth="1" opacity="0.35" />
      ))}
      <polygon points="28,360 38,328 48,360" fill="#0c1520" />
      <polygon points="22,368 36,334 50,368" fill="#0c1520" />
      <polygon points="46,362 55,332 64,362" fill="#0c1520" />
      <polygon points="322,358 332,326 342,358" fill="#0c1520" />
      <polygon points="316,366 330,332 344,366" fill="#0c1520" />
      <polygon points="340,360 349,330 358,360" fill="#0c1520" />
      <ellipse cx="200" cy="363" rx="20" ry="6" fill="#0f1828" />
      <polygon points="190,357 197,336 204,357" fill="#0c1520" />
      <polygon points="200,359 207,338 214,359" fill="#0c1520" />
      <rect y="360" width="400" height="40" fill="url(#rn-lake)" />
      <circle cx="100" cy="373" r="5" fill="none" stroke="#4a6a88" strokeWidth="0.6" opacity="0.4" />
      <circle cx="252" cy="379" r="4" fill="none" stroke="#4a6a88" strokeWidth="0.6" opacity="0.35" />
      <circle cx="342" cy="370" r="6" fill="none" stroke="#4a6a88" strokeWidth="0.6" opacity="0.3" />
    </svg>
  )
}

function StormyScene() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="st-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1218" />
          <stop offset="100%" stopColor="#05080f" />
        </linearGradient>
        <radialGradient id="st-glow" cx="60%" cy="35%" r="28%">
          <stop offset="0%" stopColor="#b0c8ff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#b0c8ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#st-sky)" />
      <rect width="400" height="400" fill="url(#st-glow)" />
      <ellipse cx="200" cy="68" rx="182" ry="35" fill="#0f1520" opacity="0.9" />
      <ellipse cx="78" cy="95" rx="112" ry="28" fill="#0f1520" opacity="0.8" />
      <ellipse cx="334" cy="85" rx="102" ry="27" fill="#0f1520" opacity="0.8" />
      <polyline points="242,58 226,122 240,122 224,188" stroke="#c8d4ff" strokeWidth="2.5" fill="none" opacity="0.55" />
      <polygon points="0,295 65,175 110,215 170,135 230,190 295,125 355,180 400,150 400,400 0,400" fill="#0c1018" />
      <polygon points="-10,358 48,240 90,280 142,198 200,258 262,178 322,240 380,193 420,248 420,400 -10,400" fill="#08080e" />
      <polygon points="28,360 38,326 48,360" fill="#060810" />
      <polygon points="22,368 36,332 50,368" fill="#060810" />
      <polygon points="46,362 55,328 64,362" fill="#060810" />
      <polygon points="322,358 332,324 342,358" fill="#060810" />
      <polygon points="316,366 330,330 344,366" fill="#060810" />
      <ellipse cx="200" cy="362" rx="20" ry="6" fill="#08080e" />
      <polygon points="192,356 198,337 204,356" fill="#060810" />
      <polygon points="200,358 206,339 212,358" fill="#060810" />
      <rect y="360" width="400" height="40" fill="#080c14" />
      <rect y="360" width="400" height="40" fill="url(#st-glow)" opacity="0.35" />
      {[62,102,152,202,252,302,352].map((x, i) => (
        <line key={i} x1={x} y1={140} x2={x - 14} y2={230} stroke="#2a3a58" strokeWidth="1.5" opacity="0.65" />
      ))}
    </svg>
  )
}

function SnowyScene() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8d8e8" />
          <stop offset="100%" stopColor="#8a9ab0" />
        </linearGradient>
        <linearGradient id="sn-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a0b4cc" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8090a8" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#sn-sky)" />
      <ellipse cx="200" cy="98" rx="162" ry="28" fill="#d8e4f0" opacity="0.55" />
      <ellipse cx="78" cy="118" rx="92" ry="22" fill="#d8e4f0" opacity="0.5" />
      <ellipse cx="332" cy="108" rx="82" ry="20" fill="#d8e4f0" opacity="0.5" />
      <polygon points="0,300 65,175 110,215 170,135 230,195 295,128 355,182 400,152 400,400 0,400" fill="#7a8a9e" />
      <polygon points="60,175 82,212 38,212" fill="#e8f0f8" opacity="0.9" />
      <polygon points="165,135 187,175 143,175" fill="#e8f0f8" opacity="0.9" />
      <polygon points="295,128 317,168 273,168" fill="#e8f0f8" opacity="0.9" />
      <polygon points="-10,360 48,245 90,282 142,202 200,262 262,182 322,242 380,196 420,250 420,400 -10,400" fill="#6a7a8e" />
      <polygon points="45,245 63,275 27,275" fill="#e8f0f8" opacity="0.8" />
      <polygon points="142,202 160,232 124,232" fill="#e8f0f8" opacity="0.8" />
      <polygon points="262,182 280,212 244,212" fill="#e8f0f8" opacity="0.8" />
      <polygon points="28,360 38,328 48,360" fill="#4a5a6e" />
      <polygon points="22,368 36,334 50,368" fill="#4a5a6e" />
      <polygon points="28,342 36,330 44,342" fill="#e8f0f8" opacity="0.65" />
      <polygon points="22,356 34,340 46,356" fill="#e8f0f8" opacity="0.55" />
      <polygon points="46,362 55,330 64,362" fill="#4a5a6e" />
      <polygon points="40,344 52,332 64,344" fill="#e8f0f8" opacity="0.65" />
      <polygon points="322,360 332,328 342,360" fill="#4a5a6e" />
      <polygon points="316,368 330,334 344,368" fill="#4a5a6e" />
      <polygon points="322,342 330,330 338,342" fill="#e8f0f8" opacity="0.65" />
      <polygon points="316,356 328,340 340,356" fill="#e8f0f8" opacity="0.55" />
      <polygon points="340,362 349,330 358,362" fill="#4a5a6e" />
      <polygon points="334,344 346,332 358,344" fill="#e8f0f8" opacity="0.65" />
      <ellipse cx="200" cy="363" rx="20" ry="6" fill="#6a7a8e" />
      <polygon points="190,357 197,336 204,357" fill="#4a5a6e" />
      <polygon points="200,359 207,338 214,359" fill="#4a5a6e" />
      <polygon points="190,346 198,335 206,346" fill="#e8f0f8" opacity="0.65" />
      {[60,118,178,238,298,358,88,148,208,268,328].map((x, i) => (
        <circle key={i} cx={x} cy={130 + (i % 5) * 28} r={i % 2 === 0 ? 2 : 1.5} fill="white" opacity={0.55 + (i % 3) * 0.1} />
      ))}
      <rect y="362" width="400" height="38" fill="url(#sn-lake)" />
      <ellipse cx="200" cy="362" rx="200" ry="7" fill="#e0eaf4" opacity="0.35" />
    </svg>
  )
}

function SceneBackground({ weatherType }: { weatherType: WeatherType }) {
  switch (weatherType) {
    case 'clear': return <ClearScene />
    case 'foggy': return <FoggyScene />
    case 'rainy': return <RainyScene />
    case 'stormy': return <StormyScene />
    case 'snowy': return <SnowyScene />
    default: return <CloudyScene />
  }
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,weather_code&timezone=Europe/London'
      )
      const data = await res.json()
      const code: number = data.current.weather_code
      const { condition, weatherType } = getConditionFromCode(code)
      setWeather({
        temperature: Math.round(data.current.temperature_2m),
        condition,
        weatherType,
      })
    }

    fetchWeather()
    const weatherTimer = setInterval(fetchWeather, 10 * 60 * 1000)
    const clockTimer = setInterval(() => setTime(new Date()), 30 * 1000)
    return () => {
      clearInterval(weatherTimer)
      clearInterval(clockTimer)
    }
  }, [])

  const formatTime = (d: Date) =>
    d.toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true }).toUpperCase()

  const weatherType = weather?.weatherType ?? 'cloudy'

  return (
    <div className="relative w-[360px] h-[360px] rounded-[28px] overflow-hidden shadow-2xl select-none">
      <SceneBackground weatherType={weatherType} />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Text content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white text-[17px] font-semibold leading-snug drop-shadow">Today</p>
            <p className="text-white/75 text-[14px] leading-snug drop-shadow">{formatTime(time)}</p>
          </div>
          <p className="text-white text-[58px] font-bold leading-none tracking-tight drop-shadow-lg">
            {weather ? `${weather.temperature}°` : '—°'}
          </p>
        </div>

        <div>
          <p className="text-white text-[24px] font-semibold leading-tight drop-shadow">London</p>
          <p className="text-white/75 text-[14px] leading-tight drop-shadow">
            {weather ? weather.condition : 'Loading…'}
          </p>
        </div>
      </div>
    </div>
  )
}
