
import { useRef } from 'react';
import html2canvas from 'html2canvas';

const IDCardGenerator = ({
    name,
    id,
    education,
    phone,
    email,
    photoUrl, // Expects a blob URL or base64 
    logoUrl
}: any) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // This ID is used to locate the element for html2canvas
    return (
        <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
            <div
                id="generated-id-card"
                ref={cardRef}
                style={{
                    width: '650px',
                    height: '400px',
                    background: '#fff',
                    borderRadius: '24px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    overflow: 'hidden',
                    display: 'flex',
                    position: 'relative',
                    border: '1px solid #eef2f6',
                    fontFamily: "'Outfit', sans-serif"
                }}
            >
                {/* Sidebar */}
                <div style={{
                    width: '38%',
                    background: 'linear-gradient(145deg, #0284c7 0%, #0369a1 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '30px 20px',
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    {/* Decorative Circle */}
                    <div style={{
                        position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px',
                        background: 'rgba(255,255,255,0.05)', borderRadius: '50%'
                    }} />

                    <div style={{
                        position: 'relative', width: '140px', height: '140px', marginBottom: '20px', zIndex: 2
                    }}>
                        <img src={photoUrl || 'https://via.placeholder.com/150'} alt="Profile" style={{
                            width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%',
                            border: '4px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                        }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 500, opacity: 0.9, color: 'white' }}>Joined {new Date().getFullYear()}</div>
                    <div style={{
                        background: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '50px',
                        fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
                        marginTop: '10px', border: '1px solid rgba(255,255,255,0.3)', color: 'white'
                    }}>Lifetime Member</div>
                </div>

                {/* Content */}
                <div style={{ width: '62%', padding: '30px 35px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    {/* Watermark */}
                    <div style={{
                        position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.03, transform: 'rotate(-15deg)',
                        fontSize: '100px', fontWeight: 900, color: '#000', pointerEvents: 'none', zIndex: 0
                    }}>NAMMA</div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
                        {logoUrl && <img src={logoUrl} alt="Logo" style={{ height: '40px', marginRight: '12px', objectFit: 'contain' }} />}
                        <div>
                            <div style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.5px', lineHeight: 1.2 }}>NAMMA PUDUCHERRY</div>
                            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block' }}>Community & Excellence</div>
                        </div>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <div style={{ marginBottom: '16px' }}>
                            <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginBottom: '2px' }}>Name</div>
                            <div style={{ fontSize: '22px', color: '#0f172a', fontWeight: 700, marginBottom: '4px' }}>{name}</div>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginBottom: '2px' }}>Membership ID</div>
                            <div style={{ fontFamily: 'monospace', color: '#0284c7', fontWeight: 700, fontSize: '16px', letterSpacing: '1px' }}>{id ? `MEM-${id}` : 'PENDING'}</div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ marginBottom: '16px' }}>
                                <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginBottom: '2px' }}>Education</div>
                                <div style={{ fontSize: '15px', color: '#334155', fontWeight: 600 }}>{education}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginBottom: '2px' }}>Phone</div>
                                <div style={{ fontSize: '15px', color: '#334155', fontWeight: 600 }}>{phone}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '30px', right: '35px' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white',
                            padding: '8px 20px', borderRadius: '8px', fontSize: '11px', fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)',
                            display: 'inline-flex', alignItems: 'center', gap: '6px'
                        }}>
                            <span>★</span> Lifetime Validity
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const generateIDCardPDF = async () => {
    const element = document.getElementById('generated-id-card');
    if (!element) return null;

    // Wait for images to load if needed (though React usually handles this fast)
    // Using html2canvas
    const canvas = await html2canvas(element, { useCORS: true, scale: 2 });
    return canvas.toDataURL('image/jpeg', 0.9);
};

export default IDCardGenerator;
