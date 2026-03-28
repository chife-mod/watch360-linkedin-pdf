/* Logo placeholder — light circle on dark slide background */
interface LogoPlaceholderProps {
    initials?: string
}

export function LogoPlaceholder(_props: LogoPlaceholderProps) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.08)',
            border: '1.5px solid rgba(255,255,255,0.22)',
            flexShrink: 0,
        }}>
            <span style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                userSelect: 'none',
            }}>
                logo
            </span>
        </div>
    )
}
