import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

// --- helpers youtube -> embed ---
const getYoutubeId = (input) => {
    try {
        const u = new URL(input);
        if (u.hostname.includes("youtu.be")) return u.pathname.split("/").filter(Boolean)[0] || null;
        const v = new URLSearchParams(u.search).get("v");
        if (v) return v;
        if (u.pathname.includes("/embed/")) return u.pathname.split("/embed/")?.[1]?.split("?")?.[0] || null;
        return null;
    } catch {
        return null;
    }
};

const toEmbedUrl = (youtubeUrl, autoplay = true) => {
    const id = getYoutubeId(youtubeUrl);
    if (!id) return null;

    const base = `https://www.youtube.com/embed/${id}`;
    if (!autoplay) return base;
    return `${base}?autoplay=1&mute=1&playsinline=1`;
};

const clampIndex = (idx, len) => {
    if (!len) return 0;
    const mod = ((idx % len) + len) % len;
    return mod;
};

export default function MediaCarouselModal({
    isTrue,
    items = [],
    activeIndex = 0,
    onChangeIndex = () => { },
    handelClose = () => { },
}) {
    const list = Array.isArray(items) ? items : [];
    const len = list.length;
    const idx = clampIndex(activeIndex, len);
    const active = len ? list[idx] : null;

    const [imgError, setImgError] = useState(false);

    // reset error state tiap kali pindah item
    useEffect(() => {
        setImgError(false);
    }, [idx]);

    // ---------- keyboard ----------
    useEffect(() => {
        if (!isTrue) return;

        const onKey = (e) => {
            if (e.key === "Escape") handelClose();
            if (!len) return;
            if (e.key === "ArrowLeft") onChangeIndex(clampIndex(idx - 1, len));
            if (e.key === "ArrowRight") onChangeIndex(clampIndex(idx + 1, len));
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isTrue, handelClose, len, idx, onChangeIndex]);

    // ---------- lock scroll ----------
    useEffect(() => {
        if (!isTrue) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isTrue]);

    // ---------- swipe ----------
    const startRef = useRef({ x: 0, y: 0, t: 0, active: false });

    const onTouchStart = useCallback((e) => {
        if (!len) return;
        const t = e.touches?.[0];
        if (!t) return;
        startRef.current = { x: t.clientX, y: t.clientY, t: Date.now(), active: true };
    }, [len]);

    const onTouchEnd = useCallback((e) => {
        if (!len) return;
        if (!startRef.current.active) return;

        const changed = e.changedTouches?.[0];
        if (!changed) return;

        const dx = changed.clientX - startRef.current.x;
        const dy = changed.clientY - startRef.current.y;
        const dt = Date.now() - startRef.current.t;

        startRef.current.active = false;

        const absX = Math.abs(dx);
        const absY = Math.abs(dy);

        if (absX > 50 && absX > absY && dt < 700) {
            if (dx > 0) onChangeIndex(clampIndex(idx - 1, len));
            else onChangeIndex(clampIndex(idx + 1, len));
        }
    }, [len, idx, onChangeIndex]);

    const prev = useCallback(() => {
        if (!len) return;
        onChangeIndex(clampIndex(idx - 1, len));
    }, [len, idx, onChangeIndex]);

    const next = useCallback(() => {
        if (!len) return;
        onChangeIndex(clampIndex(idx + 1, len));
    }, [len, idx, onChangeIndex]);

    // ---------- render media ----------
    const content = useMemo(() => {
        if (!active) return null;

        if (active.type === "VIDEO") {
            const embed = toEmbedUrl(active.url, true);

            if (!embed) {
                return (
                    <div className="mcm-media error">
                        <p>Video tidak valid.</p>
                    </div>
                );
            }

            return (
                <div className="mcm-media video">
                    <iframe
                        key={active.url} // ✅ force reload iframe tiap ganti video
                        className="mcm-iframe"
                        title={active.title || "Video"}
                        src={embed}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            );
        }

        // IMAGE
        if (imgError) {
            return (
                <div className="mcm-media error">
                    <p>Gambar gagal dimuat.</p>
                </div>
            );
        }

        return (
            <div className="mcm-media image">
                <img
                    className="mcm-img"
                    src={active.url}
                    alt={active.title || "Image"}
                    onError={() => setImgError(true)}
                />
            </div>
        );
    }, [active, imgError]);

    if (!isTrue) return null;
    if (!len) return null; // ✅ jangan render modal kosong sama sekali

    return (
        <div
            className="mcm-modal"
            aria-modal="true"
            role="dialog"
            onClick={handelClose}
        >
            <div className="mcm-overlay" />

            <div className="mcm-center">
                <div
                    className="mcm-stage"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {/* ✅ tombol close */}
                    <button
                        className="mcm-close"
                        onClick={handelClose}
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    {/* ✅ index counter */}
                    {len > 1 && (
                        <div className="mcm-counter">
                            {idx + 1} / {len}
                        </div>
                    )}

                    {len > 1 && (
                        <>
                            <button className="mcm-arrow left" onClick={prev} aria-label="Previous">‹</button>
                            <button className="mcm-arrow right" onClick={next} aria-label="Next">›</button>
                        </>
                    )}

                    {content}
                </div>
            </div>

            <style>{`
        .mcm-modal{
          position: fixed;
          inset: 0;
          z-index: 9999;
        }

        .mcm-overlay{
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.72);
        }

        .mcm-center{
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 16px;
        }

        .mcm-stage{
          position: relative;
          display: inline-block;
          max-width: min(92vw, 980px);
          max-height: 78vh;
          border-radius: 14px;
          overflow: hidden;
          background: transparent;
        }

        .mcm-media.video{
          width: min(92vw, 980px);
          aspect-ratio: 16/9;
          background: #000;
        }
        .mcm-iframe{
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .mcm-media.image{
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }
        .mcm-img{
          display: block;
          width: auto;
          height: auto;
          max-width: min(92vw, 980px);
          max-height: 78vh;
          object-fit: contain;
          border-radius: 14px;
        }

        .mcm-media.error{
          width: min(92vw, 600px);
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
          color: #fff;
          border-radius: 14px;
          text-align: center;
          padding: 16px;
        }

        .mcm-close{
          position: absolute;
          top: 10px;
          right: 10px;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: none;
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-size: 18px;
          line-height: 1;
          display: grid;
          place-items: center;
          z-index: 25;
          cursor: pointer;
        }
        .mcm-close:active{
          transform: scale(0.95);
        }

        .mcm-counter{
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-size: 13px;
          z-index: 25;
          user-select: none;
        }

        .mcm-arrow{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: none;
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-size: 34px;
          line-height: 1;
          display: grid;
          place-items: center;
          z-index: 20;
          cursor: pointer;
          user-select: none;
        }
        .mcm-arrow.left{ left: 12px; }
        .mcm-arrow.right{ right: 12px; }

        .mcm-arrow:active{
          transform: translateY(-50%) scale(0.95);
        }

        @media (max-width:480px){
          .mcm-arrow{
            width: 40px;
            height: 40px;
            font-size: 30px;
          }
          .mcm-stage{
            max-height: 70vh;
          }
          .mcm-img{
            max-height: 70vh;
          }
          .mcm-media.video{
            max-height: 70vh;
          }
        }
      `}</style>
        </div>
    );
}