"use client"

import { useState } from "react"
import GenericModal from "./generic-modal"

export default function Footer() {
    const [modalConfig, setModalConfig] = useState({ open: false, title: '', url: '' });

    const openModal = (title: string, url: string) => setModalConfig({ open: true, title, url });

    return (
        <footer className="container mx-auto mt-10 md:mt-0 border-t border-[#eee] text-argico-light text-center text-xs py-10 px-[10%] md:px-0">
            <p className="mb-2.5">Argico &copy; 2026. Todos os direitos reservados. Uma empresa com alma de família. (Arthur, Giovana e Enrico agradecem)</p>
            <div>
                <button
                    className="mx-2.5"
                    onClick={() => openModal(
                        'Política de Privacidade',
                        'https://docs.google.com/document/d/e/2PACX-1vTY3ce02GI4TpTB4S_2L5K3UgDcoJEGVFRPtnJsKW5HrGw6iOmyy17hmp4OIenEbrY4w1hZI4qlF1Cc/pub?embedded=true'
                    )}
                >
                    Política de Privacidade
                </button>

                <span>|</span>

                <button
                    className="mx-2.5"
                    onClick={() => openModal(
                        'Termos de Uso',
                        'https://docs.google.com/document/d/e/2PACX-1vRuswwy1XI5OcW4QMiTmjB4YUHAblBd5T_GxgV5PgtOgAVT1DrqH4IVJuy10EfsG8xjIIsEr7WMNFZT/pub?embedded=true'
                    )}
                >
                    Termos de Uso
                </button>

                <GenericModal
                    isOpen={modalConfig.open}
                    title={modalConfig.title}
                    docUrl={modalConfig.url}
                    onClose={() => setModalConfig({ ...modalConfig, open: false })}
                />
            </div>
        </footer>
    )
}
