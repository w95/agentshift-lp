import { ImageResponse } from 'next/og'

export const alt = 'Agentshift — Reliable, private, self-learning AI agents'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#fff8ec',
          border: '16px solid #0b0b0b',
          padding: 64,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 40 48" width={44} height={53} fill="none">
            <path
              d="M20 4V16.3604C20 19.087 16.6569 20.3998 14.8016 18.4017L7 10M40 24H27.6396C24.913 24 23.6002 20.6569 25.5983 18.8016L34 11M20 44V31.6396C20 28.913 23.3431 27.6002 25.1984 29.5983L33 38M0 24L12.3604 24C15.087 24 16.3998 27.3431 14.4017 29.1984L6 37"
              stroke="#0b0b0b"
              strokeWidth="4"
            />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, color: '#0b0b0b' }}>Agentshift</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 86,
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: -3,
            color: '#0b0b0b',
          }}
        >
          <div style={{ display: 'flex' }}>AI agents that are</div>
          <div style={{ display: 'flex' }}>
            <span
              style={{
                background: '#2b4bff',
                color: '#ffffff',
                padding: '0 14px',
              }}
            >
              reliable
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 30, color: '#5b5b5b' }}>
          Build, evaluate and operate agents inside your own security perimeter.
        </div>
      </div>
    ),
    size
  )
}
