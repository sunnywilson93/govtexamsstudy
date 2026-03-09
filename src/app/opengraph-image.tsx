import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'GovtExamsStudy — Free Interactive Visual Learning for UPSC, SSC & Govt Exams'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #312e81 0%, #4f46e5 40%, #818cf8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}
          >
            📖
          </div>
          <span style={{ fontSize: '42px', fontWeight: 700, color: 'white' }}>
            GovtExamsStudy
          </span>
        </div>
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
            marginBottom: '40px',
          }}
        >
          Free Interactive Visual Learning for UPSC, SSC CGL, IBPS PO & All Government Exams
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
          }}
        >
          {['Polity', 'History', 'Geography', 'Economics', 'Quant', 'Reasoning', 'Science'].map(
            (subject) => (
              <div
                key={subject}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                {subject}
              </div>
            )
          )}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          govtexamsstudy.org · 200+ Topics · 100% Free
        </div>
      </div>
    ),
    { ...size }
  )
}
